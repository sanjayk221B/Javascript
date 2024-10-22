// 17_json_and_objects.js

/**
 * JSON and Objects in JavaScript
 * 
 * JavaScript objects and JSON (JavaScript Object Notation) are closely related.
 * JSON is a lightweight data interchange format that uses a subset of JavaScript
 * object notation.
 */

// Converting an object to JSON
let person = {
    name: "John Doe",
    age: 30,
    email: "john@example.com"
};

let jsonString = JSON.stringify(person);
console.log(jsonString); // {"name":"John Doe","age":30,"email":"john@example.com"}

// Converting JSON to an object
let personObject = JSON.parse(jsonString);
console.log(personObject); // { name: "John Doe", age: 30, email: "john@example.com" }

// Handling JSON with functions and dates
let complexObject = {
    name: "Jane Doe",
    age: 25,
    hobbies: ["reading", "hiking"],
    dateOfBirth: new Date("1995-04-15"),
    speak: function() {
        console.log(`Hi, I'm ${this.name}`);
    }
};

let complexJsonString = JSON.stringify(complexObject, (key, value) => {
    if (value instanceof Date) {
        return value.toISOString();
    }
    if (typeof value === 'function') {
        return undefined;
    }
    return value;
});

console.log(complexJsonString);
// {"name":"Jane Doe","age":25,"hobbies":["reading","hiking"],"dateOfBirth":"1995-04-15T00:00:00.000Z"}

let complexObjectFromJson = JSON.parse(complexJsonString, (key, value) => {
    if (key === 'dateOfBirth') {
        return new Date(value);
    }
    return value;
});

console.log(complexObjectFromJson.dateOfBirth); // Date object
complexObjectFromJson.speak(); // Hi, I'm Jane Doe

/**
 * Exercise:
 * Create an object representing a book, including properties like title, author,
 * publication date, and a method to display the book's information. Convert the
 * object to JSON, then parse the JSON back into an object. Demonstrate how to
 * handle the conversion of special data types like dates.
 */
