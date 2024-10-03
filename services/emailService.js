const nodemailer = require('nodemailer')
require('dotenv').config();


const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465, 
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
  socketTimeout: 20000,
});

const sendResetPasswordEmail = async (to, resetToken) => {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'Reset Password',
      html: `<p>Kode reset password Anda adalah: <strong>${resetToken}</strong></p>
             <p>Kode ini akan kadaluarsa dalam 1 jam.</p>`,
    });
    console.log('Reset password email sent successfully');
  } catch (error) {
    console.error('Error sending reset password email:', error);
    throw new Error('Failed to send reset password email');
  }
};

module.exports = {
  sendResetPasswordEmail,
};
