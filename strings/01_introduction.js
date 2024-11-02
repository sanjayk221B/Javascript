// 01_introduction.js

/**
 * JavaScript Strings Introduction
 * This file covers the basics of working with strings in JavaScript
 */

// String Creation
// ---------------

// 1. Using string literals (preferred way)
const singleQuotes = 'Hello, World!';
const doubleQuotes = "Hello, World!";
const backticks = `Hello, World!`;

// 2. Using String constructor (not recommended)
const stringObject = new String("Hello, World!"); // Creates String object

// String Properties
// ----------------
console.log("--- String Properties ---");
console.log('Length:', "Hello".length); // 5
console.log('Type of string literal:', typeof "Hello"); // "string"
console.log('Type of String object:', typeof new String("Hello")); // "object"

// Accessing Characters
// ------------------
const str = "JavaScript";
console.log("--- Accessing Characters ---");
console.log('First character:', str[0]); // "J"
console.log('Third character:', str[2]); // "v"
console.log('Last character:', str[str.length - 1]); // "t"
console.log('Using charAt:', str.charAt(0)); // "J"

// String Immutability
// ------------------
let text = "Hello";
text[0] = "h"; // This won't work - strings are immutable
console.log('After trying to change character:', text); // Still "Hello"

// The correct way to modify strings is to create new ones
text = "h" + text.slice(1); // "hello"

// Escape Characters
// ---------------
console.log("--- Escape Characters ---");
console.log('New line:\nSecond line');
console.log('Tab:\tIndented');
console.log('Quote inside quotes: \'quoted\'');
console.log("Path with backslash: C:\\Program Files\\");

// Practice Exercises
// ----------------
/**
 * Exercise 1: Create a string with your name and print its length
 * Exercise 2: Access the middle character of your name
 * Exercise 3: Try to create the same string using different quote styles
 * Exercise 4: Create a multiline string using template literals
 */

// Example solutions
const name = "John Doe";
console.log("--- Exercises ---");
console.log('Name length:', name.length);
console.log('Middle character:', name[Math.floor(name.length / 2)]);
console.log('Different quotes:', 'John', "John", `John`);
console.log(`Multiline
string
example`);