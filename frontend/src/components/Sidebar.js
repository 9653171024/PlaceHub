import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {

  const [role, setRole] = useState("");

  // 🔥 Update role when component loads
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);
  }, []);

  return (
    <div className="sidebar">

      <h2>PlaceHub</h2>

      <ul>

        {/* ================= STUDENT ================= */}
        {role === "student" && (
          <>
            <li>
              <NavLink to="/predict" className="sidebar-link">
                🤖 AI Predictor
              </NavLink>
            </li>

            <li>
              <NavLink to="/resume" className="sidebar-link">
                📄 Resume Help
              </NavLink>
            </li>
          </>
        )}

        {/* ================= FACULTY ================= */}
        {role === "faculty" && (
          <>
            <li>
              <NavLink to="/dashboard" className="sidebar-link">
                📊 Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/students" className="sidebar-link">
                👨‍🎓 Students
              </NavLink>
            </li>

            <li>
              <NavLink to="/analytics" className="sidebar-link">
                📈 Analytics
              </NavLink>
            </li>

            <li>
              <NavLink to="/predict" className="sidebar-link">
                🤖 AI Predictor
              </NavLink>
            </li>

            <li>
              <NavLink to="/resume" className="sidebar-link">
                📄 Resume Help
              </NavLink>
            </li>
          </>
        )}

        {/* ================= TPO ================= */}
        {role === "tpo" && (
          <>
            <li>
              <NavLink to="/resume-requests" className="sidebar-link">
                📂 Resume Requests
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard" className="sidebar-link">
                📊 Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/students" className="sidebar-link">
                👨‍🎓 Students
              </NavLink>
            </li>

            <li>
              <NavLink to="/add" className="sidebar-link">
                ➕ Add Student
              </NavLink>
            </li>

            <li>
              <NavLink to="/analytics" className="sidebar-link">
                📈 Analytics
              </NavLink>
            </li>

            <li>
              <NavLink to="/predict" className="sidebar-link">
                🤖 AI Predictor
              </NavLink>
            </li>

            <li>
              <NavLink to="/resume" className="sidebar-link">
                📄 Resume Help
              </NavLink>
            </li>
          </>
        )}

      </ul>

    </div>
  );
}

export default Sidebar;