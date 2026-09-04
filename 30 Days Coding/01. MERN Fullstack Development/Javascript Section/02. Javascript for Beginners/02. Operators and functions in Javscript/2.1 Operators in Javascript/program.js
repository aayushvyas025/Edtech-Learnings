//* Operators in Javascript
/**
 * - Operators are used in javascript to perform various type of operation on program data.
 * - In Javascript we have various type of operators to perform operation.
 *
 * ?   What is Operand ?
 *    - Operands are the value or variable on which or between them operators perform operation
 */

//? Arithmetic operators
/**
 * To perform mathematical operations we used arithmetic operators
 */

// Addition arithmetic operator '+'
let numOne = 58; // numOne variable
let numTwo = 42; // numTwo variable

const additionOperation = numOne + numTwo;
console.log(additionOperation); // Output: 100  
/**
 * ? Here numOne & numTwo are operands and + `addition symbol` is operator
 */

// Subtraction arithmetic operator '-' 
const subtractionOperation = numOne - numTwo; 
console.log(subtractionOperation); // Output: 16 

// multiplication arithmetic operator `*` 
const multiplicationOperation = numOne * numTwo; 
console.log(multiplicationOperation);  // Output: 2436 

// division arithmetic operator `/` 
const divisionOperation = numOne / numTwo;  // Division operator returns quotient 
console.log(divisionOperation); // Output: 1.380952380952381

// Modulus arithmetic operator `%` 
const remainderOperation = numOne % numTwo; // Modulus operator returns remainder but it work same as division, but here we use modulus
console.log(remainderOperation); // Output: 16  

// Exponential arithmetic operator `**` 
const exponentialOperation = numOne ** 2;  // When we have to find power of any number than we use exponential operator 
console.log(exponentialOperation); // Output: 3364 

//? Unary operator 
/** 
 * Unary operators are used to perform operation on unary or single operand. 
 */  

// Assignment operator `=`
/** 
 * We used  assignment operator to assign something or passing reference to another variable or perform operation on single operand only. 
 */ 

let num = 25 // Here '=' is unary operator 
console.log(num); // Output: 25 

// Arithmetic unary operator 
/** 
 * We can perform arithmetic operation on single operand also.  
 */
 num+= 5; // behind the scene num = 25 + 5 = 30 
 console.log(num); // Output: 30 
 num -= 10; // behind the scene num = 30 - 10 = 20 
 console.log(num);  // Output: 20 
 num *= 5; // behind the scene num = 20 * 5 = 100 
 console.log(num); // Output: 100 
 num /= 2; // behind the scene num = 100 / 2 = 50 
 console.log(num); // Output: 50 
 num **= 2;  // behind the scene num = 50 ^ 2 = 50 * 50 = 2500  
 console.log(num); // Output: 2500 
 num %= 2; // behind the scene num = 2500 % 2 = 0 
 console.log(num); // Output: 0 

 // Increment and decrement operator 
 /** 
  * increment and decrement operators are very handy for update value by 1 
  */ 

 // increment operator  
 /** 
  * increment operator will increase our value by 1 
  * increment operator are also two types 
  *  - pre-increment ++<operand> 
  *   in pre-increment first value update than process 
  *  - post-increment <operand>++  
  *   in post-increment first value process than update 
  */ 

 // pre-increment operator example 
 console.log(++num); // Output: 1 
 // post-increment operator example 
 console.log(num++); // Output: 1
console.log(num); // Output: 2 

// decrement operator 
/** 
 * decrement operator will decrease our value by 1 
 * decrement operator are also two types 
 * - pre-decrement --<operand> 
 *   in pre-decrement first value update than process  
 * - post-decrement <operand>-- 
 *  in post-decrement first value process than update 
 */
 
// pre-decrement operator example 
 console.log(--num); // Output: 1 
 // post-decrement operator example 
 console.log(num--); // Output: 1
console.log(num); // Output: 0