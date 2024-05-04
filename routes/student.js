const Student = require("../models/student");
// create a router instance/object to define our routes
const router = require("express").Router();

// get all students
router.get("/students", function (req, res) {
  //   get students from the database
  Student.findAll()
    .then((students) => {
      res.send(students);
    })
    .catch((error) => {
      res.send(error, 500);
    });
});

// get a student by id
router.get("/students/:id", function (req, res) {
  // find the student with given id
  Student.findByPk(parseInt(req.params.id))
    .then((student) => {
      // if the student is a truthy value
      if (student) {
        res.send(student);
      } else {
        res.send("Student not found", 404);
      }
    })
    .catch((error) => {
      res.send(error, 500);
    });
});

// create a student record in database
router.post("/students", function (req, res) {
  // create a new student object
  const newStudent = {
    name: req.body.name,
    grade: req.body.grade,
    age: req.body.age,
    level: req.body.level,
  };
  // create a new student record in the database
  Student.create(newStudent)
    .then((student) => {
      res.send(student, 201);
    })
    .catch((error) => {
      res.send(error, 500);
    });
});

// update student data in the database
router.patch("/students/:id", function (req, res) {
  // find the student with given id
  Student.findByPk(parseInt(req.params.id))
    .then((student) => {
      // if the student is a truthy value
      if (student) {
        // update the student record with new data
        student.name = req.body.name;
        student.grade = req.body.grade;
        student.age = req.body.age;
        level: req.body.level,
          // save the updated student record to the database
          student.save();
        res.send(student);
      } else {
        res.send("Student not found", 404);
      }
    })
    .catch((error) => {
      res.send(error, 500); // internal server error
    });
});

// delete student data from the database
router.delete("/students/:id", function (req, res) {
  // find the student with given id
  Student.findByPk(parseInt(req.params.id))
    .then((student) => {
      // if the student is a truthy value
      if (student) {
        // delete the student record from the database
        student.destroy();
        res.send(student);
      } else {
        res.send("Student not found", 404);
      }
    })
    .catch((error) => {
      res.send(error, 500);
    });
});

// use this in app.js
module.exports = router;
