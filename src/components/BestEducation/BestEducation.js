import React from "react";
import "./BestEducation.scss";
import Card from "../Card/Card";
import Bulb from "../../img/bulb.png"
import Leadership from "../../img/leadership.png"
import Excursion from "../../img/excursion.png"
import Playing from "../../img/playing.png"
import { motion } from "framer-motion";

const BestEducation = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    <div className="best-education" id="best-education">
      <div className="cards">
        <motion.div
          whileInView={{ left: "0px" }}
          initial={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Bulb}
            heading={"Quality Education"}
            detail={"We provide quality education from class nursery"}
          />
        </motion.div>
        <motion.div
          whileInView={{ right: "-1px" }}
          initial={{ right: "-3rem" }}
          transition={transition}
        >
          <Card
            emoji={Leadership}
            heading={"Quality Education"}
            detail={"We provide quality education from class nursery"}
          />
        </motion.div>
        <motion.div
          whileInView={{ left: "0px" }}
          initial={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Excursion}
            heading={"Quality Education"}
            detail={"We provide quality education from class nursery"}
          />
        </motion.div>
        <motion.div
          whileInView={{ right: "-1px" }}
          initial={{ right: "-3rem" }}
          transition={transition}
        >
          <Card
            emoji={Playing}
            heading={"Quality Education"}
            detail={"We provide quality education from class nursery"}
          />
        </motion.div>
      </div>
      <div className="cards-details">
        <h1>We Provide Quality Education</h1>
      </div>
    </div>
  );
};

export default BestEducation;
