const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve, reject) => setTimeout(() => reject(new Error('Rejected!')), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));

Promise.allSettled([promise1, promise2, promise3])
 .then((values) => {
  console.log('All promises resolved:', values);
 })
 .catch((err) => {
  console.log('Some promises rejected:');
  console.log(err.message);
 });
