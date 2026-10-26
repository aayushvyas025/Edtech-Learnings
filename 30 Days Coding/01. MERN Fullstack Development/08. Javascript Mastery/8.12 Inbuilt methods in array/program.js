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



