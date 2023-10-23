
import React from 'react';
import {  useNavigate } from "react-router-dom";
import style  from "./FuncionContactenos.module.css"

const FuncionContactenos = () => {

  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contactenos");
  };

  return (
    <div >
    <button  className={style.boton} onClick={handleNavigate}>Contactenos</button>
    </div>
  );
}

export default FuncionContactenos;
