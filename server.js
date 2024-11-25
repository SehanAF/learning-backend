require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/authRoutes');

const db = require('./db/connections');
const response = require('./utils/response');

const app = express();

// Middleware untuk parsing JSON dari body request
app.use(bodyParser.json());


// practice mysql 
app.get('/dosen', (req, res) => {
  db.query('SELECT * FROM dosen', (err, results) => {
    if (err) {
      console.error('Error saat mengambil data:', err);
      res.status(500).send('Terjadi kesalahan pada server.');
    } else {
      response(200, results, 'Berhasil mengambil data', res);
    }
  });
});

app.get('/find', (req, res) => {
  db.query(`SELECT nama FROM dosen WHERE nim= ${req.query.nim}`, (err, results) => {
    if (err) {
      console.error('Error saat mengambil data:', err);
      res.status(500).send('Terjadi kesalahan pada server.');
    } else {
      response(200, results, 'Berhasil mengambil data', res);
    }
  });
});

app.use('/auth', authRoutes);

// Jalankan server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
