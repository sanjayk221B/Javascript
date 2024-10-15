// 03_properties_and_methods.js

/**
 * Properties and Methods in JavaScript Objects
 * 
 * Objects in JavaScript can have properties (data) and methods (functions).
 * This file explores how to work with object properties and methods.
 */

// Object with properties and a method
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing properties
console.log(person.firstName); // John
console.log(person['lastName']); // Doe

// Using a method
console.log(person.fullName()); // John Doe

// Adding new properties
person.email = "john@example.com";

// Adding new methods
person.greet = function() {
    console.log("Hello, I'm " + this.fullName());
};

person.greet(); // Hello, I'm John Doe

// Modifying properties
person.age = 31;

// Deleting properties
delete person.email;

// Checking if a property exists
console.log("age" in person); // true
console.log(person.hasOwnProperty("email")); // false

// Enumerating properties
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Object.keys(), Object.values(), Object.entries()
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

/**
 * Exercise:
 * Create an object representing a car with properties for make, model, and year.
 * Add a method called 'getInfo' that returns a string with the car's details.
 * Then, add a new property for color and modify the 'getInfo' method to include it.
 */
