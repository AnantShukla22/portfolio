import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import {  FaUserGraduate } from "react-icons/fa";

//  <span></span><BsFillChatDotsFill/>

const Card = (props) => {
  let icon=props.icon;

  return (
    <div className="timeline_data">
      <span  className={icon==="icon-graduation" ? "icon-graduation" : "icon-briefcase"}>
        {icon==="icon-graduation" ? <FaUserGraduate  /> : <BsFillBriefcaseFill/>}
      </span>
      <span className="timeline_year">{props.year}</span>
      <p className="timeline_title">{props.title}</p>
      <p className="timeline_desc">{props.desc}</p>
    </div>
  );
};

export default Card;
