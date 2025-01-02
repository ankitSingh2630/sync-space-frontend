import { useState, useEffect } from 'react';
import axios from 'axios';

const LoginHistory = () => {
  const [loginData, setLoginData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const entriesPerPage = 50;

  useEffect(() => {
    // Fetch login history data from the API
    async function fetchLoginHistory() {
        try {
            const response = await axios.get('https://syncspace.com/login-history');
            console.log('Login history response:', response.data);
            // setLoginData(response.data);
            // setTotalPages(Math.ceil(response.data.length / entriesPerPage));
        } catch (error) {
            console.log('Login history fetch error:', error);
        }
    }
   fetchLoginHistory();
     
  }, [currentPage]);

  // Filter the login data based on the search term
  const filteredData = loginData.filter((entry) => {
    return (
      entry.userId.toString().includes(searchTerm) ||
      entry.action.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.method.toLowerCase().includes(searchTerm.toLowerCase()) ||
      entry.ip.includes(searchTerm)
    );
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page when the search term changes
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Login History</h1>

      {/* Search Bar */}
      <div className="mb-6 flex items-center">
        <label htmlFor="search" className="mr-4 text-gray-600">Search:</label>
        <input
          id="search"
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded-md w-full max-w-xs"
          placeholder="Search by User ID, Action, Method, or IP"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-200 text-gray-600">
            <tr>
              <th className="px-6 py-3 text-left">Sr. No.</th>
              <th className="px-6 py-3 text-left">User ID</th>
              <th className="px-6 py-3 text-left">Action</th>
              <th className="px-6 py-3 text-left">Method</th>
              <th className="px-6 py-3 text-left">IP Address</th>
              <th className="px-6 py-3 text-left">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((entry, index) => (
              <tr key={entry.id} className="border-b hover:bg-gray-100">
                <td className="px-6 py-4">{(currentPage - 1) * entriesPerPage + index + 1}</td>
                <td className="px-6 py-4">{entry.userId}</td>
                <td className="px-6 py-4">{entry.action}</td>
                <td className="px-6 py-4">{entry.method}</td>
                <td className="px-6 py-4">{entry.ip}</td>
                <td className="px-6 py-4">{entry.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 flex justify-between items-center">
        <span className="text-gray-600">Showing {entriesPerPage} entries per page</span>

        {/* Pagination buttons */}
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
