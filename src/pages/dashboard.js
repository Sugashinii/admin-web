import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('auth');
    if (isLoggedIn !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <h2>Admin Panel</h2>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/orders">Orders</Link>
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
