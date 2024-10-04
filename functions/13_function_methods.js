// Function Methods (call, apply, bind) in JavaScript

// call method
let person1 = { name: "John", age: 22 };
let person2 = { name: "Jane", age: 25 };

function introduce() {
  console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
}

introduce.call(person1); // Output: My name is John and I'm 22 years old.
introduce.call(person2); // Output: My name is Jane and I'm 25 years old.

// call with arguments
function greet(greeting) {
  console.log(`${greeting}, I'm ${this.name}`);
}

greet.call(person1, "Hello"); // Output: Hello, I'm John

// apply method
function introduce(greeting, punctuation) {
  console.log(
    `${greeting}, I'm ${this.name}${punctuation} I'm ${this.age} years old.`
  );
}

introduce.apply(person1, ["Hi", "!"]); // Output: Hi, I'm John! I'm 22 years old.

// Using apply with built-in functions
let numbers = [5, 6, 2, 3, 7];
let max = Math.max.apply(null, numbers);
console.log(max); // Output: 7

// bind method
let boundIntroduce = introduce.bind(person2, "Hey");
boundIntroduce("!"); // Output: Hey, I'm Jane! I'm 25 years old.

// Partial application with bind
function multiply(a, b) {
  return a * b;
}

let double = multiply.bind(null, 2);
console.log(double(4)); // Output: 8

// Changing this in event handlers
let button = {
  content: "OK",
  click() {
    console.log(this.content + " clicked");
  },
};

let myButton = {
  content: "Cancel",
};

button.click(); // Output: OK clicked
let boundClick = button.click.bind(myButton);
boundClick(); // Output: Cancel clicked

// Exercises:
// 1. Create an object with a method and use call to invoke the method with a different this context.
// 2. Write a function that uses apply to find the minimum value in an array of numbers.
// 3. Implement a debounce function using bind that limits how often a function can be called.
