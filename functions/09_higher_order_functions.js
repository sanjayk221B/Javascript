// Higher-Order Functions in JavaScript

// Higher-order function that takes a function as an argument
function operate(func, a, b) {
    return func(a, b);
}

let add = (x, y) => x + y;
let multiply = (x, y) => x * y;

console.log(operate(add, 5, 3));      // Output: 8
console.log(operate(multiply, 5, 3)); // Output: 15

// Higher-order function that returns a function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

let double = createMultiplier(2);
let triple = createMultiplier(3);

console.log(double(5));  // Output: 10
console.log(triple(5));  // Output: 15

// Array methods as higher-order functions
let numbers = [1, 2, 3, 4, 5];

// map
let squared = numbers.map(x => x * x);
console.log(squared);  // Output: [1, 4, 9, 16, 25]

// filter
let evens = numbers.filter(x => x % 2 === 0);
console.log(evens);  // Output: [2, 4]

// reduce
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum);  // Output: 15

// Composing higher-order functions
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = data
    .filter(x => x % 2 === 0)
    .map(x => x * x)
    .reduce((acc, curr) => acc + curr, 0);

console.log(result);  // Output: 220

// Exercises:
// 1. Create a higher-order function that takes an array and a transformation function, applying the function to each element.
// 2. Implement a function that takes a sorting comparison function and returns a new sorted array.
// 3. Write a function that creates a throttled version of a given function (executes at most once per specified time interval).