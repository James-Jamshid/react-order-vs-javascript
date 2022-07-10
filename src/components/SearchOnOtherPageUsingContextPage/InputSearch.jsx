import React, { useContext } from "react";
import { AppContext } from "./ContextPage";

const InputSearch = () => {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
      />
    </div>
  );
};

export default InputSearch;
