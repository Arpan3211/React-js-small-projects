import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErroeModel";

const AddUser = (props) => {
  const [enterdUsername, setentredUsername] = useState("");
  const [enterdAge, setentredAge] = useState("");
  const [Error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        massege: "please enter a valid Name and Age ( no - empty value )",
      });
      return;
    }
    if (+enterdAge < 18) {
      setError({
        title: "Invalid Age",
        massege: "please enter a valid Age",
      });
      return;
    }
    props.onAdduser(enterdUsername, enterdAge);
    setentredUsername("");
    setentredAge("");
  };

  const UsernameChangeHandler = (event) => {
    setentredUsername(event.target.value);
  };
  const AgeChangeHandler = (event) => {
    setentredAge(event.target.value);
  };
  const Errorhandle = () => {
    setError(null);
  };

  return (
    <div>
      {Error && (
        <ErrorModel
          title={Error.title}
          massege={Error.massege}
          onError={Errorhandle}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">UserName</label>
          <input
            id="username"
            type="text"
            value={enterdUsername}
            onChange={UsernameChangeHandler}
          ></input>
          <label htmlFor="age">Age (Year)</label>
          <input
            id="age"
            type="number"
            value={enterdAge}
            onChange={AgeChangeHandler}
          ></input>
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </div>
  );
};
export default AddUser;
