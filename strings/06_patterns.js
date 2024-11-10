// 06_patterns.js

/**
 * Common String Patterns and Best Practices in JavaScript
 * This file demonstrates frequently used string manipulation patterns,
 * optimization techniques, and recommended approaches for common scenarios
 */

// Pattern 1: String Validation Patterns
// ----------------------------------
console.log("--- Validation Patterns ---");

class StringValidator {
    static isEmail(str) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(str);
    }

    static isStrongPassword(str) {
        // At least 8 chars, 1 uppercase, 1 lowercase, 1 number, 1 special char
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(str);
    }

    static isURL(str) {
        try {
            new URL(str);
            return true;
        } catch {
            return false;
        }
    }

    static isPhoneNumber(str) {
        // Supports multiple formats: (123) 456-7890, 123-456-7890, 1234567890
        const phonePattern = /^\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})$/;
        return phonePattern.test(str);
    }
}

// Pattern 2: String Formatting Patterns
// ---------------------------------
console.log("--- Formatting Patterns ---");

class StringFormatter {
    static toCurrency(number, locale = 'en-US', currency = 'USD') {
        return new Intl.NumberFormat(locale, {
            style: 'currency',
            currency: currency
        }).format(number);
    }

    static toTitleCase(str) {
        return str.toLowerCase().replace(/(?:^|\s)\w/g, match => match.toUpperCase());
    }

    static truncate(str, length, ending = '...') {
        if (str.length <= length) return str;
        return str.slice(0, length - ending.length) + ending;
    }

    static slugify(str) {
        return str
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')
            .replace(/[\s_-]+/g, '-')
            .replace(/^-+|-+$/g, '');
    }
}

// Pattern 3: String Parsing Patterns
// ------------------------------
console.log("--- Parsing Patterns ---");

class StringParser {
    static extractURLParams(url) {
        const params = new URLSearchParams(new URL(url).search);
        return Object.fromEntries(params.entries());
    }

    static parseCSV(str, delimiter = ',') {
        return str.split('\n').map(row => row.split(delimiter));
    }

    static extractTags(str) {
        const tagPattern = /#[\w]+/g;
        return str.match(tagPattern) || [];
    }

    static extractNumbers(str) {
        return str.match(/\d+(?:\.\d+)?/g)?.map(Number) || [];
    }
}

// Pattern 4: String Search and Replace Patterns
// ----------------------------------------
console.log("--- Search and Replace Patterns ---");

class StringManipulator {
    static replaceAll(str, find, replace) {
        return str.split(find).join(replace);
    }

    static highlight(text, search, highlightClass = 'highlight') {
        if (!search) return text;
        const regex = new RegExp(`(${search})`, 'gi');
        return text.replace(regex, `<span class="${highlightClass}">$1</span>`);
    }

    static removeExtraSpaces(str) {
        return str.replace(/\s+/g, ' ').trim();
    }

    static mask(str, maskChar = '*', visibleChars = 4) {
        return str.slice(-visibleChars).padStart(str.length, maskChar);
    }
}

// Pattern 5: Performance Optimization Patterns
// ---------------------------------------
console.log("--- Performance Patterns ---");

class StringOptimizer {
    constructor() {
        this.cache = new Map();
    }

    // Memoized string operations
    memoizedProcess(str, operation) {
        const cacheKey = `${str}-${operation}`;
        if (this.cache.has(cacheKey)) {
            return this.cache.get(cacheKey);
        }
        const result = this.processString(str, operation);
        this.cache.set(cacheKey, result);
        return result;
    }

    // Efficient string building
    static buildLargeString(parts) {
        return parts.join('');
    }

    // Efficient string matching
    static findAll(str, search) {
        const results = [];
        let index = -1;
        while ((index = str.indexOf(search, index + 1)) !== -1) {
            results.push(index);
        }
        return results;
    }
}

// Pattern 6: Error Handling Patterns
// ------------------------------
console.log("--- Error Handling Patterns ---");

class StringValidator2 {
    static validate(str, options = {}) {
        const {
            minLength = 0,
            maxLength = Infinity,
            pattern = null,
            required = true
        } = options;

        const errors = [];

        // Required check
        if (required && !str) {
            errors.push('String is required');
        }

        // Length checks
        if (str.length < minLength) {
            errors.push(`String must be at least ${minLength} characters`);
        }
        if (str.length > maxLength) {
            errors.push(`String must be no more than ${maxLength} characters`);
        }

        // Pattern check
        if (pattern && !pattern.test(str)) {
            errors.push('String does not match required pattern');
        }

        return {
            isValid: errors.length === 0,
            errors
        };
    }
}

// Usage Examples
// ------------
console.log("--- Usage Examples ---");

// Validation
console.log('Email valid:', StringValidator.isEmail('user@example.com'));
console.log('Password strong:', StringValidator.isStrongPassword('Test@123'));

// Formatting
console.log('Currency:', StringFormatter.toCurrency(123456.789));
console.log('Title case:', StringFormatter.toTitleCase('hello world'));
console.log('Truncated:', StringFormatter.truncate('Long text to truncate', 10));
console.log('Slugified:', StringFormatter.slugify('Hello World! This is a test'));

// Parsing
console.log('Tags:', StringParser.extractTags('Check out #javascript and #webdev'));
console.log('Numbers:', StringParser.extractNumbers('Price is $123.45 and quantity is 5'));

// Search and Replace
console.log('Masked:', StringManipulator.mask('1234567890123456', '*', 4));
console.log('Highlighted:', StringManipulator.highlight('Hello World', 'world'));

// Validation with detailed errors
const validationResult = StringValidator2.validate('test', {
    minLength: 5,
    maxLength: 10,
    pattern: /^[A-Za-z]+$/
});
console.log('Validation result:', validationResult);

// Best Practices Examples
// --------------------
console.log("--- Best Practices ---");

// 1. Use template literals for string interpolation
const name = 'World';
console.log(`Hello ${name}`);

// 2. Use String.prototype.includes for substring checks
const hasWord = 'Hello World'.includes('World');

// 3. Use appropriate string comparison
const str1 = 'hello';
const str2 = 'HELLO';
console.log('Case insensitive equal:', str1.localeCompare(str2, undefined, { sensitivity: 'base' }) === 0);

// 4. Use string methods instead of regex for simple operations
const simpleReplace = 'Hello World'.replace('World', 'Universe');

// 5. Cache regex objects for repeated use
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail(email) {
    return EMAIL_REGEX.test(email);
}