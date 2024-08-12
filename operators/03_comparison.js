// Comparison Operators in JavaScript

// Equal to (==)
console.log('5 == 5:', 5 == 5);       // Output: true
console.log('5 == "5":', 5 == "5");   // Output: true (type coercion)

// Strict equal to (===)
console.log('5 === 5:', 5 === 5);     // Output: true
console.log('5 === "5":', 5 === "5"); // Output: false (no type coercion)

// Not equal to (!=)
console.log('5 != 6:', 5 != 6);       // Output: true
console.log('5 != "5":', 5 != "5");   // Output: false (type coercion)

// Strict not equal to (!==)
console.log('5 !== 6:', 5 !== 6);     // Output: true
console.log('5 !== "5":', 5 !== "5"); // Output: true (no type coercion)

// Greater than (>)
console.log('6 > 5:', 6 > 5);         // Output: true

// Less than (<)
console.log('4 < 5:', 4 < 5);         // Output: true

// Greater than or equal to (>=)
console.log('5 >= 5:', 5 >= 5);       // Output: true
console.log('6 >= 5:', 6 >= 5);       // Output: true

// Less than or equal to (<=)
console.log('5 <= 5:', 5 <= 5);       // Output: true
console.log('4 <= 5:', 4 <= 5);       // Output: true

// Comparing different types
console.log('"2" > 1:', "2" > 1);     // Output: true (string "2" is converted to number 2)
console.log('"01" == 1:', "01" == 1); // Output: true (string "01" is converted to number 1)

// Exercise:
// 1. Compare '10' and 10 using == and ===. Explain the results.
// 2. Use comparison operators to check if a variable age is between 18 and 65 (inclusive).
// 3. Compare the strings 'apple' and 'banana'. What's the result and why?