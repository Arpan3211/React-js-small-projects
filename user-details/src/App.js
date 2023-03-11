import "./App.css";
import AddUser from "./User/AddUser";
import UserList from "./User/UserList";
import React, { useState } from "react";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [
        ...prevList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div className="App">
      <AddUser onAdduser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
