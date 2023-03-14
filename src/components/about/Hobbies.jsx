import React from "react";
import { MdSportsEsports } from "react-icons/md";
import { BsBookHalf,BsFillCameraFill } from "react-icons/bs";
import { MdSportsBaseball } from "react-icons/md";

const Hobbies = () => {

  
  return (
    <div className="about_hobbies grid">
      <div className="about_hobbie">
        <div className="hobbie_icon icon-gaming">
          <MdSportsEsports size={29} className="about_button"/>
        </div>
        <span className="hobbie_title">
            Gaming
        </span>
      </div>
      <div className="about_hobbie">
        <div className="hobbie_icon icon-gaming">
          <BsBookHalf size={25} className="about_button"/>
        </div>
        <span className="hobbie_title">
            Reading
        </span>
      </div> <div className="about_hobbie">
        <div className="hobbie_icon icon-gaming">
          <MdSportsBaseball size={25} className="about_button" />
        </div>
        <span className="hobbie_title">
            Sports
        </span>
      </div> <div className="about_hobbie">
        <div className="hobbie_icon icon-gaming">
          <BsFillCameraFill size={25} className="about_button"/>
        </div>
        <span className="hobbie_title">
            Photography
        </span>
      </div>
    </div>
  );
};

export default Hobbies;
