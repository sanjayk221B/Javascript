// Switch Statements in JavaScript

let day = 3;
let dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Wednesday

// Multiple cases
let fruit = "apple";
let fruitType;

switch (fruit) {
    case "apple":
    case "pear":
    case "banana":
        fruitType = "common fruit";
        break;
    case "mango":
    case "papaya":
        fruitType = "tropical fruit";
        break;
    default:
        fruitType = "unknown fruit";
}

console.log(fruitType); // Output: common fruit

// Exercises:
// 1. Create a switch statement that converts number grades to letter grades (A, B, C, D, F)
// 2. Write a switch statement that returns the number of days in a month given the month number (1-12)
// 3. Implement a simple calculator using a switch statement (operations: +, -, *, /)