import React, { useState } from "react";
import { Container, Prices, Wrapper } from "./index";

const Orders = ({ value }) => {
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
        <img src={value.lotteria.banner} alt="" />
        <p>{value.lotteria.name}</p>
        <Prices>
          <p>Total:{counter}</p>
          <p>{value.lotteria.price}</p>
        </Prices>
        <Wrapper>
          <button onClick={increment}>add</button>
          <button onClick={decrement}>remove</button>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Orders;
