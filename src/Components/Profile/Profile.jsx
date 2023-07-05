import React, { useState } from "react";
import {Link, NavLink } from 'react-router-dom'
import css from "./Profile.module.css";
import Arrowleft from "../../assets/arrow-left.svg";
import Profiles from "../../assets/Profile.svg";
import Pen from "../../assets/pen-square 1.svg";
import Right from "../../assets/chevron-right.svg";
import User from "../../assets/user.svg";
import CarDetails from "../../assets/cardetails.svg"
import MyEvents from "../../assets/events.svg"
import MyServices from "../../assets/services.svg"
import Referral from "../../assets/referral.svg"
import Lock from "../../assets/lock.svg"
import Help from "../../assets/helpcenter.svg"
import Homeicon from "../../assets/navhome.svg"
import Services from "../../assets/navservices.svg"
import Calender from "../../assets/navcalender.svg"
import Profileicon from "../../assets/navuser.svg" 
import Scan from "../../assets/profilescan.svg"

const Profile = () => {
  const [state,setstate]=useState(false)
  return (
    <div className={css.container}>
    <div className={css.container1}>
      <div className={css.div1}>
      
        <span>Profile</span> 
      <Link  to="/qr"><img src={Scan} alt="" /></Link>  
      </div>

      <div className={css.div2}>
        <div className={css.profilecontent}>
          <img className={css.profile} src={Profiles} alt="" />
          <img className={css.pen} src={Pen} alt="" />
          <span className={css.pname}>Vladimar Gruev</span>
          <span className={css.plevel}>Bronze LV3</span>
        </div>
      </div>

      <div className={css.div3}>
    <Link to ="/personalinformation">   <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={User} alt="" />{" "}
            </div>
            <span>Personal Information</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>   </Link> 

    <Link to="/changepassword">   <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={Lock} alt="" />{" "}
            </div>
            <span>Change Password</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
        </Link> 

   <Link to="/cardetailsedit">    <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={CarDetails} alt="" />{" "}
            </div>
            <span>Car Details</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
        </Link> 

     <Link to="/eventempty">   <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={MyEvents} alt="" />{" "}
            </div>
            <span>My Events</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div> </Link>

    <Link to="/serviceempty">    <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={MyServices} alt="" />{" "}
            </div>
            <span>My Services</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>  </Link>

        <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={Referral} alt="" />{" "}
            </div>
            <span>Referral</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
        <div className={css.wrap}>
          <div className={css.wrapleft}>
            <div className={css.userdiv}>
              {" "}
              <img className={css.user} src={Help} alt="" />{" "}
            </div>
            <span>Help Center</span>
          </div>

          <div className={css.wrapright}>
            <img src={Right} alt="" />
          </div>
        </div>
       
      </div>
      <div className={css.div4}>
        <button onClick={()=>setstate(!state)} className={css.lgbtn}>Log out</button>
      </div>
      {state&&  <div className={css.pop}>
        <div className={css.pop1}> <span>Logout</span></div>
        <div className={css.pop2}> <span>Are you sure you want to logout from your account?</span></div>
        <div className={css.pop3}>
          <span onClick={()=>setstate(false)}>No</span>
         <Link to ="/"><span>Logout</span></Link> 
        </div>
        </div>}
    </div>
    <div className={css.last}>
     <NavLink to="/home">   <div className={css.set}>
     <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.54 23.25H6.96C4.22 23.25 2 21.02 2 18.28V10.87C2 9.50997 2.84 7.79997 3.92 6.95997L9.31 2.75997C10.93 1.49997 13.52 1.43997 15.2 2.61997L21.38 6.94997C22.57 7.77997 23.5 9.55997 23.5 11.01V18.29C23.5 21.02 21.28 23.25 18.54 23.25ZM10.23 3.93997L4.84 8.13997C4.13 8.69997 3.5 9.96997 3.5 10.87V18.28C3.5 20.19 5.05 21.75 6.96 21.75H18.54C20.45 21.75 22 20.2 22 18.29V11.01C22 10.05 21.31 8.71997 20.52 8.17997L14.34 3.84997C13.2 3.04997 11.32 3.08997 10.23 3.93997Z" fill="#CCCCCC"/>
<path d="M12.75 19.25C12.34 19.25 12 18.91 12 18.5V15.5C12 15.09 12.34 14.75 12.75 14.75C13.16 14.75 13.5 15.09 13.5 15.5V18.5C13.5 18.91 13.16 19.25 12.75 19.25Z" fill="#CCCCCC"/>
</svg>

        <span>Home</span>
        </div>  </NavLink>

     <NavLink to="/serviceempty">  <div className={css.set}>
        <img src={Services} alt="" />
        <span>Service</span>
        </div>
     </NavLink>  
     
     <NavLink to="/eventempty">   <div className={css.set}>
        <img src={Calender} alt="" />
        <span>Events</span> 
        </div>  
        </NavLink>


    <NavLink to="/profile">  <div className={css.set}>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0693 13.1279C9.41537 13.1279 7.25537 10.9679 7.25537 8.31395C7.25537 5.66 9.41537 3.5 12.0693 3.5C14.7233 3.5 16.8833 5.66 16.8833 8.31395C16.8833 10.9679 14.7233 13.1279 12.0693 13.1279ZM12.0693 4.75581C10.1103 4.75581 8.51119 6.35488 8.51119 8.31395C8.51119 10.273 10.1103 11.8721 12.0693 11.8721C14.0284 11.8721 15.6275 10.273 15.6275 8.31395C15.6275 6.35488 14.0284 4.75581 12.0693 4.75581Z" fill="#CCCCCC"/>
<path d="M19.2612 21.5001C18.9179 21.5001 18.6332 21.2154 18.6332 20.8722C18.6332 17.9838 15.6863 15.6396 12.0695 15.6396C8.45279 15.6396 5.50581 17.9838 5.50581 20.8722C5.50581 21.2154 5.22116 21.5001 4.87791 21.5001C4.53465 21.5001 4.25 21.2154 4.25 20.8722C4.25 17.2973 7.7579 14.3838 12.0695 14.3838C16.3812 14.3838 19.8891 17.2973 19.8891 20.8722C19.8891 21.2154 19.6044 21.5001 19.2612 21.5001Z" fill="#CCCCCC"/>
</svg>

        <span  className={css.text}>Profile</span>
        </div>  </NavLink>   
     
           
           
        
      </div > 
     
    </div>
  );
};

export default Profile;
