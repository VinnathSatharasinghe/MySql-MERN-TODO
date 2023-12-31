import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from "../Navbar/Navbar";
import "./sing.css";


function singup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = { ...errors };

    if (!name) {
      toast.error("Login Failed. Enter Username");

    } else {
      // newErrors.name = "";

      if (!email) {
        toast.error("Email is required");
      } else {
        // newErrors.email = "";

        if (!password) {
          toast.error("Password is required");
        } else {
          // newErrors.password = "";

          if (Object.values(newErrors).every((error) => error === "")) {
            axios
              .post("http://localhost:3000/aaa", { name, email, password })
              .then((result) => {
                console.log(result);
                toast.success("Registration Successful!");
              })
              .catch((err) => {
                console.log(err);
                toast.error("Registration failed. User Already Registerd.");
              });
              
          }
      
          setErrors(newErrors);

        }
      }

    }
  };

  return (
    <div>
      <Nav/>
      <div className="mainxx">
        <div className="subxx">
          <Form onSubmit={handleSubmit}>
            <h4 type="reg">Register</h4>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label>Username</Form.Label> 
              <br />
              <br />
              <input
                id="name"
                type="text1"
                placeholder="Enter Username"
                autoComplete="off "
                name="name"
                value={name}
                defaultValue={""}
                onChange={(e) => setName(e.target.value)}
              />
              <div className="text-danger">{errors.name}</div>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <br />
              <br />
              <input
                id="email"
                type="email1"
                value={email}
                placeholder="Enter Email"
                name="email"
                defaultValue={""}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="text-danger">{errors.email}</div>
              {/* <Form.Text className="text-muted"></Form.Text> */}
            </Form.Group>

            <br />

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <br />
              <br />
              <input
                id="password"
                type="password1"
                placeholder="Enter Password"
                name="password"
                value={password}
                defaultValue={""}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div className="text-danger">{errors.password}</div>
            </Form.Group>

            <Button variant="primary" type="submit111">
              Submit
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

          <Button variant="primary" type="login111">
            <a href="/home">Login</a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default singup;