const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',          
  password: '',         
  database: 'University' 
});

db.connect((err) => { 
  if (err) {
    console.error('Error saat koneksi ke database:', err);
  } else {
    console.log('Berhasil terhubung ke database!');
  }
});

module.exports = db;
