import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeState = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  
  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeState;