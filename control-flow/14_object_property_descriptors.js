// 14_object_property_descriptors.js

/**
 * Object Property Descriptors in JavaScript
 * 
 * Property descriptors provide a more advanced way to define object properties.
 * They allow you to control the behavior of properties, including their
 * writability, enumerability, and configurability.
 */

let person = {
    firstName: "John",
    lastName: "Doe"
};

// Get the property descriptor
let descriptor = Object.getOwnPropertyDescriptor(person, "firstName");
console.log(descriptor);
// {
//   value: "John",
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Define a property with a custom descriptor
Object.defineProperty(person, "fullName", {
    get() {
        return this.firstName + " " + this.lastName;
    },
    set(name) {
        [this.firstName, this.lastName] = name.split(" ");
    },
    enumerable: true,
    configurable: true
});

person.fullName = "Jane Smith";
console.log(person.fullName); // Jane Smith

// Non-writable property
Object.defineProperty(person, "age", {
    value: 30,
    writable: false,
    enumerable: true,
    configurable: true
});

person.age = 31; // Fails silently in non-strict mode
console.log(person.age); // 30

// Non-configurable property
Object.defineProperty(person, "ssn", {
    value: "123-45-6789",
    writable: false,
    enumerable: false,
    configurable: false
});

delete person.ssn; // Fails silently in non-strict mode
console.log(person.ssn); // "123-45-6789"

/**
 * Exercise:
 * Create an object representing a bank account. Use property descriptors to
 * define the account balance as a read-only property, and add a method to
 * deposit and withdraw funds while ensuring the balance does not go below zero.
 */
