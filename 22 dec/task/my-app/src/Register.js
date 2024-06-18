import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [user, setUser] = useState({ userName: '', password: '' });
  const navigate = useNavigate();

  const handleRegister = () => {
    
    if (user.userName && user.password) {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      const isUsernameTaken = existingUsers.some((u) => u.userName === user.userName);

      if (isUsernameTaken) {
        alert('Username is already taken. Please choose another username.');
      } else {
        const updatedUsers = [...existingUsers, user];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        alert('Registration successful. You can now login.');
        navigate('/');
      }
    }
     else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div>
      <h2>Register</h2>
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
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/">Login</Link>
      </p>
    </div>
  );
};

export default Register;