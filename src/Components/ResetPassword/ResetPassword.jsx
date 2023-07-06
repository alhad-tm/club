import React, { useState } from 'react'
import css from "./ResetPasswors.module.css"
import Eye from "../../assets/eye.svg" 
import Arrowleft from "../../assets/arrow-left.svg"; 
import { Link } from 'react-router-dom';

const ResetPassword = () => {
  const [show,setShow]=useState(false)
  const [showed,setShowed]=useState(false)

  const handleShow=()=>{
     setShow(!show)
 }
  const handleShowed=()=>{
     setShowed(!showed)
 }
  return (
    <div className={css.container}>

      <div className={css.newdiv1}>
      <Link to="/otp"> <img src={Arrowleft} alt="" /> </Link> 
      </div>

      <div className={css.divwrap}>
     <div className={css.div1}>
        <span>Reset password</span>
     </div>
     <div className={css.div2}>
     <form className={css.form1} action="">
        <div className={css.s1}>
        <input className={css.sinput} type={show?"text":"password"}  placeholder='New Password'/>
        <img onClick={handleShow} className={css.eye} src={Eye} alt="" />
        </div>
       
       <div className={css.s1}>  
       <input className={css.sinput} type={showed?"text":"password"} placeholder='Confirm Password'/>
        <img onClick={handleShowed} className={css.eye2} src={Eye} alt="" />
       
       </div>
       
      
       <Link to="/home"> <button className={css.resetbutton}>Reset & Signin</button> </Link> 
    </form> 
     </div>
     </div>

    </div>
  )
}

export default ResetPassword
 