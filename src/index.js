import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; // This is actually AppWithProvider based on our last setup
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: for measuring performance
reportWebVitals();
