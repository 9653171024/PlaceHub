const User = require("../models/User");

// SIGNUP
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const user = new User({
      name,
      email,
      password,
      role, // 🔥 important
    });

    await user.save();

    res.json({ message: "Signup successful" });

  } catch (error) {
  console.log("SIGNUP ERROR:", error); // 🔥 ADD THIS
  res.status(500).json({ message: error.message });
}
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // 🔥 ADD THIS CHECK
    if (user.role !== role) {
      return res.status(400).json({ message: "Wrong role selected" });
    }

    res.json({
      token: "dummy-token",
      role: user.role,
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};