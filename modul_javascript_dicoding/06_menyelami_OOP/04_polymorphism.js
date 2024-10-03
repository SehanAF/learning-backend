class SmartPhones {
 /**
  * Konstruktor untuk membuat objek SmartPhones
  * @param {string} color Warna dari smartphone
  * @param {string} brand Merek dari smartphone
  * @param {string} model Model dari smartphone
  */
 constructor(color, brand, model) {
  this.color = color;
  this.brand = brand;
  this.model = model;
 }

 /**
  * Metode untuk mengisi daya smartphone
  */
 charging() {
  console.log(`${this.brand} ${this.model} is charging`);
 }
}

/**
 * Kelas Android yang meng-extend kelas SmartPhones
 * dengan tambahan fitur split screen
 */
class Android extends SmartPhones {
 /**
  * Konstruktor untuk membuat objek Android
  * @param {string} color Warna dari smartphone
  * @param {string} brand Merek dari smartphone
  * @param {string} model Model dari smartphone
  * @param {string} device Device yang digunakan untuk mengisi daya
  */
 constructor(color, brand, model, device) {
  super(color, brand, model);
  this.device = device;
 }

 /**
  * Metode untuk mengaktifkan split screen
  */
 splitScreen() {
  console.log(`SplitScreen on ${this.brand} ${this.model}`);
 }

 /**
  * Metode untuk mengisi daya smartphone dengan menggunakan
  * device yang ditentukan
  */
 charging() {
  super.charging();
  console.log(`Charging on ${this.device} with fast charger`);
 }
}

/**
 * Membuat objek Android dengan warna Black, merek Samsung, model Galaxy S21
 * dan device Samsung Galaxy S21
 */
const android = new Android("Black", "Samsung", "Galaxy S21", "Samsung Galaxy S21");

/**
 * Memanggil metode charging pada objek android
 */
android.charging();

/**
 * Memanggil metode splitScreen pada objek android
 */
android.splitScreen();
