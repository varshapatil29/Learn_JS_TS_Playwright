let a = 10;
let b = a--;
console.log(b);  // 10
console.log(a);  // 9


let i = 20;
let j = i--;
console.log(--i + i++ - j + ++i + j--);

// 18 + 18 - 20 + 20 + 20 = 56