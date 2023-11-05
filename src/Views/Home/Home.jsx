import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import { useSelector, useDispatch } from "react-redux";
import { getServicios } from "../../Redux/Actions";
import style from "./Home.module.css"

const Home = () => {
  const dispatch = useDispatch(); // Usa useDispatch como una función
  useEffect(() => {
    dispatch(getServicios()); // Despacha la acción para obtener los servicios
  }, []);

  const servicios = useSelector((state) => state.servicios);
  console.log(servicios);

  return (
    <div className={style.contenedor}>
      <div>
      <div className={style.title}>
       Nuestros Servicios
       </div>
        <Cards servicios={servicios} />
      </div>
    </div>
  );
};

export default Home;
