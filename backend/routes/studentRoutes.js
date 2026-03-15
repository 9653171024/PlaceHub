const express = require("express");

const router = express.Router();

const {
  addStudent,
  getStudents,
  deleteStudent,
  updateStudent,
} = require("../controllers/studentController");

router.post("/add", addStudent);

router.get("/all", getStudents);

router.delete("/delete/:id", deleteStudent);

router.put("/update/:id", updateStudent);

module.exports = router;
