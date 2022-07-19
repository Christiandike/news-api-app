import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <button className="page-btn" onClick={onClick}>
      {" "}
      {text}{" "}
    </button>
  );
};

export default Button;
