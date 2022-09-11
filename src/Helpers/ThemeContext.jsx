import React, { useContext, useState } from "react";

const Theme = React.createContext();
const UpdateTheme = React.createContext();

export const useTheme = () => {
  return useContext(Theme);
};

export const useUpdateTheme = () => {
  return useContext(UpdateTheme);
};

const ThemeContext = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const changeTheme = () => {
    setDarkTheme(!darkTheme);
  };

  return (
    <Theme.Provider value={darkTheme}>
      <UpdateTheme.Provider value={changeTheme}>
        {children}
      </UpdateTheme.Provider>
    </Theme.Provider>
  );
};

export default ThemeContext;
