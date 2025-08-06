const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST: Register a new user or volunteer
router.post('/', async (req, res) => {
  try {
    const { name, email, role } = req.body;

    const existingUser = await User.findOne({ email }); // ✅ now inside async

    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    const newUser = new User({ name, email, role });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
});


// GET: Fetch all registered users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch users', error: err.message });
  }
});



module.exports = router;

