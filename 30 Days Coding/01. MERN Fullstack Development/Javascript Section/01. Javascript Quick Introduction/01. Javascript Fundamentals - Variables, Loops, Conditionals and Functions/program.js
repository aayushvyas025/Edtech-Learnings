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

/**
 * ? Comparison operators
 * Mainly we used to types of operators in conditionals because it gives boolean value.
 *  1. Comparison operators
 *  2. Logical operators
 * Some comparison operators
 *  `===` , `==`  this are equality operator `===` checks both type and value of data `==` check the value of data
 *   `!==`, `!=`  Not equality operator checks both `!==` this one check both type and data and `!=` checks only value.
 *   `>` greater than, `<` smaller than, `>=` greater than equal,  `<=` smaller than equal
 */

//* Ternary Operator
// - Ternary operator is the syntactical syntax of if-else which we used for single condition only.
// - We can use ternary operator for multiple conditions also but preferred to use for single condition.

/**
 * ? Syntax of Ternary Operator
 * <Condition> ? 'Execution of logic when condition becomes true' : 'Execution when condition becomes false'
 * It's similar like if-else but using `?` and `:` operator
 */

let userAge = 27;
// case
userAge = 16;
const isAdult = userAge >= 0 && userAge >= 18 ? "Adult" : "Minor";
//* Here we use Conditional AND operator "&&" in which all the condition should be true otherwise it give false
console.log(isAdult);

//* Switch Statement
// - Switch statement is also used for conditional flow
// - Switch statement is used to check the condition against the provided variable to it's parentheses and matches condition in the switch block
// - Switch statement is more cleaner and organize way to handle conditional flow statements

/**
 * ? Syntax of switch statement
 *  switch(variable)  {
 *   case 0:
 *      logic of case;
 *      break;   //! important because default switch statement execute all the cases
 *
 *  case 1:
 *     logic of case;
 *     break ;
 *
 *  case 2:
 *     logic of case;
 *      break ;
 *
 * * Here we have default case also which execute when all the cases are not match.
 *   default:
 *      logic of case;
 * }
 */

// Example switch statement
let day = "Sunday";

switch (day) {
  case "Monday":
    console.log("It's first day of the week");
    break;

  case "Tuesday":
    console.log("It's second day of the week");
    break;

  case "Wednesday":
    console.log("It's third day of the week");
    break;

  case "Thursday":
    console.log("It's fourth day of the week");
    break;

  case "Friday":
    console.log("It's Fifth day of the week");
    break;

  case "Saturday":
    console.log("It's Sixth day of the week");
    break;

  case "Sunday":
    console.log("It's Seventh day of the week");
    break;

  default:
    console.log("Please enter the valid 7 days name of the week");
}

//? Loops 
// - Loops are the fundamentals of the programming which helps to perform looping operations for a specific condition. 
// - Loops follow the DRY "Don't Repeat Yourself" Principal

//* In javascript we have multiple types of loop to iterate over the data type and operations 

/** 
 * * For loop  
 * When you know how many times you have to perform repetitive work. 
 * ? Syntax of for loop 
 *  for(looping-variable; loop-condition; looping-variable-updation) {  
 *     logic of for-loop 
 * }
 */

for(let i = 1; i <= 5; i++) {
    console.log(`Count: ${i}`);
} 
/** 
 * Output: 
 * Count: 1 
 * Count: 2 
 * Count: 3
 * Count: 4
 * Count: 5
 */

/** 
 * * While loop 
 * when you repeat until a condition becomes false 
 * ? Syntax of while loop 
 *  looping_variable 
 *  while(condition)  { 
 *    logic of loop  
 *    updation_looping_variable 
 * }
 */ 

let counterOne = 1; 
while(counterOne <= 5)  {
    console.log(`Count: ${counterOne}`); 
    counterOne++; 
}
/** 
 * Counter: 1 
 * Counter: 2 
 * Counter: 3 
 * Counter: 4
 * Counter: 5
 */

/** 
 * * Do-while loop 
 *  this loop is same like while but, it's a exit condition loop  
 *  Default it's iterate single time if the condition becomes false also. 
 */ 

let counterTwo = 0; 
do {
    console.log(`Count: ${counterTwo}`); 
    counterTwo++; 
} while(counterTwo <= 5); 

/** 
 * Output: 
 * Count: 1 
 * Count: 2 
 * Count: 3 
 * Count: 4 
 * Count: 5 
 */


/** 
 * * for of loops 
 * Great for looping through arrays 
 * ? Syntax of for-of 
 * for(let items of array)  {  
 *   logic of for-of 
 * }
 */ 

const fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits)  {
    console.log(fruit); 
} 
/** 
 * Output: 
 * Apple 
 * Banana 
 * Mango
 */

/** 
 * * for-in loop 
 * This loop is mainly implement for objects only, with that we can iterate over the keys of object. 
 * ? Syntax of for-in loop 
 * for(let keys in object)  {  
 *   logic of for-in loops 
 * }
 */ 

let user = {firstname:"Aayush", lastname:"Vyas", age:27 }; 

for(let info in user) {
    console.log(`${info}: ${user[info]}`);
}

/** 
 * firstname: Aayush 
 * lastname: Vyas 
 * age:27 
 */

//? Functions 
// - Functions is a block of code designed to perform a specific task. You define it once and can call (run) it a multiple times as you want. 

/** 
 * * Function have two important components 
 * 
 * ? function declaration 
 *  In this function declaration we declare the function and it's body.  
 * * Syntax of function declaration 
 *  function <function-name/function-identifier>()  {  
 *     function body 
 * }
 * we create function with the help of function keyword and denote with parentheses () 
 * 
 * ? function calling 
 * we used function calling for execution of function 
 * * Syntax of function calling  
 *  <function-name>()   
 */ 

//* example of function 

/** 
 * 
 * function greet() {
 *   console.log(`Hello there!, How are you`);
 *  } 
 * 
*/

// greet(); // Output: Hello there!, How are you  

//* Parameter and Arguments 
// - This parameter and arguments are inputs given to the functions which are local and its' execution context utpto function only.
// - parameter are placeholder which passed to the function during the function declaration 
// - arguments are the real values which we pass at the time of function calling.  

function greet(name="John doe") {
    // we can pass the default parameter value also "John doe"

    console.log(`Hello there!, How are you ${name}`); // here name is parameter 
}

greet(`Aayush`);  // Here, 'Aayush' is arguments 
greet(`Saijal`); 
greet() // Here we are not passing argument   


//* Return Values 
/** 
 * often you want a function gives a back a result instead of just printing it. That's what `return` does
 */

function addition(numOne, numTwo) {
    return numOne + numTwo; 
}

// Here we are saving function return value 
const sumResult = addition(5, 10); 
console.log(sumResult);  // Output: 15  


// another example 
function checkAge(age) {
    if(age >= 0 && age >=18) {
        return 'Adult';
    }else {
        return 'Minor';
    }
}

const resultCheckAge = checkAge(27); 
console.log(resultCheckAge); // Output: Adult 

//* Different ways to write the function 

// 1. function declaration 
// In function declaration, we use function keyword to declare function 
function multiply(numOne, numTwo) {
  return numOne * numTwo; 
}

const resultOne = multiply(5, 4);  
console.log(resultOne);  // Output : 20  

// 2. function expression 
// In this function expression we store function in a variable 
const multiplyTwo = function(numOne, numTwo) {
  return numOne * numTwo; 
} 

const resultTwo = multiplyTwo(6, 10); 
console.log(resultTwo); // Output: 60  

// 3. Arrow function 
// - arrow function is syntactical syntax of function, where we use fat arrow `=>` to create function 
// - this arrow function is introduced in ES06 and in modern javascript we used mostly arrow function 

const multiplyThree = (numOne, numTwo) => numOne * numTwo 
//* Here the advantage is when the code in one line than we don't need to use curly braces { } or  return statement function implicitly return. 

const resultThree = multiplyThree(5, 5); 
console.log(resultThree); // Output: 25 













