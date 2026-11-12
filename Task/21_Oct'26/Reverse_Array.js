// Reverse an array

let arr = [1, 2, 3, 4, 5];
console.log("Original array: " + arr);

// Method 1: Using the reverse() method
let reversedArr = arr.slice().reverse();
console.log("Reversed array: " + reversedArr);

// Method 2: Using a loop
let reversedArr2 = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr2.push(arr[i]);
}
console.log("Reversed array (method 2): " + reversedArr2);
