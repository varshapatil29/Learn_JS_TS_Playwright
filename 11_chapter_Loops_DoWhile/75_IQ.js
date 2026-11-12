
// Do while vs while


// while -- While will always check the condition first. 
// let a = 10;
// while(a < 10){
//     console.log(a);
//     a++;
// }

// while loop will not run because the condition is false.

// but do while loop will run at least once
//  because it checks the condition after executing the block of code.

let a = 10;
do {
    console.log(a);
    a++;
} while (a < 10);

// Output:
// 10