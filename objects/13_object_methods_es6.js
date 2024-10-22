// 13_object_methods_es6.js

/**
 * Object Methods in ES6 and Beyond
 * 
 * JavaScript has introduced several new object-related features in recent
 * versions, including computed property names, shorthand methods, and more.
 */

// Computed property names
let key = "favoriteColor";
let person = {
    name: "John Doe",
    age: 30,
    [key]: "blue"
};

console.log(person.favoriteColor); // blue

// Method definition shorthand
let personWithMethods = {
    name: "Jane Smith",
    age: 25,
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    },
    getFavoriteColor() {
        return this.favoriteColor || "N/A";
    }
};

personWithMethods.greet(); // Hello, I'm Jane Smith
console.log(personWithMethods.getFavoriteColor()); // N/A

// Object.assign() for copying and merging objects
let base = { a: 1, b: 2 };
let extended = Object.assign({}, base, { c: 3, d: 4 });
console.log(extended); // { a: 1, b: 2, c: 3, d: 4 }

// Object.entries() and Object.fromEntries()
let personObject = { name: "Alice", age: 28 };
let personEntries = Object.entries(personObject);
console.log(personEntries); // [["name", "Alice"], ["age", 28]]

let personFromEntries = Object.fromEntries(personEntries);
console.log(personFromEntries); // { name: "Alice", age: 28 }

// Object.freeze() and Object.seal()
let frozenPerson = Object.freeze({ name: "Bob", age: 32 });
frozenPerson.name = "Robert"; // Fails silently in non-strict mode
console.log(frozenPerson.name); // Bob

let sealedPerson = Object.seal({ name: "Carol", age: 27 });
sealedPerson.name = "Carrie"; // Succeeds
delete sealedPerson.age; // Fails silently in non-strict mode
console.log(sealedPerson); // { name: "Carrie", age: 27 }

/**
 * Exercise:
 * Create an object representing a product. Use computed property names, method
 * shorthand, and other ES6+ object features to define the product's properties
 * and methods. Demonstrate the use of Object.assign(), Object.entries(), and
 * Object.freeze() or Object.seal().
 */
