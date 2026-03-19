const express = require("express");
const router = express.Router();
const Resume = require("../models/Resume");

// Upload Resume
router.post("/upload", async (req, res) => {

  const { studentEmail, fileName } = req.body;

  const newResume = new Resume({
    studentEmail,
    fileName,
    filePath: "uploads/" + fileName
  });

  await newResume.save();

  res.json({ message: "Resume uploaded successfully" });
});

// Get all resumes (TPO)
router.get("/", async (req, res) => {

  const resumes = await Resume.find();

  res.json(resumes);
});

module.exports = router;