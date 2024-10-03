const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
 let token;

 if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
  token = req.headers.authorization.split(' ')[1];
 }

 if (!token) {
  return res.status(401).json({ message: 'Anda harus login untuk mengakses halaman ini' });
 }

 try {
   const decoded = jwt.verify(token, process.env.JWT_SECRET);
   req.user = decoded;
   next();
 } catch (error) {
   res.status(401).json({ message: 'Token tidak valid atau telah kadaluarsa' });
 }
}