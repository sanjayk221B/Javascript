// 01_introduction.js

// Introduction to Variables in JavaScript

// What is a variable?
// A variable is a container for storing data values. Think of it as a labeled box 
// that holds information which can be used and changed throughout your program.

// Why do we use variables?
// 1. To store and manage data
// 2. To make our code more readable
// 3. To reuse values without repeating them

// Example:
let score = 10;
console.log(score); // Outputs: 10

// We can change the value stored in a variable
score = 15;
console.log(score); // Outputs: 15

// Variables can store different types of data
let playerName = "Alice";  // Storing a string
let isGameOver = false;    // Storing a boolean
let lives = 3;             // Storing a number

// We can use variables in calculations or combine them
console.log("Player " + playerName + " has " + lives + " lives left.");

// Variables make our code more readable and easier to update
let totalPlayers = 4;
let pointsPerPlayer = 10;
let totalPoints = totalPlayers * pointsPerPlayer;

console.log("Total points: " + totalPoints);

// Exercise:
// 1. Create a variable called 'myFavoriteNumber' and assign it your favorite number
// 2. Create a variable called 'myName' and assign it your name
// 3. Use console.log to output a sentence using both variables, like:
//    "My name is [your name] and my favorite number is [your favorite number]."

// Remember: Programming is about problem-solving. Variables are your first tool
// in storing and manipulating data to solve problems!