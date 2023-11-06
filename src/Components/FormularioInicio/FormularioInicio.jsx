import React, { useState } from "react";
import style from "./FormularioInicio.module.css";
import imagenInicio from "../../assets/palasoft 5.jpg";
import emailjs from 'emailjs-com';  
import Swal from 'sweetalert2';

const FormularioInicio = () => {
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
        Swal.fire({
          icon: "success",
          title: "Correo enviado con exito.",
          timerProgressBar: true,
          timer: 2500,
        });
        
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error', // Usar 'error' para el icono de error.
          title: 'Error al enviar el correo',
          text: 'Se produjo un error al enviar el correo. Por favor, inténtalo de nuevo.',
          confirmButtonColor: '#d33', // Cambiar el color del botón de confirmación (opcional).
        });
        
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
    <div className={style.container}>
      <div className={style.inicio}>
        <h2>Desarrollo de software a medida</h2>
        <p>
          Entendemos las necesidades de tu emprendimiento como propias y nos
          proponemos a crear soluciones tecnologicas que te generarán resultados
          concretos, medibles y escalables.
        </p>
        <h3>
          Encuentra las soluciones tecnologicas que necesitás con Palasoft Services!
        </h3>
        <br />
        <br />
      </div>
      <form onSubmit={onSubmitInput}  action="" className={style.formulario}>
        <div>
          <label htmlFor="Nombre">Nombre</label>
          <input 
          onChange={handleChangeInputs}
          value={input.nombre}
          name="nombre"
          id="nombre"
          type="text" placeholder="Nombre" 
          required/>

        </div>
        <div>
          <label htmlFor="Celular">Celular</label>
          <input 
          onChange={handleChangeInputs}
          type="Number"
          name="celular"
          value={input.celular}
          id="celular"
          required
          placeholder="Ingrese su Celular" />
        </div>
        <div>
          <label htmlFor="email">Ingrese su email</label>
          <input 
          onChange={handleChangeInputs}
          type="email"
          value={input.correo}
          name="correo"
          id="correo"
          required  
          placeholder="Ingrese su Correo" />
        </div>
        <div >
          
          <select
          onChange={handleChangeInputs}
            name="descorta"
            id="descorta"
            value={input.descorta}
           required
          >
            <option value="">Selecciona una Opcion</option>
            <option value="LANDING_PAGE">LANDING PAGE</option>
            <option value="SITIO_WEB">SITIO WEB</option>
            <option value="E-COMERCE">E-COMERCE</option>
            <option value="APP_MOVIL">APP MOVIL</option>
            <option value="SOFTWARE">SOFTWARE</option>
            
          </select>
        </div>
        <div>
          <label htmlFor="consulta">¿Que podemos hacer por ti?</label>
          <textarea 
            name="deslarga"
            id="deslarga" cols="30" 
            value={input.deslarga}
            required
            onChange={handleChangeInputs}
            rows="5"></textarea>
        </div>
        <button className={style.enviarConsulta}>Enviar Consulta</button>
      </form>
      <img className={style.imagen} src={imagenInicio} alt="" />
    </div>
  );
};

export default FormularioInicio;
