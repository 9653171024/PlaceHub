const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const studentRoutes = require("./routes/studentRoutes");
const authRoutes = require("./routes/authRoutes");
const predictRoutes = require("./routes/predictRoutes");
const analyticsRoutes = require("./routes/analyticsRoutes");
const resumeRoutes = require("./routes/resumeRoutes");


const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/resumes", resumeRoutes);


app.get("/", (req, res) => {
  res.send("TNP Dashboard API Running");
});

app.use("/api/students", studentRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/predict", predictRoutes);
app.use("/api/analytics", analyticsRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
