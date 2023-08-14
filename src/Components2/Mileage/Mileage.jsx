import React from 'react'
import css from "./Mileage.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import Car from "../../assets2/mileage car.png"
import Hand from "../../assets2/pointerhand.svg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Profile1 from "../../assets2/profile.svg"
import StarY from "../../assets2/staryellow.svg";
import Star from "../../assets2/startransparent.svg";
import Rs from "../../assets2/rupee.svg"


import "swiper/css";
import "swiper/css/pagination"



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



        
<div className={css.div5}>
    <span>Customer Car Services Review</span>

    <Swiper className={css.swiperwrap}
        modules={[Pagination]}
        //  pagination={true}
         pagination={{ clickable: true }}
         loopFillGroupWithBlank={true}
         slidesPerView={1}
         spaceBetween={0}
         slidesPerGroup={1}
         loop={true}
    >
        <SwiperSlide>
            <div className={css.slidebox}>
                <div className={css.sdiv1}>
                    <div className={css.sdiv1left}> <img src={Profile1} alt="" /></div>
                    <div className={css.sdiv1right}>
                    Ramesh (156890)
                    <div className={css.stars}>
                        <img src={StarY} alt="" />
                        <img src={StarY} alt="" />
                        <img src={StarY} alt="" />
                        <img src={Star} alt="" />
                    </div>
                    </div>
                </div>

                <div className={css.sdiv2}>
                    <span>
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
                     nihil molestiae consequatu
                    </span>
                </div>
               
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={css.slidebox}>2</div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={css.slidebox}>3</div>
        </SwiperSlide>


    </Swiper>


    <div className={css.div7}>
        <span>Basic Service Payment</span>
       <div className={css.rs}>
        <img src={Rs} alt="" />
        <span>3210.00</span>
       </div>
    </div>


        <button className={css.bookbutton}>Book Your Service</button>
 

</div>





      
    </div>
  )
}

export default Mileage
