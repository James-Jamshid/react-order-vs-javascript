import React, { useState } from "react";
import InputPage from "./InputPage";
import RanderingPage from "./RanderingPage";

const Index = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <InputPage setUsername={setUsername} />
      <RanderingPage username={username} />
    </div>
  );
};

export default Index;
