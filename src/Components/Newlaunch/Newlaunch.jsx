import React from 'react'
import css from "./Newlaunch.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Launchbg from "../../assets/launchbg.svg"
import { Link } from 'react-router-dom';

const Newlaunch = () => {
  return (
    <div className={css.container}>
       <div className={css.div1}>
       
    <img className={css.lbg} src={Launchbg} alt="" /> 
      
    <Link to="/home">  <img className={css.arrowleft} src={Arrowleft} alt="" /> </Link>   
      
      </div>

      <div className={css.div2}>
        <span>New branch Launch</span>
        <span>30/06/2023</span>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi voluptate suscipit at deserunt qui recusandae consequatur eligendi ea quia quisquam vitae saepe distinctio nemo dolorem debitis voluptates, quis nulla minima ipsam odit natus possimus. Dolorem.
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium vero sed non expedita, modi cumque sit voluptas voluptatem eligendi delectus amet similique ex aut fuga repellat suscipit quasi cupiditate! </span>
      </div>

      
    </div>
  )
}

export default Newlaunch
 