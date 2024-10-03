// Arrow Functions in JavaScript

// Basic arrow function
let greet = () => {
  console.log("Hello, world!");
};

greet(); // Output: Hello, world!

// Arrow function with a single parameter
let square = (x) => x * x;

console.log(square(5)); // Output: 25

// Arrow function with multiple parameters
let add = (a, b) => a + b;

console.log(add(5, 3)); // Output: 8

// Arrow function with function body
let getRandomNumber = () => {
  let min = 1;
  let max = 10;
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomNumber());

// Arrow functions and this keyword
let person = {
  name: "Alice",
  greet: function () {
    setTimeout(() => {
      console.log("Hello, my name is " + this.name);
    }, 1000);
  },
};

person.greet();

// Arrow functions cannot be used as constructors
// let Person = (name) => {
//     this.name = name;
// };
// let p = new Person("Bob"); // TypeError: Person is not a constructor

// Exercises:
// 1. Rewrite the following function as an arrow function:
//    function double(x) { return x * 2; }
// 2. Create an arrow function that takes an array of numbers and returns a new array with each number squared.
// 3. Write an arrow function that sorts an array of objects by a specific property.
