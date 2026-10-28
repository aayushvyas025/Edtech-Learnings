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

/**
 * ! Note: concat() method does not change the original array it returns new array always 
 */


/**
 * ? Array.copyWithin() method 
 *  The copyWithin() method will copies array elements to another position in an array. 
 *  
 *  Syntax:   
 *   Array.copyWithin(target, start, end) 
 *  
 * - target (required): The zero-based index where you want to paste the copied sequence. 
 * - start (optional): The zero-based index where at which to start copying elements from (default 0)
 * - end (optional): The zero-based index up to which elements are copied. This index is exclusive, meaning the item at this position is not included (defaults to array.length)
 * 
 * ! Note: You can use negative indices for any of these parameters. Negative numbers count backward from the end of the array (e.g., -1 is the last item). 
 */

/**
 * Example of .copyWithin() method 
 */

const superHeroes = ['Spiderman', 'Superman', 'Batman', 'Ironman', 'Aquaman'] 

superHeroes.copyWithin(2); 
// Here target is from index 2 and start - element from starting 0 index 
console.log(superHeroes) // Output: ['Spiderman', 'Superman', 'Spiderman', 'Superman', 'Batman']


superHeroes.copyWithin(1, 2)


console.log(superHeroes) // Output: ['Spiderman', 'Spiderman', 'Superman', 'Batman', 'Batman'] 

superHeroes.copyWithin(1, 2, 4);  
console.log(superHeroes) // Output:  ['Spiderman', 'Superman', 'Batman', 'Batman', 'Batman']

/**
 * ! The `.copyWithin()` method overwrites the existing values. 
 * ! The `.copyWithin()` method does not add items to the array. 
 * ! The `.copyWithin()` method does not change the length of the array. 
 */

/**
 * ? Array.flat( )
 *  - The flat( ) method creates a new array with sub-array elements concatenated to a specific depth. 
 *  - We pass number argument to flat method go resolve and flatten our array 
 */

const mixedArr = [ [1,2], [3, [4, 5]], 6, [7, 8], [9, [10]]]; 
// This is array have certain level of sub-arrays 
console.log(mixedArr); 

// First level 
const levelOneFlatArr = mixedArr.flat(1); 
console.log(levelOneFlatArr); // Output:  [1, 2, 3, [4, 5], 6, 7, 8, 9, [10]]


// Second level 
const levelTwoFlatArr =  mixedArr.flat(3); 
console.log(levelTwoFlatArr); // Output: [1,2,3,4,5,6,7,8,9,10]  

/**
 * ! Note: flat() method don't change the original array it's return new array with  flatten elements 
 */

/**
 * ? Array.flatMap() 
 *  - The `flatMap()` methods first maps all elements of an array and then creates a new array by flattening the array 
 *  -`flatMap()` method takes function as an argument for transformation of an array 
 *  - `flatMap()` method doesn't resolve nested level of array it's resolve upto first-level 
 */

const number = [2, 4, 6, 8, 10, 12, 14, 16]; 

const flatMappedArr = number.flatMap((num) => [num, num * 20]); 

console.log(flatMappedArr); 






