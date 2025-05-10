const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, avatar, first_name, last_name, email } = curUser;

        return (
          <tr key={id} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-6 py-3">{id}</td>
            <td className="border border-gray-300 px-6 py-3">
              <img src={avatar} alt={`${first_name} ${last_name}`} className="w-10 h-10 rounded-full" />
            </td>
            <td className="border border-gray-300 px-6 py-3">
              {first_name} {last_name}
            </td>
            <td className="border border-gray-300 px-6 py-3">{email}</td>
          </tr>
        );
      })}
    </>
  );
};

export default UserData;






// const UserData = ({users}) => {
//   return (
//       <>
//           {
//               users.map((curUser) => {
//                   const {id, first_name, email} = curUser;
//                   const {street, city, zipcode} = curUser.address;

//                   return (
//                       <tr key={id}>
//                           <td>{id}</td>
//                           <td>{first_name}</td>
//                           <td>{email}</td>
//                           <td>{street}, {city}, {" "}, {zipcode}</td>
//                       </tr>
//                   )
//               })

//           }
//       </>
//   )
// }
// export default UserData;





















// // import { User, Tooltip } from '@nextui-org/react'
// // import { DeleteIcon, EditIcon, EyeIcon } from '../components/icons'


// // const columns = [
// //   {
// //     key: 'name',
// //     label: 'NAME',
// //   },
// //   {
// //     key: 'lastSeen',
// //     label: 'Last Seen',
// //   },
// //   {
// //     key: 'actions',
// //     label: 'Actions',
// //   },
// // ];

// // const renderCell = (user, columnKey) => {
// //   const cellValue = user[columnKey];

// //   switch (columnKey) {
// //     case 'name':
// //       return (
// //         <User
// //           avatarProps={{ radius: 'lg', src: user.image }}
// //           description={user.email}
// //           name={cellValue}
// //         >
// //           {user.email}
// //         </User>
// //       );
// //     case 'lastSeen':
// //       return <span>{new Date(cellValue).toLocaleDateString()}</span>;
// //     case 'actions':
// //       return (
// //         <div className='relative flex items-center gap-4'>
// //           <Tooltip content='Details'>
// //             <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
// //               <EyeIcon />
// //             </span>
// //           </Tooltip>
// //           <Tooltip content='Edit user'>
// //             <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
// //               <EditIcon />
// //             </span>
// //           </Tooltip>
// //           <Tooltip color='danger' content='Delete user'>
// //             <span className='cursor-pointer text-lg text-danger active:opacity-50'>
// //               <DeleteIcon />
// //             </span>
// //           </Tooltip>
// //         </div>
// //       );
// //     default:
// //       return cellValue;
// //   }
// // };

// // export { columns, renderCell };

// // import { User, Tooltip } from '@nextui-org/react';
// // import { DeleteIcon, EditIcon, EyeIcon } from '../icons';

// import { User, Tooltip } from '@nextui-org/react'
// import { DeleteIcon, EditIcon, EyeIcon } from '../icons'

// // import { User, Tooltip } from '@nextui-org/react';
// // import { DeleteIcon, EditIcon, EyeIcon } from '../components/icons';

// // export default User = {
// //   id: string,
// //   name: string,
// //   email: string,
// //   image: string,
// //   lastSeen: string,
// // };

// export const columns = [
//   {
//     key: 'name',
//     label: 'NAME'
//   },
//   {
//     key: 'lastSeen',
//     label: 'Last Seen'
//   },
//   {
//     key: 'actions',
//     label: 'Actions'
//   }
// ];

// export const renderCell = (user, columnKey) => {
//   const cellValue = user[columnKey];

//   switch (columnKey) {
//     case 'name':
//       return (
//         <User
//           avatarProps={{ radius: 'lg', src: user.image }}
//           description={user.email}
//           name={cellValue}
//         >
//           {user.email}
//         </User>
//       );
//     case 'lastSeen':
//       return <span>{new Date(cellValue).toLocaleDateString()}</span>;
//     case 'actions':
//       return (
//         <div className='relative flex items-center gap-4'>
//           <Tooltip content='Details'>
//             <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
//               <EyeIcon />
//             </span>
//           </Tooltip>
//           <Tooltip content='Edit user'>
//             <span className='cursor-pointer text-lg text-default-400 active:opacity-50'>
//               <EditIcon />
//             </span>
//           </Tooltip>
//           <Tooltip color='danger' content='Delete user'>
//             <span className='cursor-pointer text-lg text-danger active:opacity-50'>
//               <DeleteIcon />
//             </span>
//           </Tooltip>
//         </div>
//       );
//     default:
//       return cellValue;
//   }
// };
