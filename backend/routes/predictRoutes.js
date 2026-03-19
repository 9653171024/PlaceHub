const express = require("express");
const router = express.Router();
const { spawn } = require("child_process");
const path = require("path");

router.post("/", (req, res) => {

  const {
    cgpa,
    dsa_score,
    aptitude_score,
    projects,
    internships,
    certifications,
    communication,
    skills_score
  } = req.body;

  const scriptPath = path.join(__dirname, "../ai/predict.py");
  if (!cgpa || !dsa_score || !aptitude_score) {
  return res.status(400).json({
    error: "Missing required fields"
  });
}

  const python = spawn("python", [
    scriptPath,
    cgpa,
    dsa_score,
    aptitude_score,
    projects,
    internships,
    certifications,
    communication,
    skills_score
  ]);

  let result = "";

  python.stdout.on("data", (data) => {
    result += data.toString();
  });

  python.stderr.on("data", (data) => {
    console.error("Python Error:", data.toString());
  });

  python.on("close", () => {

    try {

      const parsed = JSON.parse(result);

      res.json({
        prediction: parsed.prediction,
        confidence: parsed.confidence
      });

    } catch (error) {

      console.error("Parsing Error:", error);

      res.status(500).json({
        error: "Prediction failed"
      });

    }

  });

});

module.exports = router;