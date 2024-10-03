// Function Scope in JavaScript

// Global scope
let globalVar = "I'm global";

function accessGlobal() {
  console.log(globalVar);
}

accessGlobal(); // Output: I'm global

// Local scope
function localScope() {
  let localVar = "I'm local";
  console.log(localVar);
}

localScope(); // Output: I'm local
// console.log(localVar); // ReferenceError: localVar is not defined

// Block scope (let and const)
function blockScope() {
  if (true) {
    let blockVar = "I'm in a block";
    const constantVar = "I'm constant";
    console.log(blockVar);
    console.log(constantVar);
  }
  // console.log(blockVar); // ReferenceError: blockVar is not defined
  // console.log(constantVar); // ReferenceError: constantVar is not defined
}

blockScope();

// Function scope vs block scope
function scopeComparison() {
  var functionScoped = "I'm function scoped";
  let blockScoped = "I'm block scoped";

  if (true) {
    var functionScoped2 = "I'm also function scoped";
    let blockScoped2 = "I'm block scoped too";
    console.log(functionScoped); // Accessible
    console.log(blockScoped); // Accessible
  }

  console.log(functionScoped2); // Accessible
  // console.log(blockScoped2); // ReferenceError: blockScoped2 is not defined
}

scopeComparison();

// Nested functions and scope
function outer() {
  let outerVar = "I'm from outer";

  function inner() {
    let innerVar = "I'm from inner";
    console.log(outerVar); // Accessible
    console.log(innerVar); // Accessible
  }

  inner();
  console.log(outerVar); // Accessible
  // console.log(innerVar); // ReferenceError: innerVar is not defined
}

outer();

// Exercises:
// 1. Create a function that demonstrates the difference between var, let, and const in terms of scope.
// 2. Write a function that contains nested functions, each accessing variables from different scopes.
// 3. Implement a counter function that uses closure to maintain its state.
