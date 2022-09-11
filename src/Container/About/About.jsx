import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AppWraper from "../../Wraper/AppWraper";
import { client } from "./../../client";
import "./About.scss";
const About = () => {
  const [about, setAbout] = useState([]);
  // const [carousel, setCarousel] = useState([]);
  // const [curentSlide, setCurentSlide] = useState(0);
  useEffect(() => {
    const query = '*[_type == "about"]';
    // const carouselQuery = '*[_type == "carousel"]';
    client.fetch(query).then((data) => {
      setAbout(data);
    });
    // client.fetch(carouselQuery).then((data) => {
    //   setCarousel(data);
    // });
  }, []);
  // const handleClick = (index) => {
  //   setCurentSlide(index);
  // };
  return (
    <div className='app__about app__flex'>
      <div>
        <motion.h2
          className='head-text'
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5 }}
        >
          About us
        </motion.h2>
        {about.map((item, index) => (
          <motion.div
            className='app__grid'
            key={item + index}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className='app__text'>
              <p className='p-text'>{item.info}</p>
            </div>
            <div className='app__about-carousel'></div>
          </motion.div>
        ))}
        {/**   {carousel.length && (
          <>
            <motion.div
              className='app__about-carousel app__grid'
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.7 }}
            >
              <img src={urlFor(carousel[curentSlide].image1)} alt='' />
              <img src={urlFor(carousel[curentSlide].image2)} alt='' />
              <img src={urlFor(carousel[curentSlide].image3)} alt='' />
              <AiOutlineLeft
                className='left'
                onClick={() =>
                  handleClick(
                    curentSlide === 0 ? carousel.length - 1 : curentSlide - 1
                  )
                }
              />
              <AiOutlineRight
                className='right'
                onClick={() =>
                  handleClick(
                    curentSlide === carousel.length - 1 ? 0 : curentSlide + 1
                  )
                }
              />
              <div className='mobile'>
                <Dots
                  slideLength={carousel.length}
                  curentSilde={curentSlide}
                  slide={handleClick}
                />
              </div>
            </motion.div>
          </>
              )} */}
      </div>
    </div>
  );
};

export default AppWraper(About, "about", "app__about-sec");
