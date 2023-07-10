import React from 'react'
import css from "./Ticketpayment.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Profile from "../../assets/Profile.svg"
import Hr from "../../assets2/Line 11.svg"

const TicketPayment = () => {
  return (
    <div className={css.container}>
     
     <div className={css.div1}>
   <img src={Arrowleft} alt="" />
   <span>Ticket Payment</span>
 </div>

  <div className={css.div2}>
    <img className={css.profile} src={Profile} alt="" />
    <span>First name</span>
   
  </div>

  <div className={css.div3}>
  <span className={css.d1}>Please see the ticket payment details below </span>
  </div>
 

  <div className={css.div4}>
    <div className={css.s1}>
        <div className={css.s1top}>
        <span>Event Ticket</span>
        <span>250</span>
        </div>
        <div className={css.s1bottom}>
        <img className={css.hrr} src={Hr} alt="" />
        </div>  
    </div>
    <div className={css.s1}>
        <div className={css.s1top}>
        <span>Tax</span>
        <span>5</span>
        </div>
        <div className={css.s1bottom}>
        <img className={css.hrr} src={Hr} alt="" />
        </div>  
    </div>
    <div className={css.s1}>
        <div className={css.s1top}>
        <span>Others</span>
        <span>0</span>
        </div>
        <div className={css.s1bottom}>
        <img className={css.hrr} src={Hr} alt="" />
        </div>  
    </div>
    <div className={css.s1last}>
        <div className={css.s1top}>
        <span></span>
        <span></span>
        </div>
        <div className={css.s1bottom}>
        <img className={css.hrr} src={Hr} alt="" />
        </div>  
    </div>
    
    
  </div>

  <div className={css.div5}>
    <span>TOTAL</span>
    <span>Rs 255.00</span>
  </div>

  <div className={css.div6}>
    <input type="checkbox" name="" id="" />
    <span>I agree to the Terms & Conditions</span>
  </div>



  <div className={css.div6}>
    <button className={css.payment}>Payment Process</button>
  </div>



     
    </div>
  )
}

export default TicketPayment
