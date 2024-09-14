    // Try...Catch in JavaScript

// Basic try...catch
try {
    // Code that may throw an error
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("An error occurred:", error.message);
}

// try...catch...finally
try {
    let x = undefined;
    console.log(x.length);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("This will always run");
}

// Throwing custom errors
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log("Caught error:", error.message);
}

// Catching specific error types
try {
    let obj = null;
    console.log(obj.property);
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Type Error:", error.message);
    } else {
        console.log("Other Error:", error.message);
    }
}

// Exercises:
// 1. Write a function that parses a JSON string and uses try...catch to handle invalid JSON
// 2. Create a program that reads a file and uses try...catch to handle file not found errors
// 3. Implement a simple calculator function that uses try...catch to handle division by zero and invalid operations