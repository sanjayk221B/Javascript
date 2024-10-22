// 15_object_immutability.js

/**
 * Object Immutability in JavaScript
 * 
 * Immutable objects are objects that cannot be modified after they are created.
 * JavaScript provides several ways to create immutable objects.
 */

// Object.freeze()
let person = {
    name: "John Doe",
    age: 30
};

let frozenPerson = Object.freeze(person);
frozenPerson.name = "Jane Doe"; // Fails silently in non-strict mode
console.log(frozenPerson.name); // John Doe

// Immutable.js library
const Immutable = require('immutable');

let immutablePerson = Immutable.Map({ name: "John Doe", age: 30 });
let updatedPerson = immutablePerson.set('age', 31);

console.log(immutablePerson.get('age')); // 30
console.log(updatedPerson.get('age')); // 31

// Immer.js library
const { produce } = require('immer');

let draftPerson = { name: "John Doe", age: 30 };
let newPerson = produce(draftPerson, (draft) => {
    draft.age = 31;
});

console.log(draftPerson.age); // 30
console.log(newPerson.age); // 31

// Immutability with spread operator
let originalPerson = { name: "John Doe", age: 30 };
let newPersonWithSpread = { ...originalPerson, age: 31 };

console.log(originalPerson.age); // 30
console.log(newPersonWithSpread.age); // 31

/**
 * Exercise:
 * Create an object representing a shopping cart. Implement methods to add,
 * remove, and update items in the cart while ensuring the cart remains
 * immutable. Demonstrate the use of Object.freeze(), Immutable.js, and
 * Immer.js to achieve this.
 */
