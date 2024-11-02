// 02_basic_methods.js

/**
 * Basic String Methods in JavaScript
 * This file covers the fundamental methods available for string manipulation
 */

// Test string for demonstrations
const text = "  Hello, JavaScript World!  ";

// Length and Basic Methods
// -----------------------
console.log("--- Basic String Methods ---");

// Length
console.log('Length:', text.length); // 25

// Case methods
console.log('Uppercase:', text.toUpperCase()); // "  HELLO, JAVASCRIPT WORLD!  "
console.log('Lowercase:', text.toLowerCase()); // "  hello, javascript world!  "

// Trim methods
console.log('Trimmed:', text.trim()); // "Hello, JavaScript World!"
console.log('Trim start:', text.trimStart()); // "Hello, JavaScript World!  "
console.log('Trim end:', text.trimEnd()); // "  Hello, JavaScript World!"

// Substring Methods
// ---------------
const str = "JavaScript";
console.log("--- Substring Methods ---");

// slice(startIndex, endIndex)
console.log('Slice(0,4):', str.slice(0, 4)); // "Java"
console.log('Slice(-6):', str.slice(-6)); // "Script"

// substring(startIndex, endIndex)
console.log('Substring(0,4):', str.substring(0, 4)); // "Java"

// substr(startIndex, length) - deprecated but good to know
console.log('Substr(4,6):', str.substr(4, 6)); // "Script"

// Concatenation Methods
// -------------------
console.log("--- Concatenation ---");

// Using concat()
const hello = "Hello";
const world = "World";
console.log('Concat:', hello.concat(" ", world)); // "Hello World"

// Using + operator
console.log('Plus operator:', hello + " " + world); // "Hello World"

// Using template literals
console.log('Template literal:', `${hello} ${world}`); // "Hello World"

// Character Methods
// ---------------
console.log("--- Character Methods ---");

// charAt(index)
console.log('charAt(0):', str.charAt(0)); // "J"

// charCodeAt(index)
console.log('charCodeAt(0):', str.charCodeAt(0)); // 74 (ASCII code for 'J')

// Practice Exercises
// ----------------
/**
 * Exercise 1: Take a string with whitespace and trim it
 * Exercise 2: Convert a string to uppercase and then get the first 3 characters
 * Exercise 3: Concatenate three strings using different methods
 * Exercise 4: Get the ASCII code for each character in your name
 */

// Example solutions
const practice = "  Practice String  ";
console.log("--- Exercises ---");
console.log('Trimmed practice:', practice.trim());
console.log('Uppercase and slice:', practice.toUpperCase().slice(0, 3));
console.log('Concatenation:', "one".concat(" ", "two", " ", "three"));
console.log('ASCII codes:', "John".split('').map(char => char.charCodeAt(0)));