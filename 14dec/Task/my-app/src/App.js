import logo from './logo.svg';
import './App.css';
// import Cart from "./components/cart.js"
import Button from './components/Button.js'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Cart from './components/cart.js';
import { useState } from 'react';

function App() {
  const [first,last]=useState(null)
  const proppiec=(a)=>{
    last(a)
  }
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Button you={proppiec}/>}/>
          <Route path='/cart' element={<Cart propb={first}/>}/> 
        </Routes>
      </Router>
     
    </>
  )
}

export default App;
