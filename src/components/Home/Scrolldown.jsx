import React from "react";

const Scrolldown = () => {
  return (
    // ek container hai, ek likh hai jo sab span ko link kar kari hai, ek naam hai scrool ka or ek icon ka wrapper hai
    <div className="scroll_down">
      <a href="#about" className="mouse_wrapper">
        <span className="scroll_name">Discover Me</span>
        <span className="wheel_wrapper">
          <span className="wheel">
          </span>
        </span>
      </a>
    </div>
  );
};

export default Scrolldown;
