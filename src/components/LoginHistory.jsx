import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const LoginHistory = () => {
  const [loginData, setLoginData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage, setEntriesPerPage] = useState(50);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'srno', direction: 'asc' });

  useEffect(() => {
    async function fetchLoginHistory() {
      setLoading(true);
      setError(null);

      try {
        const token = Cookies.get('authToken');
        const response = await axios.get('https://stag.syncspace.com/api/synclogin-history', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = Array.isArray(response.data.data) ? response.data.data : [];
        setLoginData(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch login history. Please try again.');
      } finally {
        setLoading(false);
      }
    }

    fetchLoginHistory();
  }, []);

  const sortedData = [...loginData].sort((a, b) => {
    const { key, direction } = sortConfig;
    const aValue = key === 'srno' ? a.id : a[key]; // Use 'id' for srno
    const bValue = key === 'srno' ? b.id : b[key];

    if (aValue < bValue) return direction === 'asc' ? -1 : 1;
    if (aValue > bValue) return direction === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredData = sortedData.filter((entry) => {
    return (
      (entry.user_id?.toString() || '').includes(searchTerm) ||
      (entry.action?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (entry.method?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (entry.ip_address?.toLowerCase() || '').includes(searchTerm.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  const handleEntriesChange = (event) => {
    setEntriesPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (key) => {
    setSortConfig((prevState) => {
      if (prevState.key === key) {
        return {
          key,
          direction: prevState.direction === 'asc' ? 'desc' : 'asc',
        };
      }
      return {
        key,
        direction: 'asc',
      };
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Login History</h1>

      <div className="mb-6 flex items-center">
        <label htmlFor="search" className="mr-4 text-gray-700">Search:</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded-md w-full max-w-xs text-gray-700"
          placeholder="Search by User ID, Action, Method, or IP Address"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="entries" className="mr-4 text-gray-600">Entries per page:</label>
        <select
          id="entries"
          value={entriesPerPage}
          onChange={handleEntriesChange}
          className="px-4 py-2 border rounded-md"
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : paginatedData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse">
            <thead className="bg-gray-200 text-black">
              <tr>
                {['srno', 'user_id', 'action', 'method', 'ip_address', 'timestamp'].map((key) => (
                  <th
                    key={key}
                    className="px-6 py-3 text-left cursor-pointer"
                    onClick={() => handleSort(key)}
                  >
                    <div className="flex items-center">
                      <span>{key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')}</span>
                      <span className="ml-2">
                        {sortConfig.key === key ? (
                          sortConfig.direction === 'asc' ? (
                            '↑'
                          ) : (
                            '↓'
                          )
                        ) : (
                          ''
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((entry, index) => {
                const serialNumber =
                  sortConfig.key === 'srno' && sortConfig.direction === 'desc'
                    ? filteredData.length - (currentPage - 1) * entriesPerPage - index
                    : (currentPage - 1) * entriesPerPage + index + 1;

                return (
                  <tr key={entry.id} className="border-b hover:bg-gray-100">
                    <td className="px-6 py-4 text-black">{serialNumber}</td>
                    <td className="px-6 py-4 text-black">{entry.user_id}</td>
                    <td className="px-6 py-4 text-black">{entry.action}</td>
                    <td className="px-6 py-4 text-black">{entry.method}</td>
                    <td className="px-6 py-4 text-black">{entry.ip_address}</td>
                    <td className="px-6 py-4 text-black">{entry.timestamp}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-600">No records found.</p>
      )}

      <div className="mt-6 flex justify-between items-center">
        <span className="text-gray-600">
          Showing {Math.min(entriesPerPage, filteredData.length)} entries per page
        </span>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          >
            Previous
          </button>
          <span className="text-gray-600">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginHistory;
