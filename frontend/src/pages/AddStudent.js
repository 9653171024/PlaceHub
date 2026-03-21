import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/addstudent.css";

function AddStudent() {

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    email: "",
    branch: "",
    cgpa: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!student.name || !student.email || !student.branch || !student.cgpa) {
      alert("Please fill all fields");
      return;
    }

    try {

      setLoading(true);

      await API.post("/students/add", student);

      alert("Student Added Successfully");

      setStudent({
        name: "",
        email: "",
        branch: "",
        cgpa: ""
      });

      navigate("/students");

    } catch (error) {
      console.error(error);
      alert("Failed to add student");
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="add-student-container">

      <div className="add-student-card">

        <h2 className="add-student-title">
          Add Student
        </h2>

        <form onSubmit={handleSubmit}>

          <input
            className="add-student-input"
            type="text"
            name="name"
            placeholder="Student Name"
            value={student.name}
            onChange={handleChange}
          />

          <input
            className="add-student-input"
            type="email"
            name="email"
            placeholder="Student Email"
            value={student.email}
            onChange={handleChange}
          />

          <input
            className="add-student-input"
            type="text"
            name="branch"
            placeholder="Branch (CSE / IT / AI)"
            value={student.branch}
            onChange={handleChange}
          />

          <input
            className="add-student-input"
            type="number"
            step="0.01"
            name="cgpa"
            placeholder="CGPA"
            value={student.cgpa}
            onChange={handleChange}
          />

          <button
            className="add-student-button"
            type="submit"
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Student"}
          </button>

        </form>

      </div>

    </div>

  );
}

export default AddStudent;