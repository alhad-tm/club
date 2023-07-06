import React, { useEffect, useState } from "react";
import css from "./Onboarding.module.css";
import Mob from "../../assets/mob.svg";
import Arrowright from "../../assets/arrow-right.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// import swiper styles

import "swiper/css";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import Splash from "../Splash/Splash";

const Onboarding = () => {
  const [loading,setLoading] =useState(false)

 useEffect(()=>{
  setLoading(true);
  setTimeout(()=>{
    setLoading(false);
  },4000)
 },[])

  return (
    <div>
   
  {loading ? (<Splash/>) : ( <div className={css.container}>
     <div className={css.div1}>
        <img className={css.mob} src={Mob} alt="" />
      </div>  

      <div className={css.div2}>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={true}
          loopFillGroupWithBlank={true}
          slidesPerView={1}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerGroup={1}
          loop={true}
        >
          <SwiperSlide>
            <div className={css.slide}>
              <span>some heading content here</span>
              <span>Some description content here</span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={css.slide}>
              <span>Second content</span>
              <span>Second description content here</span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={css.slide}>
              <span>Third heading content here </span>
              <span>Third description content here </span>
            </div>
          </SwiperSlide>
        </Swiper>
        <Link to="/signin">
          {" "}
          <div className={css.getstartedbutton}>
            <span>Get Started</span>
            <img src={Arrowright} alt="" />
          </div>{" "}
        </Link>
      </div>  
    </div> )}
    </div>
  );
};

export default Onboarding;
