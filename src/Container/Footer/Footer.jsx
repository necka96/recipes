import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { images } from "../../constants";
import AppWraper from "../../Wraper/AppWraper";
import { client } from "./../../client";
import { useTheme } from "./../../Helpers/ThemeContext";
import "./Footer.scss";
const Footer = () => {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [date, setDate] = useState(null);
  const darkTheme = useTheme();
  const { name, lastName, email, message } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      lastName: lastName,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmit(true);
    });
  };
  useEffect(() => {
    setDate(new Date().getFullYear());
  }, []);
  return (
    <div className='app__footer-sec'>
      <div className='app__footer-holder app__grid'>
        <div className='app__form-holder'>
          <motion.h2
            className='head-text'
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 0.5 }}
          >
            Contact us{" "}
          </motion.h2>
          {!isFormSubmit ? (
            <motion.form
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 0.5, delayChildren: 0.5 }}
              onSubmit={handleSubmit}
              className='app__footer-form app__flex '
            >
              <div className='app__flex'>
                <input
                  type='text'
                  className={`p-text ${darkTheme ? "dark" : ""}`}
                  placeholder='Your Name'
                  name='name'
                  value={name}
                  required
                  onChange={handleChange}
                />
                <input
                  type='text'
                  className={`p-text ${darkTheme ? "dark" : ""}`}
                  placeholder='Your Last Name'
                  name='lastName'
                  value={lastName}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className='app__flex'>
                <input
                  type='email'
                  className={`p-text ${darkTheme ? "dark" : ""}`}
                  placeholder='Your Email'
                  name='email'
                  value={email}
                  required
                  onChange={handleChange}
                />
              </div>
              <div>
                <textarea
                  className={`p-text ${darkTheme ? "dark" : ""}`}
                  placeholder='Your message'
                  name='message'
                  value={message}
                  required
                  onChange={handleChange}
                />
              </div>
              <button>
                <span> {!loading ? "Send Message" : "Sending..."}</span>
              </button>
            </motion.form>
          ) : (
            <div className='img-holder app__flex'>
              <motion.img
                src={images.sendMail}
                alt='mail-message'
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.5 }}
              />
              <motion.h3
                whileInView={{ scale: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='head-text'
                style={{ color: "var(--white-color)" }}
              >
                Your message is send
              </motion.h3>
            </div>
          )}
        </div>
        <motion.div
          className='app__text-holder app__grid'
          whileInView={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className='mail app__flex'
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <AiOutlineMail />
              <a href='mailto:name@example.com' className='p-text'>
                name@example.com
              </a>
            </div>
          </motion.div>
          <motion.div
            className='phone app__flex'
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <AiOutlinePhone />
              <a href='tel:+381612319277' className='p-text'>
                +381612319277
              </a>
            </div>
          </motion.div>
          <motion.div
            className='address app__flex'
            whileHover={{ y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <GoLocation />
              <span className='p-text'>Name of the strits</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className='app__social-icon-holder'
        whileInView={{ y: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        <div className='app__icon app__flex'>
          <div className='app__flex'>
            <a
              href='https://www.facebook.com/'
              target='_blank'
              rel='noreferrer'
            >
              {" "}
              <AiFillFacebook />
            </a>
          </div>
          <div className='app__flex'>
            <a
              href='https://www.instagram.com/'
              rel='noreferrer'
              target='_blank'
            >
              <AiOutlineInstagram />
            </a>
          </div>
        </div>
        <p className='p-text'>
          Copyright © {date} Recepies all rights reserved | Made with{" "}
          <span style={{ color: "red" }}>♥</span> by{" "}
          <a
            href='https://nemanjadjordjevicportfolio.netlify.app/'
            target='_blank'
            rel='noreferrer'
            className={darkTheme ? "dark" : ""}
          >
            Nemanja Djordjevic
          </a>{" "}
        </p>
      </motion.div>
    </div>
  );
};

export default AppWraper(Footer, "contact");
