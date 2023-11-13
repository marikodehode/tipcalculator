import { useState } from "react";

const Button = ({id, children, onClick, active, setActive }) => {


  return (
    <button id={id} className={`tipbutton  ${active ? "active" : ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button