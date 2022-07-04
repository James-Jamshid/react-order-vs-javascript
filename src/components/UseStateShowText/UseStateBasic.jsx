import React, { useState } from "react";
import { Container } from "./Styled";

const UseStateBasic = () => {
  const [count, setCount] = useState(0);
  const [showText, setShowText] = useState(false);
  return (
    <div>
      <div>
        <Container>
          <h1>UseState Lesson by BeCoder company</h1>
          <h1>{count}</h1>
          <button
            onClick={() => {
              setCount(count + 1);
              setShowText(!showText);
            }}
          >
            click
          </button>
          {showText && <p>welcome!</p>}
        </Container>
      </div>
    </div>
  );
};

export default UseStateBasic;
