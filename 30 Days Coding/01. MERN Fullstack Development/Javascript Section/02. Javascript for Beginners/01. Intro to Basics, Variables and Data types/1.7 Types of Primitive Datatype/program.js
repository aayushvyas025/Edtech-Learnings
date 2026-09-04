//* Types of Primitive datatype
/**
 * In Javascript primitive datatype are of 7 types
 *  1. Number
 *  2. String
 *  3. Boolean
 *  4. Null
 *  5. Undefined
 *  6. BigInt
 *  7. Symbol
 */

//? 1st. Number

let numberOne = 26.17; // float or decimal number
let numberTwo = 5; // positive integer
let numberThree = -14; // negative integer

//* We can check the type of our variables also with the help of typeof() operator which helps to find the type of our data & variable

console.log("data: ", numberOne, "type of data: ", typeof numberOne); 
console.log("data: ", numberTwo, "type of data: ", typeof numberTwo);
console.log("data: ", numberThree, "type of data: ", typeof numberThree); 

/** 
 * data:  26.17 type of data:  number
 * data:  5 type of data:  number
 * data:  -14 type of data:  number
*/

//? 2nd. String 
/** 
 * To store characters of alphabets, numeric alphabets than we used string 
 */ 

// different ways to create strings in javascript 
// 1st. single quote string 
 let myName = 'Aayush Vyas'; 
 console.log(myName, typeof myName); 
 /** 
  * Output: Aayush Vyas, string 
  */ 

// 2nd. single quote 
myName = "Aayush Vyas"; 
console.log(myName);  

// we can combine two or more strings also which called concatenation in programming 
console.log("first-"+"second-"+"third") // here we do string concatenate with the help of + operator 

// 3rd. String template with string interpolation to embed variables and expression to concatenate our string without + operator 

let greet = `Hello, My name is ${myName}` 
// For string template we used back ticks and for interpolation we used dollar symbol with curly braces `${}`
console.log(greet); 

// 3rd. Boolean 
/** 
 * Boolean datatypes are majorly used to implement logic conditional in our program 
 * Boolean have only two value first is true and false 
 */ 

let boolFlag = true; 
console.log(typeof boolFlag, boolFlag); 
// Output: boolean , true 

boolFlag = false; 
console.log(boolFlag); 

// 4th. Null 
/**
 * Null datatype is used for empty or no value in our program and null means empty only 
 */ 

let coupon = null; 
console.log(coupon); // Output: null 

//! Exception case: typeof null is object 
console.log(typeof coupon); // Output: object 
/**
 *  This typeof `null` is bug in javascript and developers of javascript don't fix it because lot of code base are written on it if they change business effect and application crash also. 
 */

// 5. Undefined 
/**
 *  Undefined is used when we don't assign the value for certain duration but we re-assign other type value to our variable which we see in example of declaration of variable. 
 */ 

console.log(typeof undefined) // Output: undefined
let dynamicVariable = undefined; 
console.log(dynamicVariable);  

// 6th. BigInt 
/** 
 * - Bigint type are newer datatype which introduce in es20 version of ecmascript or javascript. 
 * - Bigint used to store bigger range of number which can't handle by number datatype 
 * - We can only perform bigint operation with same type only don't with different type otherwise it give error 
 */ 

// Two ways to create bigInt datatype 
const bigIntOne = 44636525272n // Adding post n which indicate bigInt datatype 
console.log(typeof bigIntOne, bigIntOne); // bigint, 44636525272n 

const bigIntTwo = BigInt(1223363736); // Second way with BigInt function 
console.log(bigIntTwo); // Output: 1223363736n 

// 7. Symbol 
/**
 * Symbol is mainly used to generate unique value in objects mainly 
 */

const car = Symbol('Car'); 
console.log(typeof car, car); // Output: symbol Symbol(Car) 

