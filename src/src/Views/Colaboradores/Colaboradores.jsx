import React, { useEffect, useState } from "react";
import CardsColaboradores from "../../Components/CardsColaboradores/CardsColaboradores";
import { useSelector, useDispatch } from "react-redux";
import { getColaboradores } from "../../Redux/Actions";
import style from "./Colaboradores.module.css"

const Home = () => {
  const dispatch = useDispatch(); // Usa useDispatch como una función
  useEffect(() => {
    dispatch(getColaboradores()); // Despacha la acción para obtener los servicios
  }, []);

  const colaboradores = useSelector((state) => state.colaboradores);
  

  return (
    <div className={style.contenedor}>
      <div>
        <CardsColaboradores colaboradores={colaboradores} />
      </div>
    </div>
  );
};

export default Home;
