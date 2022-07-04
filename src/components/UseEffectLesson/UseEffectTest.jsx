import React, { useState, useEffect } from "react";

const UseEffectTest = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false));
  }, []);
  return (
    <div>
      <div>
        {isLoading && <h1>Loading...</h1>}
        {data.map(({ id, title, url }) => (
          <div key={id}>
            <img src={url} alt="broken data" />
            <p>{title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UseEffectTest;
