const express = require('express');
const router = express.Router();
const Applicant = require('../models/Applicant');
const verifyToken = require('../middleware/authMiddleware');

router.get('/applicants', verifyToken, async (req, res) => {
  try {
    const applicants = await Applicant.find();
    res.json(applicants);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch applicants', error: err.message });
  }
});

module.exports = router;

