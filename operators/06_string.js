// String Operators in JavaScript

// Concatenation using + operator
let str1 = "Hello";
let str2 = "World";
console.log('str1 + " " + str2:', str1 + " " + str2); // Output: Hello World

// Concatenation using += operator
let greeting = "Hello";
greeting += " World";
console.log('greeting after +=:', greeting); // Output: Hello World

// String comparison
console.log('"a" < "b":', "a" < "b"); // Output: true
console.log('"apple" < "banana":', "apple" < "banana"); // Output: true

// Lexicographic comparison
console.log('"2" > "12":', "2" > "12"); // Output: true (compares character by character)

// Template literals
let name = "Alice";
let age = 30;
console.log(`Name: ${name}, Age: ${age}`); // Output: Name: Alice, Age: 30

// Multi-line strings with template literals
let multiLine = `
    This is a
    multi-line
    string
`;
console.log('multiLine:', multiLine);

// String methods (not operators, but useful for string manipulation)
let text = "JavaScript";
console.log('text.length:', text.length); // Output: 10
console.log('text.toUpperCase():', text.toUpperCase()); // Output: JAVASCRIPT
console.log('text.substring(0, 4):', text.substring(0, 4)); // Output: Java

// Exercise:
// 1. Create a function that takes a first name and last name, and returns a full name
// 2. Use template literals to create a sentence about a person (name, age, occupation)
// 3. Implement a function that checks if one string is a substring of another