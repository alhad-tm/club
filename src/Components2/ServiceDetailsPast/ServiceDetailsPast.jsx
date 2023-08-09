import React from 'react'
import css from "./ServicedetailsPast.module.css"
import Car from "../../assets2/imagecar.png"
import Arrowleft from "../../assets/arrow-left.svg";

const ServiceDetailsPast = () => {
  return (
    <div className={css.container}>

<div className={css.div1}>
          <img src={Arrowleft} alt="" />
          <span>Service details</span>
        </div>

        <div className={css.div2}>
            <img src={Car} alt="" />
        </div>

      <div className={css.div3}>


    

        <div className={css.details}>
            <div className={css.left}>
                <span>Service Type </span>
            </div>
            <div className={css.middle}>
                <span>:</span>
            </div>
            <div className={css.right}>
                <span>Mileage increase</span>
            </div>
           
        </div>
        <div className={css.details}>
            <div className={css.left}>
                <span>Booking Date</span>
            </div>
            <div className={css.middle}>
                <span>:</span>
            </div>
            <div className={css.right}>
                <span>10-06-2023</span>
            </div>
           
        </div>
        <div className={css.details}>
            <div className={css.left}>
                <span>Booking Time</span>
            </div>
            <div className={css.middle}>
                <span>:</span>
            </div>
            <div className={css.right}>
                <span>10:00 AM</span>
            </div>
           
        </div>
        <div className={css.details}>
            <div className={css.left}>
                <span>Make And Model</span>
            </div>
            <div className={css.middle}>
                <span>:</span>
            </div>
            <div className={css.right}>
                <span>Hyundai i20</span>
            </div>
           
        </div>
        <div className={css.details}>
            <div className={css.left}>
                <span>Payment Status</span>
            </div>
            <div className={css.middle}>
                <span>:</span>
            </div>
            <div className={css.right}>
                <span>Paid Online</span>
            </div>
           
        </div>
        <div className={css.details}>
            <div className={css.left}>
                <span>Delivery Status</span>
            </div>
            <div className={css.middle}>
                <span>:</span>
            </div>
            <div className={css.right}>
                <span>Yes</span>
            </div>
           
        </div>
        <div className={css.details}>
            <div className={css.left}>
                <span>Service Delivery</span>
            </div>
            <div className={css.middle}>
                <span>:</span>
            </div>
            <div className={css.right}>
                <span>dd/mm/yy</span>
            </div>
           
        </div>

        </div>

        <div className={css.div4}>
            <button className={css.track}>Close</button>
        </div>
      
    </div>
  )
}

export default ServiceDetailsPast
