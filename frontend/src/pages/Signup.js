import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/auth.css";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student"); // ✅ FIX

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await API.post("/api/auth/signup", {
        name,
        email,
        password,
        role
      });

      alert("Signup successful");
      navigate("/login");

    } catch (err) {
      console.log("SIGNUP ERROR:", err.response?.data);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">

        <h2 className="auth-title">
          Create <span>Account</span>
        </h2>

        {/* ROLE SELECTOR */}
        <div className="role-selector">
          <button onClick={() => setRole("student")}>👨‍🎓 Student</button>
          <button onClick={() => setRole("faculty")}>👨‍🏫 Faculty</button>
          <button onClick={() => setRole("tpo")}>🏢 TPO</button>
        </div>

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleSignup}>
          Signup
        </button>

        <p>
          Already have account? <Link to="/login">Login</Link>
        </p>

      </div>
    </div>
  );
}

export default Signup;