import React from "react";

const InputPage = ({ setUsername }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
    </div>
  );
};

export default InputPage;
