// 06_let_keyword.js

// The 'let' Keyword in JavaScript

// 'let' was introduced in ES6 (2015) for block-scoped variable declarations

// 1. Basic declaration and assignment
let score = 100;
console.log(score); // Outputs: 100

// 2. 'let' has block scope
if (true) {
    let x = 10;
    console.log(x); // Outputs: 10
}
// console.log(x); // This would cause an error, x is not defined outside the block

// 3. 'let' does not allow redeclaration in the same scope
let age = 30;
// let age = 31; // This would cause an error

// 4. 'let' variables are not hoisted
// console.log(y); // This would cause an error
let y = 5;

// 5. 'let' in loops
for (let i = 0; i < 3; i++) {
    console.log(i);
}
// console.log(i); // This would cause an error, i is not defined outside the loop

// 6. Temporal Dead Zone (TDZ)
{
    // console.log(z); // This would cause an error due to TDZ
    let z = 20;
}

// Exercise:
// 1. Create a function that declares a 'let' variable inside it. Try to access that variable outside the function.
// 2. Try to declare a 'let' variable twice with different values in the same scope. What happens?
// 3. Use 'let' to declare a variable inside an if block. Can you access it outside the block?
// 4. What happens if you use a 'let' variable before its declaration in the same block? Try it.

// Remember:
// - 'let' has block scope
// - 'let' does not allow redeclaration in the same scope
// - 'let' variables are not hoisted and have a Temporal Dead Zone
// - 'let' is preferred over 'var' in modern JavaScript