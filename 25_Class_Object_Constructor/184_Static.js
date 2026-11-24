
class Employee {
    static totalEmployees = 0;
    static presentCount = 0;

    constructor(name, isPresent) {
        this.name = name;
        this.isPresent = isPresent;

        Employee.totalEmployees++;

        if (isPresent) {
            Employee.presentCount++;
        }
    }
}

let e1 = new Employee("Rahul", true);
let e2 = new Employee("Priya", false);
let e3 = new Employee("Amit", true);
let e4 = new Employee("Sneha", true);

console.log(Employee.totalEmployees);
console.log(Employee.presentCount);

console.log(e1.name);
console.log(e2.name);
console.log(e3.name);
console.log(e4.name);


// Output :  

// 4
// 3
// Rahul
// Priya
// Amit
// Sneha