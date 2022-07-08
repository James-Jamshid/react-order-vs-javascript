import React, { useLayoutEffect, useEffect } from "react";

const UseLayout = () => {
  // const [inputRef] =useRef(null)
  useEffect(() => {
    console.log("useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);

  return <div>UseLayout</div>;
};

export default UseLayout;
