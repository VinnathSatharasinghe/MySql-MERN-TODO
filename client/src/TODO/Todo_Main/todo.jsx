import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Nav from "../../Page/Navbar/Navbar";
import "../Todo_Main/todo_.css";

function todo() {
  const location = useLocation();
  const { name } = location.state;
  const { password } = location.state;
  const { uid } = location.state;

  const [body, setBody] = useState();
  const [title, setTitle] = useState();
  const [todos, setTodos] = useState([]);

  // const navigate = useNavigate();

  const [errors, setErrors] = useState({
    title: "",
    body: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    if (!title) {
      toast.error("No Task!. Enter Tasks");
    } else {
      if (Object.values(newErrors).every((error) => error === "")) {
        axios
          .post("http://localhost:3000/todo/add", { uid, title, body })
          .then((result) => {
            console.log(result);
            toast.success("Todo Successfully Added!");
          })
          .catch((err) => {
            console.log(err);
            toast.error("Todo failed. Work Already Registerd.");
          });
      }
      setErrors(newErrors);
    }
  };

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3000/todoo/${uid}`)
  //     .then((response) => {
  //       setTodos(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching todo list:", error);
  //     });
  // }, [uid]);


  useEffect(() => {
    // Fetch todo list data including user information
    axios
      .get(`http://localhost:3000/todo/uid/${uid}`)
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todo list:", error);
      });
  }, [uid]);




  const handleDelete = async (uid) => {
    try {
      await axios.delete(`http://localhost:3000/deletetodo/${uid}`);
      const updatedTodos = todos.filter((todo => todo.uid !== id));
      setTodos(updatedTodos);
      console.error("OK:");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div>
      <Nav />
      <div className="mainy">
        <div className="sub">
          <Form onSubmit={handleSubmit}>
            <h4 type="todo">Hi {name}</h4>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>User ID</Form.Label>
              <br />

              <input
                type="work1"
                placeholder=""
                autoComplete="off"
                name="name"
                defaultValue={uid}
                disabled
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>NAME</Form.Label>
              <br />

              <input
                type="work1"
                placeholder=""
                autoComplete="off"
                name="name"
                value={name}
                disabled
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>PASSWORD</Form.Label>
              <br />

              <input
                type="work1"
                placeholder=""
                autoComplete="off"
                name="name"
                value={password}
                disabled
              />
            </Form.Group>

            <h4 type="todo">{name}'S new TODO</h4>
            <br />

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>User ID </Form.Label>
              <br />

              <input
                type="work1"
                placeholder=""
                autoComplete="off"
                name="name"
                value={uid}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTodo">
              <Form.Label>TASK</Form.Label>
              <br />
            
              <input
                id="title"
                type="work1"
                autoComplete="off "
                name="title"
                value={title}
                defaultValue={""}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div className="text-danger">{errors.title}</div>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTodo">
              <Form.Label>BODY</Form.Label>
              <br />
              <input
                id="body"
                type="work1"
                autoComplete="off "
                name="body"
                value={body}
                defaultValue={""}
                onChange={(e) => setBody(e.target.value)}
              />
              <div className="text-danger">{errors.body}</div>
            </Form.Group>

            <Button variant="primary" type="submit123">
              Todo
            </Button>
          </Form>

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <div className="mainall">
        <div className="box1">
          <h3>{name}'s - Todo</h3>
          <br />
          <table className="tablex">
            <thead>
              <tr className="test">
                <th>Title</th>
                <th>Body</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo) => (
                <tr key={todo.uid}>
                  <td>{todo.title}</td>
                  <td>{todo.body}</td>
                  <td>
                    <Link to={`/update/task/${todo.uid}`} className="btnx1">
                      Edit
                    </Link>
                    <br />
                    <button
                      onClick={() => handleDelete(todo.uid)}
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

export default todo;
