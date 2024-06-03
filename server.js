const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use('/api', contactRoutes);

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/contactinfo', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});