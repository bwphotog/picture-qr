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
{
  "name": "picture-qr",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "dotenv": "^16.3.1",
    "googleapis": "^105.0.0",
    "jsonwebtoken": "^9.0.0",
    "multer": "^1.4.5-lts.1"
  }
}
