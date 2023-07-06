import React, { useState } from 'react'
import css from "./ChangePassword.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Check from "../../assets/check.svg"
import Eye from "../../assets/eye.svg" 
import { Link } from 'react-router-dom';

const ChangePassword = () => {
  const [show,setShow]=useState(false)
  const [showed,setShowed]=useState(false)
  const [showing,setShowing]=useState(false)

  const handleShow=()=>{
     setShow(!show)
 }
  const handleShowed=()=>{
     setShowed(!showed)
 }
 const handleShowing=()=>{
  setShowing(!showing)
 }
  return (
    <div className={css.container}>
      <div className={css.div1}>
        <div className={css.div1left}>
        <Link to="/profile"> <img src={Arrowleft} alt="" /> </Link>
        <span>Change Password</span>
        </div>
        <div className={css.div1right}>
         <img src={Check} alt="" />
        </div>
         </div>

         <div className={css.div2}>
            <span>Your password must be atleast 6 characters and should include a combination of numbers and letters</span>
         </div>

         <div className={css.div3}>
            <form className={css.form1} action="">

                <label className={css.div3label} htmlFor="">Current password</label>
                <div className={css.s1}>
                <input className={css.sinput} type={show?"text":"password"}  />
        <img onClick={handleShow} className={css.eye} src={Eye} alt="" />
                </div>

        
                <label className={css.div3label} htmlFor="">New password</label>
                <div className={css.s1}>
                <input className={css.sinput} type={showed?"text":"password"}  />
        <img onClick={handleShowed} className={css.eye} src={Eye} alt="" />
                </div>


                <label className={css.div3label} htmlFor="">Confirm password</label>
                <div className={css.s1}>
                <input className={css.sinput} type={showing?"text":"password"}  />
        <img onClick={handleShowing} className={css.eye} src={Eye} alt="" />
                </div>

             <span className={css.fp}>Forgot password?</span>


            </form>
         </div>
    </div>
  )  
}

export default ChangePassword
