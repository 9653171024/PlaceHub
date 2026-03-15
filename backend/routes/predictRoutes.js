const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");
const path = require("path");

router.post("/", (req, res) => {
  const { cgpa, skills } = req.body;

  const scriptPath = path.join(__dirname, "../ai/predict.py");

  const python = spawn("python", [scriptPath, cgpa, skills]);

  let result = "";

  python.stdout.on("data", (data) => {
    result += data.toString();
  });

  python.stderr.on("data", (data) => {
    console.error("Python error:", data.toString());
  });

  python.on("close", () => {
    const prediction = result.trim();

    res.json({
      prediction: prediction,
    });
  });
});

module.exports = router;
