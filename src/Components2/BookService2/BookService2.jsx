import React from 'react'
import css from "./BookService2.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import DownArrow from "../../assets2/downarrow.svg";
import DownArrowB from "../../assets2/blackdownarrow.svg";
import Bluetick from "../../assets2/bluetick.svg";

const BookService2 = () => {
  return (
    <div className={css.container}>
     
     <div className={css.cc1}> 

     <div className={css.div1}>
   <img src={Arrowleft} alt="" />
   <span>Book a service</span>
 </div>

 <div className={css.div2}>
    <div className={css.d2}> <span className={css.s1}>Booking Id <span className={css.s2}>5036</span></span></div>

 </div>

 <div className={css.div3}>
    <span>Service Type</span>
    <span>CarService</span>
 </div>
  <hr />
 <div className={css.div3}>
    <span>Make and Model</span>
    <span>CarService</span>
 </div>
  <hr />

  <div  className={css.div4}>
    <span>Select date</span>
    <div className={css.div4right}> 
        <span>July 2023</span>
        <img src={DownArrow} alt="" />
    </div>
  </div>

  <div className={css.div5}>
    <div className={css.box}>
        <span>S</span>
        <span>20</span>
    </div>
    <div className={css.box}>
        <span>M</span>
        <span>21</span>
    </div>
    <div style={{background:"#0566CE"}} className={css.box}>
        <span>T</span>
        <span>22</span>
    </div>
    <div  className={css.box}>
        <span>W</span>
        <span>23</span>
    </div>
    <div className={css.box}>
        <span>T</span>
        <span>24</span>
    </div>
    <div className={css.box}>
        <span>F</span>
        <span>25</span>
    </div>
    <div className={css.box}>
        <span>S</span>
        <span>26</span>
    </div>
  </div>

<div className={css.div6}>
    <span>select session time</span>
    <div className={css.div6right}>
        <div className={css.r1}>
        <span>10:00 </span>
        <img src={DownArrowB} alt="" />
        </div>
       
        <div className={css.r2}> <span className={css.sp1}>AM</span>  <span className={css.sp2}>PM</span>
        </div>
    </div>
</div>

</div>

<div className={css.cc2}>
   
   <div className={css.div7}>
    <span>Service Payment</span>
    <span>2000</span>
   </div>
{/* section */}
   <div className={css.div8}>
    <div className={css.div8left}>
        <img src={Bluetick} alt="" />
        <span>Event Points 450</span>
    </div>
    <div className={css.div8right}>
        <span>2000</span>
    </div>
   
   </div>
   <hr />
   <span className={css.sp3}>If enable checkbox (Service Payment-Event Points)</span>
   {/* section */}

   <div className={css.div8}>
    <div className={css.div8left}>
       
        <span>GST</span>
    </div>
    <div className={css.div8right}>
        <span>30</span>
    </div>
   
   </div>
   <hr />
   <span className={css.sp3}>GST(10%)</span>
   <div className={css.div8}>
    <div className={css.div8left}>
       
        <span>Total</span>
    </div>
    <div className={css.div8right}>
        <span>30.00</span>
    </div>
   
   </div>
   <hr />
   <span className={css.sp3}>Base 2000 - Event Point 450 +GST 10% </span>

<div className={css.buttons}>
    <button className={css.pynwbtn}>Pay Now</button>
    <button className={css.pltrbtn}>Pay Service Later</button>
</div>


</div>


    </div>
  )
}

export default BookService2
