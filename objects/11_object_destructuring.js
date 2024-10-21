// 11_object_destructuring.js

/**
 * Object Destructuring in JavaScript
 * 
 * Object destructuring is a concise way to extract values from objects and
 * assign them to new variables.
 */

let person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};

// Basic object destructuring
let { name, age } = person;
console.log(name); // John Doe
console.log(age); // 30

// Destructuring with new variable names
let { name: personName, age: personAge } = person;
console.log(personName); // John Doe
console.log(personAge); // 30

// Destructuring with default values
let { name, age, website = "N/A" } = person;
console.log(website); // N/A

// Nested object destructuring
let company = {
    name: "Tech Inc",
    address: {
        street: "123 Main St",
        city: "Techville",
        country: "Codeland"
    }
};

let { name: companyName, address: { city, country } } = company;
console.log(companyName); // Tech Inc
console.log(city); // Techville
console.log(country); // Codeland

// Destructuring function parameters
function printPersonInfo({ name, age, email }) {
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}

printPersonInfo(person); // Name: John Doe, Age: 30, Email: john@example.com

/**
 * Exercise:
 * Create an object representing a car and use object destructuring to extract
 * the make, model, and year properties. Then, create a function that takes a
 * car object as a parameter and uses destructuring to print the car's details.
 */