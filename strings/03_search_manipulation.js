// 03_search_manipulation.js

/**
 * String Search and Manipulation in JavaScript
 * This file covers methods for searching within strings and manipulating them
 */

// Test string for demonstrations
const text = "JavaScript is amazing! JavaScript is fun!";

// Search Methods
// -------------
console.log("--- Search Methods ---");

// indexOf
console.log('indexOf "is":', text.indexOf("is")); // 11
console.log('Last indexOf "is":', text.lastIndexOf("is")); // 31

// includes, startsWith, endsWith
console.log('Includes "amazing":', text.includes("amazing")); // true
console.log('Starts with "Java":', text.startsWith("Java")); // true
console.log('Ends with "fun!":', text.endsWith("fun!")); // true

// Regular Expression Search
// -----------------------
console.log("--- Regular Expression Search ---");

// search() - returns index of first match
console.log('Search "is":', text.search(/is/)); // 11

// match() - returns array of matches
console.log('Match "is":', text.match(/is/g)); // ['is', 'is']

// test() - returns boolean (used on RegExp object)
const pattern = /JavaScript/g;
console.log('Test for JavaScript:', pattern.test(text)); // true

// Replacement Methods
// -----------------
console.log("--- Replacement Methods ---");

// replace() - replaces first occurrence
console.log('Replace first:', text.replace("JavaScript", "Python"));

// replaceAll() - replaces all occurrences
console.log('Replace all:', text.replaceAll("JavaScript", "Python"));

// Using regex for replacement
console.log('Replace with regex:', text.replace(/JavaScript/g, "Python"));

// Split and Join
// -------------
console.log("--- Split and Join ---");

// split() - string to array
const words = text.split(" ");
console.log('Split into words:', words);

// join() - array to string
console.log('Join with dashes:', words.join("-"));

// Advanced Pattern Matching
// ----------------------
const email = "user@example.com";
const phoneNumber = "123-456-7890";

// Email validation
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log('Valid email:', emailPattern.test(email));

// Phone number validation
const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
console.log('Valid phone:', phonePattern.test(phoneNumber));

// Practice Exercises
// ----------------
/**
 * Exercise 1: Find all occurrences of a word in a text
 * Exercise 2: Replace all instances of a word while maintaining case
 * Exercise 3: Split a sentence and capitalize each word
 * Exercise 4: Create a function to validate a username (letters, numbers, 3-16 chars)
 */

// Example solutions
console.log("--- Exercises ---");

// Exercise 1: Find all occurrences
function findAllOccurrences(str, word) {
    const regex = new RegExp(word, 'g');
    return str.match(regex) || [];
}
console.log('Occurrences of "is":', findAllOccurrences(text, "is"));

// Exercise 2: Case-sensitive replace
function replaceWithCase(str, find, replace) {
    return str.replace(new RegExp(find, 'gi'), match => 
        match === match.toUpperCase() ? replace.toUpperCase() : replace.toLowerCase()
    );
}
console.log('Case-sensitive replace:', replaceWithCase(text, "javascript", "python"));

// Exercise 3: Capitalize words
function capitalizeWords(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}
console.log('Capitalized words:', capitalizeWords("hello world example"));

// Exercise 4: Username validation
function validateUsername(username) {
    const usernamePattern = /^[a-zA-Z0-9]{3,16}$/;
    return usernamePattern.test(username);
}
console.log('Valid username:', validateUsername("user123")); // true
console.log('Invalid username:', validateUsername("u$er")); // false