
// If-Else
const score = 85;

if (score > 90) {
 console.log('A');
} else if (score > 80) {
 console.log('B');
} else if (score > 70) {
 console.log('C');
} else if (score > 60) {
 console.log('D');
} else {
 console.log('E');
}

//Ternay Operator
const price = 10000;
const isMmber = true;
const discount = isMmber ? 0.1: 0;

console.log(`Anda mendapatkan discount sebesar ${discount * price}`)

// switch case
const day = new Date().getDay();

switch (day) {
 case 0:
 console.log('Minggu');
 break;
 case 1:
 console.log('Senin');
 break;
 case 2:
 console.log('Selasa');
 break;
 case 3:
 console.log('Rabu');
 break;
 case 4:
 console.log('Kamis');
 break;
 case 5:
 console.log('Jumat');
 break;
 case 6:
 console.log('Sabtu');
 break;
}