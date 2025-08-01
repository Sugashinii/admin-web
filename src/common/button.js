import React from 'react';
import './Button.css';

function Button({ label, onClick, type = 'button', variant = 'primary' }) {
  return (
    <button className={`btn ${variant}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
