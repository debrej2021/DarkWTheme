import { createSlice } from "@reduxjs/toolkit";

// Define theme state type
interface ThemeState {
  theme: "light" | "dark";
}

// Load theme from localStorage or default to "light"
const initialState: ThemeState = {
  theme: (localStorage.getItem("theme") as "light" | "dark") || "light",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      console.log("Theme switched to:", state.theme); // ✅ Debug Redux state update
      localStorage.setItem("theme", state.theme); // Save theme to localStorage
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
