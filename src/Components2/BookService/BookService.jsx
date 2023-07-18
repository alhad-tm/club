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

        <div className={css.que}>
          <div>  <span className={css.quespan}>You have account car club member </span></div>
          

           <div className={css.toggle}>
            <input className={css.check} type="checkbox" name="" id="" />
            <label className={css.yesbtn} htmlFor="">Yes</label>
            <label className={css.nobtn} htmlFor="">No</label>

           </div>
          </div>

          <input className={css.serviceinput} type="text"  placeholder='Member Id'/>
    </form>
 </div>

      </div>

{/* middle */}
      <div className={css.middle}>
        <div className={css.middleleft}>
            <span>Your Events Points</span>
        </div>
        <div className={css.middleright}>
            <span>450</span>
            <span>View Points registry</span>
        </div>
      </div>

{/* middle */}

      <div className={css.cc2}>
         <button className={css.nextbtn}> Next</button>
         </div>
    </div>
  )
}

export default BookService
