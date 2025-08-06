const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');

router.post('/register', async (req, res) => {
  try {
    const { name, email, phone, interests } = req.body;
    const newApplicant = new Applicant({ name, email, phone, interests });
    await newApplicant.save();
    res.status(201).json({ message: 'Registration successful', applicant: newApplicant });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
});

module.exports = router;


