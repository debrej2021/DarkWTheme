import React, { createContext, useContext, useState, useEffect } from "react";

// ✅ Define Theme Context Type
interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

// ✅ Create Context
const ThemeContext = createContext<ThemeContextType | null>(null);

// ✅ Theme Provider Component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Store theme in localStorage to persist user preference
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// ✅ Custom Hook for Theme Context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
