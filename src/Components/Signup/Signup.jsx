
import React, { useState } from 'react'
import css from "./Signup.module.css"
import Eye from "../../assets/eye.svg"
import { Link } from 'react-router-dom'

const Signup = () => {
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
      <div className={css.div1}>
      <span>Welcome to club</span>
      <span> Start your engines and join the car enthusiast community</span>
      </div>

      <div className={css.div2}>
        <form className={css.form1} action="">
          <input className={css.sinput} type="text" placeholder='Username' />
          <input className={css.sinput} type="number" placeholder='Phone Number' />
          <div className={css.s1}>
        <input className={css.sinput}  type={show?"text":"password"}   placeholder='New Password'/>
        <img onClick={handleShow} className={css.eye} src={Eye} alt="" />
        </div>
       
       <div className={css.s1}>
       <input className={css.sinput} type={showed?"text":"password"}  placeholder='Confirm Password'/>
        <img onClick={handleShowed} className={css.eye2} src={Eye} alt="" />
       
       </div>
     <Link to="/otptwo"> <button className={css.signupbutton}>Signup</button> </Link>  
        </form>
      </div>

      <div className={css.div3}>
        <span>Already have an account? <Link to="/signin">  <span className={css.spaninside}>Signin</span> </Link></span>
      </div>
      
      
    </div>
  )
}

export default Signup
