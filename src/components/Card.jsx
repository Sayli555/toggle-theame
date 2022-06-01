import React, { useContext } from 'react'
import "./Card.css";
import { BsThreeDots } from "react-icons/bs";
import {TheameContext} from "../Context/TheamContext"

const Card = ({name,place,level,point,image}) => {

  const {isDark}=useContext(TheameContext)
 
  return (
    <div className={isDark ? "Card CardDark" : "Card"}>
     
      <div className='profilinfo'> 
        <div className='logo'>
          <img
          src={image}

          alt=""
          />
        </div>
        <div className='prname'>
          <span>{name}</span><br/>
          <span>{place}</span>
        </div>
        <div>
        <BsThreeDots />
        </div>
      </div>
      <div className='greenline'></div>
      <div className='prlevel'>
        <span>Proffessional Level {level}</span>
        <span>point {point}</span>
      </div>
    </div>
  )
}

export default Card
