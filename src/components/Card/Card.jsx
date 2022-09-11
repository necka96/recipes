import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { urlFor } from "../../client";
import Preparation from "../Preparation/Preparation";
import "./Card.scss";

const Card = ({ item, activeFilter, handleCLick, animated }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className={toggle ? "app__recipe-content active" : "app__recipe-content"}
    >
      <div className='app__holder-recepis '>
        <div className='app__recipe-holder'>
          <div
            className={
              !toggle
                ? "app__recipes-btn app__flex"
                : "app__recipes-btn app__flex active"
            }
            onClick={() => setToggle(!toggle)}
          >
            <div>
              <FaGreaterThan />{" "}
            </div>
          </div>
          <div className='app__recipes-photo'>
            <div className='app-recipes-img'>
              <img src={urlFor(item.image)} alt='' />
            </div>

            <div
              className={
                !toggle ? "app__content-mins" : "app__content-mins active"
              }
            >
              <div className='app__sub-minus app__flex'>
                <h4>{item.minuts}</h4>
                <span>MINS</span>
              </div>
            </div>
            <div
              className={
                !toggle ? "app__contet-text" : "active app__contet-text"
              }
            >
              <h3>{item.heading}</h3>
              <p className='p-text'>{item.intro}</p>
            </div>
          </div>
        </div>
        <div
          className={
            !toggle ? "app__content-text-tabs" : "app__content-text-tabs active"
          }
        >
          <div className='app__content-tabs'>
            <ul className='app__flex'>
              <li>
                <h4 className='active'>ingredients & preparation</h4>
              </li>
            </ul>
          </div>
          {item.preparation.map((item, index) => (
            <motion.div
              key={index}
              animate={animated}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
            >
              {item.step1?.map((item, index) => (
                <Preparation item={item} key={item + index} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
