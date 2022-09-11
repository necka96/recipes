import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Pagenation from "../../components/Pagenation/Pagenation";
import { client } from "./../../client";
import AppWraper from "./../../Wraper/AppWraper";
import "./Recipes.scss";
const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage, setPostPerPage] = useState(4);
  const [animate, setAnimate] = useState({ y: 0, opacity: 1 });

  function post(item) {
    setAnimate([{ y: 100, opacity: 0 }]);
    setTimeout(() => {
      setAnimate([{ y: 0, opacity: 1 }]);
      setCurrentPage(item);
    }, 500);
  }
  useEffect(() => {
    const query = '*[_type == "recipes"]';

    client.fetch(query).then((data) => {
      setRecipes(data);
    });
  }, []);

  const lastPostIndex = currentPage * postPerPage;
  const firstPostIndex = lastPostIndex - postPerPage;
  const currentPost = recipes.slice(firstPostIndex, lastPostIndex);
  return (
    <div className='app__recipes-sec app__flex'>
      <motion.h2
        className='head-text'
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        Recipes
      </motion.h2>
      <motion.div
        className='app__recipes  '
        animate={animate}
        transition={{ duration: 0.5 }}
      >
        {currentPost.map((item, index) => (
          <div key={index + item}>
            {" "}
            <Card item={item} />
          </div>
        ))}
      </motion.div>
      <Pagenation
        totalPost={recipes.length}
        postPerPage={postPerPage}
        post={post}
        currentPage={currentPage}
      />
    </div>
  );
};

export default AppWraper(Recipes, "recipes");
