/* 
# Mengubah ke String
Untuk mengubah suatu tipe data ke bentuk string umumnya dapat dilakukan dengan dua cara,
 yaitu menggunakan fungsi String() dan method .toString(). 
 Berikut adalah contoh dari penggunaan kedua cara tersebut.
*/
const number = 123;
const boolean = true;

const strNumber = String(number);
const strBoolean = boolean.toString();

console.log(strNumber); // output: "123"
console.log(strBoolean); // output: "true"

/*
# Mengubah ke Number
Secara umum, untuk mengubah bentuk numerik, seperti “10”, “3.14” dapat dilakukan
 dengan menggunakan fungsi Number(). Berikut contoh penggunaannya.
*/
const strNumbers = '123';
const strFloat = '3.14';
const bool = true;

const numFromString = Number(strNumbers);
const floatFromString = Number(strFloat);
const numFromBoolean = Number(bool);

console.log(numFromString); // output: 123
console.log(floatFromString); // output: 3.14
console.log(numFromBoolean); // output: 1

/*
# Fungsi parseInt() 
 Digunakan untuk mengonversi string menjadi bilangan bulat (integer). 
 Fungsi ini memiliki kemampuan untuk membaca karakter satu per satu.
 Ketika menemukan karakter yang tidak bisa diubah menjadi angka, 
 proses konversi terhenti di sana. Dengan kemampuan ini,
 parseInt() dapat digunakan untuk mengubah nilai string, 
 seperti "20CM", "64px", atau angka dengan satuan lainnya.
*/
const cm = '20cm';
const px = '64px';

const intFromCM = parseInt(cm);
const intFromPX = parseInt(px);

console.log(intFromCM); // output: 20
console.log(intFromPX); // output: 64


/*
# Adapun fungsi parseFloat()
 digunakan untuk mengonversi string menjadi angka desimal (floating-point number).
  Sama seperti parseInt(), fungsi ini juga memiliki kemampuan membaca karakter
   string satu per satu sehingga dapat mengubah numerik yang mengandung satuan.
*/
const cM = '20.55cm';
const pX = '64.23px';

const floatFromCm = parseFloat(cM);
const floatFromPx = parseFloat(pX);

console.log(floatFromCm); // output: 20.55
console.log(floatFromPx); // output: 64.23

/*
Mengubah ke Boolean
Untuk mengubah suatu nilai ke tipe data boolean, kita bisa gunakan fungsi Boolean().
 Sama seperti fungsi sebelumnya, kita cukup memberikan nilai yang akan diubah di antara tanda kurung.
*/

const num = 123;
const string = 'Dicoding';
const empty = null;

const boolFromNumber = Boolean(123);
const boolFromString = Boolean(string);
const boolFromNull = Boolean(empty);

console.log(boolFromNumber); // output: true
console.log(boolFromString); // output: true
console.log(boolFromNull); // output: false

/*
Konversi Implisit
Konversi implisit terjadi ketika JavaScript secara otomatis mengubah tipe data
 tanpa instruksi eksplisit dari programmer. Ini biasanya terjadi dalam konteks tertentu, 
 seperti operasi aritmetika, perbandingan, dan konteks logika.
*/

const age = 20;
const message = 'Umurku: ' + age;

console.log(message); // output: Umurku: 20

/*
Dalam contoh ini, tipe data number (age) secara otomatis 
dikonversi menjadi string karena operator + digunakan untuk penggabungan string.
*/
const strNum = '123';
const result = strNum * 2;

console.log(result); // output: 246

/*
Dalam contoh ini, strNumber (yang merupakan string) dikonversi menjadi number
 karena operator * digunakan untuk operasi aritmetika.
*/
const booll = true;
const result1 = 1 + bool;

console.log(result1); // output: 2
