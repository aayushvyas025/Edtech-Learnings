//* Arrays in Javascript

/**
 * ? Introduction to Arrays
 *  - Arrays are the data-types in programming which are store index based collection of data.
 *  - Arrays store elements in the adjacent to each-other.
 *  - We can access array elements with index and index will start with 0 and last element is n-1 here n means length
 *  - In javascript arrays are dynamic in nature which means it store different type of elements instead of store one type in it.
 */

// Example of an arrays

const myArr = ["Aayush", "Ayush", "Yush", "Ush", "Sh"];
// In javascript we create arrays with square brackets

console.log(myArr); // Output: ["Aayush", "Ayush", "Yush", "Ush", "Sh"]

// As we know that array has length
const myArrLength = myArr.length; // length property will give length of an array

console.log(myArrLength); // Output: 5

// Access the array elements with indexing
/* 
 We use bracket notation for access the specific elements from an array, in array indexing start from 0 and goes upto last element of an array which is n-1 where n is length or last element of an array 
*/

const lastEle = myArr.length - 1;

const firstElement = myArr[0]; // Aayush
const secondElement = myArr[1]; // Ayush
const thirdElement = myArr[2]; // Yush
const fourthElement = myArr[3]; // Ush
const fifthElement = myArr[lastEle]; // Sh


console.log(fifthElement, secondElement, thirdElement, fourthElement, fifthElement);  

// We can iterate array value also with the help of loop 
for(let index = 0; index< myArr.length; index++) {
    console.log(myArr[index]); 
}

// That's means array is iterable data we can iterate it's value through looping. 


/**
 * Adding and removing elements in an array 
 *  We can add and remove elements from an array with some methods 
 *  
 * In javascript, we have to ways to add and remove elements 
 * 
 *  Adding and Removing elements from ending: 
 *  push: push method helps to add elements in our array from last
 *  pop: pop method will remove elements from last. 
 *  Note: This Methods will not remove elements randomly instead it's remove in order of LIFO 'Last In First Out'   
 * 
 * Adding and Removing elements from starting: 
 *  unshift:unshift method add elements from starting of our array
 *  shift: shift method remove elements from starting of our array 
 *  Note: This methods will not remove elements randomly instead it's remove in order of FIFO 'First In First Out' 
 */


// pop() and push() methods of an array 
const numbers = [22, 24, 26, 28, 30, 32, 34]; 

// Adding element through push method 
numbers.push(36); 
numbers.push(38); 
numbers.push(40); 
console.log(numbers); 

// removing elements of an array 
numbers.pop(); 
numbers.pop(); 

console.log(numbers); 

// unshift() and shift() method of an array 

// Adding element through unshift() method 
numbers.unshift(20); 
numbers.unshift(18); 
numbers.unshift(16);
numbers.unshift(12); 
numbers.unshift(10); 

console.log(numbers); 

// Removing element through shift() method 
numbers.shift();

console.log(numbers); 
