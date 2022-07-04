import React, { useReducer } from "react";
import { Child, Container, Wrapper } from "./Styled";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
        showText: false,
        showTable: false,
      };
    case "DECREMENT":
      if (state.count === 0) return state;
      return {
        count: state.count - 1,
        showText: false,
        showTable: false,
      };
    case "TOGGLE":
      return {
        count: state.count,
        showText: !state.showText,
        showTable: false,
      };
    case "TOGGLE2":
      return {
        count: state.count,
        showText: false,
        showTable: !state.showTable,
      };
    default:
      return state;
  }
};

const ReducerBasic = () => {
  const [state, ditpatch] = useReducer(reducer, { count: 0, showText: false });
  return (
    <div>
      <Container>
        <h1>Reducer lesson by BeCoder company </h1>
        <h1>{state.count}</h1>

        <Wrapper>
          <button
            onClick={() => {
              ditpatch({ type: "INCREMENT" });
              ditpatch({ type: "TOGGLE" });
            }}
          >
            view
          </button>
          <button
            onClick={() => {
              ditpatch({ type: "DECREMENT" });
              ditpatch({ type: "TOGGLE2" });
            }}
          >
            view
          </button>
          <Child>
            {state.showTable && <div>by there!</div>}
            {state.showText && <div>hi there!</div>}
          </Child>
        </Wrapper>
      </Container>
    </div>
  );
};

export default ReducerBasic;
