import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; /* Importa el ícono de hamburguesa */
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className={styles.navcontainer}>
      <Link to="/">
        <img
          src="https://cdn.theorg.com/d3119e0e-8202-4034-85ce-d0356382515e_thumb.jpg"
          alt="henryLogo"
        />
      </Link>
      {/* <FaBars className={`menu-icon ${showMenu ? 'active' : ''}`} onClick={toggleMenu} /> */}
      <div className={`linkcontainer ${showMenu ? "active" : ""}`}>
        <Link to="/landing">Inicio</Link>
        <Link to="/home">Servicios</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/contactenos">Contactenos</Link>
        <Link to="/colaboradores"> Colaboradores</Link>
      </div>
    </div>
  );
};

export default Navbar;
