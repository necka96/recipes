import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import AppWraper from "../../Wraper/AppWraper";
import { client, urlFor } from "./../../client";
import "./Galery.scss";
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [gallery, setGallery] = useState([]);
  const [gallerydFilter, setGallerydFilter] = useState([]);

  useEffect(() => {
    const query = '*[_type == "gallery"]';
    client.fetch(query).then((data) => {
      setGallery(data);
      setGallerydFilter(data);
    });
  }, []);
  const handleClick = (item) => {
    setActiveFilter(item);
    if (item === "all") {
      setGallerydFilter(gallery);
    } else {
      setGallerydFilter(gallery.filter((tags) => tags.tags.includes(item)));
    }
  };
  return (
    <div className='app__gallery-sec'>
      <motion.h2
        className='head-text'
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 0.5 }}
      >
        Gallery
      </motion.h2>
      <div className='app__gallery-filter'>
        {["all", "ice cream", "cakes", "muffins", "pancakes"].map(
          (item, index) => (
            <div
              className={`app__gallery-filter-item p-text app__flex ${
                activeFilter === item ? "item-active" : ""
              }`}
              onClick={() => handleClick(item)}
              key={Math.random()}
            >
              {item}
            </div>
          )
        )}
      </div>
      <LayoutGroup>
        <motion.div className='app__gallery-items app__grid' layout>
          <AnimatePresence>
            {gallerydFilter.map((item, index) => (
              <motion.div
                className='app__galery-item'
                layout
                whileHover={{ scale: 0.9 }}
                transition={{ duration: 0.5 }}
                key={Math.random()}
              >
                <img src={urlFor(item.image)} alt={item.nameOfImg} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
};

export default AppWraper(Gallery, "gallery");
