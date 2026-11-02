//* Array Destructuring in Javascript 

/**
 * ?  Destructuring in Javascript  
 *  Destructuring allows us to unpacks the values from an arrays and properties from objects to distinct variables in a highly concise line of code.  
 */

// Example of destructuring of an array 
const numArr = [1, 22, 44, 56, 89]; 

// Let destructure array elements 
const [firstVal, secondVal, thirdVal] = numArr; 
/**
 * Here, we destruct the firstVal, secondVal and thirdVal 
 */

console.log(firstVal, secondVal, thirdVal); 