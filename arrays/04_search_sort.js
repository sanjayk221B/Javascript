/**
 * Array Search and Sort Methods
 */

// Sample data
const numbers = [5, 2, 8, 1, 9];
const fruits = ['banana', 'apple', 'cherry', 'date'];
const users = [
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
    { name: 'Bob', age: 35 }
];

// 1. indexOf and lastIndexOf
console.log("Index of 8:", numbers.indexOf(8)); // 2
console.log("Last Index of 5:", numbers.lastIndexOf(5)); // 0

// 2. includes
console.log("Includes 2:", numbers.includes(2)); // true
console.log("Includes 7:", numbers.includes(7)); // false

// 3. Basic Sorting
// Default sort (converts to strings)
console.log("Default Sort:", numbers.sort());
console.log("Fruits Default Sort:", fruits.sort());

// Numeric Sorting
const numericSort = numbers.sort((a, b) => a - b);
console.log("Numeric Sort:", numericSort);

// Reverse Numeric Sort
const reverseNumericSort = numbers.sort((a, b) => b - a);
console.log("Reverse Numeric Sort:", reverseNumericSort);

// 4. Object Sorting
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log("Sorted by Age:", sortedByAge);

const sortedByName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("Sorted by Name:", sortedByName);

// 5. Binary Search (manual implementation)
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) return mid;
        
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

// Sort array first for binary search
const sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Sorted Numbers:", sortedNumbers);
console.log("Binary Search 8:", binarySearch(sortedNumbers, 8));
console.log("Binary Search 7:", binarySearch(sortedNumbers, 7));

// Exercise: Advanced Search
function findClosestNumber(arr, target) {
    return arr.reduce((prev, curr) => 
        Math.abs(curr - target) < Math.abs(prev - target) ? curr : prev
    );
}

console.log("Closest to 6:", findClosestNumber(numbers, 6));

// Stable sort example
function stableSort(arr) {
    return arr.sort((a, b) => {
        if (a.age === b.age) {
            return a.name.localeCompare(b.name);
        }
        return a.age - b.age;
    });
}

console.log("Stable Sort:", stableSort(users));