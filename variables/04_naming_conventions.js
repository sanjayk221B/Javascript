// 04_naming_conventions.js

// Naming Conventions for Variables in JavaScript

// 1. Use camelCase for variable names
let firstName = "John";
let lastName = "Doe";

// 2. Start with a lowercase letter
let age = 25;

// 3. For constants, use uppercase with underscores
const MAX_SIZE = 100;
const API_KEY = "abc123";

// 4. Be descriptive and meaningful
let userScore = 85;  // Good: Clear what this represents
let x = 85;          // Bad: Not clear what 'x' means

// 5. Use noun or noun phrases for variables
let car = { brand: "Toyota", model: "Corolla" };
let books = ["1984", "To Kill a Mockingbird"];

// 6. For booleans, use 'is', 'has', or 'can' prefixes
let isLoggedIn = true;
let hasPermission = false;
let canEdit = true;

// 7. Avoid single letter names (except for loops)
for (let i = 0; i < 5; i++) {
    console.log(i);  // 'i' is acceptable in loops
}

// 8. Don't use reserved keywords
// let class = "Math";  // Bad: 'class' is a reserved keyword

// 9. Use meaningful distinctions
let userFirstName = "Alice";
let userLastName = "Smith";
// Not: let userName1 = "Alice", userName2 = "Smith";

// 10. Stick to English names
let color = "blue";   // Good
// let couleur = "bleu";  // Avoid non-English names unless necessary

// 11. Use consistent naming across your codebase
let getUserInfo = () => { /* ... */ };
let updateUserProfile = () => { /* ... */ };
// Not mixing: let get_user_info and updateUserProfile

// Exercise:
// 1. Create a variable for a user's email address
// 2. Create a constant for the maximum allowed login attempts
// 3. Create a boolean variable to check if a user's email is verified
// 4. Create a variable to store an array of user roles

// Remember:
// - Consistency is key
// - Names should be readable and self-explanatory
// - Follow the team's or project's conventions if they exist