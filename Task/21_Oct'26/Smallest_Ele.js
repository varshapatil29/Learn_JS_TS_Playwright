// Find Smallest element in an array

let arr = [12, 34, 10, 1];
let smallestElement = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
        smallestElement = arr[i];
    }
}
console.log("The smallest element in the array is: " + smallestElement);
