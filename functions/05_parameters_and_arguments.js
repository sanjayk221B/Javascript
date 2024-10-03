// Parameters and Arguments in JavaScript

// Basic parameters and arguments
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Output: Hello, Alice!

// Multiple parameters
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8

// Default parameters
function greetWithDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}

greetWithDefault(); // Output: Hello, Guest!
greetWithDefault("Bob"); // Output: Hello, Bob!

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Arguments object
function logArguments() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}

logArguments("a", "b", "c");

// Destructuring parameters
function printPersonInfo({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const person = { name: "John", age: 30, job: "Developer" };
printPersonInfo(person);

// Exercises:
// 1. Create a function that accepts any number of strings and returns them concatenated.
// 2. Write a function that finds the maximum number among its arguments.
// 3. Implement a function that accepts an object and a list of keys, and returns a new object with only the specified keys.