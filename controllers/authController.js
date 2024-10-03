const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');

const crypto = require('crypto');
const { sendResetPasswordEmail } = require('../services/emailService')
const prisma = new PrismaClient

const registerUser = async (req, res) => {
 const {username, email, password} = req.body;

 try {
  const existingUser = await prisma.user.findUnique({
   where: {
    email
   }
  });
  

  if (existingUser) {
   return res.status(400).json({message: 'User already exists'});
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const newUser = await prisma.user.create({
   data: {
    username, email, password: hashedPassword
   }
  })

  res.status(201).json({message: 'User created successfully', user: newUser});

 } catch (error) {
  res.status(500).json({ message: 'Terjadi kesalahan pada server', error });
 }
}

const loginUser = async (req, res) => {
  const { email, password} = req.body;

  try {
   const user = await prisma.user.findUnique({
    where: {
     email
    }
   });

   if (!user) {
    return res.status(400).json({message: 'User not found'});
   }

   const isPasswordValid = await bcrypt.compare(password, user.password);
   if (!isPasswordValid) {
    return res.status(400).json({message: 'Invalid password'});
   }
   
   const token = jwt.sign({userId: user.id}, process.env.JWT_SECRET, {expiresIn: '5h'});

   res.status(200).json({message: 'Login successful', token});
  } catch (error) {
   console.error(error);  // Tambahkan logging untuk melihat pesan error
   res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
  }
}

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(400).json({message: 'User not found'});
    }

    const resetToken = crypto.randomBytes(3).toString('hex').toUpperCase();
    const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 jam

    await prisma.user.update({
      where: { email },
      data: {
        resetPasswordToken: resetToken,
        resetTokenExpiry,
      }
    });

    await sendResetPasswordEmail(email, resetToken);

    res.status(200).json({message: 'Kode reset password telah dikirim ke email Anda'});
  } catch (error) {
    console.error('Error in forgotPassword:', error);
    res.status(500).json({ message: 'Terjadi kesalahan pada server', error: error.message });
  }
};

const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
   const user = await prisma.user.findFirst({
    where: {
     resetPasswordToken: token,
     resetTokenExpiry: {
      gte: new Date(),
     }
    }
   });

   if (!user) {
    return res.status(400).json({message: 'Invalid or expired token'});
   }

   const hashedPassword = await bcrypt.hash(newPassword, 12);

   await prisma.user.update({
    where: {
     id: user.id
    },
    data: {
     password: hashedPassword,
     resetPasswordToken: null,
     resetTokenExpiry: null
    },
   });

   res.status(200).json({message: 'Password reset successful'});
  } catch (error) {
   res.status(500).json({ message: 'Terjadi kesalahan pada server', error });
  }
}

module.exports = {
 registerUser,
 loginUser,
 forgotPassword,
 resetPassword
}

