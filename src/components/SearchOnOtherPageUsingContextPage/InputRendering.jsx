import React, { useContext } from "react";
import { AppContext } from "./ContextPage";

const InputRendering = () => {
  const { username } = useContext(AppContext);
  return <div>InputRendering: {username}</div>;
};

export default InputRendering;
