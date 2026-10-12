/**
 * * Destructuring, Chaining, Nullish, and Spread Operator
 */

/**
 * ? Destructuring
 *  - Destructuring is the mechanism which helps to unpack or pullout the elements from an array or properties of object directly to distinct values.
 */

/**
 * Example: Assigning array elements to distinct value without destructuring
 */

const fruits = ["apple", "banana", "grapes", "pineapple", "orange"];

let fruOne = fruits[0];
let fruTwo = fruits[1];
let fruThree = fruits[2];
let fruFour = fruits[3];
let fruFive = fruits[4];

console.log(fruOne, fruTwo, fruThree, fruFour, fruFive);

/**
 * Example: Destructuring fruits array
 *
 */

const [apple, banana, grapes, pineapple, orange] = fruits; // Here we directly un-pack or pullout elements of an array and assign to distinct value.
console.log(apple, banana, grapes, pineapple, orange);

// Skips the elements from the destructuring
const [fruitOne, , fruitTwo] = fruits;
console.log(fruitOne, fruitTwo); // Output: apple, grapes

// We can swap the elements also  from destructuring without third variable

let x = 0,
  y = 1;

[x, y] = [y, x];
console.log(x, y); // Output: 1, 0

const userInfo = {
  firstname: "Aayush",
  lastname: "Vyas",
  age: 27,
  city: "Indore",
  state: "Madhya Pradesh",
  country: "India",
};

const { firstname, lastname } = userInfo;
console.log(firstname, lastname);

// We can change the properties name also
const { age: userAge } = userInfo;
console.log(userAge);

/**
 * ? Spread Operator in Javascript
 *   - Spread operator allows us to spread or expand or unpack the elements of iterable (like strings, arrays) or an object into individual elements.
 *  - It provides clean, concise syntax for copying, merging, and passing objects
 *  - The operator works across three primary contexts: array, object and function calls
 *   - For Spread operator we use three dots '...'
 */

//? Spread operator with Arrays

const justiceLeague = [
  "Superman",
  "Batman",
  "Flash",
  "Wonder woman",
  "Aqua-man",
  "Cyborg",
];
const avengers = [
  "Ironman",
  "Thor",
  "Hulk",
  "Black widow",
  "Hawkeyee",
  "Captain America",
];

// Now we concat both different justiceLeague and avengers array into one array with the help of spread operator
const combineHeroes = [...justiceLeague, ...avengers];
console.log(combineHeroes);

//? Spread operator with Objects

const address = {
  postalCode: 452018,
  houseNo: 315,
  street_1: "Shree Nagar Extension",
  street_2: "Near Kalindi Park",
  city: "Indore",
  state: "Madhya Pradesh",
  country: "India",
};

const user = {
  firstname: "Aayush",
  lastname: "Vyas",
  ...address, // Here we destructure the address object
};

console.log(user);

/**
 * ? Rest Operator in Javascript
 *  - In Javascript, Rest operator is represented by three dots(...) and is used to gather multiple elements or arguments into single collection.
 *  - The exact same syntax as the spread operator, it does the exact opposite - instead of unpacking elements, it condenses them.
 *  - The rest operator operates in two main scenarios: function parameters and destructuring.
 *
 */

//? Rest parameters in Functions

function sum(...num) {
  // Here this
  return num.reduce((acc, num) => acc + num, 0);
}

const res = sum(1, 5, 6, 7);
console.log(res);

//? Rest operator with Array Destructuring
const colors = ["red", "green", "blue", "yellow", "purple"];

// destructure && rest operator
const [colorOne, colorTwo, ...remainingColors] = colors;

console.log(colorOne);
console.log(colorTwo);
console.log(remainingColors); // Output: [ 'blue', 'yellow', 'purple' ]

//? Rest Operator with Object Destructuring

const { ...userProfileDetails } = user;
console.log(userProfileDetails);

//! Rest operator always packs the elements into a standard JavaScript array.

/**
 * ? Optional Chaining in Javascript
 *  - Optional Chaining (?.) operator in Javascript allows you to safely access deeply nested object properties, call methods or lookups array indices without throwing a TypeError if an intermediate reference is null or undefined.
 *
 *  - Instead of crashing your application, the expression short-circuits and immediately returns undefined
 */

// Example of optional chaining
const person = {
  name: "Kratik Vyas",
  age: 27,
  greet: () => console.log(`Hello How are you`),
};

// From this person object we access properties with the help of optional chaining.

console.log(person?.name);
console.log(person?.age);
console.log(person?.address); // Here address property is available in object so without the crashing our code it's return undefined.

// Now using optional chaining on greet method
console.log(person?.greet?.());
