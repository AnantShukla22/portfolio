import React from "react";
import "./Exprience.css";
import Data from "./Data";
import Card from "./Card";
import { motion as m } from "framer-motion";

const Portfolio = () => {
  // property of the framaer motion for the timeline
  const timeLine1 = {
    offscreen: { x: "-100vw",opacity:0 },
    onscreen: {
      x: "0",
      opacity:1,
      rotate: [360, 180, 0],
      transition: { duration: 0.2, type: "spring", bounce: 0.4},
    },
    exit:{
      rotate: [0, 180, 360],
      opacity:0,
      x: "-100vw"
    }
  };

  const timeLine2 = {
    offscreen: { x: "100vw", opacity:0},
    onscreen: {
      x: "0",
      opacity:1,
      rotate: [0, 180, 360],
      transition: { duration: 0.25, type: "spring", bounce: 0.4 },
    },
    exit:{
      rotate: [360, 180, 0],
      opacity:0,
      x: "-100vw"
    }

  };
  const heading = {
    offscreen: {opacity:0 },
    onscreen: { opacity:1, transition: { duration: .2} },
    exit:{
      opacity:0 
    }
  };
  

  return (
    <m.div
      className="resume container section"
      id="exprience"
      initial={"offscreen"}
      whileInView={"onscreen"}
      exit={"exit"}
      viewport={{once:false,amount:0.1}}
      transition={{ staggerChildren: 0.4 }}
    >
      <m.h2 variants={heading} className="resume_title">
        Exprience
      </m.h2>

      <m.div variants={timeLine1} className="resume_container grid">
        <m.div className="timeline grid" variants={timeLine1}>
          {Data.map((value, id) => {
            if (value.category === "education") {
              return (
                <Card
                  key={id}
                  icon={value.icon}
                  title={value.title}
                  year={value.year}
                  desc={value.desc}
                />
              );
            } else {
              return null;
            }
          })}
        </m.div>
        <m.div className="timeline grid" variants={timeLine2}>
          {Data.map((value, index) => {
            if (value.category === "exprience") {
              return (
                <Card
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  year={value.year}
                  desc={value.desc}
                />
              );
            } else {
              return null;
            }
          })}
        </m.div>
      </m.div>
    </m.div>
  );
};

export default Portfolio;
