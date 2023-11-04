import React, { useEffect } from "react";
import CardsProyectos from "../../Components/CardsProyectos/CardsProyectos";
import { useSelector, useDispatch } from "react-redux";
import { getProyectos } from "../../Redux/Actions";
import style from "./Proyectos.module.css"; 

const Proyectos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProyectos());
  }, []);

  const proyectos = useSelector((state) => state.proyectos);

  return (
    <div className={style.container}>
      <div className={style.title}>Proyectos Desarrollados</div>
      <div className={style.cardcontainer}>
        <CardsProyectos proyectos={proyectos} />
      </div>
    </div>
  );
};

export default Proyectos;
