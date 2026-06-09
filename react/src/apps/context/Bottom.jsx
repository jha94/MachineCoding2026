import { useContext } from "react";
import { Context } from "./Context";

const Bottom = () => {
  const { theme, toggleTheme } = useContext(Context);
  return (
    <div>
      <h2>{theme}</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Bottom;
