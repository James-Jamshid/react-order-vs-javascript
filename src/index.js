import React from "react";
import ReactDOM from "react-dom/client";
// import MyOrders from "./components/IncrementBasic/MyOrders";
// import UseStateBasic from "./components/UseStateShowText/UseStateBasic";
// import ReducerBasic from "./components/ReducerPage/ReducerBasic";

import "./index.css";
// import MappingPage from "./mock/MappingPage";
import UseEffectLesson from "./components/UseEffectLesson/UseEffectLesson";
import UseRef from "./components/UseRefLesson/UseRef";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UseRef />
    {/* <UseEffectLesson />
    <MyOrders />
    <UseStateBasic />
    <ReducerBasic />
    <MappingPage /> */}
  </React.StrictMode>
);
