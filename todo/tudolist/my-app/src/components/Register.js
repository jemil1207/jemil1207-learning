import './Register.css'
import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
 const Register=()=>{
    const [user,setUser]=useState({Username:'',Password:''})
    const navigate=useNavigate()
    const handleRegister=()=>{
        if (user.Username && user.Password){
              const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

      const isUsernameTaken = existingUsers.some((u) => u.Username === user.Username);

      if (isUsernameTaken) {
        alert('Username is already taken. Please choose another username.');
      } else {
        const updatedUsers = [...existingUsers, user];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        alert('Registration successful. You can now login.');
        navigate('/');
      }
    } else {
      alert('Please enter both username and password');
    }
        }
    
    return(                  
        <>
        <div className="regall">
            <h1 className="reg">Register</h1>
            <label className="username">Username :</label>
            <input className="ruser" placeholder="Enter username" value={user.Username} type="text" onChange={(e) => setUser({ ...user, Username: e.target.value })}/><br></br><br></br>
            <label className="password">Password :</label>
            <input className='rpass' placeholder="Enter password" value={user.Password} type="password" onChange={(e)=>setUser({...user,Password:e.target.value})}/><br></br><br></br>
            <button className="regbutton" onClick={handleRegister}>Register</button>
            <Link to="/" className="reglink">Login</Link>
            </div>
        </>
    )
}
export default Register;

