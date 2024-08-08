// 09_local_scope.js

// Local Scope in JavaScript

// Variables declared inside a function have local scope

// 1. Function scope
function localScopeExample() {
    var functionVar = "I'm a function-scoped var";
    let functionLet = "I'm a function-scoped let";
    const functionConst = "I'm a function-scoped const";

    console.log(functionVar);    // Outputs: I'm a function-scoped var
    console.log(functionLet);    // Outputs: I'm a function-scoped let
    console.log(functionConst);  // Outputs: I'm a function-scoped const
}
localScopeExample();

// console.log(functionVar);    // This would cause an error
// console.log(functionLet);    // This would cause an error
// console.log(functionConst);  // This would cause an error

// 2. Nested functions
function outerFunction() {
    let outerVar = "I'm in the outer function";

    function innerFunction() {
        let innerVar = "I'm in the inner function";
        console.log(outerVar);  // Outputs: I'm in the outer function
        console.log(innerVar);  // Outputs: I'm in the inner function
    }

    innerFunction();
    console.log(outerVar);   // Outputs: I'm in the outer function
    // console.log(innerVar);  // This would cause an error
}
outerFunction();

// 3. Function parameters
function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice");  // Outputs: Hello, Alice!
// console.log(name);  // This would cause an error

// Exercise:
// 1. Create a function with a local variable. Try to access that variable outside the function.
// 2. Create a nested function and access a variable from the outer function inside the inner function.
// 3. Create a function that takes a parameter and try to access that parameter outside the function.

// Remember:
// - Local variables are only accessible within their containing function
// - Inner functions have access to variables in outer functions
// - Each function call creates a new scope