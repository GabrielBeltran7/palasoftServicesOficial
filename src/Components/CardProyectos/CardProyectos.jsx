import React from "react";
import style from "./CardProyectos.module.css";
import { Link } from "react-router-dom";
import FuncionContactenos from "../Funcioncontactenos/FuncionContactenos";
const Card = (props) => {
  const id = props.id;
  return (
    <div className={style.container}>
      <div className={style.cardContainer}>
        <img src={props.imagen} alt={props.nombre} className={style.image} />

        <p>{props.descripcionCorta}asdasd</p>
        <button>Ver más</button>
      </div>
    </div>
  );
};

export default Card;

// <article className={style.cardcontainer}>
//       <div className={style.cardtitle}>
//         <Link to={`/detalledeproyectos/${id}`}>
//           <img src={props.imagen} className={style.image} alt="img" />
//         </Link>
//       </div>
//       <div className={style.carddivisor} />
//       <div className={style.cardinfo}>
//       <Link to={`/detalledeproyectos/${id}`}>
//       <h4 className={style.color}>{props.nombre}</h4>
//       </Link>
//         <FuncionContactenos />
//       </div>
//     </article>
