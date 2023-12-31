import React, { useEffect, useState } from "react";
import Nav from "../../../Page/Navbar/Navbar";
import axios from "axios";
import "../todo-list/list.css";
import { Link } from "react-router-dom";

function TodoList() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/viewtask")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todo list:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/deletetask/${id}`);
      const updatedTodos = todos.filter((todo) => todo._id !== id);
      setTodos(updatedTodos);
      console.error("OK:");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <Nav />
      <div className="mainall">
        <div className="box1">
          <h3>Todo List</h3>
          <br />
          <table className="tablex">
            <thead>
              <tr className="test">
                <th>Todo Title</th>
                <th>Todo Body</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo._id}>
                  <td>{todo.title}</td>
                  <td>{todo.body}</td>
                  <td>
                    <Link to={`/update/task/${todo._id}`} className="btnx1">
                      Edit
                    </Link>
                    <br />
                    <button
                      onClick={() => handleDelete(todo._id)}
                      className="btnx1"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TodoList;