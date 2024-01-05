const express = require("express");
const bodyParser = require("body-parser");
const db = require("./db"); // Adjust the path based on your file structure
const cors = require("cors"); // Import the cors middleware

const app = express();
const port = 3000;

// Use cors middleware
app.use(cors());
app.use(bodyParser.json());

// Define routes for CRUD operations

// view all users

app.get("/view", (req, res) => {
  // Sample query
  db.query("SELECT * FROM USER", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// view all todo

app.get("/view/todo", (req, res) => {
  // Sample query
  db.query("SELECT * FROM todo", (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

// user by uid

app.get("/view/:id", (req, res) => {
  const userId = req.params.id;

  // Check if the userId is provided
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  // Sample query to fetch a user by ID
  const getUserQuery = "SELECT * FROM user WHERE uid = ?";
  db.query(getUserQuery, [userId], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Check if any user was found
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found viewid" });
    }

    res.json(results); // Assuming you want to return the first user found
  });
});

//todo by tid

app.get("/todoo/:id", (req, res) => {
  const todoId = req.params.id;

  if (!todoId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  const getUserQuery = "SELECT * FROM todo WHERE tid = ?";
  db.query(getUserQuery, [todoId], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found viewid" });
    }
    res.json(results); // Assuming you want to return the first user found
    console.log(results);
  });
});



//todo by uid

app.get("/todo/uid/:id", (req, res) => {
  const todoId = req.params.id;

  if (!todoId) {
    return res.status(400).json({ error: "User ID is required" });
  }
  const getUserQuery = "SELECT * FROM todo WHERE uid = ?";
  db.query(getUserQuery, [todoId], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: "User not found viewid" });
    }
    res.json(results); // Assuming you want to return the first user found
    console.log(results);
  });
});



// updateeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee

app.put("/update/todo/:id", (req, res) => {
  const todoId = req.params.id;

  // Check if the todoId is provided
  if (!todoId) {
    return res.status(400).json({ error: "Todo ID is required" });
  }

  const { title, body } = req.body;

  // Sample query to update a todo by ID
  const updateTodoQuery = "UPDATE todo SET title = ?, body = ? WHERE tid = ?";
  db.query(updateTodoQuery, [title, body, todoId], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Check if any todo was updated
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Todo not found for update" });
    }

    res.json({ message: "Todo updated successfully" });
  });
});





app.put("/update/user/:id", (req, res) => {
  const userId = req.params.id;

  if (!userId) {
    return res.status(400).json({ error: "User ID is required" }),
    console.log("nooooo");
  }
  
  const { name, email } = req.body;
  const updateUserQuery = "UPDATE user SET name = ?, email = ? WHERE uid = ?";
  db.query(updateUserQuery, [name, email, userId], (error, result) => {
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" }),
      console.log("user not found");
    }
    res.json({ message: "User updated successfully" });
  });
});

// Your add todo

app.post("/todo/add", async (req, res) => {
  try {
    const { uid, title, body } = req.body;

    // Insert user into the database
    const insertTodoQuery =
      "INSERT INTO todo (uid, title, body) VALUES (?, ?, ?)";
    db.query(insertTodoQuery, [uid, title, body], (err, result) => {
      if (err) {
        console.error("Error inserting user into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log("User todo added successfully");
      res.status(201).json({ message: "Todo successfully" });
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Function to check if a user with the given username or email already exists
// function checkUserExists(title) {
//   return new Promise((resolve, reject) => {
//     const checkUserQuery = "SELECT * FROM todo WHERE title = ?";
//     db.query(checkUserQuery, [title], (err, result) => {
//       if (err) {
//         console.error("Error checking user existence:", err);
//         reject(err);
//       } else {
//         resolve(result.length > 0);
//       }
//     });
//   });
// }

// Delete query

app.delete("/deleteuser/:id", (req, res) => {
  const userId = req.params.id;

  const checkTodosQuery = "SELECT * FROM todo WHERE uid = ?";
  db.query(checkTodosQuery, [userId], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // If there are todos associated with the user, delete todos first
    if (result.length > 0) {
      const deleteTodoQuery = "DELETE FROM todo WHERE uid = ?";
      db.query(deleteTodoQuery, [userId], (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        // Check if any user was deleted
        if (result.affectedRows == 0) {
          return res.status(404).json({ error: "User not found" });
        }

        return res.json({ message: "Todo deleted successfully" });
      });
    } else {
      // No associated todos, proceed with user deletion
      const deleteUserQuery = "DELETE FROM user WHERE uid = ?";
      db.query(deleteUserQuery, [userId], (error, result) => {
        if (error) {
          console.error(error);
          return res.status(500).json({ error: "Internal Server Error" });
        }

        // Check if any user was deleted
        if (result.affectedRows === 0) {
          return res.status(404).json({ error: "User not found" });
        }

        return res.json({ message: "User deleted successfully" });
      });
    }
  });
});


// Delete todo query

app.delete("/deletetodo/:id", (req, res) => {
  const todoId = req.params.id;

  if (!todoId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  // Sample query to delete a user by ID
  const deleteTodoQuery = "DELETE FROM todo WHERE tid = ?";
  db.query(deleteTodoQuery, [todoId], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Check if any user was deleted
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  });
});

// Your signup route

app.post("/aaa", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if username or email already exists
    const userExists = await checkUserExists(name, email);
    if (userExists) {
      return res.status(409).json({ error: "User already exists" });
    }

    // Insert user into the database
    const insertUserQuery =
      "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
    db.query(insertUserQuery, [name, email, password], (err, result) => {
      if (err) {
        console.error("Error inserting user into the database:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      console.log("User registered successfully");
      res.status(201).json({ message: "User registered successfully" });
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Function to check if a user with the given username or email already exists
function checkUserExists(name, email) {
  return new Promise((resolve, reject) => {
    const checkUserQuery = "SELECT * FROM user WHERE name = ? OR email = ?";
    db.query(checkUserQuery, [name, email], (err, result) => {
      if (err) {
        console.error("Error checking user existence:", err);
        reject(err);
      } else {
        resolve(result.length > 0);
      }
    });
  });
}

app.post("/login", async (req, res) => {
  try {
    const { name, password } = req.body;

    // Fetch user from the database based on the name
    const getUserQuery = "SELECT * FROM user WHERE name = ?";
    db.query(getUserQuery, [name], (err, result) => {
      if (err) {
        console.error("Error fetching user:", err);
        return res.status(500).json({ error: "Internal Server Error" });
      }

      // Check if the user exists
      if (result.length === 0) {
        return res.status(401).json({ message: "User not found" });
      }

      // Compare the provided password with the stored password
      const storedPassword = result[0].password;

      if (password === storedPassword) {
        // Passwords match, user is authenticated
        res.status(200).json({
          message: "Login successful",
          name: req.body.name,
          password: req.body.password,
          uid: result[0].uid,
        });
      } else {
        // Passwords do not match
        res.status(401).json({ message: "Incorrect password" });
      }
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete query

app.delete("/deleteuser/:id", (req, res) => {
  const userId = req.params.id;

  // Check if the userId is provided
  if (!userId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  // Sample query to delete a user by ID
  const deleteUserQuery = "DELETE FROM USER WHERE uid = ?";
  db.query(deleteUserQuery, [userId], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Check if any user was deleted
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  });
});

// Delete todo query

app.delete("/deletetodo/:id", (req, res) => {
  const todoId = req.params.id;

  // Check if the userId is provided
  if (!todoId) {
    return res.status(400).json({ error: "User ID is required" });
  }

  // Sample query to delete a user by ID
  const deleteTodoQuery = "DELETE FROM todo WHERE tid = ?";
  db.query(deleteTodoQuery, [todoId], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }

    // Check if any user was deleted
    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({ message: "User deleted successfully" });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
