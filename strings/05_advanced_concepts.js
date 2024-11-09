// 05_advanced_concepts.js

/**
 * Advanced String Concepts in JavaScript
 * This file covers advanced string manipulation, Unicode handling,
 * internationalization, and performance optimization
 */

// Unicode and UTF-16
// -----------------
console.log("--- Unicode and UTF-16 ---");

// Unicode escape sequences
const heart = '\u2665';
const smile = '\u263A';
const pizza = '\u{1F355}';  // Extended Unicode using curly braces
console.log('Unicode symbols:', heart, smile, pizza);

// Surrogate pairs (for characters outside BMP)
const pusheen = '😺';  // Single character using surrogate pair
console.log('Surrogate pair length:', pusheen.length); // 2
console.log('Surrogate pair code points:', pusheen.codePointAt(0)); // 128568

// Iterating over Unicode characters correctly
const text = '🌟✨⭐';
console.log("--- Unicode Iteration ---");

// Wrong way (splits surrogate pairs)
for (let i = 0; i < text.length; i++) {
    console.log('Character at', i, text[i]);
}

// Correct way using for...of
for (let char of text) {
    console.log('Unicode char:', char);
}

// Using spread operator for true length
console.log('Actual length:', [...text].length);

// String Encoding/Decoding
// ----------------------
console.log("--- Encoding/Decoding ---");

// TextEncoder for UTF-8 encoding
const encoder = new TextEncoder();
const decoder = new TextDecoder();

const string = "Hello, 世界"; // Mixed ASCII and Unicode
const encoded = encoder.encode(string);
console.log('Encoded:', encoded);
console.log('Decoded:', decoder.decode(encoded));

// Base64 Encoding/Decoding
const base64 = btoa('Hello, World!'); // Only works with ASCII
console.log('Base64 encoded:', base64);
console.log('Base64 decoded:', atob(base64));

// Unicode Base64 encoding workaround
function utf8ToBase64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

function base64ToUtf8(str) {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

console.log('Unicode Base64:', utf8ToBase64('Hello, 世界'));

// Internationalization
// ------------------
console.log("--- Internationalization ---");

// String comparison with locales
const strings = ['é', 'e', 'è', 'f'];
console.log('Default sort:', strings.sort());
console.log('Locale sort:', strings.sort((a, b) => a.localeCompare(b, 'fr')));

// Date and number formatting
const date = new Date();
const numberFormatter = new Intl.NumberFormat('de-DE');
const dateFormatter = new Intl.DateTimeFormat('ja-JP');

console.log('Formatted number:', numberFormatter.format(123456.789));
console.log('Formatted date:', dateFormatter.format(date));

// String normalization
const normalized = 'é'.normalize('NFKD');
console.log('Normalized:', normalized);

// Performance Optimization
// ----------------------
console.log("--- Performance Optimization ---");

// String concatenation performance
function badConcatenation(n) {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += 'x'; // Bad practice for large n
    }
    return result;
}

function goodConcatenation(n) {
    return 'x'.repeat(n); // Much more efficient
}

// Using array join for multiple concatenations
function efficientConcatenation(strings) {
    return strings.join(''); // More efficient than reducing with +
}

// String interning example
function intern(str) {
    const temp = new String(str);
    return temp.valueOf();
}

// Memory-efficient string matching
function efficientMatch(text, pattern) {
    return text.indexOf(pattern) !== -1; // More efficient than regex for simple matches
}

// Practice Exercises
// ----------------
/**
 * Exercise 1: Create a function that correctly counts Unicode characters
 * Exercise 2: Implement a Base64 encoder that works with Unicode
 * Exercise 3: Create a function that sorts strings based on locale
 * Exercise 4: Implement efficient string building for large datasets
 */

// Solutions
console.log("--- Exercise Solutions ---");

// Exercise 1: Unicode character counter
function countUnicodeChars(str) {
    return [...str].length;
}
console.log('Unicode length:', countUnicodeChars('Hello 👋 World 🌍'));

// Exercise 2: Unicode-safe Base64
function encodeUnicode(str) {
    return utf8ToBase64(str);
}
console.log('Unicode Base64:', encodeUnicode('Hello 世界 🌍'));

// Exercise 3: Locale-aware sorting
function localeSortStrings(strings, locale = 'en') {
    return strings.sort((a, b) => a.localeCompare(b, locale));
}
console.log('Locale sorted:', localeSortStrings(['é', 'a', 'è', 'b'], 'fr'));

// Exercise 4: Efficient string builder
class StringBuilder {
    constructor() {
        this.strings = [];
    }

    append(str) {
        this.strings.push(str);
    }

    toString() {
        return this.strings.join('');
    }
}

const builder = new StringBuilder();
builder.append("Hello");
builder.append(" ");
builder.append("World");
console.log('Built string:', builder.toString());

// Best Practices
// -------------
console.log("--- Best Practices ---");

// 1. Use String.prototype.includes instead of indexOf for existence checks
const hasSubstring = "Hello World".includes("World"); // better than indexOf !== -1

// 2. Use template literals for string interpolation
const name = "World";
const greeting = `Hello ${name}`; // better than 'Hello ' + name

// 3. Use string methods instead of RegExp for simple operations
const simple = "Hello World".replace("World", "Universe"); // better than /World/

// 4. Cache length in loops
const str = "Very long string";
const len = str.length;
for (let i = 0; i < len; i++) {
    // Loop using cached length
}

// 5. Use appropriate string comparison
function compareStrings(str1, str2) {
    return str1.localeCompare(str2, undefined, { sensitivity: 'base' }) === 0;
}

// Performance Tests
// ---------------
console.log("--- Performance Examples ---");

// Example of measuring string operation performance
function measurePerformance(fn, ...args) {
    const start = performance.now();
    fn(...args);
    return performance.now() - start;
}

const longString = "x".repeat(100000);
console.log('String build time:', measurePerformance(() => "x".repeat(100000)));
console.log('String search time:', measurePerformance(() => longString.includes("x")));