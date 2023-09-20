import React, { useState, useEffect } from "react";
import "./card2.css";
import bd_image from '../../drawables/bottom_design.svg';

const Card2 = (props) => {
  const [cvvno1, setCvvno1] = useState("000");

  // Use the useEffect hook to watch for changes in the cvvpass prop
  useEffect(() => {
    setCvvno1(props.cvvpass);
  }, [props.cvvpass]);

  return (
    <div className="ecard">
      <div className="box" id="black_strip">1</div>
      <div className="box" id="cvv_box">{cvvno1}</div>
      <div className="box" id="bottom_design">
        <img src={bd_image} alt="" />
      </div>
    </div>
  );
};

export default Card2;
