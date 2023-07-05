import React, { useState } from 'react'
import css from "./Signin.module.css"
import Eye from "../../assets/eye.svg" 
import { Link } from 'react-router-dom'

const Signin = () => {
   const [show,setShow]=useState(false)

   const handleShow=()=>{
      setShow(!show)
  }
  return (
    <div className={css.container}>
     <div className={css.div1}>
        <span>Welcome back</span>
        <span>Sign in to your account</span>
     </div>
     
 <div className={css.div2}>
    <form className={css.form1} action="">
        <input className={css.sinput} type="number"  placeholder='Phonenumber'/>
        <div className={css.s1}>
        <input className={css.sinput} type={show?"text":"password"} placeholder='Password' />
        <img  onClick={handleShow} className={css.eye} src={Eye} alt="" />
        </div>
       
      <Link to="/forgotpassword"><span className={css.fg}>Forgot password?</span> </Link>  
      <Link to="/home"> <button className={css.snbutton}>Sign In</button> </Link>  
    </form>
    <span className={css.desc}>By clicking on signin,I accept to the <span className={css.tc}>Privacy Policy</span> and <span className={css.tc}>Terms @ Conditions</span> </span>
   <span className={css.desc2}>Don’t have an account?<Link to="/signup"> <span className={css.sup}>Sign up</span></Link>  </span>  
 </div>
    
    </div>
  ) 
}

export default Signin
 