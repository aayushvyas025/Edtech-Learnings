/**
 * * Operators in Javascript
 * In programming language we have to perform any calculation, processing or operation we use operators. for different - different type of operation we have different operators we explore and understand them .
 *
 * ? What is Operator and Operands
 *  To operator and operands terms are different to each other `operands` are the value or variables on which we perform operations and `operator` is the specific operation perform on operands.
 *
 *  Example of operands and operator
 *   2 + 2
 *  Here 2, 2 are operands on which we are performing operation  and  + is Addition operator
 *
 */

/**
 * ? Different type of Operators
 * Let understand and explore different type of operators in javascript.
 */

/**
 * ? 1st. Arithmetic Operators
 *  - Arithmetic operators are used to perform mathematical operations in our program
 *  - We have different type of arithmetic operators let explore with examples
 */

let valueOne = 25;
let valueTwo = 100;

// Addition Arithmetic Operator
const additionOperation = valueOne + valueTwo;
console.log(additionOperation); // Output: 125

// Subtraction Arithmetic Operator
const subtractOperation = valueTwo - valueOne;
console.log(subtractOperation); // Output: 75

// Multiplication arithmetic operator
const multiplicationOperation = valueOne * valueTwo;
console.log(multiplicationOperation); // Output: 2500

// Division arithmetic operator
const divisionOperation = valueTwo / valueOne; // Note: this division operator `/` returns numerator of our operation.
console.log(divisionOperation); // Output: 4

// Modulus arithmetic operator
// Modulus operator also perform division operation only but it returns remainder and we use ampersand symbol % for modulus
const modulusOperation = valueTwo % valueOne; // Note: this modulus operator `%` returns remainder of our operation
console.log(modulusOperation); // Output: 0

// Exponential arithmetic operator
const exponentialOperation = valueTwo ** valueOne; // For power or exponential operation we use two asterisk symbol
console.log(exponentialOperation); // Output: 1e+50

/**
 * ? 2nd. Unary Operator
 * Unary operators are those which perform operation on single operands or it's required single operand to perform operations
 * Understand and explore unary operator with examples
 *
 */

// Assignment operator '='
// Assignment operator is used to assign value, functions, and expression to any variable.
let randomVal = 1478; // Here we assign the value with '=' assignment operator

// Unary Arithmetic Operator
// We can perform arithmetic operation with unary operators also let understand how with examples

// addition
randomVal += 22; // In behind the scene values assign like this 1478 + 22
console.log(randomVal); // Output: 1500

// subtraction
randomVal -= 100; // 1500 - 100
console.log(randomVal); // Output: 1400

// multiplication
randomVal *= 2; // 1400 * 2
console.log(randomVal); // Output: 2800

// division
randomVal /= 5;
console.log(randomVal); // Output: 560

// exponential
randomVal **= 5;
console.log(randomVal); // Output: 55073177600000

// modulus
randomVal %= 2;
console.log(randomVal); // Output: 0

/**
 * ? Increment and decrement operator
 * - Increment and decrement operator is unary operator which increase or decrease our value by 1 mainly we use fro looping processing.
 *
 * ? This increment and decrement operator are of two type
 *   1. Prefix Increment/Decrement ++<value>
 *    In prefix the value was update than evaluate in both increment or decrement.
 *   2. Postfix Increment/Decrement <value>++
 *   In Postfix first value evaluate than update in both increment or decrement
 */

/**
 * Example of Postfix and Prefix Increment Operator
 */

// fetch the value of randomVal;
console.log(randomVal); // Output: 0
// prefix
console.log(++randomVal); // Output: 1

// postfix
console.log(randomVal++); // Output: 1
console.log(randomVal); // Output: 2

/**
 * Example of Prefix and Postfix Decrement Operator
 */

// prefix
console.log(--randomVal); // Output: 1

// postfix
randomVal--;
console.log(randomVal); // Output: 0

//? 3rd. Comparison Operator
/**
 * Comparison operator is used to perform comparison between two operands and returns output in boolean.
 * Let explore and understand different types of comparison operator
 */

/**
 *  Greater than Operator '>'
 *  The greater than comparison operator is used to perform greater than  comparison between given operands and return boolean value.
 */

let numOne = 5;
let numTwo = 5;
let numThree = "6";
let numFour = 6;

let resultGreaterThan = numOne > numTwo;
console.log(resultGreaterThan); // Output: false

resultGreaterThan = numFour > numOne;
console.log(resultGreaterThan); // Output: true

/**
 * Greater than Equal too  '>='
 *  The greater than equal to comparison operator is also perform greater comparison or checking any operands are equal to each other or not than it return true boolean value otherwise false boolean value.
 */

let resultGreaterThanEqualTo = numOne >= numTwo; // 5 >= 5
console.log(resultGreaterThanEqualTo); // Output: true

resultGreaterThanEqualTo = numFour <= numOne; // 6 >= 5
console.log(resultGreaterThanEqualTo); // Output: false

/**
 * Smaller than Operator '<'
 * The smaller than operator is perform smaller than comparison between given operands and returns boolean value.
 *
 */

let resultSmallerThan = numOne < numFour;
console.log(resultSmallerThan); // Output: true

resultSmallerThan = numOne < numTwo;
console.log(resultSmallerThan); // Output: false

/**
 * Smaller than Equal too Operator '<='
 * Smaller than equal too operator is perform smaller than comparison or checking any operands are equal to each other or not than it return true boolean value otherwise false boolean value.
 */

let resultSmallerThanEqualTo = numOne <= numTwo;
console.log(resultSmallerThanEqualTo); // Output: true

resultSmallerThanEqualTo = numFour <= numOne;
console.log(resultSmallerThanEqualTo); // Output: false

/**
 * Equality Operator
 *  - Equality operators are perform equality comparison between given operands.
 *  - Equality are operators are of two types
 *     -- Loose Check equality operator '=='
 *        loose equality operator only compare operands on the basis of it's value.
 *     -- Strict Check equality operator '==='
 *       strict equality operator compare operands on the basis of it's type and value.
 */

// Loose equality operator '=='
let looseEqualityOpr = numOne == numTwo; //  5 == 5
console.log(looseEqualityOpr); // Output: true

looseEqualityOpr = numThree == numFour; // '6' == 6
console.log(looseEqualityOpr); // Output: true because loose equality checks only value of operands

looseEqualityOpr = numFour == numFour; // 5 == 6
console.log(looseEqualityOpr); // Output: false

// Strict equality operator '==='
let strictEqualityOpr = numOne === numTwo; // 5 === 5 value same and it's type also
console.log(strictEqualityOpr); // Output: true

strictEqualityOpr = numFour === numThree; // '6' === 6 here data type is different
console.log(strictEqualityOpr); // Output: false

/**
 * Not-Equality Operator
 *  - Not equality operator used to perform not-equality comparison of given operands.
 *  - Same as Equality, Not Equality operator are of two types:
 *    -- Loose Not-equality Check Operator '!='
 *        Loose not-equality check operator checks only operands value.
 *    --  Strict Not equality Operator '!=='
 *        Strict Not equality operator checks both value and type of operands
 */

// loose not-equality operator '!='
let looseNotEqualityOpr = numOne != numFour; // 5 != 6
console.log(looseNotEqualityOpr); // Output: true

looseNotEqualityOpr = numThree != numFour; // 6 != '6'
console.log(looseNotEqualityOpr); // Output: false

// strict not-equality operator '!=='
let strictNotEqualityOpr = numOne !== numFour; // 5 !== '6'
console.log(strictNotEqualityOpr); // Output: true

strictNotEqualityOpr = numThree !== numFour; // 6 !== '6' here is not equal because one is number and other is string
console.log(strictNotEqualityOpr); // Output: true

/**
 * ? Logical Operators
 *  Logical operators are used to perform logical operation on our operands and returns boolean value.
 *  This logical operator are  of more Electrical Gates type because computer system have electric switch only.
 *
 *  Let explore different type of logical operators
 */

/**
 * 1. AND Operator
 *  - In AND Operator, all the operands value or condition should be true otherwise it give false boolean value.
 *  - For AND Operator we use '&&' double ampersand operator
 *  - This AND Operator work same as AND Gate
 *
 */

// Example of AND Operator
// Here 0 is false and 1 is true
console.log(0 && 1); // Output: false, false && true is false
console.log(1 && 0); // Output: false,  true && false is false
console.log(0 && 0); // Output: false, false && false is false
console.log(1 && 1); // Output: true , true && true is true
// Here, the condition is when the all condition or value true than only it AND Operator returns true

// Example with value
let age = 21;
let indianCitizen = true;

// scenario: if the person is age greater than 18 & indianCitizen than can vote
console.log(age >= 18 && indianCitizen === true); // Output: true

/**
 * 2. OR Operator
 *  - In OR operator only  required one condition or operand should be true in given conditions or operands otherwise it return false boolean value.
 *  - For OR Operator we use  double pipe `||` operator.
 *  - This OR Operator work same as OR Gate
 */

// Example of OR Operator
// Here 0 is false and 1 is true
console.log(1 || 0); // Output: true because 1 means true
console.log(0 || 1); // Output: true because one value is true
console.log(0 || 0); // Output: false because both value is false
console.log(1 || 1); // Output: true because both value is true

/**
 * 3. NOT Operator
 * - NOT operator perform the opposite condition to our operand or condition  and vice versa.
 * - For NOT operator, we use exclamation '!' symbol.
 * - NOT Operator work same as NOT gate
 */

console.log(!0); // Output: true
console.log(!1); // Output: false
