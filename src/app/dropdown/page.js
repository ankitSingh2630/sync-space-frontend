"use client"
import Table from "../../components/Dropdown/index";
const dropdown=()=>{
  return(
   <Table/>
  )
}
export default dropdown;




// import { useState ,useEffect } from 'react';
// import UserTable from '../../components/Dropdown'
// import {User}  from '../../components/Dropdown/column';
// import React from 'react';

// async function getUsers() {
//   const res = await fetch(
//     'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
//   );
//   const data = await res.json();
//   return data;
// }

// export default function Users() {
//   const [users, setUsers] = useState();

//   useEffect(() => {
//     async function fetchData() {
//       const usersData = await getUsers();
//       setUsers(usersData);
//     }
//     fetchData();
//   }, []);

//   return (
//     <section className='py-24'>
//       <div className='container'>
//         <UserTable users={users} />
//       </div>
//     </section>
//   );
// }

// -----------------------------------------------------------------------------------------------------


// import UserTable from '../../components/Dropdown'
// import {User} from '../../components/Dropdown/column';
// const getUsers = async (User) => {
//   const res = await fetch('https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users');
//   const data = await res.json();
//    /** @type {User[]} */
//    const users = data;
//   return data;
// };

// const Users = async () => {
//   const users = await getUsers();

//   return (
//     <section className='py-24'>
//       <div className='container'>
//         <UserTable users={users} />
//       </div>
//     </section>
//   );
// };

// export default Users;



// import Drop from "../../components/Dropdown";
// const dropdown=()=>{
//   return(
//    <Drop/>
//   )
// }
// export default dropdown;