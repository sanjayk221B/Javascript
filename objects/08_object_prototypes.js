// 08_object_prototypes.js

/**
 * Object Prototypes in JavaScript
 * 
 * Prototypes are the mechanism by which JavaScript objects inherit features from one another.
 * Every object in JavaScript has a built-in property, which is called its prototype.
 */

// Creating an object
let animal = {
    makeSound: function() {
        console.log("The animal makes a sound");
    }
};

// Creating another object that inherits from animal
let dog = Object.create(animal);
dog.bark = function() {
    console.log("Woof!");
};

// Using inherited method
dog.makeSound(); // The animal makes a sound

// Checking prototype chain
console.log(dog.__proto__ === animal); // true
console.log(animal.isPrototypeOf(dog)); // true

// Adding a method to Object.prototype (not recommended in practice)
Object.prototype.describe = function() {
    console.log("This is an object");
};

// Now all objects have access to this method
let obj = {};
obj.describe(); // This is an object

// Constructor functions and prototypes
function Person(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, I'm " + this.name);
};

let john = new Person("John");
john.greet(); // Hello, I'm John

// Prototype chain
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true

// Overriding prototype properties
dog.makeSound = function() {
    console.log("The dog makes a sound");
};

dog.makeSound(); // The dog makes a sound

/**
 * Exercise:
 * Create a prototype chain with at least three levels (e.g., Animal -> Mammal -> Dog).
 * Add methods at each level and demonstrate inheritance and method overriding.
 */
