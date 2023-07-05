import React from 'react'
import css from "./CarDetailsEdit.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Carbg from "../../assets/cardetailsbg.svg"
import Pen from "../../assets/Pensquarewhite.svg"
import Pencil from "../../assets/pencil.svg"

const CarDetailsEdit = () => {
  return (
    <div className={css.container}>
    <div className={css.div1}>
   <img src={Arrowleft} alt="" />
   <span>Profile</span>
 </div>

 <div className={css.div2}>
   <img className={css.carbg} src={Carbg} alt="" />
   <img  className={css.pen} src={Pen} alt="" />
 </div>


 <div className={css.div3}>
   <div className={css.line}> 
       <span>Registration no</span>
       <span>KL 01 C 7106</span>       
   </div>
   
   <hr />
   <div className={css.line}> 
       <span>Make</span>
       <span>Lamborghini</span>       
   </div>
   
   <hr />
   <div className={css.line}> 
       <span>Model</span>
       <span>Gallardo</span>       
   </div>
   
   <hr />
   <div className={css.line}> 
   <div><span>Color</span></div>
   <div className={css.colorchange}> <span>Black</span>   
       <img className={css.pencil} src={Pencil} alt="" />   </div>
       
       
   </div>
   
   <hr />
   
   <div className={css.line}> 
       <span>Power</span>
       <span>550bhp@8000rpm</span>       
   </div>
   
   <hr />
   <div className={css.line}> 
       <span>Torque</span>
       <span>540nm@6500rpm</span>       
   </div>
   
 

 </div>
 
</div>
  )
}

export default CarDetailsEdit
