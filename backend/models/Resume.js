const mongoose = require("mongoose");

const ResumeSchema = new mongoose.Schema({
  studentEmail: String,
  fileName: String,
  filePath: String,
  status: {
    type: String,
    default: "pending"
  }
});

module.exports = mongoose.model("Resume", ResumeSchema);