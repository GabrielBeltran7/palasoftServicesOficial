import React from "react";
import styles from "./Landing.module.css";
import imgquehacemos from "../../Components/imagenes/landing/tiposdesoftware.jpg";

import FormularioContactenos from "../../Components/FormularioInicio/FormularioInicio";
import imagenMain from "../../assets/palasoft 6.jpg";
import Argentina from "../../assets/argentina.png";
import Colombia from "../../assets/colombia.png";
import Paraguay from "../../assets/paraguay.png";
const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.palasoft}>
        <h1>PalasoftService</h1>
        <span className={styles.banderas}>
          <img src={Argentina} alt="Bandera Argentina" />
          <img src={Colombia} alt="Bandera Argentina" />
          <img src={Paraguay} alt="Bandera Argentina" />
        </span>
      </div>
      <section className={styles.heroSection}>
        <FormularioContactenos />
      </section>

      <div className={styles.contenedorInfoUno}>
        <p className={styles.paragraph}>
          En Palasoft Services, nuestra pasión va más allá del simple desarrollo
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
        <img src={imagenMain} alt="" className={styles.imagenInfoUno} />
      </div>
      <div className={styles.contenedorInfoDos}>
        <img src={imgquehacemos} alt="que ofrecemos" className={styles.image} />
        <p className={styles.paragraph}>
          En este emocionante viaje de innovación, nos destacamos por nuestro
          compromiso con la calidad y la excelencia. Contamos con un equipo de
          expertos en desarrollo de software, diseño de interfaces y consultoría
          tecnológica que te brindará soluciones personalizadas y efectivas para
          impulsar tu negocio. Siempre estamos a la vanguardia de las últimas
          tendencias tecnológicas, aplicando la innovación de manera efectiva en
          todos nuestros proyectos. En Palasoft Services, no solo somos
          proveedores de servicios tecnológicos, sino también tus socios
          estratégicos en el camino hacia el éxito. Estamos comprometidos con tu
          crecimiento y prosperidad, y estamos ansiosos por unir fuerzas contigo
          para crear un mañana más brillante y emocionante en la industria
          tecnológica.
        </p>
      </div>
      <a href="/home" className={styles.button}>
        Descubre más
      </a>
    </div>
  );
};

export default Landing;
