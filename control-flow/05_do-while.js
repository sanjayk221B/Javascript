// Do...While Loops in JavaScript

// Basic do...while loop
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 5);

// do...while loop that always runs at least once
let j = 10;
do {
    console.log("This will be printed once even though the condition is false.");
} while (j < 5);

// Using do...while for input validation (simulated)
function simulateUserInput() {
    return Math.floor(Math.random() * 10) + 1;
}

let userInput;
do {
    userInput = simulateUserInput();
    console.log(`User entered: ${userInput}`);
} while (userInput !== 5);
console.log("Correct number entered!");

// Exercises:
// 1. Create a do...while loop that generates random numbers until it generates a prime number
// 2. Implement a simple menu system using a do...while loop
// 3. Write a program that calculates the sum of digits of a number using a do...while loop