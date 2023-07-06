import React, { useState } from 'react'
import css from "./CarDetailsEdit.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Carbg from "../../assets/cardetailsbg.svg"
import Pen from "../../assets/Pensquarewhite.svg"
import Pencil from "../../assets/pencil.svg"
import Dots from "../../assets/3dots.svg"
import Sharec from "../../assets/sharecircle.svg"
import Qrc from "../../assets/qrcircle.svg"
import Deletec from "../../assets/deletecircle.svg"

const CarDetailsEdit = () => {
  const [state,setState]=useState(false)
  return (
    <div className={css.container}>

    
    <div className={css.div1}>
          <div className={css.div1left}>
          <img src={Arrowleft} alt="" />
        <span>Car details</span>
            </div> 

          <div className={css.div1right}>
            <img onClick={()=>setState(!state)} src={Dots} alt="" />

          </div>
       
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

 {state && 
 <div className={css.popdown}>
 <img src={Sharec} alt="" />
 <img src={Qrc} alt="" />
 <img src={Deletec} alt="" />
</div>
 }



 
</div>
  )
}

export default CarDetailsEdit
