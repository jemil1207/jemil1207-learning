
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './components/Register';
import First from './components/First';
import Chat from './components/Chat';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />

      </Routes>
    </Router>
  );
};

export default App;




