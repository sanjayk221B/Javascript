// For Loops in JavaScript

// Basic for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Looping through an array
let fruits = ['apple', 'banana', 'orange'];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Nested for loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i},${j}`);
    }
}

// For loop with multiple expressions
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(i, j);
}

// Infinite loop (be careful!)
// for (;;) {
//     console.log("This will run forever!");
// }

// Exercises:
// 1. Write a for loop that prints the even numbers from 0 to 20
// 2. Create a for loop that calculates the factorial of a number
// 3. Use nested for loops to create a multiplication table for numbers 1 through 10