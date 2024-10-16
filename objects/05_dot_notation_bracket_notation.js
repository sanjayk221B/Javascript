// 05_dot_notation_bracket_notation.js

/**
 * Dot Notation and Bracket Notation in JavaScript
 * 
 * JavaScript provides two ways to access object properties:
 * dot notation and bracket notation. Each has its use cases.
 */

let person = {
    name: "John Doe",
    age: 30,
    "favorite color": "blue"
};

// Dot Notation
console.log(person.name); // John Doe
person.age = 31;

// Bracket Notation
console.log(person["name"]); // John Doe
person["age"] = 32;

// When to use bracket notation:
// 1. Property names with spaces or special characters
console.log(person["favorite color"]); // blue

// 2. Dynamically accessing properties
let propertyName = "age";
console.log(person[propertyName]); // 32

// 3. Using variables as property names
let key = "name";
console.log(person[key]); // John Doe

// Bracket notation allows expressions
let suffix = "name";
console.log(person["first" + suffix]); // undefined (but would work if the property existed)

// Dot notation is generally preferred when possible for readability
// Bracket notation is necessary for dynamic property access

/**
 * Exercise:
 * Create an object with various properties, including some with spaces or
 * special characters in their names. Practice accessing and modifying these
 * properties using both dot notation and bracket notation where appropriate.
 */

// Your code here