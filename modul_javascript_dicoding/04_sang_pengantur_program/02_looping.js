// for loop
for (let i = 0; i < 10; i++) {
  console.log(`Angka ke-${i} adalah ${i}`);
}

console.log(``);

// for-in loop
const person = {name: 'Dicoding', age: 10, address: 'Jakarta'};
for (const property in person) {
  console.log(`${property} bernilai ${person[property]}`);
}

console.log(``);

// for-of loop
const colors = ['red', 'green', 'blue'];
for (const color of colors) {
  console.log(color);
}

console.log(``);

// while loop
let i = 0;
while (i < 10) {
  console.log(`Angka ke-${i} adalah ${i}`);
  i++;
}

console.log(``);

// do-while loop
let j = 0;
do {
  console.log(`Angka ke-${j} adalah ${j}`);
  j++;
} while (j < 10)

console.log(``);

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(`Angka ke-${i} adalah ${i}`);
}


