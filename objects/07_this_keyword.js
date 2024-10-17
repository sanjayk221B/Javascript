// 07_this_keyword.js

/**
 * The 'this' Keyword in JavaScript
 * 
 * 'this' is a special keyword that refers to the object that is executing the current function.
 * Its value can change depending on how a function is called.
 */

// 1. 'this' in a method
let person = {
    name: "John",
    greet: function() {
        console.log("Hello, I'm " + this.name);
    }
};

person.greet(); // Hello, I'm John

// 2. 'this' in a regular function (non-strict mode)
function showThis() {
    console.log(this); // Window object (in browser) or global object (in Node.js)
}

showThis();

// 3. 'this' in strict mode
"use strict";
function strictShowThis() {
    console.log(this); // undefined
}

strictShowThis();

// 4. 'this' in arrow functions
let arrowPerson = {
    name: "Alice",
    greet: () => {
        console.log("Hello, I'm " + this.name); // 'this' is lexically bound
    }
};

arrowPerson.greet(); // Hello, I'm undefined (in non-strict mode)

// 5. Explicit binding with call, apply, and bind
function introduce(hobby1, hobby2) {
    console.log(`I'm ${this.name} and I like ${hobby1} and ${hobby2}.`);
}

let john = { name: "John" };

introduce.call(john, "reading", "cycling");
introduce.apply(john, ["swimming", "running"]);

let johnIntroduce = introduce.bind(john);
johnIntroduce("cooking", "painting");

/**
 * Exercise:
 * Create an object with methods that use 'this'. Then, create situations where
 * 'this' behaves differently (e.g., using the method as a callback, using an
 * arrow function, etc.). Observe and explain the different behaviors of 'this'.
 */

// Your code here