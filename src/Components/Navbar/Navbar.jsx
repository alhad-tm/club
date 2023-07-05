import React from 'react'
import css from "./Navbar.module.css"
import Home from "../../assets/navhome.svg"
import Services from "../../assets/navservices.svg"
import Calender from "../../assets/navcalender.svg"
import Profile from "../../assets/navuser.svg"

const Navbar = () => {
  return (
    <div className={css.container}>
        <div className={css.navlist}>
            <img src={Home} alt="" />
            <img src={Services} alt="" />
            <img src={Calender} alt="" />
            <img src={Profile} alt="" />

        </div>
       
      
    </div>
  )
}

export default Navbar
