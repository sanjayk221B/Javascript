/**
 * Basic Array Methods in JavaScript
 */

// 1. Adding and Removing Elements
let fruits = ['apple', 'banana', 'cherry'];

// push(): Add to end
fruits.push('date');
console.log("After push:", fruits);

// pop(): Remove from end
let lastFruit = fruits.pop();
console.log("After pop:", fruits);

// unshift(): Add to beginning
fruits.unshift('grape');
console.log("After unshift:", fruits);

// shift(): Remove from beginning
let firstFruit = fruits.shift();
console.log("After shift:", fruits);

// 2. Splice Method (insert, remove, replace)
let vegetables = ['carrot', 'broccoli', 'spinach', 'kale'];

// Remove 2 elements starting from index 1
vegetables.splice(1, 2);
console.log("After splice remove:", vegetables);

// Insert elements
vegetables.splice(1, 0, 'tomato', 'cucumber');
console.log("After splice insert:", vegetables);

// 3. Slice Method (copy portion of array)
let originalVegetables = ['carrot', 'broccoli', 'spinach', 'kale'];
let slicedVegetables = originalVegetables.slice(1, 3);
console.log("Sliced vegetables:", slicedVegetables);

// 4. Concat Method (merge arrays)
let vegetables1 = ['carrot', 'broccoli'];
let vegetables2 = ['spinach', 'kale'];
let combinedVegetables = vegetables1.concat(vegetables2);
console.log("Combined vegetables:", combinedVegetables);

// 5. Join Method (convert array to string)
let joinedVegetables = vegetables1.join(', ');
console.log("Joined vegetables:", joinedVegetables);

// 6. Reverse Method
let numbers = [1, 2, 3, 4, 5];
numbers.reverse();
console.log("Reversed numbers:", numbers);

// 7. Fill Method
let emptyArray = new Array(5);
emptyArray.fill(0);
console.log("Filled array:", emptyArray);

// Exercise: Create a method to safely add unique elements
function addUnique(arr, element) {
    return arr.includes(element) ? arr : [...arr, element];
}

let uniqueNumbers = [1, 2, 3];
uniqueNumbers = addUnique(uniqueNumbers, 4);
uniqueNumbers = addUnique(uniqueNumbers, 2);
console.log("Unique numbers:", uniqueNumbers);