import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Create from './Views/Create/Create';
import Navbar from './Components/Navbar/Navbar';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
         <header className="header">
          <Navbar /> <br />
          <h1>Palasoft Services</h1>
        </header>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

