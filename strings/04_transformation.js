// 04_transformation.js

/**
 * String Transformation in JavaScript
 * This file covers various ways to transform and modify strings
 */

// Substring Extraction
// ------------------
console.log("--- Substring Extraction ---");

const text = "JavaScript Transformation Examples";

// Basic extraction
console.log('First word:', text.substring(0, 10)); // "JavaScript"
console.log('Last word:', text.slice(text.lastIndexOf(' ') + 1)); // "Examples"

// Extract middle portion
const middle = Math.floor(text.length / 2);
console.log('Middle chars:', text.slice(middle - 2, middle + 3));

// Case Transformation
// -----------------
console.log("--- Case Transformation ---");

// Basic case changes
console.log('Uppercase:', text.toUpperCase());
console.log('Lowercase:', text.toLowerCase());

// Title case function
function toTitleCase(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}
console.log('Title case:', toTitleCase("hello WORLD example"));

// Camel case function
function toCamelCase(str) {
    return str.toLowerCase()
        .split(' ')
        .map((word, index) => index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}
console.log('Camel case:', toCamelCase("Convert this to camel case"));

// Padding and Alignment
// -------------------
console.log("--- Padding and Alignment ---");

const number = "42";
console.log('Pad start:', number.padStart(5, '0')); // "00042"
console.log('Pad end:', number.padEnd(5, '0')); // "42000"

// Center align text
function centerAlign(str, width) {
    const padding = width - str.length;
    const leftPad = Math.floor(padding / 2);
    return str.padStart(str.length + leftPad, ' ')
              .padEnd(width, ' ');
}
console.log('Centered:', `|${centerAlign("Hello", 20)}|`);

// Template Literals
// ---------------
console.log("--- Template Literals ---");

const name = "User";
const age = 25;

// Basic interpolation
console.log(`Hello, ${name}! You are ${age} years old.`);

// Expression in template literals
console.log(`You will be ${age + 10} years old in 10 years.`);

// Multiline strings
const multiline = `
    This is a multiline
    string using
    template literals.
    It preserves formatting!
`;
console.log('Multiline:', multiline);

// Tagged templates
function myTag(strings, ...values) {
    let str = "";
    for (let i = 0; i < values.length; i++) {
        str += strings[i];
        str += `(${values[i]})`;
    }
    str += strings[strings.length - 1];
    return str;
}

const result = myTag`Hello ${name}, you are ${age} years old.`;
console.log('Tagged template:', result);

// Practice Exercises
// ----------------
/**
 * Exercise 1: Create a function that converts a string to snake_case
 * Exercise 2: Create a function that ensures a string is exactly certain length
 * Exercise 3: Create a template literal that formats a table row
 * Exercise 4: Create a function that converts numbers to padded hex codes
 */

// Example solutions
console.log("--- Exercises ---");

// Exercise 1: Snake case
function toSnakeCase(str) {
    return str.toLowerCase()
              .replace(/\s+/g, '_')
              .replace(/[^a-z0-9_]/g, '');
}
console.log('Snake case:', toSnakeCase("Convert This String"));

// Exercise 2: Fixed length string
function fixedLength(str, length) {
    if (str.length > length) {
        return str.slice(0, length - 3) + '...';
    }
    return str.padEnd(length);
}
console.log('Fixed length:', fixedLength("Long string example", 10));

// Exercise 3: Table row template
const person = { name: "John", age: 30, city: "New York" };
const tableRow = `
    <tr>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.city}</td>
    </tr>
`;
console.log('Table row:', tableRow);

// Exercise 4: Hex code padding
function toHex(number) {
    return number.toString(16).padStart(2, '0');
}
console.log('Hex code:', toHex(255)); // "ff"