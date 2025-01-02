'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import LoginHistory from '../../components/LoginHistory';
import DashboardContent from '../../components/Home/DashboardContent';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('dashboard'); // Default to 'dashboard' view

  return (
    <div className="min-h-screen bg-gray-100 pt-20">
      <Navbar setPage={setCurrentPage} />
      <main className="container mx-auto p-6">
        {currentPage === 'dashboard' && (
          <DashboardContent />
        )}
        {currentPage === 'login-history' && (
          <LoginHistory />
        )}
      </main>
    </div>
  );
};

export default Dashboard;
