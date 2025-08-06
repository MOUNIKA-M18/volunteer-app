const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  interests: [String]
});

module.exports = mongoose.model('Applicant', applicantSchema);


