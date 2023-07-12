import React from 'react'
import { Link,} from 'react-router-dom'
import css from "./Events.module.css"
import Scan from "../../assets/scanlogo.svg"
import Saveto from "../../assets/savetoicon.svg"
import Notification from "../../assets/notificationlogo.svg"
import Eye from "../../assets/eye.svg"
import Ev1 from "../../assets2/ev1.svg"
import Temp from "../../assets2/temp.svg"
import Location from "../../assets/map-pin.svg"
import Share from "../../assets/share.svg"
import P1 from "../../assets/person1.svg";
import P2 from "../../assets/person2.svg";
import P3 from "../../assets/person3.svg"; 

const Events = () => {
  return (
    <div className={css.container}>
      
      <div className={css.div1}>
<div className={css.div1left}> 
<span>Events</span>
</div>
<div className={css.div1right}>
<Link to="/scan"><img src={Scan} alt="" /></Link>     
<Link to="/saved"><img src={Saveto} alt="" /></Link>     
<Link to="/notification"><img src={Notification} alt="" /></Link>     
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
                    <button>Interested</button>
                    </div>
                

                   
                </div>
             </div>

           </div>

       </div>


    </div>
  )
}

export default Events
