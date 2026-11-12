
let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);    // 10
console.log(b);    // 20
console.log(rest); // [30, 40, 50]


let [, , thirdOnly] = [10, 20, 30];
console.log(thirdOnly);

console.log(firstOnly); // undefined,
console.log(secondOnly); // undefined, 
// because secondOnly and firstOnly are not defined in the destructuring assignment

let [firstOnly, secondOnly, ] = [10, 20, 30];
console.log(firstOnly);   // 10 
console.log(secondOnly);  // 20
