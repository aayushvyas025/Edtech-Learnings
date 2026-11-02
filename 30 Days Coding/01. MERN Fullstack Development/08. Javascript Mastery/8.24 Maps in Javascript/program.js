//* Maps in Javascript

/**
 * ? Map Type in Javascript
 * - A javascript map is an object that can store collections of key-value pairs, similar to a dictionary in other programming language.
 * - Maps differ from standard objects in that keys can be of any data type.
 *
 * ? Characteristics of an Map type
 *  - Key types: map keys can be any type (strings, numbers, object etc).
 *  - Size: The number of items in a Maps is easily retrieved using the size of an array.
 *  - Insertion Order: Map remember the insertion order of our elements
 *  - Performance: Maps are optimized for frequent additions and removal of keys-value pair
 *  - Iteration: Maps are iterable, allowing for direct use of for-of loops, methods like forEach()
 *  - Iteration Order: The original oder is preserved in iteration.
 *
 * ? Maps are similar to both object (unique key-value pairs) and Arrays (ordered values collection) but you look close maps are most similar to objects
 */

/**
 * ? How to create a Map
 *
 *  You can create a JavaScript Map by:
 *   - Create a new map and add elements with Map.set()
 *   - Passing an existing array to new Map() constructor
 */

const mySuperHeroes = [
  "Spiderman",
  "Superman",
  "Ironman",
  "Heman",
  "Batman",
  "Aquaman",
];

const mapSuperHeroes = new Map([
  ["super hero", "Batman"],
  [true, false],
  [1, "Hello Brother"],
  [() => console.log('Hello'), true]
]);
// We have to pass arrays of arrays in Map() datatype and in the map we can pass any types as an key which we can't in standard object 

// Let print both datatype and see the difference
console.log(mapSuperHeroes);
console.log(mapSuperHeroes); 

/**
 * ? .set( ) method 
 *  - You can add elements to a Map with the set() method. 
 * 
 *  syntax of .set() 
 *  .set(key, value)
 * 
 */

const fruits = new Map(); 

fruits.set(1, 'Apples'); 
console.log(fruits); 

fruits.set(2, 'Pineapple');
fruits.set(3, 'Pineapple')

//? Update also done by .set() method 
fruits.set(2, 'Oranges');
console.log(fruits); 

/**
 * ? .get() method 
 *  The get() method gets the value of a key in a Map 
 */

console.log(fruits.get(3)); // Output: Pineapple 
console.log(fruits.get(1)); // Output: Apples 


/**
 * Check type of Objects 
 *  
 */

console.log(typeof fruits); 
console.log(fruits instanceof Map);  

//? More properties and method of an object 

/**
 * ? Map.size 
 *  The size property returns the number of elements in a map. 
 */

console.log(fruits.size); // Output: 3  

/**
 * ? Map.delete() 
 *  - The delete( ) methods remove a map elements. 
 */
fruits.delete(3); 
console.log(fruits); 

/**
 * ? Map.clear() 
 *  - The clear( ) method removes all the key-pair elements from the map. 
 * 
 */ 

mapSuperHeroes.clear(); 
console.log(mapSuperHeroes); // Output: Map(0) {size: 0}

/**
 * ? Map.has() 
 *  - The has() method return true if a key exists it return boolean value true or false 
 * 
 */ 

console.log(fruits.has(4)); // Output: false 
console.log(fruits.has(1)); // Output: true  

/**
 * ? Map.entries() 
 *  - The entries( ) method return an iterator object with [key, values] in a map.  
 */

console.log(fruits.entries()); // Output: MapIterator {1 => 'Apples', 2 => 'Oranges'}



//! In all the method mainly we have to pass keys as argument of Map datatype 
