import React, { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef(null);
  const handleClick = () => {
    console.log(inputRef.current.value);
    inputRef.current.value = "";
    // inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" placeholder="name" ref={inputRef} />
      <button onClick={handleClick}>Send</button>
    </div>
  );
};

export default UseRef;
