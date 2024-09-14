// Break and Continue in JavaScript

// Using break in a for loop
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

// Using break in a while loop
let i = 0;
while (true) {
    if (i === 5) {
        break;
    }
    console.log(i);
    i++;
}

// Using continue in a for loop
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Using continue in a while loop
let j = 0;
while (j < 10) {
    j++;
    if (j % 2 === 0) {
        continue;
    }
    console.log(j);
}

// Using break in nested loops
outerLoop: for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 2 && j === 2) {
            break outerLoop;
        }
        console.log(`${i},${j}`);
    }
}

// Exercises:
// 1. Write a program that finds the first prime number after 100 using a loop and break
// 2. Create a loop that skips printing any number divisible by 3 using continue
// 3. Implement a simple search algorithm that stops when it finds a specific value in an array