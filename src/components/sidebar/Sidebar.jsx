import React, { useState } from "react";
import "./Sidebar.css";
import { AiFillHome } from "react-icons/ai";
import { BsFillPenFill,BsFillPersonFill } from "react-icons/bs";
import { IoIosCall } from "react-icons/io";
import MyImage from "../../images/as-logo.png";
import {MdWork} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { motion as m } from "framer-motion";

const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <m.div className={toggle?"aside show_menu":"aside"}>
        <a href="#home">
          <img src={MyImage} alt="" className="nav_logo"/>
        </a>
        <nav className="nav">
          <div className="nav_menu">
            <div className="nav_list">
              <li className="nav_item">
                <a href="#home" >
                  <AiFillHome size={30} className="nav_icon1" />
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" >
                  <BsFillPersonFill size={32} className="nav_icon2" />
                </a>
              </li>
              <li className="nav_item">
                <a href="#exprience">
                  <MdWork size={28} className="nav_icon3" />
                </a>
              </li>
              <li className="nav_item">
                <a href="#projects" >
                  <BsFillPenFill size={24} className="nav_icon4" />
                </a>
              </li>

              <li className="nav_item">
                <a href="#contact">
                  <IoIosCall size={32} className="nav_icon5" />
                </a>
              </li>
            </div>
          </div>
        </nav>
        <div className="nav_footer">
          <span className="copyright">
            <p>Thanks For Visiting  </p>
          </span>
        </div>
        
        {/* for responsive */}
      </m.div>
      <div onClick={()=>{setToggle (!toggle)}} className={toggle?"nav_toggle nav_toggle-open":"nav_toggle"}>
        <FiMenu size={45} />
      </div>
    </>
  );
};

export default Sidebar;
