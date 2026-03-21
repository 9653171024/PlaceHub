const express = require("express");
const router = express.Router();
const multer = require("multer");
const Resume = require("../models/Resume");

// Multer storage config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Upload Resume
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ error: "File not received" });
    }

    const newResume = new Resume({
      studentEmail: req.body.studentEmail,
      fileName: req.file.filename,
      filePath: "uploads/" + req.file.filename,
    });

    await newResume.save();

    res.json({ message: "Resume uploaded successfully" });

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// Get all resumes
router.get("/", async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.json(resumes);
  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;