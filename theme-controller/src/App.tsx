import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import "./styles/theme.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Theme Switcher</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
