// Assignment Operators in JavaScript

// Simple assignment (=)
let x = 5;
console.log('x =', x); // Output: 5

// Addition assignment (+=)
x += 3; // Equivalent to x = x + 3
console.log('x += 3:', x); // Output: 8

// Subtraction assignment (-=)
x -= 2; // Equivalent to x = x - 2
console.log('x -= 2:', x); // Output: 6

// Multiplication assignment (*=)
x *= 4; // Equivalent to x = x * 4
console.log('x *= 4:', x); // Output: 24

// Division assignment (/=)
x /= 3; // Equivalent to x = x / 3
console.log('x /= 3:', x); // Output: 8

// Modulus assignment (%=)
x %= 5; // Equivalent to x = x % 5
console.log('x %= 5:', x); // Output: 3

// Exponentiation assignment (**=)
x **= 2; // Equivalent to x = x ** 2
console.log('x **= 2:', x); // Output: 9

// Bitwise AND assignment (&=)
let y = 5; // 101 in binary
y &= 3;    // 011 in binary
console.log('5 &= 3:', y); // Output: 1 (001 in binary)

// Bitwise OR assignment (|=)
y |= 6; // 110 in binary
console.log('1 |= 6:', y); // Output: 7 (111 in binary)

// Bitwise XOR assignment (^=)
y ^= 3; // 011 in binary
console.log('7 ^= 3:', y); // Output: 4 (100 in binary)

// Exercise:
// 1. Start with x = 10. Use assignment operators to add 5, then multiply by 2, then subtract 8
// 2. Create a variable y = 20. Use assignment operators to divide it by 4, then add 3, then find the remainder when divided by 5