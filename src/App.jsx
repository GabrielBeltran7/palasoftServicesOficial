import React from 'react';
import { BrowserRouter, Route, Routes, Link, Navigate, NavLink } from 'react-router-dom';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import Footer from './Components/Footer/Footer';
import Servicios from "./Views/Servicios/Servicios";
import Contactenos from './Views/Contactenos/Contactenos';
import Colaboradores from "./Views/Colaboradores/Colaboradores"
import DetalleColaboradores from "./Views/DetalleColaboradores/DetalleColaboradores"
import Proyectos from "./Views/Proyectos/Proyectos"
import DetalleProyectos from "./Views/DetalleProyectos/DetalleProyectos"

function App() {

  return (
    <BrowserRouter>
      <div className="App">
         <header className="header">
          <Navbar /> <br />
          <h1>Palasoft Services</h1> 
        </header>
        <Routes>
        <Route path="/" element={<Landing />} />
          
          <Route path="/colaboradores" element={<Colaboradores/>} />
          <Route path="/detallecolaboradores/:id" element={<DetalleColaboradores/>} />
          <Route path="/landing" element={<Landing />} />     
          <Route path="/home" element={<Home/>} />
          <Route path="/contactenos" element={<Contactenos/>} />
          <Route path="/servicios/:id" element={<Servicios />} />
          <Route path="/proyectos" element={<Proyectos/>} />
          <Route path="/detalledeproyectos/:id" element={<DetalleProyectos/>} />

        </Routes>
        <Footer/>

      </div>
    </BrowserRouter>
  );
}

export default App;

