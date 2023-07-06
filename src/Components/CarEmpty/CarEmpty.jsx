import React from 'react'
import css from "./CarEmpty.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Plus from "../../assets/plus.svg"
import Car from "../../assets/CarEmpty.svg"
import { Link } from 'react-router-dom';

const CarEmpty = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
        <div className={css.div1left}>
        <Link to="/profile"> <img src={Arrowleft} alt="" /> </Link>
        <span>Car Details</span>
        </div>
        <div className={css.div1right}>
         <img className={css.plus} src={Plus} alt="" />
        </div>
         </div>

         <div className={css.div2}>
            <img className={css.car} src={Car} alt="" />
            <span>You havent added your car details yet</span>
            <button className={css.addcarbutton}>Add car details</button>
         </div>

      
     
    </div>
  )
}

export default CarEmpty
