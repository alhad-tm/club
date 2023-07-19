import React from 'react'
import css from "./Services.module.css"
import Bell from "../../assets/notificationlogo.svg"
import Gps from "../../assets2/gps.svg"
import Mileage from "../../assets2/mileage.svg"
import AC from "../../assets2/ac.svg"
import Wheels from "../../assets2/wheels.svg"
import Down from "../../assets2/downarrow.svg"
import Ps from "../../assets2/periodicservice.svg"

const Services = () => {
  return (
    <div  className={css.container}>
      
      <div className={css.div1}>
        <span>Services</span>
        <img src={Bell} alt="" />
      </div>

      <div className={css.div2}>
        <img src={Gps} alt="" />
        <span>Coimbatore</span> 
      </div>
      <hr />

     


<div className={css.div3}>
<span className={css.sp1}> Car service all Category</span>
</div>


<div className={css.div4}>

    <div className={css.box}>
        <img src={Mileage} alt="" />
        <span>Mileage Increase</span>
    </div>
    <div className={css.box}>
        <img src={AC} alt="" />
        <span>AC Service</span>
    </div>
    <div className={css.box}>
        <img src={Wheels} alt="" />
        <span>Tyres and Wheel Care</span>
    </div>

</div>
<div className={css.div4}>

    <div className={css.box}>
        <img src={Mileage} alt="" />
        <span>Mileage Increase</span>
    </div>
    <div className={css.box}>
        <img src={AC} alt="" />
        <span>AC Service</span>
    </div>
    <div className={css.box}>
        <img src={Wheels} alt="" />
        <span>Tyres and Wheel Care</span>
    </div>

</div>
<div className={css.div4}>

    <div className={css.box}>
        <img src={Mileage} alt="" />
        <span>Mileage Increase</span>
    </div>
    <div className={css.box}>
        <img src={AC} alt="" />
        <span>AC Service</span>
    </div>
    <div className={css.box}>
        <img src={Wheels} alt="" />
        <span>Tyres and Wheel Care</span>
    </div>

</div>


<div className={css.div5}>
    <img src={Down} alt="" />
</div>


<div className={css.div6}>
    <img src={Ps} alt="" />
    <span>Periodic maintanance service</span>

</div>

<div className={css.div7}>
    <span>Trending services</span>
</div>





    </div>
  )
}

export default Services
