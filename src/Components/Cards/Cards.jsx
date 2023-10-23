import React from 'react'

import Card from "../Card/Card"
import style from "./Cards.module.css"

const Cards = ({ servicios }) => {
 
  return (
    <div>
      <div className={style.cardscontainer}>
        {servicios.map((servicios) => <Card
          id={servicios.id}
          nombre={servicios.nombre}
          imagen={servicios.imagen}
          descripcion={servicios.descripcion}
          key={servicios.id} />)}

      </div>

    </div>


  )
}

export default Cards