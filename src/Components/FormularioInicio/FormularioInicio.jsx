import React from "react";
import style from "./FormularioInicio.module.css";
import imagenInicio from "../../assets/palasoft 5.jpg";
const FormularioInicio = () => {
  return (
    <div className={style.container}>
      <div className={style.inicio}>
        <h2>Desarrollo de software a medida</h2>
        <p>
          Entendemos las necesidades de tu emprendimiento como propias y nos
          proponemos a crear soluciones tecnologicas que te generarán resultados
          concretos, medibles y escalables.
        </p>
        <h3>
          ¡Encontrá las soluciones tecnologicas que necesitás con Palasoft
          Service!
        </h3>
      </div>
      <form action="" className={style.formulario}>
        <div>
          <label htmlFor="Nombre">Nombre</label>
          <input type="text" placeholder="Nombre" />
        </div>
        <div>
          <label htmlFor="Apellido">Apellido</label>
          <input type="text" placeholder="Ingrese su apellido" />
        </div>
        <div>
          <label htmlFor="email">Ingrese su email</label>
          <input name="email" type="email" placeholder="Ingrese su email" />
        </div>
        <div>
          <label htmlFor="consulta">¿Que podemos hacer por usted?</label>
          <textarea name="consulta" id="" cols="30" rows="5"></textarea>
        </div>
        <button className={style.enviarConsulta}>Enviar Consulta</button>
      </form>
      <img className={style.imagen} src={imagenInicio} alt="" />
    </div>
  );
};

export default FormularioInicio;
