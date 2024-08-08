// 11_hoisting.js

// Hoisting in JavaScript

// Hoisting is JavaScript's default behavior of moving declarations to the top of their scope

// 1. Hoisting with var
console.log(hoistedVar); // Outputs: undefined
var hoistedVar = "I'm hoisted";

// The above is interpreted as:
// var hoistedVar;
// console.log(hoistedVar);
// hoistedVar = "I'm hoisted";

// 2. Hoisting with function declarations
hoistedFunction(); // Outputs: "I'm a hoisted function"

function hoistedFunction() {
    console.log("I'm a hoisted function");
}

// 3. let and const are not hoisted
// console.log(notHoisted); // This would cause a ReferenceError
let notHoisted = "I'm not hoisted";

// 4. Hoisting in functions
function hoistingExample() {
    console.log(insideFunc); // Outputs: undefined
    var insideFunc = "I'm inside a function";
}
hoistingExample();

// 5. Function expressions are not hoisted
// notHoistedFunc(); // This would cause a TypeError
var notHoistedFunc = function() {
    console.log("I'm not hoisted");
};

// 6. Hoisting with let and const (Temporal Dead Zone)
{
    // console.log(tdz); // This would cause a ReferenceError
    let tdz = "Temporal Dead Zone";
}

// 7. Class declarations are not hoisted
// new MyClass(); // This would cause a ReferenceError
class MyClass {}

// Exercise:
// 1. Try to use a var variable before its declaration. What happens?
// 2. Create a function declaration and call it before its actual declaration in the code.
// 3. Try to use a let variable before its declaration. What's the difference compared to var?
// 4. Create a function expression and try to call it before its declaration.

// Remember:
// - Only declarations are hoisted, not initializations
// - Function declarations are fully hoisted
// - var variables are hoisted and initialized with undefined
// - let and const are hoisted but not initialized (Temporal Dead Zone)
// - Always declare variables at the top of their scope to avoid confusion