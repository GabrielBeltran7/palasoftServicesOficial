import React, { useEffect, useState } from "react";
import CardsProyectos from "../../Components/CardsProyectos/CardsProyectos";

import { useSelector, useDispatch } from "react-redux";
import { getProyectos } from "../../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch(); // Usa useDispatch como una función
  useEffect(() => {
    dispatch(getProyectos()); // Despacha la acción para obtener los servicios
  }, []);

  const proyectos = useSelector((state) => state.proyectos);

  return (
    <div className="home-container">
      <div>
        <CardsProyectos proyectos={proyectos} />
      </div>
    </div>
  );
};

export default Home;
