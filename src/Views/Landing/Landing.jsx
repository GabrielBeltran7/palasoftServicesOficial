import React from "react";
import styles from "./Landing.module.css";
import imgquehacemos from "../../Components/imagenes/landing/tiposdesoftware.jpg";

import FormularioContactenos from "../../Components/FormularioInicio/FormularioInicio";
import imagenMain from "../../assets/palasoft 6.jpg";
import Argentina from "../../assets/argentina.png";
import Colombia from "../../assets/colombia.png";
import Paraguay from "../../assets/paraguay.png";

const logo = "https://firebasestorage.googleapis.com/v0/b/link-6eb7d.appspot.com/o/innovacionDigitallogo.png?alt=media&token=f3e29e0e-c0bd-4e1f-a43f-d959651fa827"
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.palasoft}>
        <h1>Innovacion Digital</h1> <br />


        <span className={styles.banderas}>
          <img src={Argentina} alt="Bandera Argentina" />
          <img src={logo} alt="Logo" />
          <img src={Colombia} alt="Bandera Colombia" />
         </span>
        
      </div>
      <section className={styles.heroSection}>
        <FormularioContactenos />
      </section>

      <div className={styles.contenedorInfoUno}>
        <p className={styles.paragraph}>
          En Innovación Digital, nuestra pasión va más allá del simple desarrollo
          de software; estamos comprometidos en crear experiencias digitales
          excepcionales que superen cualquier expectativa. Nos impulsa una
          dedicación inquebrantable hacia la excelencia, lo que nos lleva a
          trascender los límites convencionales y a desafiar constantemente la
          norma. Nuestra misión es convertir tus conceptos en asombrosas
          realidades digitales que dejen una huella duradera. Trabajamos
          incansablemente para llevarte al siguiente nivel tecnológico y ser tu
          aliado de confianza en el emocionante viaje hacia la transformación
          digital. En cada paso de este camino, tu éxito es nuestra prioridad
          absoluta, y juntos, estamos forjando el futuro de la tecnología...
        </p>
        {/* <img src={imagenMain} alt="" className={styles.imagenInfoUno} /> */}
      </div>
      <div className={styles.contenedorInfoDos}>
        <img src={imgquehacemos} alt="que ofrecemos" className={styles.image} />
        <p className={styles.paragraph}>
        En este viaje de innovación, destacamos por compromiso, calidad y excelencia. Con un equipo de expertos
         en desarrollo, diseño y tecnología, ofrecemos soluciones efectivas para tu negocio. Siempre a 
         la vanguardia de las tendencias tecnológicas, aplicamos la innovación en proyectos. En Innovación Digital, 
         somos proveedores de servicios tecnológicos y socios estratégicos en el éxito. Comprometidos con tu crecimiento,
        ansiamos crear un mañana brillante en tecnología
        </p>
      </div>
      <a href="/home" className={styles.button}>
        Descubre más
      </a>
    </div>
  );
};

export default Landing;
