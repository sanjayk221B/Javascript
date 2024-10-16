// 04_object_literals.js

/**
 * Object Literals in JavaScript
 * 
 * Object literals provide a simple and concise way to create objects.
 * This file explores advanced features of object literals introduced in ES6.
 */

// Basic object literal
let person = {
    name: "John",
    age: 30
};

// Shorthand property names
let name = "Alice";
let age = 25;

let person2 = { name, age };
console.log(person2); // { name: "Alice", age: 25 }

// Computed property names
let propName = "favoriteColor";
let person3 = {
    name: "Bob",
    [propName]: "blue"
};
console.log(person3.favoriteColor); // blue

// Method shorthand
let person4 = {
    name: "Charlie",
    greet() {
        console.log("Hello, I'm " + this.name);
    }
};
person4.greet(); // Hello, I'm Charlie

// Object destructuring
let { name: personName, age: personAge } = person;
console.log(personName, personAge); // John 30

// Spread operator with objects
let personWithHobbies = { ...person, hobbies: ["reading", "cycling"] };
console.log(personWithHobbies);

/**
 * Exercise:
 * Create an object literal representing a book. Use shorthand properties,
 * a computed property name, and a method shorthand. Then, use destructuring
 * to extract some properties and the spread operator to create a new object
 * with additional properties.
 */