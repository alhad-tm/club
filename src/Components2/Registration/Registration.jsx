import React from "react";
import css from "./Registration.module.css";
import Arrowleft from "../../assets/arrow-left.svg";
import Car from "../../assets2/carreg.svg";
import Plus from "../../assets2/add-square.svg"

const Registration = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
        <img src={Arrowleft} alt="" />
        <span>Registration</span>
      </div>

      <div className={css.div2}>
        <img src={Car} alt="" />
      </div>

      <div className={css.div3}>
        <form className={css.forms} action="">
          <span className={css.he}>Please fill and check your information</span>
          <input className={css.reginp} type="text" placeholder="Your name" />
          <input className={css.reginp} type="text" placeholder="Email" />
          <input className={css.reginp} type="text" placeholder="Contact" />
          <input className={css.reginp} type="text" placeholder="Gender" />

          <div className={css.que}>
            <span className={css.quespan}>Already have account in Car Club Member </span>

            <button>yes</button>
          </div>

          <input className={css.reginp} type="text" placeholder="Member Id" />

          <div className={css.que}>
            <div className={css.que2left}>
              <span className={css.quespan}>Add Friend & Family Members </span>
              <span>(Maxmimum 5)</span>
            </div>

          <div >  <img src={Plus} alt="" /> </div>  
          </div>
          
          <div className={css.inputs}>
            <input className={css.inpleft} type="text"  placeholder="Name"/>
            <input className={css.inpright} type="text"  placeholder="Relation"/>
          </div>

          <div className={css.que}>
            <span className={css.quespan}>Would you like to be updated about the upcoming events? </span>

            <button>yes</button>
          </div>

          <button className={css.subbtn}>Submit</button>


        </form>
      </div> 
    </div>
  );
};

export default Registration;
