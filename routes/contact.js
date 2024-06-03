const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/contact', async (req, res) => {
  const { name, phone, suggestions } = req.body;

  try {
    const newContact = new Contact({ name, phone, suggestions });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;