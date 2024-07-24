import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";
import {store} from "./redux/store"
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);

function changeBackgroundColor() {
  const colors = [
    "#4B2B30",
    "#2B4B30",
    "#2B304B",
    "#4B2B3A",
    "#304B2B",
    "#2B304B",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.body.style.backgroundColor = colors[randomIndex];
}

setInterval(changeBackgroundColor, 5 * 60 * 1000);
changeBackgroundColor();
