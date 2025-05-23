const express = require('express');
const dotenv = require('dotenv');
const photoRoutes = require('./routes/photos');

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/photos', photoRoutes);

// Health check
app.get('/', (req, res) => {
  res.send('Picture QR Backend is running!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
