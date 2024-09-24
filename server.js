const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();

// Middleware untuk parsing JSON dari body request
app.use(bodyParser.json());

// Menghubungkan userRoutes ke endpoint '/user'
app.use('/user', userRoutes);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
