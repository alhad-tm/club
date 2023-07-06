import React from 'react'
import css from "./Cardetailsmain.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Plus from "../../assets/blueplus.svg"
import Dots from "../../assets/3dots.svg"
import Carbg from "../../assets/cardetailsbg.svg"
import { Link } from 'react-router-dom';

const Cardetailsmain = () => {
  return (
    <div className={css.container}>
         <div className={css.div1}>
          <div className={css.div1left}>
          <img src={Arrowleft} alt="" />
        <span>Car details</span>
            </div> 

          <div className={css.div1right}>
            <img src={Plus} alt="" />

          </div>
       
      </div>
      
<Link to="/cardetailsedit">  <div className={css.wrapper}> 
      <div className={css.div2}>
   <img className={css.carbg} src={Carbg} alt="" />
   <img  className={css.dot} src={Dots} alt="" />
 </div>

 <div className={css.div3}> 
       <span>KL 01 C 7106</span>
       <span>Lamborghini</span>       
   </div>
   </div>   </Link>

    </div>
  )
}

export default Cardetailsmain
