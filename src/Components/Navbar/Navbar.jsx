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
          src="https://firebasestorage.googleapis.com/v0/b/link-6eb7d.appspot.com/o/innovacionDigitallogo.png?alt=media&token=9822d711-4f1f-4a9c-9852-0cf7cf715738"
          alt="henryLogo"
        />
      </Link>
      <FaBars
        className={`menu-icon ${showMenu ? 'active' : ''}`}
        onClick={toggleMenu}
      />
      <div className={`linkcontainer ${showMenu ? "active" : ""}`}>
        <Link to="/landing">Inicio</Link>
        <Link to="/home">Servicios</Link>
        <Link to="/proyectos">Proyectos</Link>
        <Link to="/contactenos">Contactenos</Link>
        <Link to="/colaboradores">Colaboradores</Link>
      </div>
    </div>
  );
};

export default Navbar;


