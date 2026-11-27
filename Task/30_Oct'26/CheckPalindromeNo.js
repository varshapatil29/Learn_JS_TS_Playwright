//const data = require('fs').readFileSync(0, 'utf8');
//const str = data.split('\n')[0].trim().toLowerCase();

const str = "racecar";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--)
{
    reversed += str[i];
}

if (str === reversed) {
    console.log("YES");
} else {
    console.log("NO");
}

// Output: YES (for str = "racecar")