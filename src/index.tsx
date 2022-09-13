import React from "react";
import ReactDOM from "react-dom/client";
import App from "./containers/App";
import "./stylesheets/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className="main">
      <App />
    </div>
  </React.StrictMode>
);
