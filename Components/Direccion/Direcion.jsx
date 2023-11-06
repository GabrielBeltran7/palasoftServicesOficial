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
          <FaBuilding /> Colombia
        </h2>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Colombia, Cundinamarca
        </p>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Madrid, carrera 20a n 2-33
        </p>
        <p className={styles.addressText}>
          <FaPhoneAlt /> Celular: +57  3132315212
        </p>
        <p className={styles.addressText}>
          <FaEnvelope />  gabrielbeltranmedina@gmail.com
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2147332524023!2d-74.27939068909545!3d4.732724941358529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f79b8209c7f25%3A0x8cf88a78f2212ff6!2sCra.%2020a%20%232-33%2C%20Madrid%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1699130472556!5m2!1ses-419!2sco"
         width="300" height="200"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
      <div className={styles.direccionContainer}>
        <h2 className={styles.title}>
          <FaBuilding /> Argentina
        </h2>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Argentina, Cordoba
        </p>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Cordoba- Argentina
        </p>
        <p className={styles.addressText}>
          <FaPhoneAlt /> Celular: +54 93512007103
        </p>
        <p className={styles.addressText}>
          <FaEnvelope /> Correo: angelceesd@gmail.com
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
