import React from 'react'
import css from "./Addcar.module.css"
import { Link } from 'react-router-dom'

const Addcar = () => {
  return (
    <div className={css.container}>

        <div className={css.div1}>
            <span>Add Car Details</span>
           <Link to="/membership"><span>Skip</span></Link> 
        </div>


        <div className={css.div2}>
            <form className={css.form1} action="">
                <div className={css.filediv}>
                <input className={css.file} type="file"   placeholder='hhfgf'/>
                </div>
                
                <input className={css.sinput} type="text"  placeholder='Vehicle Registration number'/>
                <input className={css.sinput} type="text"  placeholder='Make'/>
                <input className={css.sinput} type="text"  placeholder='Model'/>
                <input className={css.sinput} type="text"  placeholder='Power (bhp@rpm)'/>
                <input className={css.sinput} type="text"  placeholder='Torque (Nm@rpm'/>
                <input className={css.sinput} type="text" placeholder='color' />
                 
              <Link to="/membership">   <button className={css.savebutton}>Save</button> </Link>
            </form>
        </div>




        {/* <div className={css.div3}></div> */}
      
    </div>
  )
}

export default Addcar
