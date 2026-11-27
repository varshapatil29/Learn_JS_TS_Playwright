//const data = require('fs').readFileSync(0, 'utf8');
//const num = parseInt(data.trim().split('\n'), 10);

const num = 17;     // Example number to check for primality

let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("YES");
} else {
    console.log("NO");
}


// Output: YES (for num = 17)
