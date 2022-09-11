import React from "react";
import "./Dots.scss";
const Dots = ({ curentSilde, slideLength, slide }) => {
  return (
    <div className='dots-holder'>
      {Array(slideLength)
        .fill(1)
        .map((item, index) => (
          <div
            key={index}
            className={curentSilde === index ? "active" : ""}
            onClick={() => slide(index)}
          ></div>
        ))}
    </div>
  );
};

export default Dots;
