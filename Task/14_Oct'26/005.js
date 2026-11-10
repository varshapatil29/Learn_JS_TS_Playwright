// Calculate the letter grade based on a numeric score. A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.

// const data = require('fs').readFileSync(0, 'utf8'); // we can use this line to take input from user


let marks = 95;
if (marks > 100) {
    console.log("Invalid input");
} else {
    if (marks >= 90) {
        console.log(" A");
    } else if (marks >= 80) {
        console.log("B");
    } else if (marks >= 70) {
        console.log("C");
    } else if (marks >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}