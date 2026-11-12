// Find duplicate elements in an array
let arr = [1, 2, 3, 2, 4, 1];
let duplicates = [];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            duplicates.push(arr[i]);
            break;
        }
    }
}

console.log("Duplicate elements in the array are: " + duplicates);


/*
let arr = [1, 2, 3, 4, 5, 1, 2, 6, 7, 8, 9, 10];
let duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
console.log(duplicates); 

// Output: [1, 2]  
*/