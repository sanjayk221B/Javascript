// Function Declaration in JavaScript

// Basic function declaration
function greet() {
    console.log("Hello, world!");
}

greet(); // Output: Hello, world!

// Function declaration with parameters
function greetPerson(name) {
    console.log("Hello, " + name + "!");
}

greetPerson("Alice"); // Output: Hello, Alice!

// Function declaration with return value
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // Output: 8

// Function declaration with default parameters (ES6+)
function greetWithDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greetWithDefault(); // Output: Hello, Guest!
greetWithDefault("Bob"); // Output: Hello, Bob!

// Function declaration with rest parameters (ES6+)
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Function declaration with destructuring (ES6+)
function printPersonInfo({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: "John", age: 30, job: "Developer" };
printPersonInfo(person); // Output: Name: John, Age: 30

// Hoisting with function declarations
hoistedFunction(); // This works due to hoisting

function hoistedFunction() {
    console.log("I am hoisted!");
}

// Nested function declaration
function outer() {
    console.log("This is the outer function");

    function inner() {
        console.log("This is the inner function");
    }

    inner();
}

outer();
// Output:
// This is the outer function
// This is the inner function

// Exercises:
// 1. Declare a function that calculates the average of an array of numbers.
// 2. Create a function that takes a string and returns it reversed.
// 3. Write a function that determines if a year is a leap year. (Hint: A leap year is divisible by 4, but not by 100 unless it's also divisible by 400)5