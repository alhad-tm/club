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

      </div>

{/* middle */}
      <div>ur event points</div>

{/* middle */}

      <div className={css.cc2}>button </div>
    </div>
  )
}

export default BookService
