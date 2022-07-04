import axios from "axios";
import React, { useEffect } from "react";
import UseEffectTest from "./UseEffectTest";

const UseEffectLesson = () => {
  const [data, setData] = React.useState("");
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log(response.data);
        console.log("API is called");
      });
  }, []);
  return (
    <>
      <div>
        <div>{data}</div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          Click!
        </button>
      </div>

      {/* test */}

      {/* <UseEffectTest /> */}
    </>
  );
};

export default UseEffectLesson;
