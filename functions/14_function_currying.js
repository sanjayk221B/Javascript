// Function Currying in JavaScript

// Basic currying
function curry(f) {
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);
console.log(curriedSum(2)(3)); // Output: 5

// Currying with multiple arguments
function multiCurry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function volume(length, width, height) {
  return length * width * height;
}

let curriedVolume = multiCurry(volume);
console.log(curriedVolume(3)(4)(5)); // Output: 60
console.log(curriedVolume(3, 4)(5)); // Output: 60
console.log(curriedVolume(3)(4, 5)); // Output: 60

// Practical example: Configurable logging function
function log(date, importance, message) {
  console.log(
    `[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`
  );
}

let curriedLog = multiCurry(log);
let logNow = curriedLog(new Date());
let debugNow = logNow("DEBUG");

debugNow("debug message");
// Output: [HH:MM] [DEBUG] debug message

// Currying for partial application
function discount(discount) {
  return (price) => {
    return price * (1 - discount);
  };
}

let tenPercentDiscount = discount(0.1);
let twentyPercentDiscount = discount(0.2);

console.log(tenPercentDiscount(100)); // Output: 90
console.log(twentyPercentDiscount(100)); // Output: 80

// Exercises:
// 1. Implement a curried function for calculating the area of different shapes (circle, rectangle, triangle).
// 2. Create a curried version of the Array.prototype.slice method.
// 3. Write a curried function that formats a string with multiple placeholders.
