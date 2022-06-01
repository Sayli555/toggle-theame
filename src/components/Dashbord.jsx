import React,{useContext} from 'react'
import "./Dashbord.css";
import { CardData } from './Carddata';
import Card from './Card';
import {TheameContext} from "../Context/TheamContext"
 
const Dashbord = () => {
  const {isDark,toggletheme}=useContext(TheameContext)
 
  return (
    <div className={isDark ? "dashbordmain dashbordmaindark" : "dashbordmain" }>
      <div className={isDark ? "dashbord dashbordDark" : "dashbord"}>
        <h2>My Dashboard</h2>
        <button onClick={toggletheme}>
          {isDark ? 'Light' : 'Dark'}
        </button>
      </div>
      <div>
      
      <div className={isDark ? "cardAcive cardActivDark" :"cardAcive"}>
           <h4>Active Users</h4>
           <h5>for August 2022</h5>
         </div>
        {CardData.map((card,index)=>(
          
          <div className='carddetail'>
            <Card 
            name={card.name}
            image={card.Image}
            level={card.level}
            place={card.place}
            point={card.point}
            />
          </div>
        ))
      }  
      <p className={isDark ? "CardDark" :"CardLight"}>Created by sayli</p>   
      </div>
    </div>
  )
}

export default Dashbord
