import React from 'react'
import css from "./ForgotPassword.module.css"
import Arrowleft from "../../assets/arrow-left.svg"; 

const ForgotPassword = () => {
  return (
    <div className={css.container}>
      <div className={css.newdiv1}>
        <img src={Arrowleft} alt="" />
      </div>
      <div className={css.divwrap}> 
      <div className={css.div1}>
        <span>Forgot password</span>
        <span>Enter you registered phone number to which reset password OTP should be sent</span>
     </div>
     <div className={css.div2}>
     <form className={css.form1} action="">
        <input className={css.sinput} type="number"  placeholder='Phone number'/>
       
      
        <button className={css.fgbutton}>Forgot Password</button>
    </form>
     </div>
      </div>
    
    </div>
  )
}

export default ForgotPassword
 