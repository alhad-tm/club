import React from 'react'
import css from "./Registration.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Car from "../../assets2/carreg.svg"

const Registration = () => {
  return (
    <div className={css.container}>

<div className={css.div1}>
   <img src={Arrowleft} alt="" />
   <span>Registration</span>
 </div>

 <div className={css.div2}>
    <img src={Car} alt="" />
 </div>

 <div className={css.div3}>
    <form className={css.forms} action="">
        <h6>Please fill and check your information</h6>
        <input className={css.reginp} type="text" placeholder='Your name' />

    </form>
 </div>



      
    </div>
  )
}

export default Registration
