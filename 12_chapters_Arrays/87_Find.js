
let nums = [10,25,30,45];
let result = nums.find(temp => temp > 20);
console.log(result);     // 25

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);   // 1

nums.findLast(n => n > 20);      //  45
nums.findLastIndex(n => n > 20); // 3


let arr = [60,25,30,45];
let res = arr.find(temp => temp > 40);
console.log(res);   // 60