// 18_object_exercises.js

/**
 * JavaScript Objects - Practice Exercises
 * -------------------------------------
 * Complete each exercise function according to the requirements.
 * Run the tests to check your solutions.
 */

// Exercise 1: Basic Object Creation
// Create and return an object representing a book with title, author, and year properties
function createBook(title, author, year) {
    return {
        title,
        author,
        year
    };
}

// Exercise 2: Object Method Implementation
// Add a method 'getAge' that returns how many years old the book is
function addBookAge(book) {
    book.getAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    };
    return book;
}

// Exercise 3: Object Property Access
// Return the value of the specified property from the object
function getProperty(object, propertyName) {
    return object[propertyName];
}

// Exercise 4: Nested Objects
// Create a nested object structure for a library
function createLibrary(name, books) {
    return {
        name,
        books,
        getTotalBooks() {
            return this.books.length;
        },
        getBooksByAuthor(author) {
            return this.books.filter(book => book.author === author);
        }
    };
}

// Exercise 5: Object Destructuring
// Extract and return specific properties from a user object
function getUserInfo({ name, email, address: { city } = {} }) {
    return { name, email, city };
}

// Exercise 6: Object Comparison
// Compare two objects and return true if they have the same properties and values
function compareObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    
    if (keys1.length !== keys2.length) return false;
    
    return keys1.every(key => 
        obj1[key] === obj2[key] || 
        (typeof obj1[key] === 'object' && typeof obj2[key] === 'object' && 
         compareObjects(obj1[key], obj2[key]))
    );
}

// Exercise 7: Object Transformation
// Transform an array of objects by adding, modifying, or removing properties
function transformBooks(books) {
    return books.map(book => ({
        ...book,
        summary: `${book.title} by ${book.author} (${book.year})`,
        isNew: book.year >= 2020
    }));
}

// Exercise 8: Method Chaining
// Implement method chaining for a calculator object
function createCalculator(initialValue = 0) {
    return {
        value: initialValue,
        add(n) {
            this.value += n;
            return this;
        },
        subtract(n) {
            this.value -= n;
            return this;
        },
        multiply(n) {
            this.value *= n;
            return this;
        },
        getValue() {
            return this.value;
        }
    };
}

// Exercise 9: Object Freezing
// Create an immutable object with nested properties
function createImmutablePerson(name, age, address) {
    const person = {
        name,
        age,
        address: { ...address }
    };
    Object.freeze(person);
    Object.freeze(person.address);
    return person;
}

// Exercise 10: Object Composition
// Compose multiple objects into a single object
function composeObjects(...objects) {
    return objects.reduce((result, obj) => ({
        ...result,
        ...obj
    }), {});
}

// Test Cases
const tests = {
    testCreateBook() {
        const book = createBook("1984", "George Orwell", 1949);
        console.assert(book.title === "1984", "Book title test failed");
        console.assert(book.author === "George Orwell", "Book author test failed");
        console.assert(book.year === 1949, "Book year test failed");
    },

    testAddBookAge() {
        const book = createBook("1984", "George Orwell", 1949);
        const bookWithAge = addBookAge(book);
        const expectedAge = new Date().getFullYear() - 1949;
        console.assert(bookWithAge.getAge() === expectedAge, "Book age calculation failed");
    },

    testGetProperty() {
        const obj = { name: "John", age: 30 };
        console.assert(getProperty(obj, "name") === "John", "Property access failed");
    },

    // Add more test cases for other exercises...
};

// Run tests
Object.values(tests).forEach(test => test());

/**
 * Practice Tasks
 * -------------
 * 1. Create a book object and test all its properties
 * 2. Create a library with multiple books and test the methods
 * 3. Try the calculator with method chaining
 * 4. Test object immutability with nested properties
 * 5. Practice object composition with different types of objects
 */

// Example usage:
const book = createBook("The Hobbit", "J.R.R. Tolkien", 1937);
console.log(book);

const calculator = createCalculator(10)
    .add(5)
    .multiply(2)
    .subtract(7);
console.log(calculator.getValue()); // Should output 18

const immutablePerson = createImmutablePerson("John", 30, { city: "New York" });
// Attempting to modify will fail silently or throw error in strict mode
immutablePerson.age = 31;
console.log(immutablePerson.age); // Still 30