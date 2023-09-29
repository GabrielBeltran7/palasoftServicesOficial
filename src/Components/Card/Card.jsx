import React from 'react'
import  style from "./Card.module.css"

const Card = (props) => {

  return (
    <div className={style.cardcontainer}>
      <div className={style.cardtitle}>
        <h2>{props.name}</h2>
      </div>
  
      <div className={style.carddivisor}></div>
      <div className={style.cardinfo}>
      
        <h4>{props.email}</h4>
        <br></br>
        <h4>{props.phone}</h4>
      </div>
    </div>
  )
}

export default Card