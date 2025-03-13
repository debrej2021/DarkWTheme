import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";  // Ensure correct path

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

// TypeScript types for Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
