// 01_introduction_to_objects.js

/**
 * Introduction to Objects in JavaScript
 * 
 * Objects are one of the fundamental data types in JavaScript. They allow you
 * to store collections of related data and functionality in a single container.
 * 
 * Key points about objects:
 * 1. Objects are collections of key-value pairs.
 * 2. Keys are strings (or Symbols), and values can be any data type.
 * 3. Objects can contain properties (data) and methods (functions).
 * 4. Objects are reference types, meaning they are stored and copied by reference.
 */

// Creating a simple object
let person = {
    name: "John Doe",
    age: 30,
    isStudent: false
  };
  
  // Accessing object properties
  console.log(person.name);  // Output: John Doe
  console.log(person['age']);  // Output: 30
  
  // Adding a new property
  person.occupation = "Developer";
  
  // Modifying an existing property
  person.age = 31;
  
  // Deleting a property
  delete person.isStudent;
  
  // Object with a method
  let car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    startEngine: function() {
      console.log("Vroom! The engine is starting.");
    }
  };
  
  // Calling an object method
  car.startEngine();  // Output: Vroom! The engine is starting.
  
  // Nested objects
  let company = {
    name: "Tech Corp",
    address: {
      street: "123 Main St",
      city: "Techville",
      country: "Codeland"
    }
  };
  
  console.log(company.address.city);  // Output: Techville
  
  /**
   * Exercise 1:
   * Create an object representing a book with properties for title, author, and year.
   * Add a method called 'getSummary' that returns a string summarizing the book.
   */
  
  // Your code here
  
  /**
   * Exercise 2:
   * Given the following object, add a new property 'population' with a value of 1000000.
   * Then, change the 'country' to 'Canada'.
   */
  
  let city = {
    name: "Toronto",
    country: "USA"
  };
  
  // Your code here
  
  // Uncomment the following line to check your work
  // console.log(city);
  
  /**
   * Remember: Objects are fundamental in JavaScript and are used extensively in
   * real-world applications. They form the basis for more advanced concepts like
   * object-oriented programming, prototypes, and JSON data.
   */