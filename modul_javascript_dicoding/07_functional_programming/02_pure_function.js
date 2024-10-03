// Pure Function

// Definisi: Fungsi yang menghasilkan output yang sama untuk input yang sama, dan tidak memiliki efek samping.
// Karakteristik:
// Tidak mengubah nilai variabel global.
// Tidak memiliki efek samping seperti I/O (input/output), modifikasi data eksternal, atau panggilan fungsi non-pure.
// Hanya bergantung pada argumen yang diterimanya.

function add(x, y) {
 return x + y;
}


// Impure Function
''
// Definisi: Fungsi yang tidak memenuhi salah satu karakteristik pure function.
// Karakteristik:
// Dapat mengubah nilai variabel global.
// Dapat memiliki efek samping seperti I/O, modifikasi data eksternal, atau panggilan fungsi non-pure.
// Tidak hanya bergantung pada argumen yang diterimanya.

let count = 0;

function increment() {
  count++;
}