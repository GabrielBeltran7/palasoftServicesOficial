
import React, { useState } from 'react';
import emailjs from 'emailjs-com';  // Importa la librería EmailJS
import styles from './FormularioContactenos.module.css';

const FormularioContactenos = () => {
  const [input, setInput] = useState({
    nombre: "",
    correo: "",
    descorta: "",
    deslarga: "",
    celular:""
  });

  const handleChangeInputs = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  const onSubmitInput = (event) => {
    event.preventDefault();

    // Configura los datos del formulario para enviar con EmailJS
    const templateParams = {
        nombre: input.nombre,
        correo: input.correo,
        descorta: input.descorta,
        deslarga: input.deslarga,
        celular: input.celular,
    };

    // Reemplaza 'YOUR_EMAILJS_USER_ID' con tu ID de usuario de EmailJS
    emailjs.send('service_8ni33ap', 'template_g6fmvrq', templateParams, 'OSctIut5jV2BPZRQX')
      .then((response) => {
        console.log('Correo enviado con éxito', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo', error);
      });

    // Limpia el formulario después de enviar
    setInput({
      nombre: "",
      correo: "",
      descorta: "",
      deslarga: "",
      celular:""
    });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.title}>Necesitas un Servicio</div>
      <div >Envianos un  mensaje</div>
      <form className={styles.form} onSubmit={onSubmitInput}>
        <div className={styles.formGroup}>
          <div className={styles.labelGroup}>
          </div>
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Nombre"
              className={styles.input}
              value={input.nombre}
              onChange={handleChangeInputs}
              required
            />
            <input
              type="email"
              name="correo"
              id="correo"
              placeholder="Correo"
              className={styles.input}
              value={input.correo}
              onChange={handleChangeInputs}
              required
            />
             <input
              type="Number"
              name="celular"
              id="celular"
              placeholder="Celular"
              className={styles.input}
              value={input.celular}
              onChange={handleChangeInputs}
              required
            />
          </div>
        </div>
        <div className={styles.formGroup}>
          <select
            name="descorta"
            id="descorta"
            className={`${styles.input} ${styles.select}`}
            value={input.descorta}
            onChange={handleChangeInputs}
            required
          >
            <option value="">Selecciona una Opcion</option>
            <option value="DESCAPOTAJE">LANDING PAGE</option>
            <option value="EXCAVACION">SITIO WEB</option>
            <option value="ESCOMBROS">E-COMERCE</option>
            <option value="DEMOLICION">APP MOVIL</option>
            <option value="ALQUILER">SOFTWARE</option>
            
          </select>
        </div>
        <div className={styles.formGroup}>
          <textarea
            name="deslarga"
            id="deslarga"
            placeholder="Describimos tu requerimiento"
            className={styles.textarea}
            value={input.deslarga}
            onChange={handleChangeInputs}
          />
        </div>
        <button className={styles.button}>Enviar Mensaje</button>
      </form>
    </div>
  );
};

export default FormularioContactenos;
