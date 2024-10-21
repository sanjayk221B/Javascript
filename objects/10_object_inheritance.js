// 10_object_inheritance.js

/**
 * Object Inheritance in JavaScript
 * 
 * JavaScript uses prototypal inheritance, but ES6 introduced class syntax
 * which provides a more familiar way to work with inheritance for developers
 * coming from class-based languages.
 */

// Prototypal Inheritance
function Animal(name) {
    this.name = name;
}

Animal.prototype.makeSound = function() {
    console.log("The animal makes a sound");
};

function Dog(name) {
    Animal.call(this, name); // Call the parent constructor
}

// Set up the inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add or override methods
Dog.prototype.makeSound = function() {
    console.log("The dog barks");
};

Dog.prototype.fetch = function() {
    console.log(this.name + " is fetching");
};

let dog = new Dog("Buddy");
dog.makeSound(); // The dog barks
dog.fetch(); // Buddy is fetching

// ES6 Class Syntax
class AnimalClass {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log("The animal makes a sound");
    }
}

class DogClass extends AnimalClass {
    constructor(name) {
        super(name); // Call the parent constructor
    }

    makeSound() {
        console.log("The dog barks");
    }

    fetch() {
        console.log(`${this.name} is fetching`);
    }
}

let dogClass = new DogClass("Buddy");
dogClass.makeSound(); // The dog barks
dogClass.fetch(); // Buddy is fetching