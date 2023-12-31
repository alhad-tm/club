import React from 'react'
import css from "./Membership.module.css"
import Rectangle from "../../assets/rectangle.svg"
import Arrowleft from "../../assets/arrow-left.svg"; 
import X from "../../assets/x.svg"
import { Link } from 'react-router-dom';

const Membership = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}> 
        <div className={css.div1left}>
        <Link to="/addcar">  <img src={Arrowleft} alt="" /> </Link>   
        <span>Membership</span>
        </div>
        
      <Link to ="/interest"><img src={X} alt="" /></Link>   
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
