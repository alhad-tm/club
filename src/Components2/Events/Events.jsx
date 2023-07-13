import React from "react";
import { Link,NavLink } from "react-router-dom";
import css from "./Events.module.css";
import Scan from "../../assets/scanlogo.svg";
import Saveto from "../../assets/savetoicon.svg";
import Notification from "../../assets/notificationlogo.svg";
import Eye from "../../assets/eye.svg";
import Ev1 from "../../assets2/ev1.svg";
import Temp from "../../assets2/temp.svg";
import Location from "../../assets/map-pin.svg";
import Share from "../../assets/share.svg";
import P1 from "../../assets/person1.svg";
import P2 from "../../assets/person2.svg";
import P3 from "../../assets/person3.svg";
import Services from "../../assets/navservices.svg"
import Calender from "../../assets/navcalender.svg"
import Profile from "../../assets/navuser.svg"

const Events = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
        <div className={css.div1left}>
          <span>Events</span>
        </div>
        <div className={css.div1right}>
          <Link to="/scan">
            <img src={Scan} alt="" />
          </Link>
          <Link to="/saved">
            <img src={Saveto} alt="" />
          </Link>
          <Link to="/notification">
            <img src={Notification} alt="" />
          </Link>
        </div>
      </div>

      <div className={css.div2}>
        <button className={css.evbtn}>Upcoming</button>
        <button className={css.evbtn}>Business</button>
        <button className={css.evbtn}>Special</button>
        <button className={css.evbtn}>Arts</button>
        <button className={css.evbtn}>Other</button>
        <button className={css.evbtn}>Other</button>
      </div>

      <div className={css.div3}>
        <span>14 Events</span>
        <span>See all</span>
      </div>

      <div className={css.div4}>
        <div className={css.box}>
          <div className={css.boxleft}>
            <div className={css.bltop}>
              <img className={css.ev1} src={Ev1} alt="" />
              <img className={css.like} src={Temp} alt="" />
            </div>
            <div className={css.blbottom}>
              <img src={Eye} alt="" />
              <span>5K views</span>
            </div>
          </div>

          <div className={css.boxright}>
            <div className={css.br1}>
              <span>Wes Tindel</span>
            </div>

            <div className={css.br2}>
              <span>Old and new Car show</span>
            </div>

            <div className={css.br3}>
              <span>sat july 5- 6:00pm</span>
            </div>

            <div className={css.br4}>
              <img src={Location} alt="" />
              <span>R.S.Puram,Covai</span>
            </div>

            <div className={css.br5}>
              <div className={css.br5left}>
                <img src={Share} alt="" />

                {/* here */}
                <img className={css.p1} src={P1} alt="" />
                <img className={css.p2} src={P2} alt="" />
                <img className={css.p3} src={P3} alt="" />
                {/* here */}
              </div>

              <div className={css.br5right}>
                <button  className={css.intbtn}>Interested</button>
              </div>
            </div>
          </div>
        </div>
        <div className={css.box}>
          <div className={css.boxleft}>
            <div className={css.bltop}>
              <img className={css.ev1} src={Ev1} alt="" />
              <img className={css.like} src={Temp} alt="" />
            </div>
            <div className={css.blbottom}>
              <img src={Eye} alt="" />
              <span>5K views</span>
            </div>
          </div>

          <div className={css.boxright}>
            <div className={css.br1}>
              <span>Wes Tindel</span>
            </div>

            <div className={css.br2}>
              <span>Old and new Car show</span>
            </div>

            <div className={css.br3}>
              <span>sat july 5- 6:00pm</span>
            </div>

            <div className={css.br4}>
              <img src={Location} alt="" />
              <span>R.S.Puram,Covai</span>
            </div>

            <div className={css.br5}>
              <div className={css.br5left}>
                <img src={Share} alt="" />

                {/* here */}
                <img className={css.p1} src={P1} alt="" />
                <img className={css.p2} src={P2} alt="" />
                <img className={css.p3} src={P3} alt="" />
                {/* here */}
              </div>

              <div className={css.br5right}>
                <button className={css.intbtn}>Interested</button>
              </div>
            </div>
          </div>
        </div>
        <div className={css.box}>
          <div className={css.boxleft}>
            <div className={css.bltop}>
              <img className={css.ev1} src={Ev1} alt="" />
              <img className={css.like} src={Temp} alt="" />
            </div>
            <div className={css.blbottom}>
              <img src={Eye} alt="" />
              <span>5K views</span>
            </div>
          </div>

          <div className={css.boxright}>
            <div className={css.br1}>
              <span>Wes Tindel</span>
            </div>

            <div className={css.br2}>
              <span>Old and new Car show</span>
            </div>

            <div className={css.br3}>
              <span>sat july 5- 6:00pm</span>
            </div>

            <div className={css.br4}>
              <img src={Location} alt="" />
              <span>R.S.Puram,Covai</span>
            </div>

            <div className={css.br5}>
              <div className={css.br5left}>
                <img src={Share} alt="" />

                {/* here */}
                <img className={css.p1} src={P1} alt="" />
                <img className={css.p2} src={P2} alt="" />
                <img className={css.p3} src={P3} alt="" />
                {/* here */}
              </div>

              <div className={css.br5right}>
                <button  className={css.intbtn}>Interested</button>
              </div>
            </div>
          </div>
        </div>

        {/* nnnn */}
      </div>

{/* last */}
<div className={css.last}>
     <NavLink to="/home">   <div className={css.set}>
     <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.54 23.25H6.96C4.22 23.25 2 21.02 2 18.28V10.87C2 9.50997 2.84 7.79997 3.92 6.95997L9.31 2.75997C10.93 1.49997 13.52 1.43997 15.2 2.61997L21.38 6.94997C22.57 7.77997 23.5 9.55997 23.5 11.01V18.29C23.5 21.02 21.28 23.25 18.54 23.25ZM10.23 3.93997L4.84 8.13997C4.13 8.69997 3.5 9.96997 3.5 10.87V18.28C3.5 20.19 5.05 21.75 6.96 21.75H18.54C20.45 21.75 22 20.2 22 18.29V11.01C22 10.05 21.31 8.71997 20.52 8.17997L14.34 3.84997C13.2 3.04997 11.32 3.08997 10.23 3.93997Z" fill="#CCCCCC"/>
<path d="M12.75 19.25C12.34 19.25 12 18.91 12 18.5V15.5C12 15.09 12.34 14.75 12.75 14.75C13.16 14.75 13.5 15.09 13.5 15.5V18.5C13.5 18.91 13.16 19.25 12.75 19.25Z" fill="#CCCCCC"/>
</svg>

        <span>Home</span>
        </div>  </NavLink>

      <div className={css.set}>
        <img src={Services} alt="" />
        <span>Service</span>
        </div>
    
     
     <div className={css.set}>
        <img src={Calender} alt="" />
        <span>Events</span>
        </div>  
       


    <NavLink to="/profile">  <div className={css.set}>
        <img src={Profile} alt="" />
        <span>Profile</span>
        </div>  </NavLink>   
     
           
           
        
      </div>


    </div>
  );
};

export default Events;
