import React from "react";
import "./Preparation.scss";
const Preparation = ({ item }) => {
  return (
    <div className='app__content-steps'>
      <div className='app__content-prearatin'>
        <div className='app__title-preparation'>
          <p>{item.nameOfStep}</p>
        </div>
        <div className='app__info-preparation'>
          <p className='s'>{item.info}</p>
        </div>
      </div>
    </div>
  );
};

export default Preparation;
