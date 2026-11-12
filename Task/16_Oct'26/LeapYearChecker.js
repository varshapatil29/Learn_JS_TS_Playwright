
const year = 2024;

// Check whether the year is a leap year
if (year % 400 === 0) {
    console.log(year + " is a Leap Year");
}
else if (year % 100 === 0) {
    console.log(year + " is NOT a Leap Year");
}
else if (year % 4 === 0) {
    console.log(year + " is a Leap Year");
}
else {
    console.log(year + " is NOT a Leap Year");
}


/* Another way to check whether a year is a leap year or not is by using the following code:

const data = require('fs').readFileSync(0, 'utf8');

const year = data;

// Check whether the year is a leap year

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("YES");
} else {
    console.log("NO");
}

*/
