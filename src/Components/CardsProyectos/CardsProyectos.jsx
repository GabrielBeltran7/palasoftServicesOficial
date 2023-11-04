import React from 'react'
import CardProyectos from "../CardProyectos/CardProyectos"
import style from "./CardsProyectos.module.css"

const Cards = ({ proyectos }) => {
 
  return (
    <div>
      <div className={style.cardscontainer}>
        {proyectos.map((proyectos) => <CardProyectos
          id={proyectos.id}
          nombre={proyectos.nombre}
          imagen={proyectos.imagen}
          descripcion={proyectos.descripcion}
          key={proyectos.id} />)}
</div>

    </div>


  )
}

export default Cards