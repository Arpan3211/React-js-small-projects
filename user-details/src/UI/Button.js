import classes from "./Button.module.css";
import React from "react";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onclick}
    >
      {props.children}
    </button>
  );
};
export default Button;
