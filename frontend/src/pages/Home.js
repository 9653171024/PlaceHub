import { Link } from "react-router-dom";
import "../styles/home.css";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <h1>
          AI Powered <span>Placement Analytics</span>
        </h1>

        <p>
          Track students, analyze placement trends and predict placement
          success.
        </p>

        <div className="home-buttons">
          <Link to="/login">
            <button className="btn-primary">Login</button>
          </Link>

          <Link to="/signup">
            <button className="btn-secondary">Signup</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
