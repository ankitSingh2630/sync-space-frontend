'use client';

import { useState } from 'react';



export default function ZohoForm() {
  const [app, setApp] = useState('');
  const [actionEvent, setActionEvent] = useState('');
  const [account, setAccount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`App: ${app}, Action Event: ${actionEvent}, Account: ${account}`);
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md border border-gray-300">
      <h1 className="text-xl font-bold text-gray-800 mb-4">Create Module Entry in Zoho CRM</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* App Field */}
        <div>
          <label htmlFor="app" className="block text-sm font-medium text-gray-700">
            App <span className="text-red-500">*</span>
          </label>
          <select
            id="app"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={app}
            onChange={(e) => setApp(e.target.value)}
          >
            <option value="" disabled>Select App</option>
            <option value="Zoho CRM">Zoho CRM</option>
            <option value="Zoho Books">Zoho Books</option>
          </select>
        </div>

        {/* Action Event Field */}
        <div>
          <label htmlFor="actionEvent" className="block text-sm font-medium text-gray-700">
            Action Event <span className="text-red-500">*</span>
          </label>
          <select
            id="actionEvent"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            value={actionEvent}
            onChange={(e) => setActionEvent(e.target.value)}
          >
            <option value="" disabled>Select Action Event</option>
            <option value="Create Module Entry">Create Module Entry</option>
            <option value="Update Module Entry">Update Module Entry</option>
          </select>
        </div>

        {/* Account Field */}
        <div>
          <label htmlFor="account" className="block text-sm font-medium text-gray-700">
            Account <span className="text-red-500">*</span>
          </label>
          <input
            id="account"
            type="text"
            className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your account email"
            value={account}
            onChange={(e) => setAccount(e.target.value)}
          />
        </div>
        {/* <TextareaDemo/> */}
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
