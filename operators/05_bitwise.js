// Bitwise Operators in JavaScript

// Bitwise AND (&)
console.log('5 & 3:', 5 & 3);  // Output: 1
// 5 = 101, 3 = 011, result = 001

// Bitwise OR (|)
console.log('5 | 3:', 5 | 3);  // Output: 7
// 5 = 101, 3 = 011, result = 111

// Bitwise XOR (^)
console.log('5 ^ 3:', 5 ^ 3);  // Output: 6
// 5 = 101, 3 = 011, result = 110

// Bitwise NOT (~)
console.log('~5:', ~5);  // Output: -6
// 5 = 00000000000000000000000000000101
// ~5 = 11111111111111111111111111111010 (2's complement)

// Left shift (<<)
console.log('5 << 1:', 5 << 1);  // Output: 10
// 5 = 101, 5 << 1 = 1010

// Sign-propagating right shift (>>)
console.log('5 >> 1:', 5 >> 1);  // Output: 2
// 5 = 101, 5 >> 1 = 010

// Zero-fill right shift (>>>)
console.log('5 >>> 1:', 5 >>> 1);  // Output: 2
console.log('-5 >>> 1:', -5 >>> 1);  // Output: 2147483645

// Bitwise AND assignment (&=)
let a = 5;
a &= 3;
console.log('a after a &= 3:', a);  // Output: 1

// Bitwise OR assignment (|=)
let b = 5;
b |= 3;
console.log('b after b |= 3:', b);  // Output: 7

// Bitwise XOR assignment (^=)
let c = 5;
c ^= 3;
console.log('c after c ^= 3:', c);  // Output: 6

// Exercise:
// 1. Use bitwise operators to swap two variables without using a temporary variable
// 2. Check if a number is odd or even using bitwise operators
// 3. Implement a function to turn on/off a specific bit in a number