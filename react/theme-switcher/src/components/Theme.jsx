import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
function Theme() {
  const { theme } = useContext(ThemeContext);
  return <div>Current Theme : {theme}</div>;
}

export default Theme;
