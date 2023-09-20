import React,{ useState } from "react";
import "./card2.css";
import bd_image from '../../drawables/bottom_design.svg'
const Card2 = ({ inputValue }) => {
  
  return (
    <div className="ecard">
      <div className="box" id="black_strip">1</div>
      <div className="box" id="cvv_box">{inputValue || "000"}</div>
      <div className="box" id="bottom_design">
      <img src={bd_image} alt="" />
      </div>
    </div>
  );
};

export default Card2;
