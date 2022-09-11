import React, { useEffect, useState } from "react";
import "./App.scss";
import About from "./Container/About/About";
import Footer from "./Container/Footer/Footer";
import Gallery from "./Container/Gallery/Gallery";
import Header from "./Container/Header/Header";
import Recipes from "./Container/Recipes/Recipes";
import Preloader from "./Wraper/Preloader";
const App = () => {
  const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    const time = setTimeout(() => {
      setPreloader(false);
    }, 2000);

    return () => {
      clearTimeout(time);
      setPreloader(false);
    };
  }, []);

  return (
    <Preloader loading={preloader}>
      <Header />
      <About />
      <Gallery />
      <Recipes />
      <Footer />
    </Preloader>
  );
};

export default App;
