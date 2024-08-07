// 05_var_keyword.js

// The 'var' Keyword in JavaScript

// 'var' is the oldest way to declare variables in JavaScript

// 1. Basic declaration and assignment
var score = 100;
console.log(score); // Outputs: 100

// 2. 'var' has function scope
function exampleFunction() {
    var x = 10;
    console.log(x); // Outputs: 10
}
exampleFunction();
// console.log(x); // This would cause an error, x is not defined outside the function

// 3. 'var' variables are hoisted
console.log(y); // Outputs: undefined (not an error!)
var y = 5;

// The above is interpreted as:
// var y;
// console.log(y);
// y = 5;

// 4. 'var' allows redeclaration
var age = 30;
var age = 31; // This is allowed
console.log(age); // Outputs: 31

// 5. 'var' does not have block scope
if (true) {
    var z = 20;
}
console.log(z); // Outputs: 20 (z is accessible outside the block)

// 6. 'var' in loops
for (var i = 0; i < 3; i++) {
    console.log(i);
}
console.log(i); // Outputs: 3 (i is accessible outside the loop)

// 7. Global object property
var globalVar = "I'm global";
console.log(window.globalVar); // In a browser, this would output: "I'm global"

// Exercise:
// 1. Create a function that declares a 'var' variable inside it. Try to access that variable outside the function.
// 2. Declare a 'var' variable twice with different values. What value does it have?
// 3. Use 'var' to declare a variable inside an if block. Can you access it outside the block?
// 4. What happens if you use a 'var' variable before its declaration? Try it.

// Remember:
// - 'var' has function scope, not block scope
// - 'var' variables are hoisted
// - 'var' allows redeclaration
// - 'var' is considered outdated in modern JavaScript; 'let' and 'const' are preferred