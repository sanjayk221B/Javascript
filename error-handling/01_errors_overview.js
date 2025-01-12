// 01_errors_overview.js

// Types of Errors in JavaScript

// 1. SyntaxError
// Example: Missing parentheses or brackets
try {
    eval("function() { console.log('Hello') "); // Incorrect syntax
} catch (e) {
    console.error("SyntaxError:", e.message);
}

// 2. TypeError
// Example: Accessing a property on an undefined variable
try {
    let obj = undefined;
    console.log(obj.name);
} catch (e) {
    console.error("TypeError:", e.message);
}

// 3. ReferenceError
// Example: Using a variable that hasn't been declared
try {
    console.log(nonExistentVariable);
} catch (e) {
    console.error("ReferenceError:", e.message);
}

// 4. RangeError
// Example: Creating an array with an invalid length
try {
    let arr = new Array(-1); // Invalid array length
} catch (e) {
    console.error("RangeError:", e.message);
}

// 5. EvalError
// Example: Incorrect use of eval()
try {
    // Note: EvalError is rare and typically not encountered in modern JavaScript.
    eval("console.log('This works fine')");
} catch (e) {
    console.error("EvalError:", e.message);
}

// Examples of Common Errors and Resolutions

// Example 1: SyntaxError Resolution
// Incorrect: let a = ;
// Correct:
let a = 10;

// Example 2: TypeError Resolution
// Incorrect: let b = undefined; console.log(b.name);
// Correct:
let b = { name: "John" };
console.log(b.name);

// Example 3: ReferenceError Resolution
// Incorrect: console.log(c);
// Correct:
let c = "Declared variable";
console.log(c);

// Example 4: RangeError Resolution
// Incorrect: let arr = new Array(-5);
// Correct:
let arrCorrect = new Array(5);
console.log(arrCorrect.length);

// Note: EvalError is not commonly encountered and modern JavaScript environments avoid its use.
