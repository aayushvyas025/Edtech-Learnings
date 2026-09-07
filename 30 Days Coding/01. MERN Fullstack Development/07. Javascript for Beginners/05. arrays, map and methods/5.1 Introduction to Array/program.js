//* Introduction to Arrays 
/** 
 * - Arrays are Non-primitive Datatype which store multiple data types on index bases. 
 * - Arrays are stored in contiguous manner adjacently to each other. 
 * - Arrays can be access through indexing number and index start from 0 to last-element - 1 
 * - In javascript arrays are dynamic in nature we can store multiple or same type of data in it. 
 * 
 * ? Syntax of an array 
 *   [ ] - with square bracket we create arrays 
 *  
 */ 

//? Example of an array 
const myArray = ['Aayush', 'Saijal', 'John', 'Peter']; 

// print array 
console.log(myArray);  
/**
 * Output: [ 'Aayush', 'Saijal', 'John', 'Peter' ]
 */ 

//? How we can access element of array 
/**
 * - As we understand that array's are index based data structure and indexing started with 0 to n-1 'here n is last element' 
 * - We can access the array from bracket notation providing the index value   
 */

console.log(myArray[0]); // Output: Aayush 
console.log(myArray[1]); // Output: Saijal 
console.log(myArray[2]); // Output: John 
console.log(myArray[3]); // Output: Peter 

// We can loop through the array also 
/**
 * For looping we need total element length of an array, so here we can use array's length property 
 */
const myArrLength = myArray.length;  // .length property give the length of an array 

for(let idx= 0; idx< myArrLength; idx++) {
    console.log(myArray[idx]); 
}


//? How we can add element in an array 
/**
 * To add element in an array we have two methods  
 *  push - push method add the new element from the last of an array 
 *  unshift - unshift method add the new element from the start of an array 
 */

// push method 
myArray.push('Bruce'); 
console.log(myArray)
// unshift method 
myArray.unshift('Clark'); 
console.log(myArray); 

//? How we can remove elements from an array 
/**
 * To remove element from an array we have two methods 
 *  pop - pop method use to remove element from the last of an array 
 *  shift- shift method use to remove element from the start of an array 
 */ 

// pop method 
myArray.pop() // pop method default remove element from last of an array 
console.log(myArray); 

// shift method 
myArray.shift(); // shift method default remove element from start of an array 
console.log(myArray); 

//? Some methods of an array: 
// 1. indexOf() - this method return the index of given element 
console.log(myArray.indexOf('Aayush')); // Output: 0 
console.log(myArray.indexOf('Peter')); // Output: 3 
// case : check what output give if we provide element which is not provide in an array 
console.log(myArray.indexOf('Bruce')); // Output: -1 that's means it's element and index is not present in our array 

// 2. includes() - this methods check if the specific element is present or not and it's return boolean value 
console.log(myArray.includes('Saijal')); // Output: true 
console.log(myArray.includes('Batman')); // Output: false 

