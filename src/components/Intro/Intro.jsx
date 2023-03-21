import React from "react";
import "./Intro.scss";
import Header from "../Header/Header";
import BgVideo from "../../videos/student.mp4";
import Start from "../../img/start.png"
import { motion } from "framer-motion";


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
          Nurturing Minds, Nurturing Talents
        </h2>
        <motion.div
          className="start"
          whileHover={{ scale: 1.2, rotate: 360 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
        >
          <img src={Start} alt="" />
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
