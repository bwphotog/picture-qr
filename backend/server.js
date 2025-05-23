const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Picture QR Backend is running!');
});

// ✅ ต้องมีบรรทัดนี้เพื่อ bind พอร์ต
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
