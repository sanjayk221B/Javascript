// While Loops in JavaScript

// Basic while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// While loop with a complex condition
let sum = 0;
let num = 1;
while (sum < 100) {
    sum += num;
    num++;
}
console.log(`Sum: ${sum}, Last number added: ${num - 1}`);

// Using while for input validation (simulated)
function simulateUserInput() {
    return Math.floor(Math.random() * 10);
}

let userInput;
while (userInput !== 5) {
    userInput = simulateUserInput();
    console.log(`User entered: ${userInput}`);
}
console.log("Correct number entered!");

// Exercises:
// 1. Write a while loop that prints the Fibonacci sequence up to a certain number
// 2. Create a guessing game where the user tries to guess a number between 1 and 100
// 3. Implement a simple ATM machine using a while loop for the main menu