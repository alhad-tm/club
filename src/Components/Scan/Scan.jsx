import React from 'react'
import css from "./Scan.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Exclude from "../../assets/Exclude.svg"
import { Link } from 'react-router-dom';

const Scan = () => {
  return (
    <div className={css.container}>
         <div className={css.div1}>
        <div className={css.div1left}>
      <Link to="/home"> <img className={css.arrowleft} src={Arrowleft} alt="" /> </Link>  
        <span>Scan QR</span>
        </div>
         </div>

         <div className={css.div2}>
            <img className={css.exclude} src={Exclude} alt="" />
            <button className={css.uploadbutton}>Upload from  gallery</button>
          <Link to ="/carlist"> <button className={css.uploadbutton}>After scanning</button> </Link>  
         </div>
      
    </div>
  )
}

export default Scan
