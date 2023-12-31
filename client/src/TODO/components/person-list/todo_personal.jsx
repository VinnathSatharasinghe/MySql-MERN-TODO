import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../../Page/Login/Login.css";
import Nav from "../../../Page/Navbar/Navbar";
import { useLocation } from "react-router-dom";
import "../todo-list/list.css";

function SodoList() {
  const [sodos, setSodos] = useState([]);

  const location = useLocation();
  const { id } = location.state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/viewtask/${id}`
        );
        setSodos(response.data.list);
        console.log("Todo user fetched:", response.data);
      } catch (error) {
        console.error("Error fetching user list:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      <Nav />
      <div className="mainall">
        <div className="box1">
          <h2>Personal List</h2>

          <br />
          <table className="tablex">
            <thead>
              <tr className="test">
                <th>Task</th>
                <th>Body</th>
              
              </tr>
            </thead>
            <tbody>
              {sodos.map((sodo1) => (
                <tr key={sodo1.id}>
                  <td>{sodo1.title}</td>
                  <td>{sodo1.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SodoList;
