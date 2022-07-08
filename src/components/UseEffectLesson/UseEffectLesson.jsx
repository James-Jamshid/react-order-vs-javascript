import axios from "axios";
import React, { useState, useEffect } from "react";

const UseEffectLesson = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
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
    <div>
      <>
        <h1>{data}</h1>
        <h1>{count}</h1>
        <div>
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            click
          </button>
        </div>
      </>
    </div>
  );
};

export default UseEffectLesson;
