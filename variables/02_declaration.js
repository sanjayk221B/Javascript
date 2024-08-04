// 02_declaration.js

// Variable Declaration in JavaScript

// In JavaScript, we can declare variables using three keywords: var, let, and const

// 1. Using 'var' (older way, function-scoped)
var age;
console.log(age); // Outputs: undefined

// 2. Using 'let' (introduced in ES6, block-scoped)
let name;
console.log(name); // Outputs: undefined

// 3. Using 'const' (introduced in ES6, block-scoped, must be initialized)
const PI = 3.14159;
console.log(PI); // Outputs: 3.14159

// We can declare multiple variables in one line
let firstName, lastName, fullName;

// We can also declare and initialize variables in one line
let country = "USA";
let isStudent = true;
let score = 85;

// const variables must be initialized when declared
// const GRAVITY; // This would cause an error
const GRAVITY = 9.8;

// Variables declared without a value are initialized with 'undefined'
let unassignedVariable;
console.log(unassignedVariable); // Outputs: undefined

// Exercise:
// 1. Declare a variable named 'favoriteFood' using let
// 2. Declare a constant named 'daysInWeek' and assign it the value 7
// 3. Declare multiple variables 'x', 'y', and 'z' in one line using let
// 4. Try to declare a const variable without initializing it. What happens?

// Remember: 
// - 'var' is function-scoped and can be redeclared
// - 'let' and 'const' are block-scoped and can't be redeclared in the same scope
// - 'const' must be initialized when declared and can't be reassigned