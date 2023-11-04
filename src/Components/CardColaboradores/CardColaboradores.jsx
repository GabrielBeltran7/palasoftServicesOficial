import React from "react";
import style from "./CardColaboradores.module.css";
import { Link } from "react-router-dom";
import FuncionContactenos from "../Funcioncontactenos/FuncionContactenos";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
const Card = (props) => {
  const id = props.id;
  return (
    <div className={style.cardContainer}>
      <div className={style.card}>
        <div className={style.front}>
          <img src={props.imagen} alt={props.nombre} />
        </div>
        <div className={style.back}>
          <div className={style.backContent}>
            <h2>{props.nombre}</h2>
            <p>{props.profesion}</p>
            <div className={style.sm}>
              <a href={props.facebook} target="_blank">
                <FaFacebook className={style.icon} />
              </a>

              <a href={props.youtube} target="_blank">
                <FaYoutube className={style.icon} />
              </a>

              <a href={props.instagram} target="_blank">
                <FaInstagram className={style.icon} />
              </a>

              <a href={props.linkedin} target="_blank">
                <FaLinkedin className={style.icon} />
              </a>

              <a href={props.github} target="_blank">
                <FaGithub className={style.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

// <article className={style.cardcontainer}>
//   <div className={style.cardtitle}>
//     <Link to={`/detallecolaboradores/${id}`}>
//       <img src={props.imagen} className={style.image} alt="img" />
//     </Link>
//   </div>
//   <div className={style.carddivisor} />
//   <div className={style.cardinfo}>
//     <Link to={`/detallecolaboradores/${id}`}>
//       <h4 className={style.color}>{props.nombre}</h4>
//       <h4 className={style.color}>{props.profesion}</h4>
//     </Link>
//     <FuncionContactenos />
//   </div>
//   <div className={style.containerprincipal}>
//     <a href={props.facebook} target="_blank">
//       <FaFacebook />
//     </a>
//     <a href={props.youtube} target="_blank">
//       <FaYoutube />
//     </a>
//     <a href={props.twitter} target="_blank">
//       <FaTwitter />
//     </a>
//     <a href={props.instagram} target="_blank">
//       <FaInstagram />
//     </a>
//     <a href={props.linkedin} target="_blank">
//       <FaLinkedin />
//     </a>
//     <a href={props.github} target="_blank">
//       <FaGithub />
//     </a>
//   </div>
// </article>
