import React from 'react'
import css from "./MyServices.module.css"
import Arrowleft from "../../assets/arrow-left.svg";
import StarY from "../../assets2/staryellow.svg"
import Star from "../../assets2/startransparent.svg"
import Like from "../../assets2/like.svg"
import Close from "../../assets2/close.svg"


const MyServices = () => {
  return (
    <div className={css.container}>
        <div className={css.div1}> 
        <img src={Arrowleft} alt="" />
   <span>My Service</span>
        </div>

        <div className={css.div2}>

      

        <div className={css.wrap}>
            <div className={css.w1}>
                <span>dd/mm/yy</span>
                
                 </div>


            <div className={css.w2}>
                <span>Mileage increase</span>
                 </div>


            <div className={css.w3}>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi aliquam, cumque est ipsa ut fugit numquam dolore vel nesciunt, laborum velit repellat, 
                    quam architecto corporis deserunt! Nobis saepe sapiente dolorem!</span> </div>


            <div className={css.w4}> 
            <div className={css.w41}>
                <span>20 Days ago</span>
            </div>
            <div className={css.w42}>
                <img src={StarY} alt="" />
                <img src={StarY} alt="" />
                <img src={StarY} alt="" />
                <img src={Star} alt="" />
                
            </div>
            <div className={css.w43}>
                <button className={css.viewmorebtn}>View more</button>
            </div>

            <div className={css.w44}>
                <img src={Like} alt="" />
                <span>Feedback</span>
            </div>
            </div>
        </div>

        </div>


        <form className={css.modal}>
        
            <div className={css.m1}>
                <span>Rate your experiece</span>
                {/* <img src={Close} alt="" /> */}
                 X
            </div>

            <div className={css.m2}>
                <img src={StarY} alt="" />
                <img src={StarY} alt="" />
                <img src={StarY} alt="" />
                <img src={StarY} alt="" />
            </div>

            <div className={css.m3}>
                <span>How was your experience with our Services</span>
            </div>

            <div className={css.m4}>
<div className={css.set}>
               <div className={css.svgwrap}>
               <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 34162">
<path id="Vector" d="M15 0C6.729 0 0 6.729 0 15C0 23.271 6.729 30 15 30C23.271 30 30 23.271 30 15C30 6.729 23.271 0 15 0ZM15 27C8.3835 27 3 21.6165 3 15C3 8.3835 8.3835 3 15 3C21.6165 3 27 8.3835 27 15C27 21.6165 21.6165 27 15 27Z" fill="#D9D9D9"/>
<path id="Vector_2" d="M9.75 13.5C10.9926 13.5 12 12.4926 12 11.25C12 10.0074 10.9926 9 9.75 9C8.50736 9 7.5 10.0074 7.5 11.25C7.5 12.4926 8.50736 13.5 9.75 13.5Z" fill="#D9D9D9"/>
<path id="Vector_3" d="M20.2395 13.479C21.4763 13.479 22.479 12.4763 22.479 11.2395C22.479 10.0027 21.4763 9 20.2395 9C19.0027 9 18 10.0027 18 11.2395C18 12.4763 19.0027 13.479 20.2395 13.479Z" fill="#D9D9D9"/>
<path id="Vector_4" d="M15 24C22.5 24 24 16.5 24 16.5H6C6 16.5 7.5 24 15 24Z" fill="#D9D9D9"/>
</g>
</svg>


               </div>
               <div className={css.happy}>
               <span>happy</span>
               </div>
            
              
               </div>
              
               <div className={css.svgwrap}>
               <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 34163">
<path id="Vector" d="M10.7141 12.857C11.8976 12.857 12.857 11.8976 12.857 10.7141C12.857 9.53068 11.8976 8.57129 10.7141 8.57129C9.53068 8.57129 8.57129 9.53068 8.57129 10.7141C8.57129 11.8976 9.53068 12.857 10.7141 12.857Z" fill="black"/>
<path id="Vector_2" d="M19.2854 12.857C20.4689 12.857 21.4283 11.8976 21.4283 10.7141C21.4283 9.53068 20.4689 8.57129 19.2854 8.57129C18.102 8.57129 17.1426 9.53068 17.1426 10.7141C17.1426 11.8976 18.102 12.857 19.2854 12.857Z" fill="black"/>
<path id="Vector_3" d="M15 30C6.72857 30 0 23.2714 0 15C0 6.72857 6.72857 0 15 0C23.2714 0 30 6.72857 30 15C30 23.2714 23.2714 30 15 30ZM15 2.14286C7.90714 2.14286 2.14286 7.90714 2.14286 15C2.14286 22.0929 7.90714 27.8571 15 27.8571C22.0929 27.8571 27.8571 22.0929 27.8571 15C27.8571 7.90714 22.0929 2.14286 15 2.14286Z" fill="black"/>
<path id="Vector_4" d="M21.0641 22.4999C20.6141 22.4999 20.207 22.2213 20.057 21.7927C19.6884 20.7458 19.004 19.8391 18.0981 19.1977C17.1923 18.5563 16.1098 18.2118 14.9999 18.2118C13.8899 18.2118 12.8074 18.5563 11.9016 19.1977C10.9957 19.8391 10.3113 20.7458 9.94271 21.7927C9.74986 22.3499 9.12843 22.6499 8.57128 22.4356C8.43785 22.3894 8.31502 22.3169 8.21007 22.2225C8.10511 22.128 8.02016 22.0135 7.96023 21.8856C7.9003 21.7578 7.8666 21.6192 7.86114 21.4781C7.85568 21.337 7.87856 21.1962 7.92843 21.0641C8.97843 18.0641 11.8284 16.0713 14.9999 16.0713C18.1713 16.0713 21.0213 18.0856 22.0713 21.0641C22.1293 21.2259 22.1475 21.3992 22.1246 21.5695C22.1017 21.7398 22.0382 21.9022 21.9395 22.0428C21.8408 22.1835 21.7098 22.2984 21.5575 22.378C21.4052 22.4575 21.236 22.4993 21.0641 22.4999Z" fill="black"/>
</g>
</svg>


               </div>

               <div className={css.svgwrap}>
               <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Group 34164">
<g id="Group">
<path id="Vector" d="M16 31C24.2843 31 31 24.2843 31 16C31 7.71573 24.2843 1 16 1C7.71573 1 1 7.71573 1 16C1 24.2843 7.71573 31 16 31Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
<path id="Vector_2" d="M10.0039 11.5758V11.4258M22.0039 11.5758V11.4258" stroke="black" stroke-width="2" stroke-linecap="round"/>
<path id="Vector_3" d="M22.0039 19C21.2539 21.25 19.3189 23.5 16.0039 23.5C12.6889 23.5 10.7539 21.25 10.0039 19" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</g>
</svg>


               </div>
            </div>

           <div className={css.m5}>
            <input type="text" />
           </div>
           <div className={css.m6}>
           <button className={css.submitbtn}>Submit</button>
           </div>

         

           <span>Thanks for your feebback</span>

             </form> 
          
      
    </div>
  )
}

export default MyServices
