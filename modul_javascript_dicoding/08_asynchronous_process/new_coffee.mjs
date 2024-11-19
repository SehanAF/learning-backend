export function makeCoffee(name, callback) {
 const estimationTime = 5000;
 let isSuccess = false;

 const inSeconds = Math.ceil(estimationTime / 1000);
 console.log(`Mohon menunggu. Pramusaji sedang membuatkan kopi dalam ${inSeconds} detik`);

 setTimeout(() => {
   // Do some tasks to make coffee...
   const number = Math.random();

   if (number > 0.3) {
     isSuccess = true;
   }
   
   if(!isSuccess) {
    callback(new Error(`Gagal membuat kopi untuk ${name}`), null);
    return;
   }

   console.log('Pramusaji selesai membuat kopi.');
   callback(null, name);
 }, estimationTime);
}

export function sendCoffee(name, callback) {
 const estimationTime = 3000;
 let isSuccess = false;

 console.log(`Mohon menunggu. Pramusaji sedang mengirimkan kopi`);

 setTimeout(() => {
   // Do some tasks to send coffee...
   const number = Math.random();

   if (number > 0.3) {
     isSuccess = true;
   }

   if(!isSuccess) {
    callback(new Error(`Gagal mengirimkan kopi untuk ${name}`), null);
    return;
   } 

   console.log('Pramusaji sudah sampai ke meja.');
   callback(null, name);
 }, estimationTime);
}
