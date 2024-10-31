/**
 * Advanced Array Concepts
 */

// 1. Multidimensional Arrays
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Matrix:", matrix);
console.log("Element at [1][1]:", matrix[1][1]); // 5

// Nested array manipulation
const transformedMatrix = matrix.map(row => row.map(num => num * 2));
console.log("Transformed Matrix:", transformedMatrix);

// 2. Array Destructuring
const colors = ['red', 'green', 'blue', 'yellow'];
const [primary, secondary, ...remaining] = colors;
console.log("Primary Color:", primary);
console.log("Secondary Color:", secondary);
console.log("Remaining Colors:", remaining);

// Destructuring with nested arrays
const nestedArray = [1, [2, 3], 4];
const [a, [b, c], d] = nestedArray;
console.log("Nested Destructuring:", a, b, c, d);

// 3. Spread and Rest Operators
function sumNumbers(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
console.log("Sum of numbers:", sumNumbers(1, 2, 3, 4, 5)); // 15

const originalArray = [1, 2, 3];
const extendedArray = [...originalArray, 4, 5];
console.log("Extended Array:", extendedArray);

// 4. TypedArrays
const buffer = new ArrayBuffer(16);
const int32View = new Int32Array(buffer);
int32View[0] = 42;
console.log("TypedArray:", int32View);

// 5. Array-like Objects
const arrayLike = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};
const realArray = Array.from(arrayLike);
console.log("Converted Array-like:", realArray);

// 6. Performance Considerations
console.time('Large Array Creation');
const largeArray = Array.from({length: 1000000}, (_, i) => i);
console.timeEnd('Large Array Creation');

// 7. Proxy for Array-like Behavior
const numbersProxy = new Proxy([1, 2, 3, 4], {
    get(target, prop) {
        if (prop === 'last') {
            return target[target.length - 1];
        }
        return target[prop];
    }
});
console.log("Proxy Last Element:", numbersProxy.last);

// 8. Advanced Array Cloning
const originalComplex = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
];
const deepClone = JSON.parse(JSON.stringify(originalComplex));
console.log("Deep Clone:", deepClone);