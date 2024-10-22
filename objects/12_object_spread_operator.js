// 12_object_spread_operator.js

/**
 * Object Spread Operator in JavaScript
 * 
 * The spread operator (...) allows you to quickly copy all or part of an
 * existing object into another object.
 */

let person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};

// Copying an object using the spread operator
let personCopy = { ...person };
console.log(personCopy); // { name: "John Doe", age: 30, email: "john@example.com" }

// Adding new properties
let personWithPhone = { ...person, phone: "123-456-7890" };
console.log(personWithPhone);
// { name: "John Doe", age: 30, email: "john@example.com", phone: "123-456-7890" }

// Overwriting properties
let personWithNewAge = { ...person, age: 31 };
console.log(personWithNewAge); // { name: "John Doe", age: 31, email: "john@example.com" }

// Combining spread with destructuring
let { name, ...personDetails } = person;
console.log(name); // John Doe
console.log(personDetails); // { age: 30, email: "john@example.com" }

// Merging multiple objects
let work = {
    title: "Software Engineer",
    company: "Tech Inc"
};

let personalAndWork = { ...person, ...work };
console.log(personalAndWork);
// { name: "John Doe", age: 30, email: "john@example.com", title: "Software Engineer", company: "Tech Inc" }

/**
 * Exercise:
 * Create an object representing a book. Use the spread operator to create
 * copies of the book object with different properties added or modified.
 * Demonstrate how the spread operator can be combined with destructuring.
 */
