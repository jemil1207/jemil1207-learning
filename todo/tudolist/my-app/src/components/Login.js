// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// 
//  const Login = () => {
//   const navigate = useNavigate();
//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredPassword, setEnteredPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     const storedUserData = JSON.parse(localStorage.getItem('userData')) || [];
//     const user = storedUserData.find(user => user.username === enteredUsername);

//     if (user && user.password === enteredPassword) {
//       alert("Login successful");
//       navigate("/tudo");
//     } else if (user && user.password !== enteredPassword) {
//       alert("Invalid password");
//     } else if (!user) {
//       alert("Invalid username");
//     }
//   }    

//   return (
//     <>
//     <div className='loginall'>


//             <h1 className='log'>Login</h1>
//             <label  className='username'>Username :</label>
//            <input
//           className='luser'
//           type="text"

//           value={enteredUsername}
//           onChange={(e) => setEnteredUsername(e.target.value)}
//           required
//         /><br /><br></br>
//         <label  className='password'>Password :</label>
//         <input
//           className='lpass'
//           type="password" value={enteredPassword} onChange={(e) => setEnteredPassword(e.target.value)}
//           required
//         /><br />
//         <button type="submit" className='subbutton' onClick={handleLogin}>Login</button><br />



//       <Link to="/register"className='loglink'> Create an Account</Link>
//       </div>
//     </>
//   );
// };
// export default Login;


import './Login.css'
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const [user, setUser] = useState({ Username: '', Password: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate();

  const handleLogin = () => {
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const foundUser = existingUsers.find(
      (u) => u.Username === user.Username && u.Password === user.Password
    );

    if (foundUser) {
      localStorage.setItem('Username', user.Username);
      navigate('/home');
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };



  return (

    < >

      <div className='la'>


        <div className="loginall">
          <h1 className="log">Login</h1>

          <label className="username">Username :</label>
          <input className="luser" type="text" value={user.Username} placeholder="Username" onChange={(e) => setUser({ ...user, Username: e.target.value })} /><br></br><br></br>
          <label className="password">Password :</label>
          <input className="lpass" type="password" value={user.Password} placeholder="Password" onChange={(e) => setUser({ ...user, Password: e.target.value })} /><br></br><br></br>
          <button className="subbutton" onClick={handleLogin}>Login</button>
          <Link to="/Register" className="emsg">  Register</Link>
          <p className='emsg'>{error}</p>
        </div>
      </div>
    </>
  )
}
export default Login;
