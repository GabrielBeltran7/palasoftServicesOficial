import React, { useEffect, useState } from "react";
import Cards from "../../Components/Cards/Cards";
import CardsColaboradores from "../../Components/CardsColaboradores/CardsColaboradores";
import { useSelector, useDispatch } from "react-redux";
import { getColaboradores } from "../../Redux/Actions";

const Home = () => {
  const dispatch = useDispatch(); // Usa useDispatch como una función
  useEffect(() => {
    dispatch(getColaboradores()); // Despacha la acción para obtener los servicios
  }, []);

  const colaboradores = useSelector((state) => state.colaboradores);
  console.log("prueba", colaboradores);

  return (
    <div className="home-container">
      <div>
        <CardsColaboradores colaboradores={colaboradores} />
      </div>
    </div>
  );
};

export default Home;
