import React from 'react';
import './adminlayout.css'; // Ensure this exists

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <div className="sidebar">
        <h2>Admin Panel</h2>
        <a href="/dashboard">🏠 Dashboard</a>
        <a href="/orders">📦 Orders</a>
        <a href="/logout" className="logout-link">Logout</a>
      </div>
      <div className="main-content">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
