// Introduction to Functions in JavaScript

// What is a function?
// A function is a reusable block of code that performs a specific task or calculates a value.

// Basic function structure
function greet() {
    console.log("Hello, world!");
}

// Calling (invoking) a function
greet(); // Output: Hello, world!

// Function with parameters
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}

greetPerson("Alice"); // Output: Hello, Alice!

// Function with a return value
function add(a, b) {
    return a + b;
}

let sum = add(5, 3);
console.log(sum); // Output: 8

// Function as a value
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 2)); // Output: 8

// Arrow function (ES6+)
let square = (x) => x * x;

console.log(square(5)); // Output: 25

// Functions as object methods
let person = {
    name: "John",
    sayHello: function() {
        console.log("Hello, I'm " + this.name);
    }
};

person.sayHello(); // Output: Hello, I'm John

// Exercises:
// 1. Write a function that takes a person's first and last name as parameters and returns their full name.
// 2. Create a function that calculates the area of a rectangle given its width and height.
// 3. Write a function that determines if a number is even or odd and returns "even" or "odd" accordingly.