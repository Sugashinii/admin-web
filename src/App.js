import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import OrdersPage from './pages/orders';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'false';

  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to={isLoggedIn ? "/dashboard" : "/login"} />} />

       
        <Route path="/login" element={isLoggedIn ? <Navigate to="/dashboard" /> : <LoginPage />} />

        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />} />
        <Route path="/orders" element={isLoggedIn ? <OrdersPage /> : <Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
