// For...In Loops in JavaScript

// Using for...in with an object
let person = {
    name: "John",
    age: 30,
    job: "Developer"
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Using for...in with an array (not recommended, use for...of instead)
let fruits = ["apple", "banana", "orange"];

for (let index in fruits) {
    console.log(`${index}: ${fruits[index]}`);
}

// Inherited properties
let animal = {
    legs: 4
};

let dog = Object.create(animal);
dog.name = "Buddy";

for (let prop in dog) {
    console.log(`${prop}: ${dog[prop]}`);
}

// Using hasOwnProperty() to filter out inherited properties
for (let prop in dog) {
    if (dog.hasOwnProperty(prop)) {
        console.log(`Own property: ${prop}: ${dog[prop]}`);
    }
}

// Exercises:
// 1. Create an object representing a car and use for...in to print all its properties
// 2. Write a function that counts the number of properties in an object using for...in
// 3. Implement a simple JSON stringify function using for...in (handle only objects with string and number values)