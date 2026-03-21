import { useState } from "react";
import { Link } from "react-router-dom";
import API from "../services/api";
import "../styles/auth.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  const handleLogin = async () => {
    try {

      const res = await API.post("/api/auth/login", {
        email,
        password,
        role 
      });

      // ✅ store user properly
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("user", JSON.stringify({
        email: email,
        role: res.data.role,
      }));
      console.log("LOGIN RESPONSE:", res.data);

      const token = res.data.token;
      const roleFromDB = res.data.role || role;

      localStorage.setItem("token", token);
      localStorage.setItem("role", roleFromDB);

      // 🔥 redirect
      if (roleFromDB === "tpo") {
        window.location.href = "/dashboard";
      }
      else if (roleFromDB === "faculty") {
        window.location.href = "/dashboard";
      }
      else {
        window.location.href = "/predict";
      }

    } catch (err) {
      console.log("LOGIN ERROR:", err.response?.data);
      alert(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="auth-container">

      <div className="auth-card">

        <h2 className="auth-title">
          Welcome <span>Back</span>
        </h2>

        {/* ROLE SELECTOR */}
        <div className="role-selector">

          <button
            className={role === "student" ? "role-btn active-role" : "role-btn"}
            onClick={() => setRole("student")}
          >
            👨‍🎓 Student
          </button>

          <button
            className={role === "faculty" ? "role-btn active-role" : "role-btn"}
            onClick={() => setRole("faculty")}
          >
            👨‍🏫 Faculty
          </button>

          <button
            className={role === "tpo" ? "role-btn active-role" : "role-btn"}
            onClick={() => setRole("tpo")}
          >
            🏢 TPO
          </button>

        </div>

        <input
          className="auth-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="auth-input"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-primary" onClick={handleLogin}>
          Login as {role.toUpperCase()}
        </button>

        <p>
          Don't have account? <Link to="/signup">Signup</Link>
        </p>

      </div>

    </div>
  );
}

export default Login;