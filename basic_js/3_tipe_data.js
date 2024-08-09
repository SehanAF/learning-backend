/*
 String
 String adalah tipe data yang merepresentasikan teks.
 Data seperti nama, alamat, atau email adalah contoh data yang dikelola dalam bentuk string.
*/

// "Ini merupakan contoh string di JavaScript"
// 'Ini merupakan contoh string di JavaScript'
// `Ini merupakan contoh string di JavaScript`

/*
Baris baru hanya bisa dituliskan secara langsung ketika Anda menggunakan backticks. 
Untuk tanda kutip tunggal atau ganda, kita harus menggunakan notasi \n.
*/

// "Baris pertama.\nBaris kedua."
// 'Baris pertama.\nBaris kedua.'

/*
Backticks sering disebut juga sebagai template literals karena memungkinkan kita
 menyisipkan JavaScript expressions untuk membentuk nilai string menggunakan notasi ${}.
*/

const currentYear = new Date().getFullYear();
const text = `Sekarang adalah tahun ${currentYear}.`;

console.log(text);


/*
 tipe data number juga memiliki nilai spesial, yaitu Infinity dan NaN. 
*/

const result = 50 / 0;
console.log(result); // output: Infinity


/*
Adapun nilai NaN (Not-a-Number) dihasilkan ketika nilai non-numerik diubah ke tipe data number.
*/

const hasil = Number('Dicoding');
console.log(hasil); // output: NaN


/*
Untuk membuat nilai boolean, kita bisa menuliskan true atau false secara langsung.
*/
const completed = true;
const passed = false;

console.log(completed, passed); // output: true false

/*
Nilai boolean juga biasa diperoleh dari hasil penggunaan operator perbandingan.
*/
const isGreater = 5 > 2;

console.log(isGreater); // output: true (5 lebih besar dari 2)

/*
Nilai Kosong
JavaScript memiliki dua nilai spesial yang merepresentasikan nilai kosong, yaitu null dan undefined.
*/
let message = null;
 
console.log(message); // output: null


/*
Adapun undefined hadir dalam JavaScript sebagai nilai implisit ketika kita mendeklarasikan 
variabel tanpa menginisialisasi dengan nilai apa pun.
*/
let messages;
 
console.log(messages); // output: undefined

// Namun, hal ini tidak disarankan. Sebaiknya, gunakan null jika berniat untuk 
//  memberikan nilai kosong secara eksplisit.


/*
Sekilas, null dan undefined terlihat sama, tetapi sebenarnya mereka berbeda. 
 Perbedaan ini dapat terlihat lebih jelas ketika kita membandingkan objek
 yang propertinya bernilai null dan undefined dalam format JSON.
*/
const name1 = { first: 'Dicoding', last: null };
const name2 = { first: 'Dicoding', last: undefined };

console.log(JSON.stringify(name1)); // output: {"first":"Dicoding","last":null}
console.log(JSON.stringify(name2)); // output: {"first":"Dicoding"}


/*
Properti yang diberi nilai undefined tidak akan tampak ketika diubah ke JSON karena JSON tidak mendukung tipe data undefined.
 Oleh karena itu, null lebih standar untuk menunjukkan nilai kosong.
*/


