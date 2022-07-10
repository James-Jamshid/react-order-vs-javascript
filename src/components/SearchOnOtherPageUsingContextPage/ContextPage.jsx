import React, { createContext, useState } from "react";
import InputSearch from "./InputSearch";
import InputRendering from "./InputRendering";
export const AppContext = createContext(null);

function ContextPage() {
  const [username, setUsername] = useState("");
  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <InputSearch /> <InputRendering />
    </AppContext.Provider>
  );
}

export default ContextPage;
