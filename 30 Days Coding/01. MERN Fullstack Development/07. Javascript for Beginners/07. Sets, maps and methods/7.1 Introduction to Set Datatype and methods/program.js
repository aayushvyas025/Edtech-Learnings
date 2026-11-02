//* Introduction to Set Datatype

/**
 * ? What is Set datatype ?
 *   - Set is array like data-type which stores unique value and avoid the repetition of values
 *   Syntax of a set
 *    new Set([<value-1>, <value-2>, <value-3>])
 */

// Example of set
const uniqueNumbers = new Set([
  1, 2, 3, 1, 2, 4, 5, 6, 12, 10, 7, 8, 9, 9, 10, 11,
]); 

console.log(uniqueNumbers); 
/**
 * Output: Set(12) { 1, 2, 3, 4, 5, 6, 12, 10, 7, 8, 9, 11 }
 */

//? Methods and properties associated with Set datatype 

/**
 * ? Set.has() method 
 *  this has() method will return boolean value is present or not in our Set datatype.  
 */

console.log(uniqueNumbers.has(4));  // Output: true 
console.log(uniqueNumbers.has(12)); // Output: true 
console.log(uniqueNumbers.has(100)); // Output: false  

/**
 * ? Set.size property
 *  this size property return the length of set 
 */

console.log(uniqueNumbers.size); // Output: 12 

/**
 * ? Set.delete() method 
 *  this delete() method will delete elements from our set 
 */

uniqueNumbers.delete(12); 
console.log(uniqueNumbers); 

/**
 * ? Set.add() method 
 *  this add() method will add new elements in our set 
 */

uniqueNumbers.add(50); 
console.log(uniqueNumbers); 

//* As we understand that set datatype is array like structure so we can perform array methods on it 

uniqueNumbers.forEach((element) => console.log(element)); 
