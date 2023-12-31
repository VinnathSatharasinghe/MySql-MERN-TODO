import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

function InterfaceMysql() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const registerAa = (e) => {
    e.preventDefault();

    axios
    .post("http://localhost:3000/aaa", { name, email, password })
    .then((result) => {
      console.log(result);
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  };

  return (
    <div>
      <Form onSubmit={registerAa}>
        <h4>Registration</h4>
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
        <label>Email-----</label>
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label>Password-</label>
        <input
          type="text" // Change to password type for security
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />

        <Button variant="primary" type="submit2">
          Login
        </Button>
      </Form>

      <br />
      <br />
      {/* <button onClick={register}>Register</button> */}
      <br />
      <br />
      <button>
        <a href="/log">Login</a>
      </button>
    </div>
  );
}

export default InterfaceMysql;

// import axios from "axios";
// import React, { useState } from "react";

// function interface_mysql() {

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const register = () => {
//     axios
//       .post("http://localhost:3000/aa", {
//         name: name,
//         email: email,
//         password: password,
//       })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.error("Error during registration:", error);
//       });
//   };

//   return (
//     <div>
//       <h4>Registration</h4>
//       <br />
//       <label>Username</label>
//       <input
//         type="text"
//         onChange={(e) => {
//           setName(e.target.value);
//         }}
//       />
//       <br />
//       <br />
//       <label>Email-----</label>
//       <input
//         type="text"
//         onChange={(e) => {
//           setEmail(e.target.value);
//         }}
//       />
//       <br />
//       <br />
//       <label>Password-</label>
//       <input
//         type="text"
//         onChange={(e) => {
//           setPassword(e.target.value);
//         }}
//       />
//       <br />
//       <br />
//       <button onClick={register}>Add</button>
//       <br />
//       <br />
//       <button>
//             <a href="/log">Login</a>
//           </button>
//     </div>
//   );
// }

// export default interface_mysql;
