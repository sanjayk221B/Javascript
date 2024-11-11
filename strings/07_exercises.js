// 07_exercises.js

/**
 * JavaScript Strings - Exercise File
 * This file contains various exercises to practice string manipulation in JavaScript.
 */

// Exercise 1: Palindrome Checker
// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards).
function isPalindrome(str) {
    // Your code here
}

console.log('Palindrome test:', isPalindrome('racecar')); // true
console.log('Palindrome test:', isPalindrome('hello')); // false

// Exercise 2: Reverse String
// Write a function that reverses a given string.
function reverseString(str) {
    // Your code here
}

console.log('Reversed string:', reverseString('JavaScript')); // 'tpircSavaJ'

// Exercise 3: Capitalize First Letter
// Write a function that capitalizes the first letter of each word in a given string.
function capitalizeWords(str) {
    // Your code here
}

console.log('Capitalized words:', capitalizeWords('the quick brown fox')); // 'The Quick Brown Fox'

// Exercise 4: Truncate String
// Write a function that truncates a string to a specified length, adding an ellipsis (...) at the end if it's longer than the limit.
function truncateString(str, maxLength) {
    // Your code here
}

console.log('Truncated string:', truncateString('Hello, World! This is a long example.', 15)); // 'Hello, World!...'

// Exercise 5: Unique Characters
// Write a function that takes a string and returns the unique characters in the string.
function getUniqueChars(str) {
    // Your code here
}

console.log('Unique characters:', getUniqueChars('banana')); // 'ban'

// Exercise 6: Anagram Checker
// Write a function that checks if two strings are anagrams (contain the same characters in a different order).
function areAnagrams(str1, str2) {
    // Your code here
}

console.log('Anagram test:', areAnagrams('listen', 'silent')); // true
console.log('Anagram test:', areAnagrams('hello', 'world')); // false

// Exercise 7: Compress String
// Write a function that compresses a string by replacing consecutive duplicate characters with the character and its count.
function compressString(str) {
    // Your code here
}

console.log('Compressed string:', compressString('aabbcccdddd')); // 'a2b2c3d4'

// Exercise 8: Caeser Cipher
// Write a function that implements a Caesar cipher, which is a simple substitution cipher where each letter is replaced by a letter a fixed number of positions down the alphabet.
function caesarCipher(str, shift) {
    // Your code here
}

console.log('Encrypted:', caesarCipher('Hello, World!', 3)); // 'Khoor, Zruog!'
console.log('Decrypted:', caesarCipher('Khoor, Zruog!', -3)); // 'Hello, World!'

// Exercise 9: Vowel Counter
// Write a function that counts the number of vowels in a given string.
function countVowels(str) {
    // Your code here
}

console.log('Vowel count:', countVowels('JavaScript')); // 3

// Exercise 10: Palindrome Permutation
// Write a function that checks if a given string is a permutation of a palindrome.
function isPalindromePermutation(str) {
    // Your code here
}

console.log('Palindrome permutation:', isPalindromePermutation('Tact Coa')); // true
console.log('Palindrome permutation:', isPalindromePermutation('hello')); // false

// Exercise 11: URL Slugify
// Write a function that converts a string to a URL-friendly slug.
function slugify(str) {
    // Your code here
}

console.log('Slugified:', slugify('Hello World! This is a Test')); // 'hello-world-this-is-a-test'

// Exercise 12: String Rotation
// Write a function that checks if a string is a rotation of another string.
function isRotation(str1, str2) {
    // Your code here
}

console.log('Rotation test:', isRotation('javascript', 'scriptjava')); // true
console.log('Rotation test:', isRotation('hello', 'world')); // false

// Exercise 13: Balanced Brackets
// Write a function that checks if a string of brackets is balanced (i.e., every opening bracket has a matching closing bracket).
function isBalanced(str) {
    // Your code here
}

console.log('Balanced:', isBalanced('([{}])')); // true
console.log('Balanced:', isBalanced('([)}]')); // false

// Exercise 14: Duplicate Characters
// Write a function that finds the first duplicate character in a string.
function findFirstDuplicate(str) {
    // Your code here
}

console.log('First duplicate:', findFirstDuplicate('hello')); // 'l'
console.log('First duplicate:', findFirstDuplicate('javascript')); // undefined

// Exercise 15: String Interpolation
// Write a function that takes an object and a template string, and returns the string with the object's properties interpolated.
function interpolate(obj, template) {
    // Your code here
}

const person = { name: 'John', age: 30, city: 'New York' };
console.log(interpolate(person, 'My name is ${name}, I am ${age} years old and I live in ${city}.'));
// Output: "My name is John, I am 30 years old and I live in New York."