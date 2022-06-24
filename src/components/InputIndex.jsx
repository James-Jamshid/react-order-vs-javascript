import React, { useState } from "react";

const InputIndex = () => {
  const [search, setSearch] = useState("search your burger");
  let onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input
        type="search"
        placeholder="search your burger"
        onChange={onChange}
      />
      <h1>{search}</h1>
    </div>
  );
};

export default InputIndex;
