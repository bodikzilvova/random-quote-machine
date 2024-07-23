import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
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
