import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import Button from "./Button";
import "./Container.css";
import Theme from "./Theme";

function Container() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`app ${theme}`}>
      <Button />
      <Theme />
    </div>
  );
}

export default Container;
