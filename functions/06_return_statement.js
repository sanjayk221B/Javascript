// Return Statement in JavaScript

// Basic return statement
function add(a, b) {
    return a + b;
}

console.log(add(5, 3)); // Output: 8

// Early return
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

console.log(isEven(4)); // Output: true
console.log(isEven(7)); // Output: false

// Returning multiple values using an array
function getMinMax(numbers) {
    return [Math.min(...numbers), Math.max(...numbers)];
}

let [min, max] = getMinMax([3, 1, 4, 1, 5, 9, 2, 6]);
console.log(`Min: ${min}, Max: ${max}`); // Output: Min: 1, Max: 9

// Returning an object
function createPerson(name, age) {
    return {
        name: name,
        age: age,
        greet: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
}

let person = createPerson("Alice", 30);
person.greet(); // Output: Hello, my name is Alice

// Returning a function
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

let double = multiply(2);
console.log(double(5)); // Output: 10

// Exercises:
// 1. Write a function that returns the factorial of a number.
// 2. Create a function that returns an object with methods to add, subtract, multiply, and divide two numbers.
// 3. Implement a function that returns another function to calculate the nth power of a number.
