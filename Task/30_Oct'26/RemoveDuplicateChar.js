//const data = require('fs').readFileSync(0, 'utf8');
//const str = data.split('\n')[0].trim();

const str = "Hello World";

let result = '';

for (let i = 0; i < str.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
        if (str[i] === result[j]) {
            isDuplicate = true;
            break;
        }
    }

    if (!isDuplicate) {
        result += str[i];
    }
}

console.log(result);


// Output: Helo Wrd
//  (for str = "Hello World")
