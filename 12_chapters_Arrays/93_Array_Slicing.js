// Slice & Combining

let arr = [1, 2, 3, 4, 5];
// slice(start, end) — returns new array, 
// does NOT mutate actual -> ( start, end-1) = index = 0
// Don't give the end, it will automatically 
// take from start to end.

console.log(arr.slice(1, 3));
console.log(arr);             // [1, 2, 3, 4, 5] - original array is not mutated

console.log(arr.slice(2));  // [3, 4, 5] - from index 2 to end

 console.log(arr.slice(-2));  // [4, 5] - last two elements
 console.log(arr.slice(-3));  // [3, 4, 5] - last three elements

 console.log(arr.slice(0));   // [1, 2, 3, 4, 5] - from index 0 to end

 console.log(arr.slice(-5));   // [1, 2, 3, 4, 5] - from index -5 to end

console.log(arr.slice(-3,-5));   // [] - from index -3 to -5 
// (empty array, as start index is greater than end index)