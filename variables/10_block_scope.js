// 10_block_scope.js

// Block Scope in JavaScript

// Block scope was introduced with let and const in ES6

// 1. Block scope basics
{
    let blockLet = "I'm block-scoped (let)";
    const blockConst = "I'm block-scoped (const)";
    var blockVar = "I'm not block-scoped (var)";

    console.log(blockLet);    // Outputs: I'm block-scoped (let)
    console.log(blockConst);  // Outputs: I'm block-scoped (const)
    console.log(blockVar);    // Outputs: I'm not block-scoped (var)
}

// console.log(blockLet);    // This would cause an error
// console.log(blockConst);  // This would cause an error
console.log(blockVar);    // Outputs: I'm not block-scoped (var)

// 2. Block scope in if statements
if (true) {
    let ifLet = "I'm scoped to this if block";
    const ifConst = "I'm also scoped to this if block";
    var ifVar = "I'm not scoped to this if block";
}

// console.log(ifLet);    // This would cause an error
// console.log(ifConst);  // This would cause an error
console.log(ifVar);    // Outputs: I'm not scoped to this if block

// 3. Block scope in loops
for (let i = 0; i < 3; i++) {
    console.log(i);  // Outputs: 0, 1, 2
}
// console.log(i);  // This would cause an error

for (var j = 0; j < 3; j++) {
    console.log(j);  // Outputs: 0, 1, 2
}
console.log(j);  // Outputs: 3

// 4. Temporal Dead Zone (TDZ)
{
    // console.log(tdz);  // This would cause an error (TDZ)
    let tdz = "Temporal Dead Zone example";
    console.log(tdz);  // Outputs: Temporal Dead Zone example
}

// Exercise:
// 1. Create a block and declare variables using let, const, and var. Try to access them outside the block.
// 2. Use let in a for loop and try to access the loop variable after the loop.
// 3. Create a block with a let variable, and try to use that variable before its declaration.

// Remember:
// - let and const have block scope, while var does not
// - Block scope applies to if statements, loops, and any code wrapped in {}
// - The Temporal Dead Zone prevents access to let and const variables before their declaration