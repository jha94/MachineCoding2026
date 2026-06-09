import { useState } from "react";
import { Context } from "./Context";
import Middle from "./Middle";

const Top = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme =()=> setTheme(theme === "light" ? "dark" : "light");
  return (
    <Context.Provider value={{ theme, toggleTheme }}>
      <Middle />
    </Context.Provider>
  );
};

export default Top;
