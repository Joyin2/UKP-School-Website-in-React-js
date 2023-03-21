import React from "react";
import "./Intro.scss";
import Header from "../Header/Header";
import BgVideo from "../../videos/student.mp4";
import Explore from "../../img/power-off-solid.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdPower } from "react-icons/io";
import { faBold } from "@fortawesome/free-solid-svg-icons";



const Intro = () => {
  return (
    <div className="Intro">
      <video src={BgVideo} autoPlay muted loop className="video-bg" />

      <div className="bg-overlay">
        <Header />
      </div>
      <div className="home-text">
        <h1>Universal Knowledge Park School, Silchar</h1>
        <h2>
          <span className="typed-out">Nurturing Minds,</span> <span>Nurturing Talents</span>
        </h2>
        <button className="button">
          Explore
          <span>
            {/* <FontAwesomeIcon
              icon="fa-solid fa-power-off"
              beat
              style={{ color: "#ffffff" }}
            /> */}
            {/* <img src={Explore} alt="" /> */}
            <IoMdPower size={25} fontWeight={faBold} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Intro;
