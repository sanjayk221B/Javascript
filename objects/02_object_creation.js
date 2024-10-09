// 02_object_creation.js

/**
 * Object Creation in JavaScript
 *
 * There are multiple ways to create objects in JavaScript. Each method has its
 * own use cases and advantages. This file explores the most common ways to
 * create objects.
 */

// 1. Object Literal Notation
// This is the simplest way to create an object.
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};

console.log(car);

// 2. Object Constructor
// The Object() constructor creates an object wrapper.
let person = new Object();
person.name = "John Doe";
person.age = 30;
person.greet = function () {
  console.log("Hello, my name is " + this.name);
};

person.greet();

// 3. Constructor Function
// This method uses a function to define a type of object.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

let book1 = new Book("1984", "George Orwell", 1949);
console.log(book1.getSummary());

// 4. Object.create() Method
// This method creates a new object, using an existing object as the prototype.
let animalPrototype = {
  makeSound: function () {
    console.log("The animal makes a sound");
  },
};

let dog = Object.create(animalPrototype);
dog.breed = "Labrador";
dog.makeSound = function () {
  console.log("The dog barks");
};

dog.makeSound();

// 5. ES6 Class Syntax
// While not introducing a new object-oriented inheritance model, it provides a cleaner syntax.
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `This is a ${this.make} ${this.model}`;
  }
}

let myCar = new Vehicle("Honda", "Civic");
console.log(myCar.getInfo());

/**
 * Exercise 1:
 * Create an object representing a smartphone using the object literal notation.
 * Include properties for brand, model, and a method to display its information.
 */

// Your code here

/**
 * Exercise 2:
 * Use a constructor function to create objects representing different types of shapes.
 * Include methods to calculate area and perimeter for each shape.
 */

// Your code here

/**
 * Remember: Each object creation method has its pros and cons. Object literals and
 * constructor functions are widely used. ES6 class syntax provides a more familiar
 * syntax for developers coming from class-based languages, but it's essentially
 * syntactic sugar over JavaScript's prototype-based inheritance.
 */
