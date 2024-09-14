// If...Else Statements in JavaScript

// Basic if statement
let temperature = 25;

if (temperature > 30) {
    console.log("It's a hot day!");
}

// If...else statement
if (temperature > 30) {
    console.log("It's a hot day!");
} else {
    console.log("It's not too hot today.");
}

// If...else if...else statement
if (temperature > 30) {
    console.log("It's a hot day!");
} else if (temperature > 20) {
    console.log("It's a nice day!");
} else {
    console.log("It's a bit chilly.");
}

// Nested if statements
let isRaining = false;

if (temperature > 20) {
    console.log("It's warm outside.");
    if (isRaining) {
        console.log("But it's raining, so take an umbrella!");
    } else {
        console.log("And it's not raining. Enjoy the weather!");
    }
}

// Ternary operator (shorthand for simple if...else)
let message = temperature > 30 ? "It's hot!" : "It's not too hot.";
console.log(message);

// Using logical operators in conditions
let isSunny = true;

if (temperature > 20 && isSunny) {
    console.log("It's a beautiful day for a picnic!");
}

// Truthy and falsy values
let name = "";

if (name) {
    console.log("Hello, " + name + "!");
} else {
    console.log("Hello, stranger!");
}

// Exercises:
// 1. Write an if...else statement to check if a number is positive, negative, or zero
// 2. Create a grading system that prints "A" for scores 90 and above, "B" for scores 80-89, "C" for 70-79, "D" for 60-69, and "F" for below 60
// 3. Write a program that checks if a year is a leap year (divisible by 4 and either not divisible by 100 or divisible by 400)