import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <h2>Admin Panel</h2>
        <a href="/dashboard">Dashboard</a>
        <a href="/orders">Orders</a>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>

      <div className="dashboard-content">
        <h1 style={{ fontSize: '2rem', color: '#b4465c', marginBottom: '2rem' }}>
          Welcome back, Admin 💄
        </h1>

        <div className="dashboard-card">
          <h3>Total Orders</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>1,204</p>
        </div>

        <div className="dashboard-card">
          <h3>Revenue</h3>
          <p style={{ fontSize: '2rem', fontWeight: 'bold' }}>₹5,48,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
