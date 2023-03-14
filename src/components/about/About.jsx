import React from "react";
import "./About.css";
import MyImage from "../../images/Myimg.jpeg";
import Hobbies from "./Hobbies";
import { motion as m } from "framer-motion";
import Resume from "../../images/Anant'sResume.pdf"

const About = () => {
  const about_data = {
    offscreen: { opacity: 0 },
    onscreen: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
    },
  };

  const about_title = {
    offscreen: { opacity: 0 },
    onscreen: { opacity: 1, transition: { duration: 0.2 } },
    exit: {
      opacity: 0,
    },
  };

  const my_skills = {
    offscreen: {
      scale: 0.1,
      opacity: 0,
    },
    onscreen: {
      scale: 1,
      transition: { duration: 0.8, once: false },
      opacity: 1,
    },
    exit: {
      scale: 1,
      opacity: 0,
    },
  };

  return (
    <m.div
      className="about container section"
      id="about"
      initial={"offscreen"}
      whileInView={"onscreen"}

      exit={"exit"}
      viewport={{ once: false, amount: 0.1 }}
      transition={{ staggerChildren: 0.2 }}
    >
      <m.h2
        variants={about_title}
        className="about_title"
      >
        About Me
      </m.h2>
      {/* making it grid */}
      <div className="about_wrapper grid">
        <div className="about_img">
          <m.img
            src={MyImage}
            alt=""
            variants={about_title}
          />
        </div>

        {/* making it grid */}
        <m.div
          variants={about_data}
          className="about_data grid"
        >
          <div className="about_info">
            <p className="about_description">
            I am an enthusiastic and driven pre-final year Computer Science student in SRMIST . I want to kick start my career in technical role to utilize my strong analytical skills and technical knowledge in the Tech Industry to build something meaningful. I am able to quickly adapt to new technologies hence, my technical skills, attention to detail, and passion for creating web applications make me a great fit for the role of a web developer.
            </p>
            <m.button variants={my_skills} className="about_cv_button">
              <a target="_blank" rel="noreferrer" href={Resume}>Download CV</a>
            </m.button>
          </div>

          <div className="about_skills grid">
            <div className="skills_data">
              {/* skill title and digit */}
              <div className="skills_title">
                <h3 className="skills_name">Development</h3>
                <span className="skills_number">80%</span>
              </div>
              {/* skill bar */}
              <div className="skills_bar">
                <span className="skills_percentage_bar Development"></span>
              </div>
            </div>
            <div className="skills_data">
              {/* skill title and digit */}
              <div className="skills_title">
                <h3 className="skills_name">UI/UX</h3>
                <span className="skills_number">70%</span>
              </div>
              {/* skill bar */}
              <div className="skills_bar">
                <span className="skills_percentage_bar UI_UX"></span>
              </div>
            </div>
            <div className="skills_data">
              {/* skill title and digit */}
              <div className="skills_title">
                <h3 className="skills_name">Programming</h3>
                <span className="skills_number">80%</span>
              </div>
              {/* skill bar */}
              <div className="skills_bar">
                <span className="skills_percentage_bar Programming"></span>
              </div>
            </div>
          
            <m.div
              variants={my_skills}
              className="myflex"
            >
              <m.h3 variants={my_skills} whileInView={"onscreen"}>
                My Skills
              </m.h3>
              <m.ul
                variants={my_skills}
                className="flex_ul"
              >
                <li className="flex_list">Languages- C++, Solidity</li>{" "}
                <li className="flex_list">HTML, CSS, JavaScript</li>
                <li className="flex_list">Framework- Next.Js, Tailwind</li>{" "}
                <li className="flex_list">Blockchain Tech- Ganache,Truffle,Web3.Js</li>
              </m.ul>
            </m.div>
          </div>
        </m.div>
      </div>
      <Hobbies />
    </m.div>
  );
};

export default About;
