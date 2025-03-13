import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../store/themeSlice";
import { RootState } from "../store/store";

const ThemeToggle: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.classList.add("theme-transition");

    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);

    const timeout = setTimeout(() => {
      document.body.classList.remove("theme-transition");
    }, 500);

    return () => clearTimeout(timeout);
  }, [theme]);

  return (
    <button onClick={() => dispatch(toggleTheme())}>
      <span className="icon">{theme === "light" ? "🌞" : "🌙"}</span>
      Switch to {theme === "light" ? "Dark" : "Light"} Mode
    </button>
  );
};

export default ThemeToggle;
