const express = require('express');
const router = express.Router();

// Tambahkan route di sini
router.get('/example', (req, res) => {
    res.send('Hello World');
});

module.exports = router;


