import React, { useState } from "react";
import { useImperativeHandle } from "react";
import { forwardRef } from "react";

const ChildButton = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);
  useImperativeHandle(ref, () => ({
    settingToggle() {
      setToggle(!toggle);
    },
  }));

  return (
    <div>
      <button>Child</button>
      {toggle && <p>Hello world</p>}
    </div>
  );
});
export default ChildButton;
