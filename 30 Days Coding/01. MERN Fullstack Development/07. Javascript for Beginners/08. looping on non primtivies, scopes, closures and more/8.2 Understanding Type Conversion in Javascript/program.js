//* Type Conversion in Javascript

/**
 * ? What is Type Conversion ?
 * Type conversion is the technique in programming language which help to process of conversion of one type into another type
 *
 * ? Type Conversion is also of two type
 *  1. Implicit conversion in which programming language convert one type to another by it's own.
 *  2. Explicit conversion in which developer have to convert explicitly one type to another manually with programmatic methods
 *
 * ? We have to prefer explicit conversion because it's provide more control to developer not perform operation by programming language
 */

/**
 * Examples of Implicit Type Conversion
 */

let valueOne = 5;
let valueTwo = "10";

//?  conversion into string type

// To convert any type into string just add use + operator to perform string type conversion
let conversionStringType = valueOne + valueTwo;
console.log(conversionStringType); // Output: 510
// let check type-of conversionTypeOne
console.log(typeof conversionStringType); // Output: string

valueOne = undefined;
conversionStringType = valueOne + valueTwo;
console.log(conversionStringType); // Output: undefined10
console.log(typeof conversionStringType); // Output: string

valueOne = false;
conversionStringType = valueTwo + valueOne;
console.log(conversionStringType); // Output: 10false
console.log(typeof conversionStringType); // Output: string

//? conversion into number type
// To convert any type into number type just add + or - operator as prefix to that type

let valueThree = 25;
let valueFour = "abc";

let conversionNumType = valueThree + +valueFour;
// Here operation can't convert operands into number type successfully and return NaN 'Not a Number'

console.log(conversionNumType); // Output: NaN
console.log(typeof conversionNumType); // number

//! We can't perform the type conversion with non numeric strings

valueFour = "100";

conversionNumType = valueThree + +valueFour;
console.log(conversionNumType); // Output: 125
console.log(typeof conversionNumType); // Output: number

valueFour = true;
conversionNumType = +valueFour + valueThree;
console.log(conversionNumType); // Output: 26
console.log(typeof conversionNumType); // Output: number

valueFour = null;
conversionNumType = +valueFour + valueThree; // null converts in 0
console.log(conversionNumType); // Output: 25
console.log(typeof conversionNumType); // number

/**
 * Example of Explicit Type Conversion
 */ 


console.log(typeof String(100)); // Using String() method for conversion of string type 
console.log(typeof Number('255')) // Using Number() method for conversion of number type 
console.log(typeof Boolean(0)); // Using Boolean() method for conversion of boolean type 