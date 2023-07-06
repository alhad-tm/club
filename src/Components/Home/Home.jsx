import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import css from "./Home.module.css"
import Batcave from "../../assets/logomain.svg"
import Scan from "../../assets/scanlogo.svg"
import Saveto from "../../assets/savetoicon.svg"
import Notification from "../../assets/notificationlogo.svg"
import Meter from "../../assets/Vector meter.svg"
import P1 from "../../assets/person1.svg";
import P2 from "../../assets/person2.svg";
import P3 from "../../assets/person3.svg";
import Addto from "../../assets/addtolist.svg";
import Save1 from "../../assets/saved1.svg";
import Save2 from "../../assets/saved2.svg";
import Save3 from "../../assets/saved3.svg";
import Blog from "../../assets/blogs.svg";
import Gift from "../../assets/gift.svg"

import Homeicon from "../../assets/navhome.svg"
import Services from "../../assets/navservices.svg"
import Calender from "../../assets/navcalender.svg"
import Profile from "../../assets/navuser.svg"

const Home = () => {
  return (
    <div className={css.container}>

    <div className={css.container1}>
        <div className={css.div1}>

            <div className={css.div1left}> 
            <img className={css.logo} src={Batcave} alt="" />
            </div>

            <div className={css.div1right}>
       <Link to="/scan"><img src={Scan} alt="" /></Link>     
       <Link to="/saved"><img src={Saveto} alt="" /></Link>     
       <Link to="/notification"><img src={Notification} alt="" /></Link>     
           
            
            </div>


        </div>

        <div className={css.div2}><span>Hi name</span></div> 

        <div className={css.div3}>
            <div className={css.div3left}> 
                <span>Your points</span>
                <span>500</span>
                <span>View point registry</span>
            </div>

            <div className={css.div3right}>
                <img src={Meter} alt="" />
            </div>

        </div> 

        <div className={css.div4}>
            <span>Popular events</span>
            <span>See all</span>
        </div>

        {/* here */}
        <div className={css.div5}>
        <div className={css.s1}>
          <img className={css.save1} src={Save1} alt="" />
          <div className={css.date}>
            <span>10</span>
            <span>June</span>
          </div>
          <div className={css.addto}>
            <img src={Addto} alt="" />
          </div>
        </div>

        <div className={css.s2}>
          The next event is going to conduct on the central stadium
        </div>
      </div>

      <div className={css.div6}>
        <div className={css.div6left}>
          <img className={css.p1} src={P1} alt="" />
          <img className={css.p2} src={P2} alt="" />
          <img className={css.p3} src={P3} alt="" />
        </div>

        <div className={css.div6middle}>
          <span>+40 Going</span>
        </div>

        <div className={css.div6right}>
          <img src={Location} alt="" />
          Near Central stadium
        </div>
      </div>
        <div className={css.div5}>
        <div className={css.s1}>
          <img className={css.save1} src={Save2} alt="" />
          <div className={css.date}>
            <span>10</span>
            <span>June</span>
          </div>
          <div className={css.addto}>
            <img src={Addto} alt="" />
          </div>
        </div>

        <div className={css.s2}>
          The next event is going to conduct on the central stadium
        </div>
      </div>

      <div className={css.div6}>
        <div className={css.div6left}>
          <img className={css.p1} src={P1} alt="" />
          <img className={css.p2} src={P2} alt="" />
          <img className={css.p3} src={P3} alt="" />
        </div>

        <div className={css.div6middle}>
          <span>+40 Going</span>
        </div>

        <div className={css.div6right}>
          <img src={Location} alt="" />
          Near Central stadium
        </div>
      </div>
        <div className={css.div5}>
        <div className={css.s1}>
          <img className={css.save1} src={Save3} alt="" />
          <div className={css.date}>
            <span>10</span>
            <span>June</span>
          </div>
          <div className={css.addto}>
            <img src={Addto} alt="" />
          </div>
        </div>

        <div className={css.s2}>
          The next event is going to conduct on the central stadium
        </div>
      </div>

      <div className={css.div6}>
        <div className={css.div6left}>
          <img className={css.p1} src={P1} alt="" />
          <img className={css.p2} src={P2} alt="" />
          <img className={css.p3} src={P3} alt="" />
        </div>

        <div className={css.div6middle}>
          <span>+40 Going</span>
        </div>

        <div className={css.div6right}>
          <img src={Location} alt="" />
          Near Central stadium
        </div>
      </div>



      {/* here ends */}

      <div className={css.div7}>
        <span>New launches</span> 
      <Link to= "/blogs"> <span>See all</span> </Link>  
      </div>

      {/* here blogs */}
   <Link to="/launch">   <div className={css.div8}>
        <div className={css.div8left}>
          <img src={Blog} alt="" />
        </div>
        <div className={css.div8right}>
          <span>We are launching our new branch in RS puram</span>
          <span>loreum ipsum content here</span>
          <span>Wed, Apr 28 • 5:30 PM</span>
        </div>
      </div>
      </Link>

      {/* here ends */}


      <div className={css.div10}>
        <div className={css.div10left}>
            <span>Invite your friends</span>
            <span>Get 50 points</span>
            <button className={css.invite}>Invite</button>
        </div>


        <div className={css.div10right}>
            <img className={css.gift} src={Gift} alt="" />
        </div>
      </div>
      </div>

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
  )
}

export default Home
