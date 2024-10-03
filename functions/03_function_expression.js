// Function Expression in JavaScript

// Basic function expression
let greet = function () {
  console.log("Hello, world!");
};

greet(); // Output: Hello, world!

// Function expression with parameters
let greetPerson = function (name) {
  console.log("Hello, " + name + "!");
};

greetPerson("Alice"); // Output: Hello, Alice!

// Function expression with return value
let add = function (a, b) {
  return a + b;
};

console.log(add(5, 3)); // Output: 8

// Immediately Invoked Function Expression (IIFE)
(function () {
  console.log("This function is executed immediately!");
})();

// Function expression as an argument (callback)
setTimeout(function () {
  console.log("This is a callback function");
}, 1000);

// Named function expression
let factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(5)); // Output: 120

// Exercises:
// 1. Create a function expression that checks if a number is prime.
// 2. Write a function expression that calculates the Fibonacci sequence up to n terms.
// 3. Implement a simple calculator using function expressions for each operation (add, subtract, multiply, divide).
