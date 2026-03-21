import React, { useEffect, useState } from "react";

function Dashboard() {

  const [stats, setStats] = useState({
    totalStudents: 0,
    placedStudents: 0,
    placementRate: 0
  });

  useEffect(() => {

    async function loadStats() {

      try {

        const res = await fetch("http://localhost:5000/api/analytics");

        const data = await res.json();

        console.log("Dashboard Data:", data);

        setStats(data);

      } catch (error) {

        console.log("Error loading dashboard:", error);

      }

    }

    loadStats();

  }, []);

  return (
    <div className="main">

      <h1>Placement Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Total Students</h3>
          <p>{stats.totalStudents}</p>
        </div>

        <div className="card">
          <h3>Placed</h3>
          <p>{stats.placedStudents}</p>
        </div>

        <div className="card">
          <h3>Placement Rate</h3>
          <p>{stats.placementRate}%</p>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;