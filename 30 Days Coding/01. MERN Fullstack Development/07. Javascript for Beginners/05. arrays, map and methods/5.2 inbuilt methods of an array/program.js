//* Inbuilt Methods of an array
/**
 * Let's explore the inbuilt methods of an array
 */

const myArray = ["Aayush", "Saijal", "John", "Peter"];

//? How we can remove elements from an array
/**
 * To remove element from an array we have two methods
 *  pop - pop method use to remove element from the last of an array
 *  shift- shift method use to remove element from the start of an array
 */

// pop method
myArray.pop(); // pop method default remove element from last of an array
console.log(myArray);

// shift method
myArray.shift(); // shift method default remove element from start of an array
console.log(myArray);

//? How we can update array elements
myArray[2] = "Clark"; // Update any element of an array also did by bracket notation.
console.log(myArray);

//? Some methods of an array:
// 1. indexOf() - this method return the index of given element
console.log(myArray.indexOf("Aayush")); // Output: 0
console.log(myArray.indexOf("Peter")); // Output: 3
// case : check what output give if we provide element which is not provide in an array
console.log(myArray.indexOf("Bruce")); // Output: -1 that's means it's element and index is not present in our array

// 2. includes() - this methods check if the specific element is present or not and it's return boolean value
console.log(myArray.includes("Saijal")); // Output: true
console.log(myArray.includes("Batman")); // Output: false

// 3. slice() - slice method is to create sub-array from the original array according to provide starting index and last index which exclude

const slicedArrayOne = myArray.slice(1, 3); // slice method
console.log(slicedArrayOne); // Output: ['Saijal', 'John']

const slicedArrayTwo = myArray.slice(0, 3);
console.log(slicedArrayTwo); // Output: ['Aayush', 'Saijal' 'John']

/**
 * this slice method return new array don't update the original one
 */

// 4. splice()
/**
 * - splice method is used to modify an array by removing, replacing, or adding elements in place.
 * - splice() method will be mutate the real array
 *
 *  Syntax of an array:
 *    .splice(start-index, last-index, elementOne, elementTwo, elementThree)
 */

// example one
myArray.splice(0, 2); // This will mutate our original array
const spliceArrayOne = myArray;
console.log("spliceArrayOne ", spliceArrayOne); // Output: spliceArrayOne, ['Clark', 'Peter']
console.log("myArray ", myArray); // Output: myArray, ['Clark', 'Peter']

// example two
const superHeroes = ["Spiderman", "Superman", "Flash", "Hulk", "Ironman"];
// Change Flash to Wonder-woman
superHeroes.splice(2, 2, "Wonder woman");
console.log(superHeroes);

superHeroes.splice(1, 1, "Thor");
console.log(superHeroes);

// Above all are the updating array operation

// adding new element to an array
superHeroes.splice(0, 0, "Black Widow", "Black Panther");
console.log(superHeroes);

// 5. reverse() - reverse method of an array is used to reverse the array and print.
const reverseArray = superHeroes.reverse();
console.log(reverseArray);
/**
 * Output:
 *  [
 *'Ironman',
 * 'Wonder woman',
 * 'Thor',
 * 'Spiderman',
 * 'Black Panther',
 * 'Black Widow'
 * ]
 */
