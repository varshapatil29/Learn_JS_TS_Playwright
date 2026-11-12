// Find the frequency of each element in an array

let arr = [1, 2, 1, 3, 2];
let frequency = {};

for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
        if (frequency[element] === undefined)
         {
           frequency[element] = 1;
         } 
         else 
         {
           frequency[element]++;
     }
}

for (let element in frequency) {
    console.log(element + " appears " + frequency[element] + " times");
}


