import axios from "axios";
import React, { useState } from "react";

function Login_mysql() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    axios
      .post("http://localhost:3000/login", {
        name: name,
        password: password,
      })
      .then((responce) => {
        console.log(responce);
      });
  };

  return (
    <div>
      <h4>Login</h4>
      <br />
      <br />
      <label>Username</label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <label>Password-</label>
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={login}>Add</button>
      
    </div>
  );
}

export default Login_mysql;
