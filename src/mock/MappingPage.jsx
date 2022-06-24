import React from "react";
import { Family } from ".";

import burger from "./burgerdata.json";
import Orders from "./Orders";
// import MockIndex from "./MockIndex";
console.log("burger:", burger);

const MappingPage = () => {
  return (
    <div>
      <Family>
        {burger.data.burgers.map((value, key) => (
          <Orders value={value} key={key} />
        ))}
      </Family>
    </div>
  );
};

export default MappingPage;
