// 07_const_keyword.js

// The 'const' Keyword in JavaScript

// 'const' was introduced in ES6 (2015) for declaring constants

// 1. Basic declaration and assignment
const PI = 3.14159;
console.log(PI); // Outputs: 3.14159

// 2. 'const' has block scope, like 'let'
if (true) {
    const x = 10;
    console.log(x); // Outputs: 10
}
// console.log(x); // This would cause an error, x is not defined outside the block

// 3. 'const' must be initialized at declaration
// const y; // This would cause an error

// 4. 'const' does not allow reassignment
// PI = 3.14; // This would cause an error

// 5. 'const' with objects and arrays
const user = { name: "Alice" };
user.name = "Bob"; // This is allowed
console.log(user.name); // Outputs: Bob

const numbers = [1, 2, 3];
numbers.push(4); // This is allowed
console.log(numbers); // Outputs: [1, 2, 3, 4]

// 6. 'const' in loops
for (const i of [1, 2, 3]) {
    console.log(i);
}

// Exercise:
// 1. Declare a 'const' variable and try to reassign it. What happens?
// 2. Create a 'const' object and modify one of its properties. Is this allowed?
// 3. Try to declare a 'const' variable without initializing it. What's the result?
// 4. Use 'const' in a for...of loop to iterate over an array. Does it work?

// Remember:
// - 'const' has block scope
// - 'const' variables must be initialized at declaration
// - 'const' prevents reassignment, but doesn't make objects immutable
// - Use 'const' by default, and only use 'let' when you know the value will change