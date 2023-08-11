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
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Profile1 from "../../assets2/profile.svg"
import StarY from "../../assets2/staryellow.svg";
import Star from "../../assets2/startransparent.svg";
import Rs from "../../assets2/rupee.svg"

import "swiper/css";
import "swiper/css/pagination"

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

                <span className={css.head}>Essential Services</span>
                <div className={css.lists}>
                    <img src={Bluedot} alt="" />
                    <span>Engine Oil Replacement</span>
                </div>
                <div className={css.lists}>
                    <img src={Bluedot} alt="" />
                    <span>Air Filter Cleaning</span>
                </div>
                <div className={css.lists}>
                    <img src={Bluedot} alt="" />
                    <span>Oil Filter Replacement</span>
                </div>


                </div>
                <div className={css.set}>

                <span className={css.head}>Performance Services</span>
                <div className={css.lists}>
                    <img src={Bluedot} alt="" />
                    <span>Tyre Control Checking</span>
                </div>
                </div>

                <div className={css.set}>

<span className={css.head}>Additional Service s</span>
<div className={css.lists}>
    <img src={Bluedot} alt="" />
    <span>Water Wash</span>
</div>
<div className={css.lists}>
    <img src={Bluedot} alt="" />
    <span>Battery Water Reploaded </span>
</div>
<div className={css.lists}>
    <img src={Bluedot} alt="" />
    <span>Interior Vacuum</span>
</div>


</div>
               
               
            </div>

            <div className={css.div5right}>
                <img src={Car} alt="" />
            </div>
        </div>

        <div className={css.div6}>
            <span>Claim this services <span className={css.spaninside}>Free with Warranty </span> </span>
            <div className={css.numb}>1000</div>
            <span> Services Covered</span>
        </div>


<div className={css.container2}>
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

export default BasicService
