import { motion } from "framer-motion";
import React from "react";
import "./Preloader.scss";
const Preloader = ({ loading, children }) => {
  if (loading) {
    const icon = {
      hidden: {
        pathLength: 0,
        fill: "#rgba(208, 124, 64, 0.1)",
      },
      visible: {
        pathLength: 1,
        fill: "#rgb(208, 124, 64)",
      },
    };
    const icon2 = {
      hidden: {
        pathLength: 0,
        fill: "rgb(205, 151, 112, 0.1)",
      },
      visible: {
        pathLength: 1,
        fill: "rgb(205, 151, 112)",
      },
    };
    const icon3 = {
      hidden: {
        pathLength: 0,
        fill: "rgb(193, 115, 59,0.1)",
      },
      visible: {
        pathLength: 1,
        fill: "rgb(193, 115, 59)",
      },
    };
    const icon4 = {
      hidden: {
        pathLength: 0,
        fill: "rgb(191, 140, 104,0.1)",
      },
      visible: {
        pathLength: 1,
        fill: "rgb(191, 140, 104)",
      },
    };
    const icon5 = {
      hidden: {
        pathLength: 0,
        fill: "rgb(244, 180, 89,0.1)",
      },
      visible: {
        pathLength: 1,
        fill: "rgb(244, 180, 89)",
      },
    };
    const icon6 = {
      hidden: {
        pathLength: 0,
        fill: "rgb(195, 144, 71,0.1)",
      },
      visible: {
        pathLength: 1,
        fill: "rgb(195, 144, 71)",
      },
    };

    return (
      <div className='preloader'>
        <div className='box'>
          <motion.svg
            viewBox='0 0 290 290'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='item'
          >
            <g clip-path='url(#clip0_103_67)'>
              <motion.path
                d='M36.242 158.561H253.697L226.515 285.409H63.424L36.242 158.561Z'
                variants={icon}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <motion.path
                d='M140.159 285.409H149.5L154.03 167.621H135.909L140.159 285.409ZM108.727 285.409H117.788V167.621H99.667L108.727 285.409ZM63.424 167.621L81.545 285.409H90.606L81.545 167.621H63.424V167.621ZM172.152 285.409H181.213L190.274 167.621H172.153V285.409H172.152ZM208.394 167.621L199.333 285.409H208.394L226.515 167.621H208.394V167.621Z'
                variants={icon2}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <motion.path
                d='M27.182 158.561L54.373 285.409H126.822L253.698 158.561H27.182V158.561Z'
                variants={icon3}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <motion.path
                d='M154.03 167.621H135.909L139.687 272.543L150.406 261.824L154.03 167.621Z'
                variants={icon4}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <motion.path
                d='M99.667 167.621L108.727 285.409H117.788V167.621H99.667Z'
                variants={icon4}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <motion.path
                d='M190.273 167.621H172.152V240.088L185.742 226.497L190.273 167.621Z'
                variants={icon4}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <motion.path
                d='M63.424 167.621L81.545 285.409H90.606L81.545 167.621H63.424Z'
                variants={icon4}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <motion.path
                d='M226.515 167.621H208.394L205.377 206.872L223.226 189.031L226.515 167.621Z'
                variants={icon4}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <motion.path
                d='M289.939 136.181C289.939 106.752 260.682 105.801 260.682 105.801L260.918 100.718C260.918 58.776 229.895 22.507 189.847 22.507C182.834 22.507 174.616 25.878 168.174 27.835C160.735 13.99 146.727 4.53 130.464 4.53C111.509 4.53 96.396 17.315 90.443 35.037L86.982 34.919C54.962 34.919 27.019 59.573 27.019 90.325C27.019 95.598 29.819 100.962 31.241 105.81H28.994C12.975 105.81 0 119.41 0 136.19V146.311C0 163.1 12.984 176.401 28.994 176.401C37.547 176.401 45.149 173.574 50.459 167.413H65.509C70.819 173.583 78.429 176.401 86.974 176.401C95.527 176.401 103.129 173.574 108.439 167.413H123.498C128.808 173.583 136.409 176.401 144.963 176.401C153.516 176.401 161.118 173.574 166.428 167.413H181.478C186.797 173.583 194.389 176.401 202.943 176.401C211.487 176.401 219.098 173.574 224.408 167.413H239.449C244.759 173.583 252.369 176.401 260.914 176.401C276.933 176.401 289.917 163.091 289.917 146.311C289.912 146.311 289.939 136.181 289.939 136.181Z'
                variants={icon5}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
              <motion.path
                d='M77.015 113.258C69.513 113.258 63.424 119.338 63.424 126.849C63.424 134.36 69.513 140.44 77.015 140.44C84.517 140.44 90.606 134.351 90.606 126.849C90.606 119.347 84.517 113.258 77.015 113.258ZM104.197 67.955C96.695 67.955 90.606 74.035 90.606 81.546C90.606 89.057 96.695 95.137 104.197 95.137C111.699 95.137 117.788 89.057 117.788 81.546C117.788 74.035 111.699 67.955 104.197 67.955ZM181.212 58.894C171.209 58.894 163.091 67.012 163.091 77.015C163.091 87.027 171.209 95.136 181.212 95.136C191.215 95.136 199.333 87.027 199.333 77.015C199.333 67.012 191.215 58.894 181.212 58.894ZM221.985 113.258C214.483 113.258 208.394 119.347 208.394 126.849C208.394 134.351 214.483 140.44 221.985 140.44C229.487 140.44 235.576 134.351 235.576 126.849C235.576 119.347 229.487 113.258 221.985 113.258ZM144.97 113.258C139.959 113.258 135.909 117.317 135.909 122.319C135.909 127.33 139.959 131.38 144.97 131.38C149.981 131.38 154.031 127.33 154.031 122.319C154.03 117.308 149.98 113.258 144.97 113.258Z'
                variants={icon6}
                initial='hidden'
                animate='visible'
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                }}
              />
            </g>
            <defs>
              <clipPath id='clip0_103_67'>
                <rect width='289.939' height='289.939' fill='white' />
              </clipPath>
            </defs>
          </motion.svg>
        </div>
      </div>
    );
  }

  return children;
};

export default Preloader;
