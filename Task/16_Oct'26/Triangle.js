

const a = 5;
const b = 5;
const c = 5;

if (a === b && b === c) {
    console.log("Equilateral");
}
else if (a === b || b === c || a === c) {
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}



/*
const data = require('fs').readFileSync(0, 'utf8');

const [a, b, c] = data.split(' ').map(Number);

if (a === b && b === c)
{
    console.log("Equilateral");
}
else if (a === b || b === c || a === c)
{
    console.log("Isosceles");
}
else {
    console.log("Scalene");
}

*/