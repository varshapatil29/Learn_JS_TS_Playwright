// const data = require('fs').readFileSync(0, 'utf8');
// const n = parseInt(data.trim().split('\n')[0], 10);

const n = 4;

for (let i = n; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "*";
    }
    console.log(row);
}

// Output:
// ****
// ***
// **
// *
