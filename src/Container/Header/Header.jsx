import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { client, urlFor } from "./../../client";
import Dots from "./../../components/Dots/Dots";
import AppWraper from "./../../Wraper/AppWraper";
import "./Header.scss";
const Header = ({ autoPlayTime = 3000 }) => {
  const [carousel, setCarousel] = useState([]);

  const [curentSlide, setCurentSlide] = useState(0);

  useEffect(() => {
    const query = '*[_type == "header"]';
    client.fetch(query).then((data) => {
      setCarousel(data);
    });
  }, []);

  const nextSlide = () => {
    setCurentSlide((prevSlide) => {
      return prevSlide === carousel.length - 1 ? 0 : prevSlide + 1;
    });
  };

  const curent = (index) => {
    setCurentSlide(index);
  };
  const autoPlayRef = useRef();

  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      autoPlayRef.current();
    };
    const interval = setInterval(play, 6000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='app__header'>
      <h3>Recipes</h3>
      <div className='app__slider-holder'>
        {carousel.map((item, index) => (
          <div
            key={index}
            className='app__slider'
            style={{
              marginLeft: index === 0 ? `-${curentSlide * 100}%` : undefined,
            }}
          >
            <motion.div>
              <img src={urlFor(carousel[curentSlide].image)} alt='' />
              <div className='app__header-text app__flex'>
                <motion.h2
                  className='head-text'
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  {carousel[curentSlide].heading}
                </motion.h2>
                <motion.p
                  className='p-text'
                  whileInView={{ scale: [0, 1] }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {carousel[curentSlide].text}
                </motion.p>
                <a href='#about' class='arrows'>
                  <span></span>
                  <span></span>
                  <span></span>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
        <Dots
          slideLength={carousel.length}
          curentSilde={curentSlide}
          slide={curent}
        />
      </div>
    </div>
  );
};

export default AppWraper(Header, "home", "app__home");
