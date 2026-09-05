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
console.log(multiplicationOperation); // Output: 2436

// division arithmetic operator `/`
const divisionOperation = numOne / numTwo; // Division operator returns quotient
console.log(divisionOperation); // Output: 1.380952380952381

// Modulus arithmetic operator `%`
const remainderOperation = numOne % numTwo; // Modulus operator returns remainder but it work same as division, but here we use modulus
console.log(remainderOperation); // Output: 16

// Exponential arithmetic operator `**`
const exponentialOperation = numOne ** 2; // When we have to find power of any number than we use exponential operator
console.log(exponentialOperation); // Output: 3364

//? Unary operator
/**
 * Unary operators are used to perform operation on unary or single operand.
 */

// Assignment operator `=`
/**
 * We used  assignment operator to assign something or passing reference to another variable or perform operation on single operand only.
 */

let num = 25; // Here '=' is unary operator
console.log(num); // Output: 25

// Arithmetic unary operator
/**
 * We can perform arithmetic operation on single operand also.
 */
num += 5; // behind the scene num = 25 + 5 = 30
console.log(num); // Output: 30
num -= 10; // behind the scene num = 30 - 10 = 20
console.log(num); // Output: 20
num *= 5; // behind the scene num = 20 * 5 = 100
console.log(num); // Output: 100
num /= 2; // behind the scene num = 100 / 2 = 50
console.log(num); // Output: 50
num **= 2; // behind the scene num = 50 ^ 2 = 50 * 50 = 2500
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

//? Comparison Operator
/**
 * In programming if we want to compare between two operands than we used comparison operators  to perform comparison operation.
 * Comparison operators always return boolean type
 */

// Greater than comparison operator
/**
 * grater than is used to compare  greater than between two or more than two operands and return boolean of our operation
 */

let numThree = 25;
let numFour = 25;
let numFive = 30;
let numSix = "25";

// example of greater than operator
let greaterThanCompOp = numThree > numFour; // 25 > 25
console.log(greaterThanCompOp); // Output: false

// if
greaterThanCompOp = numFive > numFour; // 30 > 25
console.log(greaterThanCompOp); // Output: true

// Greater than Equal comparison operator
/**
 * Greater than equal comparison operator checks two condition
 *  - greater than between two operands
 *  - equal too between two operands
 */

let greaterThanEqualCompOp = numThree >= numFour; // 25 >= 25
console.log(greaterThanEqualCompOp); // Output: true, here equal condition checks

greaterThanEqualCompOp = numFive >= numFour; // 30 >= 25
console.log(greaterThanEqualCompOp); // Output: true, here greater than condition check

// Smaller than comparison operator
/**
 * smaller than operators compare smaller operand between two operands
 */

let smallerThanCompOp = numThree < numFour; // 25 < 25
console.log(smallerThanCompOp); // Output: false

smallerThanCompOp = numFour < numFive; // 25 < 30
console.log(smallerThanCompOp); // Output: true

// Smaller than Equal comparison operator
/**
 * Similar like, greater than equal it check two condition:
 *  - smaller than between two operands
 *  - equal too between two operands
 */

let smallerThanEqualCompOp = numThree <= numFour; // 25 <= 25, here only equal too condition check
console.log(smallerThanCompOp); // Output: true

smallerThanEqualCompOp = numFour <= numFive; // 25 <= 30, here smaller than condition check
console.log(smallerThanEqualCompOp); // Output: true

/**
 * ! In Javascript Equality and Not-Equality operator are of two types 
 * Let explore equality * not-equality comparison operator 
 */

// Equality comparison operator 
/**
 * - Equality operator checks if two or more than operands are equal to each other or not. 
 * - Equality operator are of two types 
 *    1. Loose equality operator : this loose equality operator checks value of operands than return boolean value  
 *    2. Strict equality operator: this strict equality operator checks both type and value of operands than return boolean value 
 */ 

// Example of Loose equality operator 
let looseEqualityCompOp = numThree == numFour; // 25 == 25 
/** 
 * for loose equality operator we use double assignment operator "=="
 */
console.log(looseEqualityCompOp); // Output: true  
looseEqualityCompOp = numFive == numFour; // 30 == 25; 
console.log(looseEqualityCompOp); // Output: false 

// string type case
looseEqualityCompOp = numFour == numSix; // 25 == '25'
/** 
 *! Here in above we use two different type 25 as number and 25 as numeric-string but we know that loose-equality only compare with number only so it return true boolean value.    
 */ 

 console.log(looseEqualityCompOp); // Output: true 

// example of strict equality operator 
let strictEqualityCompOp = numThree === numFour; // 25 === 25, here both type and value are check
/** 
 * for strict-equality operator we use triple assignment operator === 
 */
console.log(strictEqualityCompOp); // Output: true 

// string type case
strictEqualityCompOp = numSix === numFour; // '25' === 25 
console.log(strictEqualityCompOp); // Output: false 
/**
 * Here, 25 as string and 25 as number and we compare with strict equality operator than it returns false because of different data type. 
 */


// NotEquality Comparison Operator  
/** 
 * - Not-equality comparison operator checks not equality between two or more than operands 
 * - Not-equality operator are of two types 
 *    1. Loose not-equality operator : Loose not-equality operator check only value of operands 
 *    2. Strict not-equality operator : Strict not-equality operator check both value and type of operands 
 *  
 */ 

// Loose Equality operator 
let looseNotEqualityCompOp = numThree != numFive; // 25 != 30 
/**
 * for loose-equality operator we use exclamation mark + assignment operator '!=' 
 */
console.log(looseNotEqualityCompOp); 

looseNotEqualityCompOp = numThree != numFour; // 25 !=25 
console.log(looseNotEqualityCompOp);  // output: false 

looseNotEqualityCompOp = numThree != numFive; // 25 != 30 
console.log(looseNotEqualityCompOp) // Output: true 

// string type case
looseNotEqualityCompOp = numThree !=numSix; // 25 != '25'
/**
 * It here only value of operands are compare 
 */ 
console.log(looseNotEqualityCompOp); // Output: false 

// example of strict Not-equality operator 
let strictNotEqualityCompOp = numThree !== numFour; // 25 !== 25 
/**
 * for strict not-equality operator we use exclamation symbol + double assignment operator  
 */
console.log(strictNotEqualityCompOp); // Output: false 

strictNotEqualityCompOp = numThree !== numFive; // 25 !== 30 
console.log(strictNotEqualityCompOp); // Output: true 

// string type case 
strictNotEqualityCompOp = numFive !== numSix; // 30 !== '25' 
/** 
 * Here '25' in string and 30 in number and strict not-equality check bot value and type so output is true 
 */
console.log(strictNotEqualityCompOp); // Output: true 
