import React from 'react'
import css from "./BasicService.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Share from "../../assets2/share.svg";
import Img1 from "../../assets2/basicservice.png"
import B1 from "../../assets2/b1.svg"
import B2 from "../../assets2/b2.svg"
import B3 from "../../assets2/b3.svg"
import Hand from "../../assets2/pointerhand.svg"
import Car from "../../assets2/carblue.svg"
import Bluedot from "../../assets2/bluedot.svg"

const BasicService = () => {
  return (
    <div className={css.maincontainer}>
     <div className={css.container}>

        <div className={css.div1}>
            <div className={css.div1left}>
                <img src={Arrowleft} alt="" />
                <span>Basic Service</span>
            </div>


            <div className={css.div1right}>
                <img src={Share} alt="" />
            </div>
        </div>

        <div className={css.div2}>
            <img src={Img1} alt="" />
        </div>

        <div className={css.div3}>
            <div className={css.div3first}>
            <span>Services</span>
            </div>

            <div className={css.div3second}>
                <div className={css.box}>
                    <img src={B1} alt="" />
                    <span>5Hrs Taken</span>
                </div>
                <div className={css.box}>
                    <img src={B2} alt="" />
                    <span>500km warranty</span>
                </div>
                <div className={css.box}>
                    <img src={B3} alt="" />
                    <span>Recommended Every 1000Kms</span>
                </div>
            </div>
            
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
     <div className={css.div5}>
            <div className={css.div5left}>
                <span>What’s Included Services </span>

                <div className={css.set}>

                <span>Essential Services</span>
                <div className={css.lists}>
                    <img src={Bluedot} alt="" />
                    <span>Engine Oil Replacement</span>
                </div>
                <div className={css.lists}>
                    <img src={Bluedot} alt="" />
                    <span>Engine Oil Replacement</span>
                </div>
                <div className={css.lists}>
                    <img src={Bluedot} alt="" />
                    <span>Engine Oil Replacement</span>
                </div>


                </div>
               
               
            </div>

            <div className={css.div5right}>
                <img src={Car} alt="" />
            </div>
        </div>

    </div>
  )
}

export default BasicService
