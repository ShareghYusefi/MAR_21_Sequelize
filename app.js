// import express
const express = require("express");
// import created sequelize instance
const sequelize = require("./config");
// import student routes
const studentRoutes = require("./routes/student");

// test the connection to the database
sequelize
  .sync() // sync() will create the table if it does not exist
  .then(() => console.log("connected to database!"))
  .catch((error) => console.log(error));

// create an instance of express server
const app = express();

// json data middleware
app.use(express.json());
// form data middleware
app.use(express.urlencoded({ extended: true }));

// use student routes
app.use(studentRoutes);

// process is a object that represents the current nodejs process
// process.env is an object that contains current environment variables
// process.env.PORT is an environment variable that is set by the hosting service
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is running on port 3000");
});
