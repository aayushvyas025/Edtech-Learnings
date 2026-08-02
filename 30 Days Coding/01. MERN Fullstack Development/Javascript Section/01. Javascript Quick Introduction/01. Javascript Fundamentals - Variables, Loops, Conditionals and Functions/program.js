//* Javascript Fundamentals - Variables, Loops, Conditionals and Functions

/**
 * ? Introduction to Javascript
 * - Javascript is the High level, object oriented programming language mainly created for making webpages dynamic and interactive content on the internet
 * - In earlier javascript made for browser only but when times pass on, it's ecosystem becomes huge Nowadays every software is built with the help of javascript, if it's frontend development, backend development, mobil application development, desktop development.
 */

//? Variables
// -> Variables are basic storage unit in our program later we can access it according to our need.
// -> In javascript we have three ways to create variables var, let and const.

/**
 * var city = 'Delhi';  var keyword is the oldest way to create variable, it's older way now we avoid to use.
 * let age = 25; // let keyword is also used to create variable only and we can re-assign to similar like the var
 *
 */
var city = "Delhi"; // var keyword is the oldest way to create variable, it's older way now we avoid to use.
let age = 25; // let keyword is also used to create variable only and we can re-assign to similarly in the var also.
const name = "Aayush"; // const keyword use to create constant and we can't re-assign it throughout the program execution.

//* To print anything we are using console.log() method
console.log(city); // Output: Delhi
console.log(age); // Output: age
console.log(name); // Output: Aayush

//* Key Differences:
// - let: use this for values that will change ( like a counter or user input)
// - const: use this by default for values that won't change (safer, prevents)
//? - Both let and const are block-scoped and introduced in ES06 Version of Javascript or EcmaScript.
// - var - The original way to declare variables , but it has quirky behavior (function scoped instead of block scoped), so modern JS avoid it.

//* let variable score
let score = 10;
// here we re-assign the score value
score = 20;
console.log(score);

//* constant pi
const pi = 3.14;
console.log(pi);
// pi = 3.1444;  Error, we can't re-assign the constant value

//* Data types in javascript
// Overview of data types we stored in variables
let num = 22; // number data type
let text = "Hello"; // string data type
let isLogin = true; // boolean data type
let nothing = null; // null data type
let notDefined = undefined; // undefined data type
const items = [1, 2, 3]; // array data type
const users = { name: "Aayush", age: 27 }; // object data type

//? Conditionals
// - With the help of conditionals we can make our code decisions
// - Conditional statements help to create the flow of multiple conditional logic.

//* We have different type of conditional statements
// conditional statements like if, if-else, else which helps to create conditional logic flow.

//* Example of conditionals
let temperature = 30; 
// case one 
temperature = 36; 
// case two 
temperature = 19; 

if (temperature > 35) {
  /**
   * this is `if statement`, which helps to create single condition flow 
   * When if condition becomes `true` than we enter it's if-block and execute the if-block logic. 
   * ? Syntax of if statement 
   * if(<if-condition>)  {  
   *   if-statement logic 
   * }
   */
  console.log(`It's really hot!`);
} else if (temperature > 20) {
    /** 
     * This is `else if statement`, which helps to create multiple conditions flow  
     * When else if condition becomes `true` than we enter it's else-if block and execute the else-if block logic. 
     * ? Syntax of else if statement 
     * else if(<else-if condition>) {  
     *  else if statement    
     * }
     */
  console.log(`Nice weather`);
} else {
    /** 
     * This is `else statement`,  which is secondary statement it's execute only when if, else-if statement condition becomes false 
     * We use else statement with if, else-if only to create flow of our conditionals, not separately otherwise it give error to us. 
     */
  console.log(`It's a cold!`);
}


