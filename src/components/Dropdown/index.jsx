'use client';
import { useState, useEffect } from 'react';
import $ from 'jquery';
import DataTable from 'datatables.net-dt';
// import 'datatables.net-dt/css/jquery.dataTables.css';
import UserData from '@/components/Dropdown/column';
import axios from 'axios';
import { Spinner } from '@nextui-org/react'; // Import Spinner from NextUI

const API = "https://reqres.in/api/users?page=2";

const Table = () => {
  const [users, setUsers] = useState([]);
  const [dataTableInitialized, setDataTableInitialized] = useState(false);
  const [loading, setLoading] = useState(true); // State to manage loading

  // Fetch users using axios
  const fetchUsers = async (url) => {
    try {
      setLoading(true); // Set loading to true before fetching
      const res = await axios.get(url);
      if (res.data && res.data.data) {
        setUsers(res.data.data); // API returns users in the `data` key
      }
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false); // Set loading to false after fetching
    }
  };

  useEffect(() => {
    fetchUsers(API);
  }, []);

  useEffect(() => {
    if (!dataTableInitialized && users.length > 0) {
      $('#myTable').DataTable({
        paging: true,
        pageLength: 10,
        searching: true,
        ordering: true,
        lengthChange: true,
      });
      setDataTableInitialized(true);
    }
  }, [users, dataTableInitialized]);

  return (
    <div className="container mx-auto py-8">
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <Spinner size="lg" color="primary" />
          <p className="ml-4 text-gray-600">Loading...</p>
        </div>
      ) : (
        <table
          id="myTable"
          className="min-w-full border-collapse border border-gray-300 cell-border compact stripe"
        >
          <thead className="bg-cyan-600 text-white">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Avatar</th>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Email</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <UserData users={users} />
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Table;









// import { useState, useEffect } from 'react';
// import $ from 'jquery';
// import DataTable from 'datatables.net-dt';
// // import 'datatables.net-dt/css/jquery.dataTables.css';
// import UserData from '@/components/Dropdown/column';

// const API = "https://reqres.in/api/users?page=2";

// const Table = () => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//         // Initialize DataTable
//         new DataTable('#myTable');
//       }, []);

//   const fetchUsers = async (url) => {
//     try {
//       const res = await fetch(url);
//       const data = await res.json();
//       if (data.data) {
//         setUsers(data.data); // API returns users in the `data` key
//       }
//     } catch (e) {
//       console.error('Error fetching users:', e);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(API);
//     $(document).ready(function () {
//       $('#myTable').DataTable({
//         paging: true,
//         pageLength: 10,
//         searching: true,
//         ordering: true,
//         lengthChange: true,
//       });
//     });
//   }, []);

//   return (
//     <div className="container mx-auto py-8">
//       <table
//         id="myTable"
//         className="min-w-full border-collapse border border-gray-300 cell-border compact stripe"
//       >
//         <thead className="bg-cyan-600 text-white">
//           <tr>
//             <th className="px-6 py-3 text-left">ID</th>
//             <th className="px-2 py-3 text-left">Avatar</th>
//             <th className="px-6 py-3 text-left">Name</th>
//             <th className="px-6 py-3 text-left">Email</th>
            
//           </tr>
//         </thead>
//         <tbody className="text-gray-700">
//           <UserData users={users} />
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;









// 'use Client'

// import { useState ,  useEffect } from 'react';
// import DataTable from 'datatables.net-dt';
// // import 'datatables.net-dt';

// import UserData from '@/components/Dropdown/column'



// const API = "https://reqres.in/api/users?page=2";

// const Table = () => { 

//   useEffect(() => {
//     // Initialize DataTable
//     new DataTable('#myTable');
//   }, []);

//   const [users, setUsers] = useState([]);

//     const fetchUsers = async (url) => {
//       try{
//             const res = await fetch(url);
//             const data = await res.json();
//             if (data.length > 0) {
//                 setUsers(data);
//             }
//             console.log(data);
//       }catch (e) {
//             console.error(e)
//         }
//     }
//     useEffect(() => {
//         fetchUsers(API);
//     }, []);


//   const generateRandomData = () => {
//     const names = [
//       'John', 'Raveena', 'Peter', 'Henry', 'Sophia', 'Liam', 'Emma', 'David', 'Michael', 'Grace',
//       'Olivia', 'Mason', 'Lucas', 'Ethan', 'Ava', 'Isabella', 'James', 'Charlotte', 'Amelia', 'Benjamin',
//       'Daniel', 'Mia', 'Ella', 'Jack', 'Gabriel', 'Sophie', 'Sebastian', 'Oliver', 'Elena', 'Joshua',
//       'Anna', 'Matthew', 'Lily', 'Sophia', 'Jacob', 'Madison', 'Nathan', 'Emily', 'Aiden', 'Chloe',
//       'William', 'Mila', 'Elijah', 'Scarlett', 'Daniel', 'Isaac', 'Zoe', 'Wyatt', 'Hannah', 'Leah'
//     ];
    
//     const randomData = [];
//     for (let i = 1; i <= 50; i++) {
//       const name = names[Math.floor(Math.random() * names.length)];
//       const email = `${name.toLowerCase()}${i}@example.com`;
//       randomData.push({
//         sno: i,
//         id: 100 + i,
//         name,
//         email
//       });
//     }
//     return randomData;
//   };

//   const data = generateRandomData();

//   return (
//     <div className="container mx-auto py-8">

//          <table>
//             <thead>
//             <tr>
//                 <th>ID</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Address</th>
//             </tr>
//             </thead>
//             <tbody>
//             <UserData users={users}/>
//             </tbody>
//         </table>
    
//       <table
//         id="myTable"
//         className="min-w-full border-collapse border border-gray-300 cell-border compact stripe"
//       >
//         <thead className="bg-cyan-600 text-white">
//           <tr>
//             <th className="px-6 py-3 text-left">Sno.</th>
//             <th className="px-6 py-3 text-left">ID</th>
//             <th className="px-6 py-3 text-left">Name</th>
//             <th className="px-6 py-3 text-left">Email</th>
//           </tr>
//         </thead>
//         <tbody className="text-gray-700">
//           {data.map((row) => (
//             <tr className="hover:bg-gray-100" key={row.sno}>
//               <td className="border border-gray-300 px-6 py-3">{row.sno}</td>
//               <td className="border border-gray-300 px-6 py-3">{row.id}</td>
//               <td className="border border-gray-300 px-6 py-3">{row.name}</td>
//               <td className="border border-gray-300 px-6 py-3">{row.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;

























// import { useEffect } from 'react';
// import DataTable from 'datatables.net-dt';
// // import 'datatables.net-dt/css/jquery.dataTables.css'; 

// const Table = () => {
//   useEffect(() => {
//     // Initialize DataTable
//     new DataTable('#myTable');
//   }, []);

//   return (
//     <div className="container mx-auto py-8 ">
//       <table id="myTable" className="min-w-full border-collapse border border-gray-300 cell-border compact stripe cell-border">
//         <thead>
//           <tr>
//             <th>Sno.</th>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td className="border border-gray-300">1</td>
//             <td className="border border-gray-300">101</td>
//             <td className="border border-gray-300">John</td>
//             <td className="border border-gray-300">john@example.com</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300">2</td>
//             <td className="border border-gray-300">102</td>
//             <td className="border border-gray-300">Raveena</td>
//             <td className="border border-gray-300">raveena@example.com</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300">3</td>
//             <td className="border border-gray-300">103</td>
//             <td className="border border-gray-300">Peter</td>
//             <td className="border border-gray-300">peter@example.com</td>
//           </tr>
//           <tr>
//             <td className="border border-gray-300">4</td>
//             <td className="border border-gray-300">104</td>
//             <td className="border border-gray-300">Henry</td>
//             <td className="border border-gray-300">henrys@example.com</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;


























// ======================================================================================================

// 'use client';

// import { useCallback, useMemo, useState } from 'react';
// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   Input,
//   Pagination,
// } from '@nextui-org/react';

// import { columns, renderCell } from '../../components/Dropdown/column';
// import { SearchIcon } from '../icons';

// export default function UserTable({ users }) {
//   const [filterValue, setFilterValue] = useState('');
//   const hasSearchFilter = Boolean(filterValue);

//   const filteredItems = useMemo(() => {
//     let filteredUsers = [...users];

//     if (hasSearchFilter) {
//       filteredUsers = filteredUsers.filter(user =>
//         user.name.toLowerCase().includes(filterValue.toLowerCase())
//       );
//     }

//     return filteredUsers;
//   }, [users, filterValue, hasSearchFilter]);

//   const rowsPerPage = 8;
//   const [page, setPage] = useState(1);
//   const pages = Math.ceil(filteredItems.length / rowsPerPage);

//   const items = useMemo(() => {
//     const start = (page - 1) * rowsPerPage;
//     const end = start + rowsPerPage;

//     return filteredItems.slice(start, end);
//   }, [page, filteredItems]);

//   const [sortDescriptor, setSortDescriptor] = useState({
//     column: 'name',
//     direction: 'ascending',
//   });

//   const sortedItems = useMemo(() => {
//     return [...items].sort((a, b) => {
//       const first = a[sortDescriptor.column];
//       const second = b[sortDescriptor.column];
//       const cmp = first < second ? -1 : first > second ? 1 : 0;

//       return sortDescriptor.direction === 'descending' ? -cmp : cmp;
//     });
//   }, [sortDescriptor, items]);

//   const onSearchChange = useCallback((value = '') => {
//     setFilterValue(value);
//     setPage(1);
//   }, []);

//   const onClear = useCallback(() => {
//     setFilterValue('');
//     setPage(1);
//   }, []);

//   const topContent = useMemo(() => (
//     <div className='flex flex-col gap-4'>
//       <div className='flex items-end justify-between gap-3'>
//         <Input
//           isClearable
//           className='w-full sm:max-w-[44%]'
//           placeholder='Search by name...'
//           startContent={<SearchIcon />}
//           value={filterValue}
//           onClear={onClear}
//           onValueChange={onSearchChange}
//         />
//       </div>
//     </div>
//   ), [filterValue, onSearchChange, onClear]);

//   return (
//     <Table
//       aria-label='Users table'
//       topContent={topContent}
//       topContentPlacement='outside'
//       bottomContent={
//         <div className='flex w-full justify-center'>
//           <Pagination
//             isCompact
//             showControls
//             showShadow
//             color='secondary'
//             page={page}
//             total={pages}
//             onChange={setPage}
//           />
//         </div>
//       }
//       bottomContentPlacement='outside'
//       sortDescriptor={sortDescriptor}
//       onSortChange={setSortDescriptor}
//       classNames={{
//         wrapper: 'min-h-[222px]',
//       }}
//     >
//       <TableHeader columns={columns}>
//         {column => (
//           <TableColumn
//             key={column.key}
//             allowsSorting={column.key === 'name'}
//           >
//             {column.label}
//           </TableColumn>
//         )}
//       </TableHeader>
//       <TableBody items={sortedItems} emptyContent='No users to display.'>
//         {user => (
//           <TableRow key={user.id}>
//             {columnKey => <TableCell>{renderCell(user, columnKey)}</TableCell>}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }



// ================================================================================================================





















// import {
//   Table,
//   TableHeader,
//   TableColumn,
//   TableBody,
//   TableRow,
//   TableCell,
//   getKeyValue,
// } from "@heroui/react";

// const rows = [
//   {
//     key: "1",
//     name: "Tony Reichert",
//     role: "CEO",
//     status: "Active",
//   },
//   {
//     key: "2",
//     name: "Zoey Lang",
//     role: "Technical Lead",
//     status: "Paused",
//   },
//   {
//     key: "3",
//     name: "Jane Fisher",
//     role: "Senior Developer",
//     status: "Active",
//   },
//   {
//     key: "4",
//     name: "William Howard",
//     role: "Community Manager",
//     status: "Vacation",
//   },
// ];

// const columns = [
//   {
//     key: "name",
//     label: "NAME",
//   },
//   {
//     key: "role",
//     label: "ROLE",
//   },
//   {
//     key: "status",
//     label: "STATUS",
//   },
// ];

// export default function App() {
//   return (
//     <Table aria-label="Example table with dynamic content">
//       <TableHeader columns={columns}>
//         {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
//       </TableHeader>
//       <TableBody items={rows}>
//         {(item) => (
//           <TableRow key={item.key}>
//             {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
//           </TableRow>
//         )}
//       </TableBody>
//     </Table>
//   );
// }
