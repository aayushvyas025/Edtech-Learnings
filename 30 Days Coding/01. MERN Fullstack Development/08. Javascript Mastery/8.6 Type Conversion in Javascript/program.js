/**
 * * Type Conversion in Javascript
 *
 * ? What is Type Conversion ?
 *  - When we convert one data type to another data type than this process is know as Type Conversion.
 *  - Type Conversion are performs in two types:
 *
 *     1. Implicit Type Conversion
 *  - When conversion process perform implicitly by programming language from one type to another type is known as implicit type conversion.
 *  - In implicit conversion programming language has control over the conversion and we don't prefer implicit type conversion because it's create bug in our code
 *
 *   2. Explicit Type Conversion
 *  - When conversion process perform explicitly by programming language inbuilt methods from one type to another type is know as explicit type conversion.
 *  - Explicit type conversion is more preferable way to perform type conversion because conversion has control in developers and always return the  resulted conversion.
 */

/**
 * ? Implicit Conversion
 *  Let understand implicit conversion with example:
 */

/**
 *  Conversion One: String Type
 *  We use `+` or addition operator is used to convert any-type to string type
 */

let valueOne = 25;
let valueTwo = "25";

let stringConversionType = valueOne + valueTwo;
console.log(stringConversionType); // Output: 2525

console.log(typeof stringConversionType); // Output: string

// null type
valueOne = null;
stringConversionType = valueOne + valueTwo;
console.log(stringConversionType); // Output: null25

// boolean type
valueOne = true;
stringConversionType = valueOne + valueTwo;
console.log(stringConversionType); // Output: true25

// undefined type
valueOne = undefined;
stringConversionType = valueOne + valueTwo;
console.log(stringConversionType); // Output: undefined25

/**
 * Conversion Two: Number Type
 * We  use'+' or '-' operator just as prefix to convert any type into number type.
 */

// string type
valueOne = 25;
valueTwo = "100";
let numberConversionType = +valueTwo + valueOne;
console.log(numberConversionType); // Output: 125
console.log(typeof numberConversionType)

// Unsuccessful conversion of number type
// When we convert non-numeric string type into number type than NaN 'Not a Number' as output returns

/**
 * ? NaN type
 */

valueTwo = "Abc";
numberConversionType = valueOne + (+valueTwo);
console.log(numberConversionType); // Output: NaN 'Not a Number' 
 
// After the unsuccessful conversion the type remain number only 
console.log(typeof numberConversionType)


// boolean type: 
valueTwo = false; 
numberConversionType = +valueTwo + valueOne; 
console.log(numberConversionType); // Output: 25 

valueTwo = true; 
numberConversionType = +valueTwo + valueOne; 
console.log(numberConversionType); // Output: 26 

// null type 
valueTwo = null; 
numberConversionType = +valueTwo + valueOne; 
console.log(numberConversionType); // Output: 25 


/**
 * ? Explicit Type Conversion 
 *  In explicit type conversion we use inbuilt methods to convert types 
 */

console.log(String(12235));  // String() method converts any type into string 
console.log(parseInt('12344')); // parseInt() method converts into number 
console.log(Boolean(0)); // Boolean() method converts into boolean 