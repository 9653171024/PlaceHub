const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  role: {                  // ✅ ADD THIS
    type: String,
    enum: ["student", "faculty", "tpo"],
    default: "student",
  },
});

module.exports = mongoose.model("User", UserSchema);