// backend/models/Contact.js
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  suggestions: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Contact', ContactSchema);