alert('pop');
console.log("Hello World");

// Task
let name = "John";
console.log(typeof name);

name = 2;
console.log(typeof name);

name = true;
console.log(typeof name);

// Write a function that takes a variable and checks whether it is undefined or not.
let variable;

function Checkpoint(variable) {
  if (variable === undefined) {
    console.log("The variable is undefined");
  } else {
    console.log("The variable is not undefined");
  }
}

Checkpoint(2);

// Create a function that accepts two variables of any type and compares them for strict equality.
function comp(a, b) {
  if (a === b) {
    return console.log("The variables are equal");
  } else {
    return console.log("The variables are not equal");
  }
}

comp(2, "2");

// Write a function that checks whether a given variable is of type number.
function checks(x) {
  if (typeof x === "number") {
    return console.log("The variable is a number");
  } else {
    return console.log("The variable is not a number");
  }
}

checks(2);

// Write a function that accepts two values and returns their data types in a string format.
function checkType(a, b) {
  return `The type of ${a} is ${typeof a} and the type of ${b} is ${typeof b}`;
}

console.log(checkType(2, "2"));

// Functions
function sum(a, b) {
  return a + b;
}

sum(4, 5);

const square = x => x * x;
console.log(square(5));

function outerFunction() {
  return function () {
    return "Hello, I am a closure";
  };
}

const closure = outerFunction();
console.log(closure());

// Recursive factorial function
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5));

// Function to check if a number is even
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4));

// Objects
let person = {
  name: "John",
  age: 30,
  job: "Developer",
};

function printKeysAndValues(obj) {
  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}

printKeysAndValues(person);

let personalized = {
  greet(name) {
    console.log(`Hello, ${name}!`);
  },
  morning(name) {
    console.log(`Good Morning, ${name}`);
  },
};

personalized.greet("Alice");
personalized.morning("Alice");

// Arrays
function doubleArray(arr) {
  return arr.map(x => x * 2);
}
console.log(doubleArray([1, 2, 3]));

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 3, 3, 4, 5]));
