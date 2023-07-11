import React from 'react'
import css from "./PaymentValidation.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Card from "../../assets2/creditcard.svg"

const PaymentValidation = () => {
  return (
    <div className={css.container}>
       <div className={css.div1}>
   <img src={Arrowleft} alt="" />
   <span>Ticket Payment</span>
 </div>
 
 <div className={css.div2}>
    <img className={css.card} src={Card} alt="" />
 </div>

 <div className={css.div3}>
    <div className={css.s1}>
        <input type="checkbox" name="" id="" />
        <span>Debit card</span>
    </div>
    <div className={css.s1}>
        <input type="checkbox" name="" id="" />
        <span>Credit card</span>
    </div>
    <div className={css.s1}>
        <input type="checkbox" name="" id="" />
        <span>G apy</span>
    </div>
 </div>

 <div className={css.div4}>
    <form className={css.form} action="">
        <div className={css.s2}>
        <label htmlFor="">Card number</label>
    <input className={css.sinput} type="text" />
    <span>Field required</span>
        </div>
        <div className={css.s2}>
        <label htmlFor="">Card holder</label>
    <input className={css.sinput} type="text" />
    <span>Field required</span>
        </div>

        <div className={css.s3}>
        <div className={css.s2}>
        <label htmlFor="">Expiry Date</label>
    <input className={css.smallinput} type="text" />
    <span>Field required</span>
        </div>
        <div className={css.s2}>
        <label htmlFor="">CVC</label>
    <input className={css.smallinput} type="text" />
    <span>Field required</span>
        </div>

        </div>

        <button className={css.paynowbutton}>Paynow</button>
    
    </form>
   
 </div>



    </div>
  )
}

export default PaymentValidation
