import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {  getProyectos } from "../../Redux/Actions";
import style from "./DetalleProyectos.module.css";

const Servicios = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const proyectosId = parseInt(id, 10);

  useEffect(() => {
    dispatch(getProyectos());
  });

  const proyectos = useSelector((state) => state.proyectos);


  const proyectosFilter = proyectos.find(
    (proyectos) => proyectos.id === proyectosId
  );

  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
      
      </div>
      <div className={style.containerInfo}>
        <h2 className={style.title}>{proyectosFilter.nombre}</h2>
        <div className={style.containerImage}>
          <img src={proyectosFilter.imagen} alt="" />
        </div>
        <p>{proyectosFilter.descripcion}</p>
      </div>
    </div>
  );
};

export default Servicios;
