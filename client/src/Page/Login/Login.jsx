import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from "../Navbar/Navbar";
import "./login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/login", { name, password })
      .then((result) => {
        // console.log(result);

        if (result.data.message == "User not found") {
          toast.error("Login Failed. No User existed.", { autoClose: 5000 });
        } else if (result.data.message == "Login successful") {
          toast.success("Login successful!", { autoClose: 5000 });

          navigate("/todo", {
            state: {
              name: result.data.name,
              password: result.data.password,
              uid: result.data.uid,
            },
          });
        } else if (result.data.message == "Incorrect password") {
          toast.error("Login Failed. Incorrect Password");
        } else {
          toast.error("Login Failed. No record existed.");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Nav />
      <div className="mainx">
        <div className="formx">
          <Form onSubmit={handleSubmit}>
            <h4 type="login">Login now</h4>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <br />
              <input
                type="text11"
                placeholder="Enter Username"
                autoComplete="off"
                name="name"
                defaultValue={""}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <br />

              <input
                type="password11"
                placeholder="Enter Password"
                name="password"
                autoComplete="off"
                defaultValue={""}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>

            <Button onClick={handleSubmit} variant="primary" type="submit2">
              Login
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

          <Button variant="primary" type="login2">
            <a href="/home">Home</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
