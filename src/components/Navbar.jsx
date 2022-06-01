import React, { useContext } from 'react'
import "./Navbar.css";
import { ImStatsBars2 } from "react-icons/im";
import { BsSignpost } from "react-icons/bs";
import { BsBasket3 } from "react-icons/bs";
import { IoMdChatboxes } from "react-icons/io";
import { IoAddCircleSharp } from "react-icons/io5";
import { VscFiles } from "react-icons/vsc";
import { FiSettings } from "react-icons/fi";
import sayli from "../Assets/sayli.jpg";
import {TheameContext} from "../Context/TheamContext"

const Navbar = () => {
  const {isDark} =useContext(TheameContext)

  return (
    <div className={isDark ? 'navbar navbar-dark' : 'navbar navbar-light'}>
   
    
      <div className='profilelogo'>
        <img 
        src=
        {sayli}
        alt="profile"
        />
      </div>
      <div className='navbaroptions'>
      <ImStatsBars2 size={20} style={{marginBottom:"25px"}}/>
         <BsSignpost size={20} style={{marginBottom:"25px"}} />
         <BsBasket3 size={20} style={{marginBottom:"25px"}}/>
         <IoMdChatboxes size={20} style={{marginBottom:"25px"}}/>
         <VscFiles size={20} style={{marginBottom:"25px"}}/>
         <FiSettings size={20} style={{marginBottom:"25px"}}/>
         <IoAddCircleSharp
            size={37}
            
            className="add"
         />
      </div>
    </div>
  )
}

export default Navbar
