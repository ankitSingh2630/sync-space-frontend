'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import LoginHistory from '../../components/LoginHistory/LoginHistory';
import DashboardContent from '../../components/Home/DashboardContent';
import DashboardHome from '@/components/Dashboardhome'
import NewSpace from '@/components/Multistep'
import AppCredentials from '@/components/App_Credentials'
import withAuth from '@/components/withAuth';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <Navbar setPage={setCurrentPage} />
      <main className="container mx-auto p-6">
        {currentPage === "home" && <DashboardContent />}
        {currentPage === "dashboard" && <DashboardHome />}
        {currentPage === "login-history" && <LoginHistory />}
        {currentPage === "new-space" && <NewSpace />}
        {currentPage === "app-credentials" && <AppCredentials />}
      </main>
    </div>
  );
};

export default withAuth(Dashboard);









// 'use client';

// import { useState } from 'react';
// import Navbar from '../../components/Navbar';
// import LoginHistory from '../../components/LoginHistory/LoginHistory';
// import DashboardContent from '../../components/Home/DashboardContent';
// import DashboardHome from '@/components/Dashboardhome'
// import NewSpace from '@/components/Multistep'
// import AppCredentials from '@/components/App_Credentials'
// import withAuth from '@/components/withAuth';


// const Dashboard = () => {
//   const [currentPage, setCurrentPage] = useState('home'); // Default to 'dashboard' view

//   return (
//     <div className="min-h-screen bg-gray-100 pt-20">
//       <Navbar 
//       setPage={setCurrentPage} />
//       <main className="container mx-auto p-6">
//         {currentPage === 'home' && (
//           <DashboardContent/>
//         )}
//         {currentPage === 'dashboard' && (
//           <DashboardHome/>
//         )}
//         {currentPage === 'login-history' && (
//           <LoginHistory />
//         )}
//         {currentPage === 'new-space' && (
//           <NewSpace />
//         )}
//         {currentPage === 'app-credentials' && (
//           <AppCredentials />
//         )}
//         {currentPage === 'login-history' && (
//           <LoginHistory />
//         )}
        
//         </main>
//       </div>
//   );
// };
// export default withAuth(Dashboard);
