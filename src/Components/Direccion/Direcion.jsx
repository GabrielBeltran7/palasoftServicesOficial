import React from "react";

import styles from "./Direccion.module.css";
import {
  FaBuilding,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Direccion = () => {
  return (
    <div className={styles.contenedorprincipal}>
      <div className={styles.direccionContainer}>
        <h2 className={styles.title}>
          <FaBuilding /> Planta 1
        </h2>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Colombia, Cundinamarca
        </p>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Cota, Siberia Sector Parcelas
        </p>
        <p className={styles.addressText}>
          <FaPhoneAlt /> Celular: 3143433954
        </p>
        <p className={styles.addressText}>
          <FaEnvelope /> Correo: ernestobarmor@hotmail.com
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3976.108165943088!2d-74.13765332502044!3d4.751236895223961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDUnMDQuNSJOIDc0wrAwOCcwNi4zIlc!5e0!3m2!1ses!2sco!4v1698017634751!5m2!1ses!2sco"
          width="300"
          height="200"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.direccionContainer}>
        <h2 className={styles.title}>
          <FaBuilding /> Planta 2
        </h2>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Colombia, Cundinamarca
        </p>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Tenjo, Siberia Sector la Punta
        </p>
        <p className={styles.addressText}>
          <FaPhoneAlt /> Celular: 3143433954
        </p>
        <p className={styles.addressText}>
          <FaEnvelope /> Correo: ernestobarmor@hotmail.com
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d963.1788726418287!2d-74.16351926877255!3d4.764063463643864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwNDUnNTEuNCJOIDc0wrAwOSc0Ny4zIlc!5e0!3m2!1ses!2sco!4v1698017407521!5m2!1ses!2sco"
          width="300"
          height="200"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Direccion;
