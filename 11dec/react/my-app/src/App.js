import logo from './logo.svg';
import './App.css';
import About from "./Components/About.js";
import Contact from './Components/Contact.js';
import Home from './Components/Home.js';
import Button from'./Components/Button.js';
import React from 'react';
import {BrowserRouter as Router,Route,Link,Routes} from "react-router-dom"
function App() {
  return (
    <div className="App">
            
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
          </nav>
        </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Contacts" element={<Contact/>}/>
        
      </Routes>
      </Router>
      <Button/>
    </div>
  );
}

export default App;
