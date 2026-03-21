import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

function Analytics() {

  const [data, setData] = useState(null);

  useEffect(() => {

    async function loadData() {
      try {

        const res = await fetch("http://localhost:5000/api/analytics");
        const result = await res.json();
        

        setData(result);

      } catch (err) {
        console.log("Error loading analytics:", err);
      }
    }

    loadData();

  }, []);

  if (!data) {
    return <h2 style={{color:"white"}}>Loading Analytics...</h2>;
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "white" }
      }
    },
    scales: {
      x: {
        ticks: { color: "white" }
      },
      y: {
        ticks: { color: "white" }
      }
    }
  };

 
  const placementPie = {
    labels: ["Placed", "Unplaced"],
    datasets: [
      {
        data: [Number(data.placedStudents), Number(data.unplacedStudents)],
        backgroundColor: ["#22c55e", "#ef4444"]
      }
    ]
  };

  
  const placedBar = {
    labels: ["Placed Students"],
    datasets: [
      {
        label: "Students",
        data: [Number(data.placedStudents)],
        backgroundColor: "#6366f1"
      }
    ]
  };

  
  const cgpaBar = {
    labels: ["Average CGPA"],
    datasets: [
      {
        label: "CGPA",
        data: [Number(data.avgCGPA)],
        backgroundColor: "#8b5cf6"
      }
    ]
  };

  
  const placementRateChart = {
    labels: ["Placement Rate"],
    datasets: [
      {
        label: "Rate %",
        data: [Number(data.placementRate)],
        backgroundColor: "#22c55e"
      }
    ]
  };

  const chartBox = {
    background: "#0f172a",
    padding: "20px",
    borderRadius: "12px",
    height: "350px"
  };

  return (
    <div className="main">

      <h1>Placement Analytics</h1>

      {}

      <div className="cards">

        <div className="card">
          <h3>Total Students</h3>
          <p>{data.totalStudents}</p>
        </div>

        <div className="card">
          <h3>Placed Students</h3>
          <p>{data.placedStudents}</p>
        </div>

        <div className="card">
          <h3>Placement Rate</h3>
          <p>{data.placementRate}%</p>
        </div>

        <div className="card">
          <h3>Average CGPA</h3>
          <p>{data.avgCGPA}</p>
        </div>

      </div>

      {}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          marginTop: "40px"
        }}
      >

        <div style={chartBox}>
          <h3 style={{color:"white"}}>Pie Chart: Placement Distribution</h3>
          <div style={{height:"280px"}}>
            <Pie data={placementPie} options={options}/>
          </div>
        </div>

        <div style={chartBox}>
          <h3 style={{color:"white"}}>Bar Chart: Placed Students</h3>
          <div style={{height:"280px"}}>
            <Bar data={placedBar} options={options}/>
          </div>
        </div>

        <div style={chartBox}>
          <h3 style={{color:"white"}}>Bar Chart: Average CGPA</h3>
          <div style={{height:"280px"}}>
            <Bar data={cgpaBar} options={options}/>
          </div>
        </div>

        <div style={chartBox}>
          <h3 style={{color:"white"}}>Bar Chart: Placement Rate</h3>
          <div style={{height:"280px"}}>
            <Bar data={placementRateChart} options={options}/>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Analytics;