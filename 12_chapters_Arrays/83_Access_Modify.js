
// Accessing & Modifying

let s = ["pass", "fail", "skip"];

console.log(s[0]);   // pass
console.log(s[2]);   // skip

console.log(s.at(-1));  // skip
console.log(s.at(-2));  // fail
console.log(s.at(-4));  // undefined

// Modify
s[1] = "blocked";
console.log(s);        // ["pass", "blocked", "skip"]

console.log(s.length); // 3