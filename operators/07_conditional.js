// Conditional (Ternary) Operator in JavaScript

// Basic syntax: condition ? expressionIfTrue : expressionIfFalse

// Example 1: Simple condition
let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log('Can vote:', canVote); // Output: Yes

// Example 2: With expressions
let x = 5;
let y = 3;
let max = x > y ? x : y;
console.log('Maximum:', max); // Output: 5

// Example 3: Nested ternary operators (use with caution for readability)
let num = 0;
let result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
console.log('Number is:', result); // Output: Zero

// Example 4: With functions
function isEven(n) {
    return n % 2 === 0 ? true : false;
}
console.log('Is 4 even?', isEven(4)); // Output: true
console.log('Is 7 even?', isEven(7)); // Output: false

// Example 5: Assigning default values
let name = null;
let displayName = name ? name : "Anonymous";
console.log('Display name:', displayName); // Output: Anonymous

// Example 6: In template literals
let status = "online";
console.log(`User is ${status === "online" ? "active" : "inactive"}`);
// Output: User is active

// Exercise:
// 1. Write a ternary operator to check if a number is positive, negative, or zero
// 2. Use a ternary operator to return "even" or "odd" based on a number
// 3. Create a function that uses a ternary operator to return the absolute value of a number