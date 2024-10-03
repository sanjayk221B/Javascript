// Closures in JavaScript

// Basic closure
function outerFunction(x) {
    let y = 10;
    function innerFunction() {
        console.log(x + y);
    }
    return innerFunction;
}

let closure = outerFunction(5);
closure(); // Output: 15

// Closure with private variables
function createCounter() {
    let count = 0;
    return function() {
        count++;
        console.log(count);
    };
}

let counter = createCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3

// Closure in loops
function createFunctions() {
    let functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}

let functions = createFunctions();
functions[0](); // Output: 0
functions[1](); // Output: 1
functions[2](); // Output: 2

// Closure for data privacy
function createPerson(name) {
    let age;
    return {
        setAge: function(newAge) {
            if (newAge > 0 && newAge < 120) {
                age = newAge;
            } else {
                console.log("Invalid age");
            }
        },
        getInfo: function() {
            return `${name} is ${age} years old`;
        }
    };
}

let person = createPerson("Alice");
person.setAge(30);
console.log(person.getInfo()); // Output: Alice is 30 years old

// Closure in event handlers
function setupButton(label) {
    let button = document.createElement("button");
    button.textContent = label;
    button.addEventListener("click", function() {
        console.log(`${label} button clicked`);
    });
    document.body.appendChild(button);
}

setupButton("Click me");

// Exercises:
// 1. Create a closure that generates a sequence of numbers (like a generator function).
// 2. Implement a memoization function using closure to cache expensive function calls.
// 3. Write a closure that creates a private, persistent data store that can be modified but not directly accessed.