/**
 ** Data types in Javascript
 */

/**
 * ?  Introduction to Datatypes
 *  - We know that programming language provide or supports different type of data to store or process for our program for example strings, number etc.
 * - This data are classified into different types which is know as Datatypes
 *
 * ? Types of Datatypes
 *  - Datatypes are classified into three broad categories are:
 *   1. Primitive datatypes: this datatypes are pre-defined and are fundamentals to programming language which are immutable and store simple or single type of data.
 *
 *   2. Non Primitive datatypes: this datatypes are derived from primitive types so also know as derived or user derived datatype and it's mutable type to store complex data type storing more than one primitive types.
 *
 *  3. Abstract or User defined datatype: These are customized types that developers create using existing data types to model complex real world concepts or specific behavior.
 *  Example Classes, Enumeration etc.
 */

/**
 * ? Datatypes in Primitive Types
 *  Let explore and understand the different datatypes in primitive types:
 */

/**
 * 1st. Number Type
 * - Number types is used to store numbers in our program but as we know js is dynamic type and it's type assigned at run-time.
 * - In Javascript we don't have specific category of numbers like integer, float, double etc we have one broad category which is number.
 */

let myNumber = 25;
console.log(myNumber);
/**
 ** We can check the type of our value also with the help of typeof() or typeof operator
 */
console.log(typeof myNumber); // Output: number

/**
 * 2nd. String Type
 *  - Strings are collection of alphabetic characters or numeric alphabetic characters to store in our program.
 *
 *  Different type to create strings in javascript
 *   1. Single Quote '  '
 *   2. Double Quote "  "
 *   3. String template `  `
 */

let myStr = "This is string"; // Single Quote

console.log(myStr); // Output: This is string

// We can access the string characters also with the indexes
console.log(myStr[0]); // Output: T
// String access from indexes and index start from 0 to length - 1 because index starts from 0

// Accessing the last char of string for that we have to know length of our string which we can find length from length method
console.log(myStr.length); // Output: 14
// accessing last index with length -1
console.log(myStr[myStr.length - 1]); // Output: g

myStr = "Something"; // Double Quote

console.log(myStr);

// string template literals
// string template literals provide dynamic string insertion with the help of string interpolation ${} and we create string template with the help of back ticks

myStr = `Hello prints ${5} times`; // String templates
console.log(myStr);

// typeof myStr
console.log(typeof myStr); // Output: string

/**
 * 3rd. Boolean Type
 *  - Boolean type is used to store logical flags value in our program
 *  - It have only two values true or false
 */

let isAdult = true;
console.log(isAdult); // Output: true

isAdult = false;
console.log(isAdult); // Output: false

// typeof isAdult
console.log(typeof isAdult); // Output: boolean

/**
 * 4th. Undefined Type
 *  - This undefined is special type of data which helps to store temporary placeholder value to our variable after that we can assign real value to variable according to our needs.
 */

let myScore; // We just declare the variable which holds the temporary placeholder value.
console.log(myScore); // Output: undefined

// manually also we can assign undefined
myScore = undefined;
console.log(myScore); // Output: undefined

// typeof of myScore
console.log(typeof myScore); // Output: boolean

// assign the real value
myScore = 101;
console.log(myScore);

/**
 * 5th. Null Type
 * null defines the nullability empty so whenever we want to assign empty value or no value than we use null type
 */

let offer = null;
console.log(offer); // Output: null

//? typeof null type
// typeof null returns `object` which is exception and not fixed by js developers because lot of code will break or crash if they change it and impact business so it's remain as backward compatibility.

console.log(typeof null); // Output: object

/**
 * ? Difference between null and undefined
 *  Here is basic difference between null and undefined type is null will refers as empty value through-out the program but undefined is not is a placeholder type which replace with real data type.
 */

/**
 * 6th. BigInt Type
 *  BigInt is new data-type which introduce in es20 version which also store numbers only but bigger range than number datatype
 * Here BigInt data-type only accessible to it's type we can't perform type conversion on different data-type operation with it otherwise it give error to us
 *
 * Different Types  to create bigint type
 *  1. suffix n
 *  2. Use BigInt() method to create bigint datatype.
 */

let bigIntOne = 20014488999n; // first type adding suffix n
console.log(bigIntOne);

bigIntOne = BigInt(588777779); // second type adding BigInt()

console.log(bigIntOne);

console.log(typeof bigIntOne); // Output: bigint

/**
 * 7th. Symbol Type
 *  Symbol is special type of datatype which mainly use to provide unique identity to value for our objects keys
 *  Symbol is immutable can't change original value.
 */

const userId = Symbol("user00123455");
console.log(userId); 

/**
 * ? Datatypes in Non-primitive type  
 *  Mainly in javascript non-primitive type is Object and this object datatype is sub divided into more type like arrays and functions.  
 * We explore non-primitive datatypes in depth later. 
 */



