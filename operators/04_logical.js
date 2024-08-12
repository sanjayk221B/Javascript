// Logical Operators in JavaScript

// AND operator (&&)
console.log("true && true:", true && true); // Output: true
console.log("true && false:", true && false); // Output: false
console.log("false && true:", false && true); // Output: false
console.log("false && false:", false && false); // Output: false

// OR operator (||)
console.log("true || true:", true || true); // Output: true
console.log("true || false:", true || false); // Output: true
console.log("false || true:", false || true); // Output: true
console.log("false || false:", false || false); // Output: false

// NOT operator (!)
console.log("!true:", !true); // Output: false
console.log("!false:", !false); // Output: true

// Short-circuit evaluation
console.log('true && "Hello":', true && "Hello"); // Output: "Hello"
console.log('false && "Hello":', false && "Hello"); // Output: false
console.log('true || "Hello":', true || "Hello"); // Output: true
console.log('false || "Hello":', false || "Hello"); // Output: "Hello"

// Nullish coalescing operator (??)
let value1 = null;
let value2 = "default";
console.log("value1 ?? value2:", value1 ?? value2); // Output: "default"

let value3 = 0;
console.log("value3 ?? value2:", value3 ?? value2); // Output: 0

// Logical AND assignment (&&=)
let a = true;
a &&= false;
console.log("a after &&= false:", a); // Output: false

// Logical OR assignment (||=)
let b = false;
b ||= true;
console.log("b after ||= true:", b); // Output: true

// Nullish coalescing assignment (??=)
let c = null;
c ??= "default";
console.log('c after ??= "default":', c); // Output: "default"

// Exercise:
// 1. Use logical operators to check if a number is between 10 and 20 (inclusive)
// 2. Create a function that returns "Adult" if age is 18 or older, and "Minor" otherwise
// 3. Use the nullish coalescing operator to provide a default value for a potentially undefined variable
