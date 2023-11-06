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
          <FaMapMarkerAlt /> Mosquera, KR 10 # 15 A - 22 AP 200

        </p>
        <p className={styles.addressText}>
          <FaPhoneAlt /> Celular: +57  3213190211
        </p>
        <p className={styles.addressText}>
          <FaEnvelope /> Palasoftservices@gmail.com
        </p>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.2829950198525!2d-74.23106882620203!3d4.720829041485203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f780ff1fcbbfd%3A0xfdeb4c58fea71264!2sCl.%2010%20%2315a-22%2C%20Mosquera%2C%20Cundinamarca!5e0!3m2!1ses-419!2sco!4v1699305507227!5m2!1ses-419!2sco"
         width="300"
          height="200" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>
        
      </div>
      <div className={styles.direccionContainer}>
        <h2 className={styles.title}>
          <FaBuilding /> Paraguay
        </h2>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Paraguay, Asuncion
        </p>
        <p className={styles.addressText}>
          <FaMapMarkerAlt /> Julia Miranda Cueto Nro 1145
          <br /> esquina Zavalas
        </p>
        <p className={styles.addressText}>
          <FaPhoneAlt /> Celular: +595 -994253809
        </p>
        <p className={styles.addressText}>
          <FaEnvelope /> gerencia.palasoft@gmail.com
        </p>
  
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.353547548339!2d-57.55693472556449!3d-25.325914728779665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945da92b44744d21%3A0x1f900d8de13d682b!2sJulia%20Miranda%20Cueto%201145%2C%20San%20Lorenzo%2C%20Paraguay!5e0!3m2!1ses-419!2sco!4v1699306325058!5m2!1ses-419!2sco"
         width="300" 
         height="200" 
        loading="lazy" 
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Direccion;
