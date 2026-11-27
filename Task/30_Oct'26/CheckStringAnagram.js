//const data = require('fs').readFileSync(0, 'utf8');
//const lines = data.trim().split('\n');

const lines = ["silent", "listen"];

const str1 = (lines[0] || '').trim().toLowerCase();
const str2 = (lines[1] || '').trim().toLowerCase();

if (str1.length !== str2.length) {
    console.log("NO");
} else {
    const sorted1 = str1.split('').sort().join('');
    const sorted2 = str2.split('').sort().join('');

    if (sorted1 === sorted2) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}


// Output: YES      (for str1 = "silent" and str2 = "listen")