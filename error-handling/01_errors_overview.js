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

// 02_try_catch.js

// Introduction to `try...catch`
try {
    let result = 10 / 0; // This will not throw an error (Infinity in JavaScript)
    console.log("Result:", result);
    throw new Error("Manually thrown error");
} catch (e) {
    console.error("Caught an error:", e.message);
} finally {
    console.log("This will always execute.");
}

// The purpose of the `finally` clause
try {
    let jsonString = '{"key": "value"}';
    let parsed = JSON.parse(jsonString);
    console.log("Parsed JSON:", parsed);
} catch (e) {
    console.error("Error parsing JSON:", e.message);
} finally {
    console.log("Parsing attempt finished.");
}

// ----------------------------------------------------

// 03_throw.js

// Raising custom errors using `throw`
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

try {
    console.log("Division Result:", divide(10, 0));
} catch (e) {
    console.error("Error during division:", e.message);
}

// Writing meaningful error messages
try {
    let user = null;
    if (!user) {
        throw new Error("User object cannot be null or undefined.");
    }
} catch (e) {
    console.error("Application error:", e.message);
}

// ----------------------------------------------------

// 04_custom_errors.js

// Creating custom error types using the `Error` constructor
class CustomError extends Error {
    constructor(message, code) {
        super(message);
        this.code = code;
        this.name = "CustomError";
    }
}

try {
    throw new CustomError("Something went wrong.", 500);
} catch (e) {
    console.error(`${e.name} (${e.code}): ${e.message}`);
}

// Extending built-in Error class for specialized error handling
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid input detected.");
} catch (e) {
    console.error(`${e.name}: ${e.message}`);
}

// ----------------------------------------------------

// 05_error_handling_patterns.js

// Defensive programming techniques
function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        console.error("Failed to parse JSON:", e.message);
        return null;
    }
}

let goodJson = '{"key": "value"}';
let badJson = "Not a JSON string";

console.log("Parsed (good):", safeParse(goodJson));
console.log("Parsed (bad):", safeParse(badJson));

// Graceful degradation and fallback mechanisms
function getConfig(config) {
    return config || { default: true };
}

console.log("Config with fallback:", getConfig(null));

// Error logging and reporting
function logErrorToService(error) {
    console.error("Logging error to external service:", error.message);
}

try {
    throw new Error("Critical failure");
} catch (e) {
    logErrorToService(e);
}
