import React from "react";
import css from "./Blogs.module.css";
import Arrowleft from "../../assets/arrow-left.svg";
import Blog from "../../assets/blogs.svg";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div className={css.container}>
      <div className={css.div1}>
      <Link to="/home"> <img src={Arrowleft} alt="" /> </Link>  
        <span>Blogs</span>
      </div>

      <div className={css.div2}>
        <div className={css.div2left}>
          <img src={Blog} alt="" />
        </div>
        <div className={css.div2right}>
          <span>We are launching our new branch in RS puram</span>
          <span>loreum ipsum content here</span>
          <span>Wed, Apr 28 • 5:30 PM</span>
        </div>
      </div>
      <div className={css.div2}>
        <div className={css.div2left}>
          <img src={Blog} alt="" />
        </div>
        <div className={css.div2right}>
          <span>We are launching our new branch in RS puram</span>
          <span>loreum ipsum content here</span>
          <span>Wed, Apr 28 • 5:30 PM</span>
        </div>
      </div>
      <div className={css.div2}>
        <div className={css.div2left}>
          <img src={Blog} alt="" />
        </div>
        <div className={css.div2right}>
          <span>We are launching our new branch in RS puram</span>
          <span>loreum ipsum content here</span>
          <span>Wed, Apr 28 • 5:30 PM</span>
        </div>
      </div>
      <div className={css.div2}>
        <div className={css.div2left}>
          <img src={Blog} alt="" />
        </div>
        <div className={css.div2right}>
          <span>We are launching our new branch in RS puram</span>
          <span>loreum ipsum content here</span>
          <span>Wed, Apr 28 • 5:30 PM</span>
        </div>
      </div>
      <div className={css.div2}>
        <div className={css.div2left}>
          <img src={Blog} alt="" />
        </div>
        <div className={css.div2right}>
          <span>We are launching our new branch in RS puram</span>
          <span>loreum ipsum content here</span>
          <span>Wed, Apr 28 • 5:30 PM</span>
        </div>
      </div>
      <div className={css.div2}>
        <div className={css.div2left}>
          <img src={Blog} alt="" />
        </div>
        <div className={css.div2right}>
          <span>We are launching our new branch in RS puram</span>
          <span>loreum ipsum content here</span>
          <span>Wed, Apr 28 • 5:30 PM</span>
        </div>
      </div>




    </div>
  );
};

export default Blogs;
