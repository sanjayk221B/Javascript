// 09_object_constructors.js

/**
 * Object Constructors in JavaScript
 * 
 * Constructor functions are used to create multiple objects with similar properties and methods.
 * They serve as a blueprint for creating objects.
 */

// Basic constructor function
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.fullName = function() {
        return this.firstName + " " + this.lastName;
    };
}

// Creating objects using the constructor
let person1 = new Person("John", "Doe", 30);
let person2 = new Person("Jane", "Smith", 25);

console.log(person1.fullName()); // John Doe
console.log(person2.fullName()); // Jane Smith

// Adding methods to the prototype
Person.prototype.greet = function() {
    console.log("Hello, I'm " + this.fullName());
};

person1.greet(); // Hello, I'm John Doe

// Checking instanceof
console.log(person1 instanceof Person); // true

// Constructor property
console.log(person1.constructor === Person); // true

// Problems with constructors
function Car(make, model) {
    this.make = make;
    this.model = model;
    this.describe = function() {
        console.log("This is a " + this.make + " " + this.model);
    };
}

let car1 = new Car("Toyota", "Corolla");
let car2 = new Car("Honda", "Civic");

console.log(car1.describe === car2.describe); // false (separate function objects)

// Improved version using prototype
function ImprovedCar(make, model) {
    this.make = make;
    this.model = model;
}

ImprovedCar.prototype.describe = function() {
    console.log("This is a " + this.make + " " + this.model);
};

let improvedCar1 = new ImprovedCar("Toyota", "Corolla");
let improvedCar2 = new ImprovedCar("Honda", "Civic");

console.log(improvedCar1.describe === improvedCar2.describe); // true (shared function)

/**
 * Exercise:
 * Create a constructor function for a Book object. Include properties like title,
 * author, and year. Add a method to the prototype that returns a string describing the book.
 * Create several Book objects and demonstrate their use.
 */
