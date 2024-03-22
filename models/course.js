// import sequelize object for additional functions
const Sequelize = require("sequelize");
// import our instance of sequelize
const sequelize = require("../config");

const Course = sequelize.define(
  "Course",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

module.exports = Course;
