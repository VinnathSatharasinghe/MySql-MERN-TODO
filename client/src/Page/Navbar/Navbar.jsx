import React from "react";
import "./Nav.css";

function CreativeNavbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <br />
        <a href="/home">T O D O (mysql)</a>
        
        
      </div>
      <ul className="nav-links">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/gg">Login</a>
        </li>
        <li>
          <a href="/sing">Singup</a>
        </li>
        <li>
          <a href="/todo_list">Todo</a>
        </li>
        <li>
          <a href="/user">User</a>
        </li>
      </ul>
    </nav>
  );
}

export default CreativeNavbar;
