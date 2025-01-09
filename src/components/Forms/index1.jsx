
'use client';
import React, { useState } from 'react';


const Form1 = () => {
  const [module, setModule] = useState('Leads');
  const [layout, setLayout] = useState('Standard');
  const [trigger, setTrigger] = useState('');

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Create Module Entry</h2>
      
      {/* Module Dropdown */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Module</label>
        <select
          className="w-full border rounded-lg px-3 py-2"
          value={module}
          onChange={(e) => setModule(e.target.value)}
        >
          <option value="Leads">Leads</option>
          <option value="Contacts">Contacts</option>
          <option value="Accounts">Accounts</option>
          <option value="Deals">Deals</option>
          <option value="Tasks">Tasks</option>
        </select>
      </div>

      {/* Layout Dropdown */}
      <div className="mb-4">
        <label className="block font-medium mb-2">Layout</label>
        <select
          className="w-full border rounded-lg px-3 py-2"
          value={layout}
          onChange={(e) => setLayout(e.target.value)}
        >
          <option value="Standard">Standard</option>
          <option value="Custom">Custom</option>
        </select>
      </div>

      {/* Trigger Input Field with Clear Button */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Enter trigger"
          className="w-full border rounded-lg px-3 py-2 mr-2"
          value={trigger}
          onChange={(e) => setTrigger(e.target.value)}
        />
        <button
          className="bg-gray-300 hover:bg-gray-400 text-black px-3 py-2 rounded-lg"
          onClick={() => setTrigger('')}
        >
          Clear
        </button>
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg w-full"
        onClick={() =>
          alert(`Submitted with Module: ${module}, Layout: ${layout}, Trigger: ${trigger}`)
        }
      >
        Submit
      </button>
    </div>
  );
};

export default Form1;
