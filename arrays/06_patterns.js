/**
 * Common Patterns and Best Practices with Arrays
 */

// 1. Immutable Array Operations
const numbers = [1, 2, 3, 4, 5];

// Instead of mutating
const doubled1 = numbers.map(num => num * 2);

// Avoid mutation
const addElement = (arr, element) => [...arr, element];
const removedFirst = (arr) => arr.slice(1);

// 2. Efficient Filtering
const users = [
    { name: 'John', active: true, age: 25 },
    { name: 'Jane', active: false, age: 30 },
    { name: 'Bob', active: true, age: 35 }
];

const activeUsers = users.filter(user => user.active);
const youngerUsers = users.filter(user => user.age < 30);

// 3. Reducing for Complex Transformations
const totalAge = users.reduce((sum, user) => sum + user.age, 0);
const groupByActive = users.reduce((acc, user) => {
    acc[user.active ? 'active' : 'inactive'].push(user);
    return acc;
}, { active: [], inactive: [] });

// 4. Chaining Methods
const processedUsers = users
    .filter(user => user.active)
    .map(user => ({ ...user, seniorStatus: user.age >= 30 }))
    .sort((a, b) => b.age - a.age);

// 5. Memoization Pattern
function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const expensiveArrayOperation = memoize((arr) => 
    arr.reduce((sum, num) => sum + num, 0)
);

// 6. Error Handling
function safeArrayOperation(arr, operation) {
    try {
        return Array.isArray(arr) ? operation(arr) : null;
    } catch (error) {
        console.error('Array operation failed:', error);
        return null;
    }
}

// 7. Performance Optimization Techniques
function findLargestUsingReduce(arr) {
    return arr.reduce((max, current) => Math.max(max, current), -Infinity);
}

function findLargestUsingSort(arr) {
    return [...arr].sort((a, b) => b - a)[0];
}

console.log("Performance Comparison");
console.time('Reduce Method');
findLargestUsingReduce(Array.from({length: 10000}, () => Math.random() * 1000));
console.timeEnd('Reduce Method');

console.time('Sort Method');
findLargestUsingSort(Array.from({length: 10000}, () => Math.random() * 1000));
console.timeEnd('Sort Method');

// 8. Safe Array Access
function safeAccess(arr, index, defaultValue = undefined) {
    return index >= 0 && index < arr.length ? arr[index] : defaultValue;
}

const sampleArray = [10, 20, 30];
console.log(safeAccess(sampleArray, 1)); // 20
console.log(safeAccess(sampleArray, 5, 'Not Found')); // 'Not Found'