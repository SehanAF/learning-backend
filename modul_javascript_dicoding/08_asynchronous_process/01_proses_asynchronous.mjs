import { makeCoffee, sendCoffee } from './coffee.mjs';

console.log('Saya memesan kopi di kafe.');

makeCoffee(() => {
 sendCoffee(() => {
  console.log('Pramusaji memberikan kopi pesanan.');
  console.log('Saya mendapatkan kopi dan menghabiskannya.');
 });
});






const estimationTime = 10_000;

setTimeout(() => {
 console.log('Hello World');
}, estimationTime);
