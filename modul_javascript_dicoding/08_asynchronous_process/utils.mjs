function promiseExecutor(resolve, reject) {
 setTimeout(() => {
  console.log('Melakukan sesuatu sebelum Promise diselesaikan.');

  const number = Math.random();

  if (number > 0.3) {
   resolve("You did it!");
  } else {
   reject(new Error('Sorry, something went wrong!'));
  }
 }, 2000);
}

export function doSomething() {
 return new Promise(promiseExecutor);
}