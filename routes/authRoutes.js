const express = require('express');
require('dotenv').config();
const { registerUser, loginUser, forgotPassword, resetPassword } = require('../controllers/authController');
//const { protect } = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/registerUser', registerUser);
router.post('/loginUser', loginUser);
router.post('/forgotPassword', forgotPassword);
router.post('/resetPassword', resetPassword);

module.exports = router;