import React, { useState } from 'react';
import { json } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "./First.css"

const First = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({ email: "", password: "" });

  const createAnAccount = () => {
    navigate("/register");
  };

  const handleLogin = () => {
    const userData = JSON.parse(localStorage.getItem("data"));
    // console.log("data", userData);

    // const loginUser=true
    const loginUser = userData.find(user => user.email == data.email && user.password == data.password)
    if (loginUser) {

      // localStorage.setItem("loguser", JSON.stringify(loginUser))
      alert("login successful")
      // navigate("/Chat",{state: {loginUser}})
      navigate("/Chat", { state: { current :loginUser.firstname} })

    }
    else {
      alert("invalid email or password")
    }

  };

  return (
    <div className='loginmain'>
      <div className='loginsec'>
        <div className='login'> Login</div>
        <input className='loginemail' type='email' placeholder='Enter your email' name='email' value={data.email} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} /><br />
        <input className='loginpass' type="password" placeholder='Enter your password' name='password' value={data.password} onChange={(e) => setData({ ...data, [e.target.name]: e.target.value })} /><br />
        <button  className ="loginbutton" onClick={handleLogin}>Login</button>
        <button className='logincreateanaccount' onClick={createAnAccount}>Create an account</button>
      </div>
    </div>
  );
};

export default First;
