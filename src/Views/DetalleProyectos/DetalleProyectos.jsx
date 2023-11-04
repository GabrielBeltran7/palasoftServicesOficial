import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProyectos } from "../../Redux/Actions";
import style from "./DetalleProyectos.module.css";

const DetalleProyectos = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const proyectosId = parseInt(id, 10);

  useEffect(() => {
    dispatch(getProyectos());
  }, [dispatch]);

  const proyectos = useSelector((state) => state.proyectos);
  const proyectosFilter = proyectos.find((proyecto) => proyecto.id === proyectosId);

  if (!proyectosFilter) {
    return <div>No se encontró el proyecto</div>;
  }

  return (
    <div className={style.container}>
      <div className={style.containerHeader}></div>
      <div className={style.containerInfo}>
        <h2 className={style.title}>{proyectosFilter.nombre}</h2>
        <div className={style.containerImage}>
          <img src={proyectosFilter.imagen} alt={proyectosFilter.nombre} />
        </div>
        <p className={style.description}>{proyectosFilter.descripcion}</p>
      </div>
    </div>
  );
};

export default DetalleProyectos;

