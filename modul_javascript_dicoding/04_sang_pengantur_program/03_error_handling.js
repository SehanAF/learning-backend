// try catch
try {
 // block of code to try
} catch (error) {
 // executes if an error occurs
} finally {
 // always executes
}

try {
 console.log('Memulai program');
 console.log('Mengakhiri program');
} catch (err) {
 console.log('Karena tidak ada error, blok ini akan diabaikan');
}

console.log('')
try {
  console.log('Ini try block');
} catch (err) {
  console.log('Ini catch block');
} finally {
  console.log('Ini finally block');
}

console.log('')

try {
 console.log('Ini try block');
 throw new Error('Error: Program berhenti');
} catch (err) {
 console.log('Ini catch block');
} finally {
 console.log('Ini finally block');
}

console.log('')