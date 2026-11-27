//const data = require('fs').readFileSync(0, 'utf8');
// const str = data.toLowerCase();

const str = "Hello World".toLowerCase();

let vowels = 0;
let consonants = 0;

for (let char of str) {
    if (char >= 'a' && char <= 'z') {
        if ('aeiou'.includes(char)) {
            vowels++;
        } else {
            consonants++;
        }
    }
}

console.log(`Vowels: ${vowels}`);
console.log(`Consonants: ${consonants}`);


// Output: Vowels: 3, Consonants: 7 (for str = "Hello World")