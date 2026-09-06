//* Higher Order Function in Javascript 
/**
 * - In Javascript, functions are treated as first class member because they have more functionality from others
 * - they have more functionality which achieve them as Higher Order Function, the functionality which create normal become Higher Order Function. 
 *   1. Function store in a variable 
 *   2. Function pass as an arguments 
 *   3. function returning the function.  
 *  
 *  Above Three functionality makes any function in javascript a high order function    
 */

// Example of Higher Order Function 

const addTwoNumbers = (one, two) => {
  return one + two; 
}


// 1st. function stored in a variable 
const calculateTheSum = function(func, valueOne, valueTwo) {
  return func(valueOne,valueTwo)
  // 3rd. function returning function 
} 

const sumResult = calculateTheSum(addTwoNumbers, 15, 85); 
console.log(sumResult); // Output: 100 





