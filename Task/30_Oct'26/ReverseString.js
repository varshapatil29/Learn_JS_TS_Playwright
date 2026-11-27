//const data = require('fs').readFileSync(0, 'utf8');
//const str = data.split('\n')[0].trim();

const str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--)
{
    reversed += str[i];
}

console.log(reversed);


// Output: olleh
