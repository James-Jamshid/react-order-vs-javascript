import React from "react";
import ReactDOM from "react-dom/client";
import ContextPage from "./components/SearchOnOtherPageUsingContextPage/ContextPage";
// import ParentButton from "./components/ButtonsInTwoPage/ParentButton";
// import Index from "./components/UseStateSearchOnOtherPages/Index";
// import MyOrders from "./components/IncrementBasic/MyOrders";
// import UseStateBasic from "./components/UseStateShowText/UseStateBasic";
// import ReducerBasic from "./components/ReducerPage/ReducerBasic";

import "./index.css";
// import MappingPage from "./mock/MappingPage";
// import UseEffectLesson from "./components/UseEffectLesson/UseEffectLesson";
// import UseRef from "./components/UseRefLesson/UseRef";
// import InputIndex from "./components/MockDataSearch/InputIndex";
// import UseLayout from "./components/UseLayoutEffectLesson/UseLayout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <UseRef />
    <InputIndex />
    <UseEffectLesson />
    <MyOrders />
    <UseStateBasic />
    <ReducerBasic />
    <MappingPage /> */}
    {/* <UseLayout /> */}
    {/* <Index /> */}
    {/* <ParentButton /> */}
    <ContextPage />
  </React.StrictMode>
);
