// 06_object_methods.js

/**
 * Object Methods in JavaScript
 * 
 * Methods are functions that are associated with an object.
 * They allow objects to have behavior in addition to data.
 */

let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    // ES6 shorthand method syntax
    greet() {
        console.log("Hello, I'm " + this.fullName());
    }
};

// Calling methods
console.log(person.fullName()); // John Doe
person.greet(); // Hello, I'm John Doe

// Adding methods to existing objects
person.introduce = function(hobby) {
    console.log(`Hi, I'm ${this.fullName()} and I like ${hobby}.`);
};

person.introduce("reading"); // Hi, I'm John Doe and I like reading.

// Methods with parameters
let calculator = {
    add(a, b) {
        return a + b;
    },
    multiply(a, b) {
        return a * b;
    }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.multiply(4, 2)); // 8

// Methods can also modify the object's state
let counter = {
    count: 0,
    increment() {
        this.count++;
    },
    decrement() {
        this.count--;
    },
    getCount() {
        return this.count;
    }
};

counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

/**
 * Exercise:
 * Create an object representing a bank account. Include methods for deposit,
 * withdrawal, and checking the balance. Ensure that the balance cannot go
 * below zero.
 */

// Your code here