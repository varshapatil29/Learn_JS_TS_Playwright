
// ==================================================
// JAVASCRIPT OPERATORS - 25 EXERCISES
// ==================================================


// 1 : ASSIGNMENT OPERATORS 

console.log("\n===== ASSIGNMENT OPERATORS =====");

// 1. Basic Assignment
let a = 20;
console.log("Exercise 1:", a);

// 2. Addition Assignment
let b = 10;
b += 15;
console.log("Exercise 2:", b);

// 3. Subtraction Assignment
let salary = 50000;
salary -= 5000;
console.log("Exercise 3:", salary);

// 4. Multiplication Assignment
let number = 5;
number *= 4;
console.log("Exercise 4:", number);

// 5. Multiple Assignment Operations
let x = 100;
x += 50;
x -= 20;
x *= 2;
x /= 5;
console.log("Exercise 5:", x);


// 2 : ARITHMETIC OPERATORS

console.log("\n===== ARITHMETIC OPERATORS =====");

// 6. Addition and Subtraction

let num1 = 25;
let num2 = 10;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);

// 7. Multiplication  Division

let price = 250;
let quantity = 4;

let totalPrice = price * quantity;
console.log("Total Price:", totalPrice);
console.log("Divided by 2:", totalPrice / 2);

// 8. Modulus Operator

let num = 17;
console.log("Remainder:", num % 5);

// 9. Even or Odd

let checkNumber = 15;

if (checkNumber % 2 === 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}

// 10. Increment and Decrement

let count = 10;

console.log("Pre-increment:", ++count);
console.log("Post-increment:", count++);
console.log("After Post-increment:", count);

console.log("Pre-decrement:", --count);
console.log("Post-decrement:", count--);
console.log("After Post-decrement:", count);


// 3 : LOGICAL OPERATORS 

console.log("\n===== LOGICAL OPERATORS =====");

// 11. AND (&&) Operator

let age = 25;
let hasLicense = true;

console.log("Eligible to drive:", age >= 18 && hasLicense);

// 12. OR (||) Operator

let isWeekend = false;
let isHoliday = true;

console.log("Day Off:", isWeekend || isHoliday);

// 13. NOT (!) Operator
let isLoggedIn = false;

console.log("Login Status:", !isLoggedIn);

// 14. Multiple Logical Conditions
let candidateAge = 22;
let candidateSalary = 30000;
let experience = 2;

let eligible =
    candidateAge >= 21 &&
    (candidateSalary >= 25000 || experience >= 2);

console.log("Job Eligible:", eligible);

// 15. Login Validation

let username = "admin";
let password = "12345";
let isAccountActive = true;

let login =
    username === "admin" &&
    password === "12345" &&
    isAccountActive === true;

console.log("Login Successful:", login);


// 4 : COMPARISON OPERATORS

console.log("\n===== COMPARISON OPERATORS =====");

// 16. Equal Comparison

let value1 = 10;
let value2 = 10;

console.log("Equal:", value1 == value2);

// 17. Strict Equality

let firstValue = 10;
let secondValue = "10";

console.log("Strict Equality:", firstValue === secondValue);

// 18. Greater Than and Less Than

let firstNumber = 50;
let secondNumber = 30;

console.log("Greater Than:", firstNumber > secondNumber);
console.log("Less Than:", firstNumber < secondNumber);
console.log("Greater or Equal:", firstNumber >= secondNumber);

// 19. Not Equal Comparison

let xValue = 100;
let yValue = 200;

console.log("Not Equal:", xValue != yValue);
console.log("Strict Not Equal:", xValue !== yValue);

// 20. Age Eligibility

let votingAge = 18;

console.log("Eligible to Vote:", votingAge >= 18);


// 5 : CONFUSING COMPARISON EXAMPLES 

console.log("\n===== CONFUSING COMPARISON EXAMPLES =====");

// 21. Double Equals vs Triple Equals

console.log(10 == "10");    // true
console.log(10 === "10");   // false

console.log(true == 1);     // true
console.log(true === 1);    // false

// 22. Null vs Undefined

console.log(null == undefined);   // true
console.log(null === undefined);  // false

console.log(null == 0);           // false
console.log(null === 0);          // false

// 23. Empty String vs Zero

console.log("" == 0);       // true
console.log("" === 0);      // false

console.log(false == 0);    // true
console.log(false === 0);   // false

// 24. Comparison with NaN

console.log(NaN == NaN);            // false
console.log(NaN === NaN);           // false

console.log(NaN != NaN);            // true
console.log(Number.isNaN(NaN));     // true

// 25. Multiple Comparison Traps

console.log(5 > 3 > 1);     // false
console.log(5 < 3 < 1);     // true

console.log("20" > "100");  // true
console.log("20" > 100);    // false

console.log([] == false);   // true
console.log([] === false);  // false


console.log("\n===== ALL 25 EXERCISES COMPLETED =====");
