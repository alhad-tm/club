import React from 'react'
import css from "./Mileage.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Car from "../../assets2/mileage car.png"
import Hand from "../../assets2/pointerhand.svg"

const Mileage = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}>
        <img src={Arrowleft} alt="" />
          <span>Mileage Increase</span>
        </div>

        <div className={css.div2}>
            <img src={Car} alt="" />
        </div>

        <div className={css.div3}>
            <div className={css.circle}></div>
            <div className={css.box}></div>
            <div className={css.box}></div>
            {/* <div className={css.box}></div>
            <div className={css.box}></div> */}
        </div>

        <div className={css.div4}>
            <div className={css.div4first}>
                <span>Features</span>
            </div>

            <div className={css.div4second}> 
            <div className={css.head}>
            <img src={Hand} alt="" />
            <span>Ex. Basic Service</span>
                
                 </div>
          
            <div className={css.brief}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span> 
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span> 
                </div>
            
            </div>
            <div className={css.div4second}> 
            <div className={css.head}>
            <img src={Hand} alt="" />
            <span>Ex. Good Service Experience </span>
                
                 </div>
          
            <div className={css.brief}>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span> 
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore </span> 
                </div>
            
            </div>

        </div>




      
    </div>
  )
}

export default Mileage
