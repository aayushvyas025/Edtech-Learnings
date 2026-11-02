//* Functions in Javascript

/**
 * ? Functions in Javascript
 *  - Functions are reusable block of code which performs the given specific task.
 *  - Function also follows DRY principle
 *  - Functions have two components first is function declaration where we declare the body and function calling where we use or reuse function for execution.
 *
 *  ? Function declaration
 *   function <function-identifier>() {
 *      body of function where we write specific task.
 *    }
 *
 *  ? function calling
 *
 *   <function-identifier>()
 *  ! ( ) in programming parentheses represent function
 */

function greeting() {
  console.log(`Hello, How are you`);
  return; // default return undefined
}

greeting();

// We can re0use function calling
greeting();
greeting();
greeting();
greeting();

/**
 * ? Function returns
 *  function returns also something. when we don't return default undefined
 */

function addingTwoNumbers() {
  return 2 + 2; // Here we are returning sum
}

const sumResult = addingTwoNumbers();
console.log(sumResult); // Output 4

const resultGreeting = greeting();
console.log(resultGreeting); // Output: undefined

/**
 * ? Function with parameters and arguments
 *
 *  Parameters in function
 *  - parameters are the placeholder or local variables which provide values to our functions.
 *  - we can pass multiple parameters as per our required
 *  - we define function parameters in function declaration
 *
 * Arguments in function
 *  - arguments are the real value or data which replace the parameters in our function.
 *  - argument we will pass at the time of function calling in the parentheses
 */

// Example of function with parameter and argument

function square(num) {
  // Here num is the parameter or placeholder
  return num * num;
}

const squareOfTwo = square(2);
console.log(squareOfTwo); // Output: 4

const squareOfThree = square(3);
console.log(squareOfThree); // Output: 9

/**
 * ? Different type of functions in Javascript
 * In javascript, functions are treated as first-class member it means that have some special abilities.
 * Let explore the different types of functions we declare.
 */

/**
 * Function declaration
 *  Function declaration is the general function which we declare with function keyword
 */

// example of func declaration
function printSomething(value) {
  console.log(value);
}

printSomething("Aayush Vyas"); // Output: Aayush Vyas

/**
 * Function expression
 *  When we pass the function definition as reference to variable than it known as function expression
 */

const addTwoNumber = function (valueOne, valueTwo) {
  console.log(valueOne + valueTwo);
};

addTwoNumber(40, 60); // Output: 100

/**
 * Anonymous function
 *  - Those function which don't have reference or identifier is known as Anonymous function.
 *  - Famous example of Anonymous function is IIFE 'Immediate Invoke Function Expression'
 */

/**
 * Example of IIFE
 */

(() => console.log(`Hello World from IIFE func`))();
/**
 * We use two parentheses for IIFE (<declare function definition>)(<calling func>)
 */

/**
 * Arrow function
 *  - arrow function is the syntactical sugar of our function expression instead of function keyword we use arrow `=>` to declare our function.
 *  - arrow function introduce in es06 version of javascript and also know as `fat arrow function`
 */

// const multipleByTwo = (value) => {
//   return value * 2;
// };

// const multipleByTwo = (value) => value * 2;   // if the function declaration in one line than don't required  braces 

const multipleByTwo = value => value * 2; // When we have single params than don't need of parentheses also. 

// We can convert our multipleByTwo func in shorthand also. 

const result = multipleByTwo(4); 
console.log(result) // Output: 8 