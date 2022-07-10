import React, { useRef } from "react";
import ChildButton from "./ChildButton";

const ParentButton = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.settingToggle();
        }}
      >
        Parents
      </button>
      <ChildButton ref={buttonRef} />
    </div>
  );
};

export default ParentButton;
