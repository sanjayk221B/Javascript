// 13_type_coercion.js

// Type Coercion in JavaScript

// Type coercion is the automatic conversion of values from one data type to another

// 1. String coercion
let num = 5;
let str = "The number is " + num;
console.log(str);  // Outputs: The number is 5

// 2. Numeric coercion
let x = "5";
let y = +x;  // Unary plus operator coerces to number
console.log(typeof y);  // Outputs: number

// 3. Boolean coercion
if ("hello") {
    console.log("Non-empty strings are truthy");
}

if (0) {
    console.log("This won't be printed because 0 is falsy");
}

// 4. Equality operators
console.log(5 == "5");   // Outputs: true (coerces string to number)
console.log(5 === "5");  // Outputs: false (strict equality, no coercion)

// 5. Addition vs. other arithmetic operations
console.log("3" + 2);    // Outputs: 32 (coerces number to string)
console.log("3" - 2);    // Outputs: 1 (coerces string to number)
console.log("3" * 2);    // Outputs: 6 (coerces string to number)

// 6. Falsy values
console.log(Boolean(""));       // Outputs: false
console.log(Boolean(0));        // Outputs: false
console.log(Boolean(null));     // Outputs: false
console.log(Boolean(undefined));// Outputs: false
console.log(Boolean(NaN));      // Outputs: false

// 7. Truthy values
console.log(Boolean("0"));      // Outputs: true
console.log(Boolean([]));       // Outputs: true
console.log(Boolean({}));       // Outputs: true

// Exercise:
// 1. What's the result of 1 + "2" + 3?
// 2. Compare "10" and 10 using == and ===. Explain the results.
// 3. What's the boolean value of each: "", 0, null, undefined, NaN, "0", [], {}?
// 4. What happens when you use -, *, / with a string and a number?



// Remember:
// - Type coercion can lead to unexpected results if not understood properly
// - Use === for strict equality without type coercion
// - Be explicit about type conversions to make code more readable and predictable