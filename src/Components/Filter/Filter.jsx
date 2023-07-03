import React from 'react'
import css from "./Filter.module.css"

const Filter = () => {
  return (
    <div className={css.container}>

      <div className={css.div1}>
        <span>Filter</span>
      </div>

      <div className={css.div2}>
        <div className={css.div2top}>
            <span>Date</span>
        </div>

        <div className={css.div2bottom}>
            {/* <div className={css.s1}> */}
                <div className={css.box}>Today</div>
                <div className={css.box}>Tomorrow</div>
                <div className={css.box}>This week</div>
                <div className={css.box}>This month</div>
                <div className={css.box}>Next month</div>
            {/* </div> */}
            {/* <div className={css.s2}>
              
               
            </div> */}
        </div>
      </div>
      <div className={css.div2}>
        <div className={css.div2top}>
            <span>Location</span>
        </div>

        <div className={css.div2bottom}>
         
                <div className={css.box}>Trivandrum</div>
                <div className={css.box}>Coimbatore</div>
                <div className={css.box}>Chennai</div>
                <div className={css.box}>Kochi</div>
                <div className={css.box}>Hyderabad</div>
          
         
        </div>
      </div>




    </div>
  )
}

export default Filter
 