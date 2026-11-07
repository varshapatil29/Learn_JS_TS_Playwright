//What is the output of the following expressions.

// 1.
let a = 100;

console.log(a++ + ++a +a++ + ++a); // 408
// 100 + 102+102+104 = 408
console.log(a); // 104

// 2.
let k = 37;

console.log(--k + k--); //72

console.log(k);  //35

// 3.
let m = 5;
let n = m-- - --m;  // 2
console.log(n, m); // 2, 3

// 4.
let i = 1;

let r = i++ > 1 ? i++ : ++i;  // 3
console.log(r, i);  // 3,3