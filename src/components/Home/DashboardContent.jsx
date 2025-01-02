const DashboardContent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-gray-800 mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-4">
        Welcome to your dashboard! Here you can manage your profile, view analytics, and more.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Total Users</h2>
          <p className="text-2xl text-blue-600">1,245</p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Active Sessions</h2>
          <p className="text-2xl text-green-600">83</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700">Pending Approvals</h2>
          <p className="text-2xl text-yellow-600">12</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
