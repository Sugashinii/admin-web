import React, { useEffect, useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/login';
import Dashboard from './pages/dashboard';
import OrdersPage from './pages/orders';
import './index.css'; // Make sure loader CSS is here

// Auth context
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // null means loading

  useEffect(() => {
    const checkAuth = () => {
      const storedAuth = localStorage.getItem('auth');
      setIsLoggedIn(storedAuth === 'true');
    };

    // Simulate slight delay (optional, for real-world feel)
    setTimeout(checkAuth, 100);
  }, []);

  const login = () => {
    localStorage.setItem('auth', 'true');
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem('auth');
    setIsLoggedIn(false);
  };

  if (isLoggedIn === null) {
    return <div className="loader"></div>; // Spinner while checking auth
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook
const useAuth = () => useContext(AuthContext);

// Protected route wrapper
const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? element : <Navigate to="/login" />;
};

// Main App component
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
          <Route path="/orders" element={<ProtectedRoute element={<OrdersPage />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
