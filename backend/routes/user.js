const express = require("express");
const router = express.Router();
const User = require("../models/User");

// ✅ POST - Create a new user
router.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body); // assumes name, email, password, etc. are sent
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to create user", details: err.message });
  }
});

// ✅ GET - Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find(); // get all users
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch users", details: err.message });
  }
});

// ✅ PUT - Update a user by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body, // fields to update
      { new: true } // return updated document
    );

    if (!updatedUser) return res.status(404).json({ error: "User not found" });

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: "Failed to update user", details: err.message });
  }
});

module.exports = router;
