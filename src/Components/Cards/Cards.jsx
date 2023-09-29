import React from 'react'
import Card from '../Card/Card'
import "./Cards.css"

const Cards = ({allUsers}) => {
  return (
    <div className='cards-container'>

        {allUsers.map((user) => <Card name={user.name} phone={user.phone} email={user.email}/>)}
        
        
        
        {/* <Card name={"Lucas"} phone={"116873258"} email={"Lucas@gmail.com"}/>
        <Card name={"Diana"} phone={"116873258"} email={"Diana@gmail.com"}/>
        <Card name={"Luis"} phone={"116873258"} email={"Luis@gmail.com"}/>
        <Card name={"Ignacio"} phone={"116873258"} email={"Ignacio@gmail.com"}/>
        <Card name={"Roberto"} phone={"116873258"} email={"Roberto@gmail.com"}/>
        <Card name={"Matias"} phone={"116873258"} email={"Matias@gmail.com"}/> */}
    </div>
  )
}

export default Cards