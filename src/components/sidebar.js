// components/Sidebar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-8">Admin Panel</h1>
      <nav className="flex flex-col gap-4">
        <Link to="/dashboard" className="hover:bg-gray-700 px-3 py-2 rounded">🏠 Dashboard</Link>
        <Link to="/orders" className="hover:bg-gray-700 px-3 py-2 rounded">📦 Orders</Link>
        <button onClick={handleLogout} className="bg-red-600 hover:bg-red-700 px-3 py-2 rounded mt-auto">
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
