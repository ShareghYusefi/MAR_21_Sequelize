// import express
const express = require("express");
// import mysql2
const mysql = require("mysql2");
// import config
const config = require("./config");

// create a connection to the database
const pool = mysql.createPool(config.database);

// create an instance of express server
const app = express();

// welcome page
app.get("/students", function (req, res) {
  // get students from the database
  pool.query("select * from students", (error, results, fields) => {
    if (error) throw error;
    // send students as a response
    res.send(results);
  });
});

// listen for requests on port 3000
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
