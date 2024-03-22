// What is Sequelize?
// An Object Relational Mapper (ORM) used to interact with databases
// This means we can translate database records to javascript objects
const Sequelize = require("sequelize");

let host = "localhost";
let database = "school";
let user = "root";
let password = "password";

// create a connection to the database
const sequelize = new Sequelize(database, user, password, {
  host: host,
  dialect: "mariadb",
});

// export our sequelize connection instance
module.exports = sequelize;
