
class Calculator {

    add(a, b, c) {

        if (c !== undefined) {
            return a + b + c;
        }
        else if (b !== undefined) {
            return a + b;
        }
        else {
            return a;
        }
    }
}

const calc = new Calculator();

console.log("One argument:", calc.add(10));

console.log("Two arguments:", calc.add(10, 20));

console.log("Three arguments:", calc.add(10, 20, 30));


/*  Output
One argument: 10
Two arguments: 30
Three arguments: 60


3. Explanation
Method call	Arguments	Result
calc.add(10)	1 argument	10
calc.add(10, 20)	2 arguments	30
calc.add(10, 20, 30)	3 arguments	60

How does it work?
- The same method name add() is used.
- We pass different numbers of arguments.
- The method checks the arguments and performs the appropriate operation.
4. Important interview point
Java vs JavaScript:
Java	JavaScript
Supports method overloading	Does not support traditional method overloading
Compile-time polymorphism	No traditional compile-time method overloading
Methods can have the same name with different parameter lists	Defining the same method name again replaces the previous definition

Interview tip
If an interviewer asks:

Does JavaScript support compile-time polymorphism?

You can answer:

"JavaScript does not support traditional compile-time polymorphism through
 method overloading like Java. However, we can achieve similar behavior
  using optional parameters, rest parameters, and conditional statements.
 JavaScript is dynamically typed, and method calls are resolved at runtime."

 */

// Try this interview practice

// What will be the output?
class Test {
    show(a, b) {
        console.log(a + b);
    }

    show(a) {
        console.log(a);
    }
}

const obj = new Test();

obj.show(10, 20);


// Output : 10 

// The output is 10. The second show() method overwrites the first one because 
// JavaScript does not support traditional method overloading.