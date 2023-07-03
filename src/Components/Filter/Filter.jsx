import React, { useState } from 'react'
import MultiRangeSlider from "multi-range-slider-react";

import css from "./Filter.module.css"

const Filter = () => {
    const [minValue, set_minValue] = useState(25);
const [maxValue, set_maxValue] = useState(75);
const handleInput = (e) => {
	set_minValue(e.minValue);
	set_maxValue(e.maxValue);
};

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

<div className={css.div3}>
    <div className={css.div3top}>
        <span>Price Range</span>
        <span>RS 0 - 100k</span>
    </div>
    <div className={css.div3bottom}>
    <MultiRangeSlider
			min={1200}
			max={10000}
			step={500}
			minValue={minValue}
			maxValue={maxValue}
			onInput={(e) => {
				handleInput(e);
			}}
		/>
    </div>
</div>


    </div>
  )
}

export default Filter
 