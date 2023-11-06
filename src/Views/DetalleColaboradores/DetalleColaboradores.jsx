import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getColaboradores } from "../../Redux/Actions";
import style from "./DetalleColaboradores.module.css";

const Servicios = () => {
  const dispatch = useDispatch();

  const { id } = useParams();
  const colaboradoresId = parseInt(id, 10);

  useEffect(() => {
    dispatch(getColaboradores());
  });

  const colaboradores = useSelector((state) => state.colaboradores);

  const colaboradoresFilter = colaboradores.find(
    (colaboradores) => colaboradores.id === colaboradoresId
  );

  return (
    <div className={style.container}>
      <div className={style.containerHeader}>
      
      </div>
      <div className={style.containerInfo}>
        <h2 className={style.title}>{colaboradoresFilter.nombre}</h2>
        <div className={style.containerImage}>
          <img src={colaboradoresFilter.imagen} alt="" />
        </div>
        <p>{colaboradoresFilter.descripcion}</p>
      </div>
    </div>
  );
};

export default Servicios;
