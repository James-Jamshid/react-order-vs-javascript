import React from "react";

import burger from "./burgerdata.json";
import Orders from "./Orders";
// import MockIndex from "./MockIndex";
console.log("burger:", burger);

const MappingPage = () => {
  return (
    <div>
      {burger.data.burgers.map((value, key) => (
        <Orders value={value} key={key} />
      ))}
    </div>
  );
};

export default MappingPage;
