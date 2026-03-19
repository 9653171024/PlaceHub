const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

router.get("/", async (req, res) => {

  try {

    // Fetch all students from MongoDB
    const students = await Student.find();

    const totalStudents = students.length;

    // Count placed students
    const placedStudents = students.filter(
      s => s.placed === true || s.placed === 1 || s.placed === "Yes"
    ).length;

    const unplacedStudents = totalStudents - placedStudents;

    // Calculate average CGPA
    const avgCGPA =
      students.reduce((sum, s) => sum + Number(s.cgpa || 0), 0) /
      (totalStudents || 1);

    // Placement rate
    const placementRate =
      ((placedStudents / (totalStudents || 1)) * 100).toFixed(1);

    res.json({
      totalStudents,
      placedStudents,
      unplacedStudents,
      avgCGPA: avgCGPA.toFixed(2),
      placementRate
    });

  } catch (error) {

    console.log("Analytics Error:", error);

    res.status(500).json({
      message: "Error fetching analytics"
    });

  }

});

module.exports = router;