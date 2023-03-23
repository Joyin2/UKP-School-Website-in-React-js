import React from "react";
import "./BestEducation.scss";
import Card from "../Card/Card";
import Bulb from "../../img/bulb.png";
import Leadership from "../../img/leadership.png";
import Excursion from "../../img/excursion.png";
import Playing from "../../img/playing.png";
import { motion } from "framer-motion";

const BestEducation = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="best-education" id="best-education">
      <div className="cards">
        <motion.div
          whileInView={{ right: "37rem" }}
          initial={{ right: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Bulb}
            heading={"Quality Education"}
            detail={"We provide quality education from class nursery"}
          />
        </motion.div>
        <motion.div
          whileInView={{ right: "18rem" }}
          initial={{ right: "-3rem" }}
          transition={transition}
        >
          <Card
            emoji={Leadership}
            heading={"Quality Education"}
            detail={"We provide quality education from class nursery"}
          />
        </motion.div>
        {/* <motion.div
          whileInView={{ left: "1rem" }}
          initial={{ left: "-3rem" }}
          transition={transition}
        >
          <Card
            emoji={Excursion}
            heading={"Quality Education"}
            detail={"We provide quality education from class nursery"}
          />
        </motion.div> */}
        <motion.div
          whileInView={{ right: "28rem" }}
          initial={{ right: "-3rem" }}
          transition={transition}
        >
          <Card
            emoji={Playing}
            heading={"Quality Education"}
            detail={"We provide quality education from class nursery"}
          />
        </motion.div>
        <div
          className="blur t-blur1"
          style={{ background: "var(--purple)" }}
        ></div>
        {/* <div className="blur t-blur2" style={{ background: "skyblue" }}></div> */}
      </div>
      <div className="cards-details">
        <span>We Provide</span>

        <span>Quality Education</span>

        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          facilis Lorem ipsum dolor sit. Lorem, ipsum dolor. 
        </span>
      </div>
    </div>
  );
};

export default BestEducation;
