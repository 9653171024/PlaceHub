const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  branch: {
    type: String,
  },

  cgpa: {
    type: Number,
  },

  skills: [
    {
      type: String,
    },
  ],

  placed: {
    type: Boolean,
    default: false,
  },

  company: {
    type: String,
  },
});

module.exports = mongoose.model("Student", StudentSchema);
