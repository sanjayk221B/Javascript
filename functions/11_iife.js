// Immediately Invoked Function Expressions (IIFE) in JavaScript

// Basic IIFE
(function () {
  console.log("I am an IIFE!");
})();

// IIFE with parameters
(function (name) {
  console.log("Hello, " + name + "!");
})("John");

// IIFE that returns a value
let result = (function () {
  return "I am the result of an IIFE";
})();

console.log(result);

// IIFE for creating private scope
let counter = (function () {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
})();

counter.increment();
counter.increment();
console.log(counter.getCount()); // Output: 2

// IIFE with arrow function
(() => {
  console.log("I am an arrow function IIFE");
})();

// IIFE to avoid polluting the global namespace
(function ($) {
  // Here, $ is guaranteed to be jQuery
  $("button").click(function () {
    console.log("Button clicked!");
  });
})(jQuery);

// IIFE for initialization
let app = {};

(function (app) {
  app.init = function () {
    console.log("App initialized");
  };

  app.config = {
    apiUrl: "https://api.example.com",
  };
})(app);

app.init();

// Exercises:
// 1. Create an IIFE that defines a module with private and public methods.
// 2. Write an IIFE that sets up an event listener and keeps track of how many times an element has been clicked.
// 3. Implement a simple templating function using an IIFE that takes an object and returns a formatted string.
