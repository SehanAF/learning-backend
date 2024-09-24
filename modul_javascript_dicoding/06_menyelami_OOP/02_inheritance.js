class SmartPhones {
 constructor(color, brand, model) {
  this.color = color;
  this.brand = brand;
  this.model = model;
 }

 charging(){
  console.log(`${this.brand} ${this.model} is charging`);
 }
}

class iOS extends SmartPhones{
 airDrop(){
  console.log(`AirDrop on ${this.brand} ${this.model}`);
 }
}

class Android extends SmartPhones{
  splitScreen(){
   console.log(`SplitScreen on ${this.brand} ${this.model}`);
 }
}

const ios = new iOS("Black", "Apple", "12 Pro Max");
const android = new Android("Black", "Samsung", "Galaxy S21");

android.charging();
android.splitScreen();

console.log("");

ios.charging();
ios.airDrop();

console.log("");

console.log(ios instanceof SmartPhones);
console.log(ios instanceof Android);