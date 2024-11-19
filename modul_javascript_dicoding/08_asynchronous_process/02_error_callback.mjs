import { makeCoffee, sendCoffee } from './new_coffee.mjs';

const order = 'Kopi Espresso';

console.log(`Saya memesan kopi ${order} di kafe.`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
 if (makeCoffeeError) {
  console.error(makeCoffeeError.message);
  return;
 }

 console.log(`Pramusaji selesai membuat kopi ${makeCoffeeData}.`);

 sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
  if (sendCoffeeError) {
   console.error(sendCoffeeError.message);
   return;
  }

  console.log(`Pramusaji selesai mengirimkan kopi ${sendCoffeeData} ke meja.`);
  console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya.`);
 });
})