// const data = require('fs').readFileSync(0, 'utf8');
// const n = parseInt(data.trim().split('\n')[0], 10);

const n = 4;

for (let i = 1; i <= n; i++) {
    let row = "";

    // Add (n - i) leading spaces
    for (let s = 1; s <= n - i; s++) {
        row += " ";
    }

    // Add (2 * i - 1) stars
    for (let k = 1; k <= 2 * i - 1; k++) {
        row += "*";
    }

    console.log(row);
}


// Output:
//    *
//   ***
//  *****
// *******