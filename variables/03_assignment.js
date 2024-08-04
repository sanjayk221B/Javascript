// 03_assignment.js

// Variable Assignment in JavaScript

// Assignment is the process of storing a value in a variable

// Basic assignment
let score = 100;
console.log(score); // Outputs: 100

// We can assign different types of values
let playerName = "Alice";     // String
let isGameOver = false;       // Boolean
let level = 5;                // Number
let items = ["sword", "shield"]; // Array
let player = {name: "Bob", health: 100}; // Object

// Reassignment
score = 150;
console.log(score); // Outputs: 150

// We can assign the value of one variable to another
let newScore = score;
console.log(newScore); // Outputs: 150

// Assignment with operators
score += 10; // Equivalent to: score = score + 10
console.log(score); // Outputs: 160

score -= 5;  // Equivalent to: score = score - 5
console.log(score); // Outputs: 155

// Multiple assignments
let a, b, c;
a = b = c = 5;
console.log(a, b, c); // Outputs: 5 5 5

// Constants cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // This would cause an error

// However, for const objects and arrays, their properties can be modified
const user = {name: "Charlie"};
user.name = "David"; // This is allowed
// user = {name: "Eve"}; // This would cause an error

// Exercise:
// 1. Declare a variable 'x' and assign it the value 10
// 2. Declare a variable 'y' and assign it the value of 'x' plus 5
// 3. Use the += operator to add 2 to 'x'
// 4. Create a constant array called 'fruits' with two fruits, then add a third fruit (hint: use push)

// Remember: 
// - Variables declared with 'let' can be reassigned
// - Constants (declared with 'const') cannot be reassigned, but their properties can be changed if they're objects or arrays
// - Assignment operations return the assigned value