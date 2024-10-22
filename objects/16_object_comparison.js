// 16_object_comparison.js

/**
 * Comparing Objects in JavaScript
 * 
 * Comparing objects in JavaScript can be tricky due to the way they are
 * stored and referenced in memory.
 */

// Comparing object references
let person1 = { name: "John Doe" };
let person2 = { name: "John Doe" };

console.log(person1 === person2); // false
console.log(person1 == person2); // false

// Comparing object properties
console.log(person1.name === person2.name); // true

// Using Object.is()
console.log(Object.is(person1, person2)); // false
console.log(Object.is(person1, person1)); // true

// Deep equality comparison
function deepEqual(obj1, obj2) {
    if (obj1 === obj2) return true;

    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
        return false;
    }

    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    return true;
}

let person3 = { name: "John Doe" };
let person4 = { name: "John Doe" };

console.log(deepEqual(person3, person4)); // true

/**
 * Exercise:
 * Create two objects representing students, with similar properties but
 * different values. Write a function that compares the objects and returns
 * true if they are deeply equal, and false otherwise.
 */
