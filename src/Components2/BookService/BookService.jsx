import React from 'react'
import css from "./BokService.module.css"
import Arrowleft from "../../assets/arrow-left.svg";

const BookService = () => {
  return (
    <div className={css.container}>
      <div className={css.cc1}> 

      <div className={css.div1}>
   <img src={Arrowleft} alt="" />
   <span>Book a service</span>
 </div>

 <div className={css.div2}>
    <span>Please check your information</span>
 </div>

 <div className={css.div3}>
    <form  className={css.forms} action="">
        <input className={css.serviceinput} type="text"  placeholder='Yourname'/>
        <input className={css.serviceinput} type="email"  placeholder='Email'/>
        <input className={css.serviceinput} type="text"  placeholder='Make and model'/>
    </form>
 </div>

      </div>

{/* middle */}
      <div>ur event points</div>

{/* middle */}

      <div className={css.cc2}>button </div>
    </div>
  )
}

export default BookService
