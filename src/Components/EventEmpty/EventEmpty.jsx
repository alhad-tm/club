import React from 'react'
import css from "./EventEmpty.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Plus from "../../assets/plus.svg"
import Event from "../../assets/EventEmpty.svg"
import { Link } from 'react-router-dom';

const EventEmpty = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
        <div className={css.div1left}>
        <Link to="/profile"> <img src={Arrowleft} alt="" /> </Link>
        <span>My Events</span>
        </div>
        <div className={css.div1right}>
         <img className={css.plus} src={Plus} alt="" />
        </div>
         </div>

         <div className={css.div2}>
            <img className={css.car} src={Event} alt="" />
            <span>You haven't  registered to any event yet</span>
            <button className={css.eventbutton}>Add car details</button>
         </div>

      
     
    </div>
  )
}

export default EventEmpty
