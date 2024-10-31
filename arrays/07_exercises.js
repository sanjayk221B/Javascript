/**
 * Array Exercises
 * Solve these problems to improve your JavaScript array manipulation skills
 */

// 1. Basic Array Manipulation
function reverseArray(arr) {
    return arr.reverse();
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// 2. Transformation Problems
function capitalizeNames(names) {
    return names.map(name => name.charAt(0).toUpperCase() + name.slice(1));
}

function calculateTotalPrice(items) {
    return items.reduce((total, item) => total + item.price, 0);
}

// 3. Search and Filter Challenges
function findPrimeNumbers(max) {
    return Array.from({length: max}, (_, i) => i + 1)
        .filter(num => {
            if (num <= 1) return false;
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) return false;
            }
            return true;
        });
}

function groupByProperty(arr, prop) {
    return arr.reduce((acc, item) => {
        const key = item[prop];
        if (!acc[key]) acc[key] = [];
        acc[key].push(item);
        return acc;
    }, {});
}

// 4. Advanced Transformation
function flattenNestedArray(nestedArr) {
    return nestedArr.reduce((flat, toFlatten) => 
        flat.concat(Array.isArray(toFlatten) ? flattenNestedArray(toFlatten) : toFlatten), 
    []);
}

function rotateArray(arr, k) {
    k = k % arr.length;
    return arr.slice(-k).concat(arr.slice(0, -k));
}

// 5. Real-world Scenario Problems
const employees = [
    { name: 'Alice', department: 'Engineering', salary: 75000 },
    { name: 'Bob', department: 'Sales', salary: 65000 },
    { name: 'Charlie', department: 'Engineering', salary: 85000 },
    { name: 'David', department: 'Marketing', salary: 60000 }
];

function departmentAverageSalary(employees) {
    const departmentGroups = groupByProperty(employees, 'department');
    return Object.fromEntries(
        Object.entries(departmentGroups).map(([dept, emps]) => [
            dept, 
            emps.reduce((sum, emp) => sum + emp.salary, 0) / emps.length
        ])
    );
}

// 6. Performance Challenge
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
}

// 7. Complex Sorting
function complexSort(arr) {
    return arr.sort((a, b) => {
        if (a.age !== b.age) return a.age - b.age;
        return a.name.localeCompare(b.name);
    });
}

// Test the functions
console.log("Reverse Array:", reverseArray([1, 2, 3, 4, 5]));
console.log("Remove Duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
console.log("Capitalize Names:", capitalizeNames(['alice', 'bob', 'charlie']));
console.log("Prime Numbers up to 20:", findPrimeNumbers(20));
console.log("Department Average Salaries:", departmentAverageSalary(employees));
console.log("Rotated Array:", rotateArray([1, 2, 3, 4, 5], 2));