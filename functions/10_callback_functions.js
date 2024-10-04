// Callback Functions in JavaScript

// Basic callback function
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function callMe() {
  console.log("I am callback function");
}

greet("John", callMe);

// Callback with arguments
function calculateAndDisplay(num1, num2, operation, callback) {
  let result = operation(num1, num2);
  callback(result);
}

function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}

function display(result) {
  console.log("The result is: " + result);
}

calculateAndDisplay(5, 3, add, display);
calculateAndDisplay(5, 3, multiply, display);

// Asynchronous callback
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 2000);
}

console.log("Fetching data...");
fetchData((data) => {
  console.log(data);
});
console.log("Continuing execution...");

// Error handling with callbacks
function divide(a, b, callback) {
  if (b === 0) {
    callback(new Error("Cannot divide by zero"), null);
  } else {
    callback(null, a / b);
  }
}

divide(10, 2, (error, result) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Result:", result);
  }
});

divide(10, 0, (error, result) => {
  if (error) {
    console.error("Error:", error.message);
  } else {
    console.log("Result:", result);
  }
});

// Exercises:
// 1. Implement a function that takes an array and a callback, applying the callback to each element and returning a new array.
// 2. Create a function that simulates reading three files asynchronously and then calls a callback with the combined contents.
// 3. Write a function that takes a callback and ensures it's only called once, regardless of how many times the function is invoked.
