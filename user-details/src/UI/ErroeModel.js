import React from "react";
import classes from "./ErrorModel.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModel = (props) => {
  return (
    <div className={classes.backdrop} onclick={props.onError}>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>
            <h3>{props.massege}</h3>
          </p>
        </div>
        <footer className={classes.actions}>
          <Button onclick={props.onError}>Okey</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModel;
