import React from 'react'
import css from "./Splash.module.css"
import Icon from "../../assets/splashicon.svg"

const Splash = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
        <img className={css.icon} src={Icon} alt="" />
        </div>
       
      
    </div>
  )
}

export default Splash
