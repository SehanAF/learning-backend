/*

Variabel adalah wadah untuk menampung sebuah nilai.
 Nilai yang ditampung dapat berupa angka, teks, 
 atau apa pun yang menghasilkan nilai (expression).
 Pada JavaScript, kita bisa membuat variabel melalui dua cara, 
 yakni dengan sintaksis const dan let.

*/

const id = 123;
let username = 'Sehun';

console.log(id);
console.log(username);

/*

variabel yang dibuat dengan const tidak dapat
 diinisialisasi ulang (sederhananya, diubah) nilainya,
 sedangkan jika variabel dibuat dengan let,
 kita bisa menginisialisasi ulang nilainya.

*/

let names = "Alexa";

console.log('Sebelum diubah:', names);


names = "Sehun";  

console.log('Setelah diubah:', names) 


/*

ketika Anda membuat variabel dengan const,
 nilai yang ditetapkan ketika variabel dibuat, 
 tidak bisa diubah. Jika Anda coba untuk mengubahnya,
 program akan terhenti dan menghasilkan error.

*/

/*

const nama = 'Dicoding';

console.log('Sebelum diubah:', nama); // output: Sebelum diubah: Dicoding

nama = 'dicodingacademy'; // TypeError: Assignment to constant variable. 

console.log('Setelah diubah:', nama); // Tidak akan pernah dieksekusi

*/

/*

 1. Tidak Boleh Memberikan Nama yang Sama dalam Cakupan yang Sama
    Nama variabel haruslah unik dalam cakupannya. Anda tidak bisa
     menggunakan nama yang sama dengan variabel yang sudah terdefinisi sebelumnya.

 2. Anda boleh menggunakan nama variabel yang sama selama cakupannya berbeda,
     contohnya variabel yang berada dalam sebuah fungsi berbeda.
*/

function printCompanyInfo(){
    const nama = "Sendayu";
    const legal = "LLC";

    console.log('Company name:', nama);
    console.log('legal type:', legal);
}

function printEmployeeInfo() {
    const nama = "Sehun";
    const legal = "Inc";
    
    console.log('Employee name:', nama);
    console.log('Employee legal:', legal);
}

printCompanyInfo();
printEmployeeInfo();


// nama variabel yang benar
const firstName = 'Fulan';
const last_name = 'Lestari';
const $message = 'Hello, World!';
const userId1 = 123;
const userId2 = 456;
 
// nama variabel yang benar
const firstNames = 'Fulan';
const _secondName = 'Fulana';

// nama variabel yang salah karena diawali dengan angka

// const 1stName = 'Fulan';
// const 2ndName = 'Fulana';