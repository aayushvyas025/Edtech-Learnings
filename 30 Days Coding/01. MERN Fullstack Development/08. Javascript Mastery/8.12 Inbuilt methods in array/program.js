//* Inbuilt methods in array 

/**
 * ? Inbuilt methods in array 
 *  Perform different operations on array javascript provide different different type of inbuilt methods to perform specific operation.
 *  let explore inbuilt methods practical examples.  
 */

const numbers = [1, 2, 4, 5, 6, 8, 10, 3, 7, 9]; 

/**
 * ? 1. Array.toString() 
 *     toString() methods return the elements of an array as a comma separated string. 
 *    
 */

const arrToStr = numbers.toString(); 
console.log(arrToStr); 
console.log(typeof arrToStr);  
/**
 * ! Every Javascript object has method `.toString()`  method 
 *  The `toString()` method is used internally by javascript when an object needs to display as a text (like in HTML), or when an object needs to be used as string. 
 */


/**
 * ? 2. Array.at() 
 *    The at() method will give element of the particular index by passing index as an argument.  
 */

let lastElementArr = numbers.length - 1

console.log(numbers.at(lastElementArr)); // Output: 9 
console.log(numbers.at(6)); // Output: 10 

//? We can find element from bracket notion also []  and update our value also  
console.log(numbers[lastElementArr]); // Output: 9 

// Here we update our 8 index element 
numbers[8] = 0; 
console.log(numbers);  

/**
 * ! Many languages allow negative bracket indexing like [-1] access elements from the end of an object/ array/ string. 
 * 
 *  This is not possible in Javascript, because [] used for accessing array and object. obj[-1] refers to the value of key -1. not to the last property of the object. 
 * This problem solve by Array.at() method is passing negative index.  
 */


// From reverse we are starting when we pass -1 
console.log(numbers.at(-1)); // Output: 9 
console.log(numbers.at(-2)); // Output : 0

/**
 * ? Array.join() method 
 *   - The join() method also joins all arrays elements into a string. 
 *   - It behaves same like toString(), but in addition you can specify the separator:  
 */

const fruits = ['Apple', 'Banana', 'Orange', 'Mango']; 

const strFruits = fruits.join('-'); 

console.log(strFruits); 

/**
 * ? Array.isArray()  method 
 * - The .isArray() method is used to check if it is array or not. 
 *  - .isArray() method return output in boolean. 
 */

console.log(Array.isArray(strFruits)); // Output: false 
console.log(Array.isArray(fruits)); // Output: true 

/**
 * ? .concat() method 
 *  - The concat() method creates a new array by merging (concatenation) existing array 
 */

const combineArr = fruits.concat(numbers); 
console.log(combineArr); 




