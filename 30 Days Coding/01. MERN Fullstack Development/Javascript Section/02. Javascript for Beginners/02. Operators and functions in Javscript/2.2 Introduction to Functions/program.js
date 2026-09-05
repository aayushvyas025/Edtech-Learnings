//* Introduction to Functions

/**
 * What are functions ?
 * - Functions are the reusable block of component which perform specific task with keep abstraction from logical implementation.
 * - Function follows DRY principal which means 'Don't Repeat Yourself'
 *
 * Function have two main components:
 *   - function declaration: function declaration where we create our function and assign logical implementation for specific task to perform.
 *
 *  Syntax of function declaration
 *  function <function-name>() {
 *     logic implementation of function
 *   }
 * * We used function keyword to create and parentheses () to represent it.
 *
 * - function calling: function calling is the main statement to run and execute our function declaration
 *
 *  Syntax of function calling:
 *   <function-name>();
 */

// Let see example of functions

// simple function
function addTwoNumbers() {
  console.log(2 + 10);
}

addTwoNumbers(); // Output: 12

//* function always return something if we are not returning than it will return undefined default
function multiplyTwoNumbers() {
  return 11 * 88;
}
//* When we are return from function than we have to save in variable
const multiplicationResult = multiplyTwoNumbers();
console.log(multiplicationResult); // Output: 968

// function with parameter and arguments
/**
 * what is parameter and argument in functions
 * - parameters are the native-placeholder of the value or we say local-variables to value when we are passing at the time of  function calling.
 * - arguments : arguments are the real value which replace the parameters and process our function and we pass arguments at the time of function calling.
 */

function sumOFTwoNumbers(numOne, numTwo) {
  // In function parentheses we pass the parameter which act as placeholder to real values
  // We can pass multiple parameters to function
  return numOne + numTwo;
}

const sumResult = sumOFTwoNumbers(25, 30); // This is argument which is 25 and 30 value
console.log(sumResult); // Output: 55

// default parameter function
function greetPerson(person = "Mr/Mrs") {
  return `Hello, how are you ${person}`;
}

/**
 * When we are not passing argument than default parameter value will process
 */

const personOne = greetPerson();
console.log(personOne); // Hello, how are you Mr/Mrs 
const personTwo = greetPerson("Aayush");
console.log(personTwo); // Hello, how are you Aayush 


