import React from "react";
import style from "./CardColaboradores.module.css";
import { Link } from "react-router-dom";
import FuncionContactenos from "../Funcioncontactenos/FuncionContactenos";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
const Card = (props) => {
  const id = props.id;
  return (
    <article className={style.cardcontainer}>
      <div className={style.cardtitle}>
        <Link to={`/detallecolaboradores/${id}`}>
          <img src={props.imagen} className={style.image} alt="img" />
        </Link>
      </div>
      <div className={style.carddivisor} />
      <div className={style.cardinfo}>
      <Link to={`/detallecolaboradores/${id}`}>
      <h4 className={style.color}>{props.nombre}</h4>
      <h4 className={style.color}>{props.profesion}</h4>
      </Link>
        <FuncionContactenos />
        
      </div>
      <div className={style.containerprincipal}>
  <a href={props.facebook} target="_blank"><FaFacebook /></a>
  <a href={props.youtube} target="_blank"><FaYoutube /></a>
  <a href={props.twitter} target="_blank"><FaTwitter /></a>
  <a href={props.instagram} target="_blank"><FaInstagram /></a>
  <a href={props.linkedin} target="_blank"><FaLinkedin /></a>
  <a href={props.github} target="_blank"><FaGithub /></a>
</div>

    </article>
  );
};

export default Card;
