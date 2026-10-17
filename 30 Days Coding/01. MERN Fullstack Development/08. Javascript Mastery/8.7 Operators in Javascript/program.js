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
console.log(additionOperation);  // Output: 125 

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
const modulusOperation = valueTwo % valueOne;  // Note: this modulus operator `%` returns remainder of our operation 
console.log(modulusOperation); // Output: 0 

// Exponential arithmetic operator 
const exponentialOperation = valueTwo ** valueOne;  // For power or exponential operation we use two asterisk symbol 
console.log(exponentialOperation); // Output: 1e+50 

/**
 * ? Unary Operator 
 * Unary operators are those which perform operation on single operands or it's required single operand to perform operations 
 * Understand and explore unary operator with examples 
 * 
 */

// Assignment operator '='
// Assignment operator is used to assign value, functions, and expression to any variable. 
let randomVal = 1478;  // Here we assign the value with '=' assignment operator 

// Unary Arithmetic Operator 
// We can perform arithmetic operation with unary operators also let understand how with examples 

// addition
randomVal += 22;  // In behind the scene values assign like this 1478 + 22
console.log(randomVal); // Output: 1500 

// subtraction 
randomVal -=100; // 1500 - 100 
console.log(randomVal); // Output: 1400 

// multiplication 
randomVal *=2; // 1400 * 2 
console.log(randomVal); // Output: 2800 

// division 
randomVal /=5; 
console.log(randomVal); // Output: 560

// exponential
randomVal **=5;
console.log(randomVal)  // Output: 55073177600000

// modulus 
randomVal %=2; 
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
console.log(++randomVal);  // Output: 1  

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






