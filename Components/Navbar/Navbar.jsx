import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className={styles.navcontainer}>
      <Link to="/">
        <img 
          src="https://firebasestorage.googleapis.com/v0/b/link-6eb7d.appspot.com/o/innovacionDigitallogo.png?alt=media&token=f3e29e0e-c0bd-4e1f-a43f-d959651fa827"
          alt="logoInnovacionDigital"
        />
      </Link>
      <div className={`${styles.menuicono} ${showMenu ? styles.active : ""}`} onClick={toggleMenu}>
        <FaBars />
      </div>
      <div className={`${styles.linkcontainer} ${showMenu ? styles.active : ""}`}>
        <Link to="/landing" onClick={closeMenu}>
          Inicio
        </Link>
        <Link to="/home" onClick={closeMenu}>
          Servicios
        </Link>
        <Link to="/proyectos" onClick={closeMenu}>
          Proyectos
        </Link>
        <Link to="/contactenos" onClick={closeMenu}>
          Contactenos
        </Link>
        <Link to="/colaboradores" onClick={closeMenu}>
          Colaboradores
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
// import styles from "./Navbar.module.css"; // Asegúrate de que styles esté importado correctamente

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);

//   const toggleMenu = () => {
//     console.log("Toggle menu called");
//     setShowMenu(!showMenu);
//   };

//   return (
//     <div className={styles.navcontainer}>
//       <Link to="/">
//         <img
//           src="https://firebasestorage.googleapis.com/v0/b/link-6eb7d.appspot.com/o/innovacionDigitallogo.png?alt=media&token=9822d711-4f1f-4a9c-9852-0cf7cf715738"
//           alt="henryLogo"
//         />
//       </Link>
//       <div className={`${styles.menuicono} ${showMenu ? styles.active : ""}`} onClick={toggleMenu}>
//         <FaBars />
//       </div>
//       <div className={`${styles.linkcontainer} ${showMenu ? styles.active : ""}`}>
//         <Link to="/landing">Inicio</Link>
//         <Link to="/home">Servicios</Link>
//         <Link to="/proyectos">Proyectos</Link>
//         <Link to="/contactenos">Contactenos</Link>
//         <Link to="/colaboradores">Colaboradores</Link>
//       </div>
//     </div>
//   );
// };

// export default Navbar;




