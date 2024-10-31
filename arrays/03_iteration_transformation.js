/**
 * Array Iteration and Transformation Methods
 */

// Sample data
const numbers = [1, 2, 3, 4, 5];
const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
    { name: 'Bob', age: 20 }
];

// 1. forEach: Iterate through array
console.log("forEach Method:");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// 2. map: Transform array
const doubled = numbers.map(num => num * 2);
console.log("Mapped (doubled):", doubled);

const userNames = users.map(user => user.name);
console.log("User Names:", userNames);

// 3. filter: Create new array with filtered elements
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

const youngerUsers = users.filter(user => user.age < 25);
console.log("Younger Users:", youngerUsers);

// 4. reduce: Reduce array to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of Numbers:", sum);

const totalAge = users.reduce((acc, user) => acc + user.age, 0);
console.log("Total Age:", totalAge);

// 5. find and findIndex
const firstEvenNumber = numbers.find(num => num % 2 === 0);
console.log("First Even Number:", firstEvenNumber);

const bobIndex = users.findIndex(user => user.name === 'Bob');
console.log("Bob's Index:", bobIndex);

// 6. some and every
const hasEvenNumber = numbers.some(num => num % 2 === 0);
console.log("Has Even Number:", hasEvenNumber);

const allPositive = numbers.every(num => num > 0);
console.log("All Positive:", allPositive);

// 7. Chaining Methods
const result = numbers
    .filter(num => num % 2 === 0)
    .map(num => num * 2)
    .reduce((acc, curr) => acc + curr, 0);
console.log("Chained Method Result:", result);

// Exercise: Advanced Transformation
function transformUsers(users) {
    return users
        .filter(user => user.age >= 25)
        .map(user => ({ ...user, category: 'Adult' }))
        .sort((a, b) => a.age - b.age);
}

console.log("Transformed Users:", transformUsers(users));