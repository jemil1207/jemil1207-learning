import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const userName = localStorage.getItem('userName');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('userName');
    navigate('/');
  };

  return (
    <div>
      <h2>Welcome, {userName}!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Welcome;