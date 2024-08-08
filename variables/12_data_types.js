// 12_data_types.js

// Data Types in JavaScript

// JavaScript has 7 primitive data types and 1 object type

// 1. Number
let age = 25;
let price = 19.99;
console.log(typeof age);     // Outputs: number
console.log(typeof price);   // Outputs: number

// 2. String
let name = "Alice";
let greeting = 'Hello';
console.log(typeof name);    // Outputs: string
console.log(typeof greeting);// Outputs: string

// 3. Boolean
let isAdult = true;
let isMorning = false;
console.log(typeof isAdult); // Outputs: boolean

// 4. Undefined
let undefinedVar;
console.log(typeof undefinedVar); // Outputs: undefined

// 5. Null
let emptyValue = null;
console.log(typeof emptyValue); // Outputs: object (this is a known bug in JavaScript)

// 6. Symbol (introduced in ES6)
let uniqueKey = Symbol('description');
console.log(typeof uniqueKey); // Outputs: symbol

// 7. BigInt (introduced in ES11)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // Outputs: bigint

// 8. Object
let person = {name: "Bob", age: 30};
let colors = ["red", "green", "blue"];
console.log(typeof person);  // Outputs: object
console.log(typeof colors);  // Outputs: object (arrays are objects in JavaScript)

// Special values
console.log(typeof NaN);     // Outputs: number
console.log(typeof Infinity);// Outputs: number

// Exercise:
// 1. Create variables of each data type and use typeof to check their types.
// 2. What happens when you use typeof on a function?
// 3. Create an array and an object. How does typeof treat them?
// 4. What's the type of NaN? Why might this be surprising?

// Remember:
// - JavaScript is a dynamically typed language
// - The 'typeof' operator is used to determine the type of a variable
// - Arrays and functions are subtypes of object
// - null is technically an object (this is considered a bug in the language)