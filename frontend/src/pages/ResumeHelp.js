import React, { useState } from "react";
import "../styles/resume.css";
import API from "../services/api";

function ResumeHelp() {

  const [resume, setResume] = useState(null);

  // Select file
  const handleFileChange = (e) => {
    setResume(e.target.files[0]);
  };

  // Submit to backend (send to TPO)
  const handleSubmit = async () => {

    if (!resume) {
      alert("Please upload a resume first");
      return;
    }

    try {
      const userData = JSON.parse(localStorage.getItem("user"));

      console.log("USER DATA:", userData);

      const email =
        userData?.email ||
        userData?.user?.email ||
        "test@gmail.com";

      console.log("Using Email:", email);

      const formData = new FormData();
      formData.append("file", resume);
      formData.append("studentEmail", email);

      // ❗ DO NOT manually set Content-Type (axios handles it)
      await API.post("/resumes/upload", formData);

      alert("Resume sent to TPO successfully!");
      setResume(null);

    } catch (error) {
      console.log("UPLOAD ERROR:", error);
      alert(error.response?.data?.error || "Upload failed");
    }
  };

  return (
    <div className="resume-container">

      <h1 className="resume-title">
        Resume Assistance
      </h1>

      <div className="resume-grid">

        <div className="resume-card">
          <h2>Resume Builder</h2>
          <p>
            Create a professional resume using your
            academic profile, projects and technical skills.
          </p>
          <button className="resume-btn">
            Build Resume
          </button>
        </div>

        <div className="resume-card">
          <h2>Resume Review</h2>

          <p>
            Upload your resume and get suggestions
            from faculty/TPO to improve placement chances.
          </p>

          <input
            type="file"
            onChange={handleFileChange}
            className="resume-upload"
          />

          {resume && (
            <p style={{ marginTop: "10px" }}>
              Selected: {resume.name}
            </p>
          )}

          <button
            className="resume-btn"
            onClick={handleSubmit}
          >
            Submit for Review
          </button>

        </div>

      </div>

    </div>
  );
}

export default ResumeHelp;