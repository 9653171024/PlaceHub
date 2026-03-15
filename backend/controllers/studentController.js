const Student = require("../models/Student");

exports.addStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();

    res.json(student);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);

    res.json({ message: "Student Deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.updateStudent = async (req, res) => {
  try {
    const updated = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.json(updated);
  } catch (error) {
    res.status(500).json(error);
  }
};
