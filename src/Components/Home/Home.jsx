import React from 'react'
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

const Home = () => {
  return (
    <div className={css.container}>


        <div className={css.div1}>

            <div className={css.div1left}> 
            <img className={css.logo} src={Batcave} alt="" />
            </div>

            <div className={css.div1right}>
            <img src={Scan} alt="" />
            <img src={Saveto} alt="" />
            <img src={Notification} alt="" /> 
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
        <span>See all</span>
      </div>

      {/* here blogs */}
      <div className={css.div8}>
        <div className={css.div8left}>
          <img src={Blog} alt="" />
        </div>
        <div className={css.div8right}>
          <span>We are launching our new branch in RS puram</span>
          <span>loreum ipsum content here</span>
          <span>Wed, Apr 28 • 5:30 PM</span>
        </div>
      </div>

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
  )
}

export default Home
