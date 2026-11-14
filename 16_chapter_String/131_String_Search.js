
// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes()
console.log(url.includes("staging"));    // true 
console.log(url.includes("production"));  // false

// startsWith / endsWith
console.log(url.startsWith("https"));   // true
console.log(url.startsWith("http://")); // false
console.log(url.endsWith("true"));      // true

// indexOf / lastIndexOf
console.log(url.indexOf("a"));        // 10
console.log(url.lastIndexOf("a"));    // 24 
console.log(url.indexOf("nothere"));  // -1  // explanation: -1 means not found
// If string not found the indexOf() method returns -1. This is a common way to check if a substring exists in a string.

// ASCII -> A -> 65