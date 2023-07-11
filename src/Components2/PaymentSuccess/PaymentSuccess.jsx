import React from 'react'
import css from "./PaymentSuccess.module.css"
import BlueTick from "../../assets2/tick-circle.svg"
import D1 from "../../assets2/dwldblue.svg"
import D2 from "../../assets2/backtoblue.svg"

const PaymentSuccess = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
        <img src={BlueTick} alt="" />
        <span>Thank you!</span>
        <span>Your payment has been successfully done.</span>
      </div>

      <div className={css.div2}>
        <div className={css.btndiv}>
            <img src={D1} alt="" />
            <span>View E- Ticket </span>
        </div>
        <div className={css.btndiv}>
            <img src={D2} alt="" />
            <span>Back to home </span>
        </div>
      </div>

      <div className={css.div3}>
        <span>Having Issue? <span>Contact Us</span></span>
      </div>
    </div>
  )
}

export default PaymentSuccess
