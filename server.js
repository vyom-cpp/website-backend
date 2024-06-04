const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = require('./routes/contact');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Use PORT from environment or default to 5000

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.json());
app.use('/api', contactRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});