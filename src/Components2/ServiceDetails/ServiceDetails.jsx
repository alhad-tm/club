import React from 'react'
import css from "./Servicedetails.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Img from "../../assets2/mechanic.png"
const ServiceDetails = () => {
  return (
    <div className={css.container}>

<div className={css.div1}>
          <img src={Arrowleft} alt="" />
          <span>Service details</span>
        </div>

        <div className={css.div2}>
            <img src={Img} alt="" />
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
                <span>MakeAnd Model</span>
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
                <span>Nil</span>
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
                <span>No</span>
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
                <span>-</span>
            </div>
           
        </div>

        </div>

        <div className={css.div4}>
            <button className={css.track}>Track Service Order</button>
        </div>
      
    </div>
  )
}

export default ServiceDetails
