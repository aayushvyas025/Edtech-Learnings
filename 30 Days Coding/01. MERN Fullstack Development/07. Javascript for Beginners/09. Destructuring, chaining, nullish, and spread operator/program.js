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
const [fruitOne,  , fruitTwo] = fruits; 
console.log(fruitOne, fruitTwo);  // Output: apple, grapes 

// We can swap the elements also  from destructuring without third variable 

let x = 0, y = 1; 

[x, y] = [y , x]; 
console.log(x, y) // Output: 1, 0

const userInfo = {
    firstname: 'Aayush',
    lastname:'Vyas', 
    age:27,
    city:'Indore',
    state:'Madhya Pradesh',
    country:'India'
}


const {firstname, lastname} = userInfo; 
console.log(firstname, lastname); 

// We can change the properties name also 
const {age:userAge} = userInfo; 
console.log(userAge); 