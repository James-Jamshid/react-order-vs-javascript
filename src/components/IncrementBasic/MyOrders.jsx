import React, { useState } from "react";
import { Container } from "./Styled";

const MyOrders = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <Container>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </Container>
    </div>
  );
};

export default MyOrders;
