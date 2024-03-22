// import express
const express = require("express");
// import created sequelize instance
const sequelize = require("./config");
// import student model
const Student = require("./models/student");

// test the connection to the database
sequelize
  .sync() // sync() will create the table if it does not exist
  .then(() => console.log("connected to database!"))
  .catch((error) => console.log(error));

// create an instance of express server
const app = express();

// welcome page
app.get("/students", function (req, res) {
  //   get students from the database
  Student.findAll()
    .then((students) => {
      res.send(students);
    })
    .catch((error) => {
      console.log(error);
    });
});

// listen for requests on port 3000
app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
