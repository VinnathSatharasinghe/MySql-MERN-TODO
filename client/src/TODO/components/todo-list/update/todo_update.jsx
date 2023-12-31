import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../../../../Page/Navbar/Navbar";
import './t-update.css'

function EditTask() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Fetch the task data based on the ID
  useEffect(() => {
    axios
      .get(`http://localhost:3001/viewtaskone/${id}`)
      .then((response) => {
        const list = response.data.list[0]; // Assuming there's only one task
        setTitle(list.title);
        setBody(list.body);
      })
      .catch((error) => {
        console.error("Error fetching task details:", error);
      });
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    try {
      await axios.put(`http://localhost:3001/update_task/${id}`, {
        title: title,
        body: body,
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
      <div className="maint">
        <div className="subt">
          <Form onSubmit={handleEdit}>
            <h4 type="update">Update Profile </h4>
            <label> Task-ID</label>
            <br />
            <input  
             type="work11"
             value={id} />
            <br />
            <label>Title</label>
            <br />
            <input
              id="title"
              name="title"
              type="work11"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <br />
            <label>Body</label>
            <br />
            <input
              id="body"
              type="work11"
              name="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <br />
            <br />
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

export default EditTask;
