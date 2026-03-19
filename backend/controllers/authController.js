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
    res.status(500).json({ message: "Signup failed" });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.json({
      token: "dummy-token",
      role: user.role, // 🔥 VERY IMPORTANT
    });

  } catch (error) {
    res.status(500).json({ message: "Login failed" });
  }
};