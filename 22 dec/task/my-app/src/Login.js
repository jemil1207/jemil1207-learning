import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [user, setUser] = useState({ userName: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = existingUsers.find(
      (u) => u.userName === user.userName && u.password === user.password
    );

    if (foundUser) {
      localStorage.setItem('userName', user.userName);
      navigate('/welcome');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Login</h2>  
      <label>Username:</label>
      <input
        type="text"
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
      />
      <br />
      <label>Password:</label>
      <input
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
      <p style={{ color: 'red' }}>{error}</p>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;