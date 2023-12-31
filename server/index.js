const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");

const app = express();
const port = 3001;

// Create a connection pool
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "tododb",
});

// Middleware to parse JSON
app.use(bodyParser.json());

// Check the database connection
db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to database:", err);
  } else {
    console.log("Database connected!");
    connection.release();
  }
});

// Define routes for CRUD operations

app.get("/", (req, res) => {
  // Sample query
  db.query("SELECT * FROM USER", (error, results, fields) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
    res.json(results);
  });
});

app.post("/ggcdc", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "INSERT INTO USER ( name, email, password) VALUES (?,?,?)",
    [name, email, password],
    (err, result) => {
      if (result) {
        res.send(result);
      } else {
        res.send({ message: "enter details!" });
      }
    }
  );
});

app.post("/logidcdzcn", (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  con.query(
    "SELECT * FROM user WHERE name = ? AND password = ?",
    [name, password],
    (err, result) => {
      if (err) {
        req.setEncoding({ err: err });
      } else {
        if (result.length > 0) {
          res.send(result);
        } else {
          res.send({ message: "enter details" });
        }
      }
    }
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// var express = require("express");
// var app = express();
// var connection = require('./mysqldb.js');

// app.get('/', function(req, res) {
//   let sql = "SELECT * FROM USER";
//   connection.query(sql, function(err, results){
//     if (err) throw err;
//     res.send(results);
//   });
//   res.send("helxxlo");
// });

// app.listen(3002, function(){
//   console.log("Server is Running on PORT - 3002");
//   connection.connect(function(err){
//     if(err){
//       console.log("Database error!");
//     }else{
//       console.log("Database Connected!");
//     }

//   })
// });

// const User = require("./mongo_learn/models/user");
// const List = require("./mongo_learn/models/todo");
// const TodoModel = require("./mongo_learn/models/todo");
// const UserModel = require("./mongo_learn/models/user");

// mongoose.connect(
//   "mongodb+srv://vinnath:acerlaptop111@cluster0.acbjy23.mongodb.net/?retryWrites=true&w=majority"
// );

// app.use(bodyParser.json());
