// Throw Statement in JavaScript

// Throwing a simple error
function divide(a, b) {
    if (b === 0) {
        throw "Division by zero is not allowed";
    }
    return a / b;
}

try {
    console.log(divide(10, 2));
    console.log(divide(10, 0));
} catch (error) {
    console.log("Caught error:", error);
}

// Throwing an Error object
function sqrt(x) {
    if (x < 0) {
        throw new Error("Cannot calculate square root of a negative number");
    }
    return Math.sqrt(x);
}

try {
    console.log(sqrt(16));
    console.log(sqrt(-4));
} catch (error) {
    console.log("Error:", error.message);
}

// Custom error types
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError("Name is required");
    }
    if (!user.age || user.age < 0) {
        throw new ValidationError("Invalid age");
    }
}

try {
    validateUser({ name: "John", age: -5 });
} catch (error) {
    if (error instanceof ValidationError) {
        console.log("Validation Error:", error.message);
    } else {
        console.log("Other Error:", error.message);
    }
}

// Exercises:
// 1. Create a function that validates an email address and throws an error for invalid emails
// 2. Implement a simple bank account class with methods for deposit and withdrawal, using throw to handle insufficient funds
// 3. Write a program that reads user input and throws appropriate errors for invalid input (e.g., non-numeric input for a number prompt)