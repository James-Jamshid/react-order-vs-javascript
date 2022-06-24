import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import MappingPage from "./mock/MappingPage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MappingPage />
  </React.StrictMode>
);
