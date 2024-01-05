// Import necessary dependencies
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../../../../Page/Navbar/Navbar";
import "./uupdate.css";

function EditUser() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch the task data based on the ID
  useEffect(() => {
    axios
      .get(`http://localhost:3000/view/${id}`)
      .then((response) => {
        const user = response.data[0]; // Assuming there's only one task
        setName(user.name);
        setEmail(user.email);
      })
      .catch((error) => {
        console.error("Error fetching task details:", error);
      });
  }, []);

  const handleUp = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      await axios.put(`http://localhost:3000/update/user/${id}`, {
        name: name,
        email: email,
      });
      toast.success("Update successful!", { autoClose: 5000 });
      console.log("Task updated successfully!");
    } catch (error) {
      toast.error("Update unsuccessful!", { autoClose: 5000 });
    }
  };

  return (
    <div>
      <Nav />
      <div className="mainu">
        <div className="subu">
          <Form onSubmit={handleUp}>
            <h4 type="uupdate">Edit User</h4>
            <label>ID</label>
            <br />
            <input type="text" value={id} />
            <br />
            <label>Name</label>
            <br />
            <input
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label>Email</label>
            <br />
            <input
              id="email"
              name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <br />
            <br />
            {/* <Button type="submit">
              <a href="">User-Table</a>
            </Button> */}
           <Button type="submit">Save Changes</Button>
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
    </div>
  );
}

export default EditUser;

// Import necessary dependencies
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Nav from "../../../../Page/Navbar/Navbar";
// import "./uupdate.css";

// function EditUser() {
//   const { id } = useParams();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/view/${id}`)
//       .then((response) => {
//         const user = response.data.results; // Assuming there's only one task
//         setName(user.name);
//         setEmail(user.email);
//       })
//       .catch((error) => {
//         console.error("Error fetching task details:", error);
//       });
//   }, []);

//   const handleUpdate = async (e) => {
//     e.preventDefault(); // Prevents the default form submission behavior
//     try {
//       await axios.put(`http://localhost:3001/update/user/${id}`, {
//         name: name,
//         email: email,
//       });
//       toast.success("Update successful!", { autoClose: 5000 });
//       console.log("Task updated successfully!");
//     } catch (error) {
//       toast.error("Update UNsuccessful!", { autoClose: 5000 });
//       console.error("Error updating task:", error);
//     }
//   };

//   return (
//     <div>
//       <Nav />
//       <div className="mainu">
//         <div className="subu">
//           <Form onSubmit={handleUpdate}>
//             <h4 type="uupdate">Edit User</h4>
//             <label>ID</label>
//             <br />
//             <input
//             type="work111"
//             value={id} />
//             <br />
//             <label>Name</label>
//             <br />
//             <input
//               type="work111"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//             <br />
//             <label>Email</label>
//             <br />
//             <input
//               type="work111"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />

//             <br />
//             <br />
//             <Button type="submit">Save Changes</Button>
//           </Form>

//           <ToastContainer
//             position="bottom-right"
//             autoClose={5000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default EditUser;
