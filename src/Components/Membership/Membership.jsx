import React from 'react'
import css from "./Membership.module.css"
import Rectangle from "../../assets/rectangle.svg"
import Arrowleft from "../../assets/arrow-left.svg"; 
import X from "../../assets/x.svg"

const Membership = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}> 
        <div className={css.div1left}>
            <img src={Arrowleft} alt="" />
        <span>Membership</span>
        </div>
        
        <img src={X} alt="" />
        </div>

        <div className={css.div2}></div>

        <div className={css.div3}>
            <span>Benefits of this plan</span>

           <ul className={css.ul}>
            <div className={css.line}> 
                <img src={Rectangle} alt="" />
                <li>This event is  based on</li>
            </div>
            <div className={css.line}> 
                <img src={Rectangle} alt="" />
                <li>This event is  based on</li>
            </div>
            <div className={css.line}> 
                <img src={Rectangle} alt="" />
                <li>This event is based on</li>
            </div>
            <div className={css.line}> 
                <img src={Rectangle} alt="" />
                <li>This event is based on</li>
            </div>
            <div className={css.line}> 
                <img src={Rectangle} alt="" />
                <li>This event is  based on</li>
            </div>
           </ul>


             </div>

             <div className={css.div4}>
                <button className={css.planbutton}>GET PLAN</button>
             </div>
      
    </div>
  )
}

export default Membership
