// import logo from './logo.svg';
// import './App.css';
// import Home from './components/Home';
// import Reg from './components/Reg';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

// function App() {
//   return (
//     <div className="App">
//        <Router>
//         <Routes>
//           <Route path='/' element={<Home/>}/>
//           <Route path='/reg' element={<Reg/>}/>
//         </Routes>
//       </Router>
      
//     </div>
//   );
// }

// export default App;

// import logo from './logo.svg';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from './components/Home';
// import Reg from './components/Reg';
// import Last from './components/Last'
// function App() {
//   return (
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/reg" element={<Reg/>}/>
//           <Route path="/Last" element={<Last />} />

//         </Routes>
//       </Router>
//   );
// }

// export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/Home';
// import Reg from './components/Reg';
// import Last from './components/Last';


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/reg" element={<Reg />} />
//         <Route path="last" element={<Last />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Welcome from './Welcome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;