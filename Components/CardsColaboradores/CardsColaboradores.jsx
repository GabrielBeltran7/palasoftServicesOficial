import React from 'react'

import CardColaboradores from "../CardColaboradores/CardColaboradores"
import style from "./CardsColaboradores.module.css"

const Cards = ({ colaboradores }) => {
 
  return (
    <div>
      <div className={style.cardscontainer}>
        {colaboradores.map((colaboradores) => <CardColaboradores
          id={colaboradores.id}
          nombre={colaboradores.nombre}
          profesion={colaboradores.profesion}
          imagen={colaboradores.imagen}
          descripcion={colaboradores.descripcion}
          facebook={colaboradores.facebook}
          youtube={colaboradores.youtube}
          twitter={colaboradores.twitter}
          instagram={colaboradores.instagram}
          linkedin={colaboradores.linkedin}
          github={colaboradores.github}
          key={colaboradores.id} />)}

</div>

    </div>


  )
}

export default Cards