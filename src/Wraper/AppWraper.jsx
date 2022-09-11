import React from "react";
import Nav from "../components/Nav/Nav";
import { useTheme } from "../Helpers/ThemeContext";

const AppWraper = (Compontent, id, className) =>
  function HOC() {
    const theme = useTheme();
    return (
      <div>
        <div
          id={id}
          className={
            theme
              ? `app__container ${className} active `
              : `app__container ${className} `
          }
        >
          <Compontent />

          <Nav />
        </div>
      </div>
    );
  };

export default AppWraper;
