import React from "react";
import "./Home.css";
import MyImage from "../../images/Myimg.jpeg";
import { Typewriter } from "react-simple-typewriter";
import Scrolldown from "./Scrolldown";
import { motion as m } from "framer-motion";
import Resume from "../../images/Anant'sResume.pdf"

const Home = () => {

  const contact_heading = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 1.2 } },
    exit: {
      opacity: 0,
    },
  };

  return (
    // container class given

    <m.div
      className="home container"
      initial={"offscreen"}
      whileInView={"onscreen"}
      exit={"exit"}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ staggerChildren: 0.3 }}
      variants={contact_heading}
    >
      <div className="intro">
        <img src={MyImage} alt="" className="home_img" />
        <h1 className="home_name">Anant Shukla</h1>
        <span className="home_info">
          <span>I,m a</span>
          <span className="introcontent-typewriter">
            <Typewriter
              loop
              typeSpeed={50}
              deleteSpeed={50}
              delaySpeed={1000}
              words={[" Frontend_", " Blockchain_"]}
            />
            Developer
          </span>
        </span>

        <div className="home-buttons">
          <button className="home-buttons-contact">
            <a href="#contact">Contact Me</a>
          </button>
          <button className="home-buttons-cv">
            <a target="_blank" rel="noreferrer" href={Resume}>Download CV</a>
          </button>
        </div>
        <Scrolldown />
      </div>
    </m.div>
  );
};

export default Home;
