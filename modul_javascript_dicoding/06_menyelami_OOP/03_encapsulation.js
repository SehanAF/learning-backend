class CoffeMachine {
 #temperature = 90; // Atur default langsung di sini

 constructor(waterAmount) {
   this.waterAmount = waterAmount;
 }

 set temperature(temperature) {
   if (temperature > 90) {
    console.log('Temperature terlalu tinggi!');
   } else {
     this.#temperature = temperature;
   }
   
   console.log('you are not allowed to change the temperature');
 }

 get temperature() {
   return this.#temperature;
 }
}

const coffe = new CoffeMachine(10);
console.log('Sebelum diubah: ', coffe.temperature);

coffe.temperature = 80;
console.log('Sesudah diubah: ', coffe.temperature);
