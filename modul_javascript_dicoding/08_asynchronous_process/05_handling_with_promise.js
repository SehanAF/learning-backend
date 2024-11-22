
// Penggunaan Callback

// doSomething((doSomethingError, doSomethingResult) => {
//  if (doSomethingError) {
//   console.error(doSomethingError.message);
//   return;
//  }

//  console.log(doSomethingResult);
// });

// Dari contoh kode di atas, kita bisa menyederhanakannya seperti berikut dengan Promise.

function onFulfilled(doSomethingData) {
 console.log(doSomethingData);
}

function onRejected(doSomethingDataError) {
 console.error(doSomethingDataError);
}

doSomething().then(onFulfilled, onRejected);

// Penggunaan Promise

function promiseExecutor(resolve, reject) {
 setTimeout(() => {
  console.log('Melakukan sesuatu sebelum Promise diselesaikan.');

  const number = Math.random();

  if (number > 0.5) {
   resolve("You did it!");
  } else {
   reject(new Error('Sorry, something went wrong!'));
  }
 }, 2000);
}

function doSomething() {
 return new Promise(promiseExecutor);
}

// Chaining