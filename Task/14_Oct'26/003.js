//   Write a Java program that prints a multiplication table for a given number using printf formatting.

//const data = require('fs').readFileSync(0, 'utf8');   // using this line we can take the input from user 

let num_table = 5;
let i = 1;
for (i = 1; i <= 10; i++) {
    let value = num_table * i;
    console.log(`${num_table} x ${i} = ${value}`);
}