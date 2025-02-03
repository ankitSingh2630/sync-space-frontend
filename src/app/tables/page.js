'use client'
import * as React from "react"
import Table from "../../components/Tables";
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';


function table(){
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null; // or a loading spinner
  }
  return(
    <div className=" px-6">
    {/* <Navbar /> */}
    
    <Table/>
   
    
    </div>
  );
}
export default table;









// import UserTable from '@/app/components/UserTable'
// import { User } from './columns'

// async function getUsers(): Promise<User[]> {
//   const res = await fetch(
//     'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
//   )
//   const data = await res.json()
//   return data
// }

// export default async function Users() {
//   const users = await getUsers()

//   return (
//     <section className='py-24'>
//       <div className='container'>
//         <UserTable users={users} />
//       </div>
//     </section>
//   )
// }





// 'use client'
// import * as React from "react"
// import Table from "../../components/Tables";
// import Navbar from '@/components/Navbar';
// import { useEffect, useState } from 'react';


// function table(){
//   const [isClient, setIsClient] = useState(false);
//   useEffect(() => {
//     setIsClient(true);
//   }, []);
//   if (!isClient) {
//     return null; // or a loading spinner
//   }
//   return(
//     <div className=" px-6">
//     {/* <Navbar /> */}
    
//     <Table/>
   
    
//     </div>
//   );
// }
// export default table;


