/*
# Deklarasi Function
 Keyword “function” harus selalu disertakan ketika mendeklarasikan function. 
 Berikutnya, keyword tersebut diikuti dengan identifier. 
 Ini mirip seperti variabel, kita dapat memberi nama sesuai dengan kebutuhan.
 Setelah itu, kita tuliskan parentheses untuk mendefinisikan parameter-parameter yang diperlukan dan function body.
*/
// Kita tahu bahwa implementasi rumus untuk konversi angka suhu berskala celsius ke fahrenheit seperti berikut.

// 9 / 5 * {angka_suhu_celsius} + 32;

/*
# Pemanggilan Function
*/

// function convertCelsiusToFahrenheit(temperature) {
//     const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  
//     console.log('Hasil konversi:', temperatureInFahrenheit);
//   }
  
//   console.log(convertCelsiusToFahrenheit);


/*
Untuk menjalankan tugas function, sebutkan function identifier dan diikuti dengan parentheses.
 Pemanggilan function ini akan menjalankan seluruh kode dalam function body atau semua statement
  di antara curly braces ketika mendeklarasikan function.
*/

function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  
  const temperatureInCelsius = 90;
  
  // Hanya menampilkan nilai function
  console.log(convertCelsiusToFahrenheit);
  // Output => [Function: convertCelciusToFahrenheit]
  
  // Akan menjalankan isi function
  convertCelsiusToFahrenheit(temperatureInCelsius);
  // Output => Hasil konversi: 194

/*
Ia adalah fitur hoisting dalam JavaScript. Fitur ini memungkinkan kita menulis
kode pemanggilan sebelum kode pendeklarasian function. Berikut contohnya.
*/

greetWorld();

function greetWorld() {
  console.log('Hello, world!');
}

/* Output:
Hello, world!
/*

/*
# Parameter dan Argument
    Ada teks 'temperature' dalam parentheses di bawah. Itulah parameter function. Jika kita amati, notasinya akan seperti berikut.
*/

function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
   
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }

/*
Ketika memanggil function yang memiliki parameter, kita menentukan nilai dalam parentheses.
 Ini pernah dilakukan sebelumnya.
*/

// const temperatureInCelsius = 90;
// convertCelsiusToFahrenheit(temperatureInCelsius);

/*
Nilai yang diberikan dalam parentheses saat pemanggilan function, ia disebut sebagai argument.
 Argument ini bisa berasal dari nilai yang langsung dimasukkan atau nilai yang tersimpan dari variabel.
*/

// Langsung memasukkan nilai
// convertCelsiusToFahrenheit(100);
 
// Memasukkan nilai dengan variabel
// const temperatureInCelsius = 90;
// convertCelsiusToFahrenheit(temperatureInCelsius);

/*
# Default Parameter
 Tahukah Anda bahwa argument dapat bernilai undefined jika kita tidak beri nilai apa pun 
 dalam parentheses saat function dipanggil? Lalu, apa yang akan terjadi jika function body
 tetap dijalankan dalam keadaan seperti itu? Mari kita lihat bersama.
*/

function convertCelsiusToFahrenheit(temperature) {
    const temperatureInFahrenheit = (9 / 5) * temperature + 32;
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  
  convertCelsiusToFahrenheit();
  
  /* Output:
  Hasil konversi: NaN
  */


/*
Sebetulnya, hal ini bisa kita selesaikan menggunakan conditional statement. 
Kita bisa periksa bahwa jika argument bernilai undefined, jangan lakukan proses kalkulasi.
*/

function convertCelsiusToFahrenheit(temperature) {
    if (temperature !== undefined) { // <-- conditional statement (perintah kondisional)
      const temperatureInFahrenheit = 9 / 5 * temperature + 32;
   
      console.log('Hasil konversi:', temperatureInFahrenheit);
    }
  }

/*
 Bagaimana jika kita ingin mengubah nilainya? Tenang, kita dapat memberikan nilai argument 
 seperti biasanya. Masukkan saja nilai argument dalam parentheses saat function dijalankan.
 Nilai tersebut akan menggantikan default value.
*/

function convertCelsiusToFahrenheit(temperature = 50) {
    const temperatureInFahrenheit = 9 / 5 * temperature + 32;
  
    console.log('Hasil konversi:', temperatureInFahrenheit);
  }
  
  // Menggunakan default value
  convertCelsiusToFahrenheit(); // output: Hasil konversi: 122
  
  // Menggantikan default value
  convertCelsiusToFahrenheit(90); // output: Hasil konversi: 194

  convertCelsiusToFahrenheit(95);

/*
*/


/*
*/