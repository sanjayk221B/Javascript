// For...Of Loops in JavaScript

// Using for...of with an array
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Using for...of with a string
let str = "Hello";

for (let char of str) {
    console.log(char);
}

// Using for...of with Set
let uniqueNumbers = new Set([1, 2, 3, 4, 4, 5]);

for (let num of uniqueNumbers) {
    console.log(num);
}

// Using for...of with Map
let personMap = new Map();
personMap.set("name", "John");
personMap.set("age", 30);

for (let [key, value] of personMap) {
    console.log(`${key}: ${value}`);
}

// Using for...of with generators
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

for (let num of numberGenerator()) {
    console.log(num);
}

// Exercises:
// 1. Write a function that finds the maximum number in an array using for...of
// 2. Create a program that counts the occurrences of each character in a string using for...of and a Map
// 3. Implement a simple spell checker using for...of and a Set of correctly spelled words