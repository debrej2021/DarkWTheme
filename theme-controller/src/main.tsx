import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";  // Ensure the store path is correct
import App from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>  {/* Wraps the app */}
      <App />
    </Provider>
  </React.StrictMode>
);
