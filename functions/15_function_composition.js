// Function Composition in JavaScript

// Basic function composition
const compose = (f, g) => (x) => f(g(x));

const double = (x) => x * 2;
const square = (x) => x * x;

const doubleSquare = compose(double, square);
console.log(doubleSquare(3)); // Output: 18 (3^2 * 2)

// Multiple function composition
const pipe =
  (...fns) =>
  (x) =>
    fns.reduce((y, f) => f(y), x);

const addOne = (x) => x + 1;
const triple = (x) => x * 3;

const transform = pipe(addOne, double, triple, square);
console.log(transform(2)); // Output: 324 ((((2+1)*2)*3)^2)

// Composing asynchronous functions
const composeAsync =
  (...fns) =>
  (initialVal) =>
    fns.reduce((acc, fn) => acc.then(fn), Promise.resolve(initialVal));

const asyncDouble = async (x) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return x * 2;
};

const asyncSquare = async (x) => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return x * x;
};

const asyncTransform = composeAsync(asyncDouble, asyncSquare, asyncDouble);
asyncTrans;
