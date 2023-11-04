import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getServicios } from "../../Redux/Actions";
import style from "./Servicios.module.css";

const Servicios = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const servicioId = parseInt(id, 10);

  useEffect(() => {
    dispatch(getServicios());
  });

  const servicios = useSelector((state) => state.servicios);

  const serviciosfilter = servicios.find(
    (servicios) => servicios.id === servicioId
  );

  return (
    <div className={style.container}>
      <div className={style.containerInfo}>
        <h2 className={style.title}>{serviciosfilter.nombre}</h2>
        <div className={style.containerImage}>
          <img src={serviciosfilter.imagen} alt="" />
          
          <h2 className={style.description}>{serviciosfilter.descripcion}</h2>
        </div>
        
      </div>
    </div>
  );
};

export default Servicios;
