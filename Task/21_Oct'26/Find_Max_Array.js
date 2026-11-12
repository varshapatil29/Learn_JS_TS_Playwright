// JavaScript program to find the maximum element in an array

let arr = [3, 7, 2, 9, 1];
let maxElement = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement)
    {
       maxElement = arr[i];
    }
}
console.log( "The Maximum element in the array is: " + maxElement);
