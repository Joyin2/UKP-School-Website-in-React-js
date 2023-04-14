import React from "react";
import "./About.scss";
import AboutBanner from "../../img/about-banner.png";
import Man from "../../img/Smiling Man.png";

const About = () => {
  return (
    <div className="About">
      <img src={AboutBanner} alt="" />
      <div className="container">
        <div className="avatar">
          <div class="main"></div>
          <img src={Man} alt="" />
        </div>
        <div className="experts">
          <div className="e-head">
            <span>
              We are <span>Experts</span>
            </span>
            <span>Learning Institution</span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur labore nisi quidem necessitatibus impedit iste natus
              eius? Repudiandae laboriosam, esse, perferendis, beatae nobis rem
              consectetur explicabo architecto id maxime delectus? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Dicta repellat
              consectetur illo necessitatibus inventore modi in magnam facilis
              hic laborum.
            </span>
            <button className="button">Enroll now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
