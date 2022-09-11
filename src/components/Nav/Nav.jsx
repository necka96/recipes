import React, { useState } from "react";
import { FcAbout, FcGallery, FcHome } from "react-icons/fc";
import { images } from "../../constants";
import { useTheme, useUpdateTheme } from "../../Helpers/ThemeContext";
import "./Nav.scss";
const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const darkThreme = useTheme();
  const updateTheme = useUpdateTheme();
  return (
    <nav className='app__nav'>
      <div className='app__nav-holder app__flex'>
        <div
          onClick={() => setToggle(!toggle)}
          className={
            toggle
              ? "app__navigation app__navigation-acitve"
              : "app__navigation"
          }
        >
          <span
            className={darkThreme ? "dark" : ""}
            style={{ "--i": 0, "--x": -1, "--y": -1 }}
          >
            <a href='#home'>
              <FcHome />
            </a>
          </span>
          <span
            style={{ "--i": 1, "--x": 0, "--y": -1 }}
            className={darkThreme ? "dark" : ""}
          >
            <a href='#about'>
              <FcAbout />
            </a>
          </span>
          <span
            style={{ "--i": 2, "--x": -1, "--y": 0 }}
            className={darkThreme ? "dark" : ""}
          >
            <a href='#recipes'>
              <img src={images.recipes} alt='recipes' />
            </a>
          </span>
          <span
            style={{ "--i": 3, "--x": 0, "--y": 0 }}
            className={darkThreme ? "dark" : ""}
          >
            <a href='#contact'>
              <img src={images.mail} alt='mail' />
            </a>
          </span>
          <span
            style={{ "--i": 4, "--x": 1, "--y": -1 }}
            className={darkThreme ? "dark" : ""}
          >
            <a href='#gallery'>
              <FcGallery />
            </a>
          </span>
          <span
            style={{ "--i": 5, "--x": 1, "--y": 0 }}
            className={darkThreme ? "dark" : ""}
          >
            <div onClick={updateTheme}>
              {!darkThreme ? (
                <img src={images.sun} alt='sun' />
              ) : (
                <img src={images.moon} alt='sun' />
              )}
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
