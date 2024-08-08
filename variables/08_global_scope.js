// 08_global_scope.js

// Global Scope in JavaScript

// Variables declared outside any function or block have global scope

// 1. Global variables
var globalVar = "I'm a global var";
let globalLet = "I'm a global let";
const globalConst = "I'm a global const";

console.log(globalVar);    // Outputs: I'm a global var
console.log(globalLet);    // Outputs: I'm a global let
console.log(globalConst);  // Outputs: I'm a global const

// 2. Accessing global variables inside a function
function accessGlobals() {
    console.log(globalVar);    // Outputs: I'm a global var
    console.log(globalLet);    // Outputs: I'm a global let
    console.log(globalConst);  // Outputs: I'm a global const
}
accessGlobals();

// 3. Global object (in browsers, it's 'window')
var globalVarOnWindow = "I'm on the window object";
console.log(window.globalVarOnWindow);  // Outputs: I'm on the window object

// Note: let and const don't create properties on the global object
let globalLetNotOnWindow = "I'm not on the window object";
console.log(window.globalLetNotOnWindow);  // Outputs: undefined

// 4. Avoid polluting the global scope
function createGlobal() {
    globallyCreated = "I'm global, but I shouldn't be";
}
createGlobal();
console.log(globallyCreated);  // Outputs: I'm global, but I shouldn't be

// Exercise:
// 1. Create a global variable and try to access it inside a function.
// 2. Create a variable inside a function without using var, let, or const. What scope does it have?
// 3. Compare how var, let, and const behave when declared globally.

// Remember:
// - Global variables can be accessed from anywhere in your code
// - Avoid creating too many global variables to prevent naming conflicts
// - In strict mode, assigning to an undeclared variable throws an error