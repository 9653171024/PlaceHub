import React, { useState } from "react";
import API from "../services/api";
import "../styles/predictor.css";

function PlacementPredictor() {

  const [formData, setFormData] = useState({
    cgpa: "",
    dsa_score: "",
    aptitude_score: "",
    projects: "",
    internships: "",
    certifications: "",
    communication: "",
    skills_score: ""
  });

  const [result, setResult] = useState("");
  const [confidence, setConfidence] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const predictPlacement = async () => {

    // 🚨 Prevent empty fields
    if (Object.values(formData).some((v) => v === "")) {
      setResult("Please fill all fields ⚠️");
      setConfidence("");
      return;
    }

    try {

      setLoading(true);

      
      const payload = {
        cgpa: Number(formData.cgpa),
        dsa_score: Number(formData.dsa_score),
        aptitude_score: Number(formData.aptitude_score),
        projects: Number(formData.projects),
        internships: Number(formData.internships),
        certifications: Number(formData.certifications),
        communication: Number(formData.communication),
        skills_score: Number(formData.skills_score)
      };

      const res = await API.post("/predict", payload);

      const prediction = res.data.prediction;
      const conf = res.data.confidence;

      if (prediction === 1) {
        setResult("High Chance of Placement 🚀");
      } else {
        setResult("Low Chance of Placement ⚠️");
      }

      setConfidence(`Prediction Confidence: ${conf ? conf : 0}%`);

    } catch (error) {

      console.error(error);

      setResult("Prediction failed ❌");
      setConfidence("");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="predictor-container">

      <div className="predictor-card">

        <h1 className="predictor-title">
          AI Placement Predictor
        </h1>

        <input
          className="predictor-input"
          placeholder="CGPA"
          name="cgpa"
          type="number"
          onChange={handleChange}
        />

        <input
          className="predictor-input"
          placeholder="DSA Score (0-100)"
          name="dsa_score"
          type="number"
          onChange={handleChange}
        />

        <input
          className="predictor-input"
          placeholder="Aptitude Score (0-100)"
          name="aptitude_score"
          type="number"
          onChange={handleChange}
        />

        <input
          className="predictor-input"
          placeholder="Projects Completed"
          name="projects"
          type="number"
          onChange={handleChange}
        />

        <input
          className="predictor-input"
          placeholder="Internships"
          name="internships"
          type="number"
          onChange={handleChange}
        />

        <input
          className="predictor-input"
          placeholder="Certifications"
          name="certifications"
          type="number"
          onChange={handleChange}
        />

        <input
          className="predictor-input"
          placeholder="Communication Score (0-100)"
          name="communication"
          type="number"
          onChange={handleChange}
        />

        <input
          className="predictor-input"
          placeholder="Technical Skills Score (0-100)"
          name="skills_score"
          type="number"
          onChange={handleChange}
        />

        <button
          className="predictor-button"
          onClick={predictPlacement}
          disabled={loading}
        >
          {loading ? "Predicting..." : "Predict Placement"}
        </button>

        {result && (
          <div className="predictor-result">
            {result}
            <br />
            {confidence}
          </div>
        )}

      </div>

    </div>
  );
}

export default PlacementPredictor;