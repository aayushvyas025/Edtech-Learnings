//* Introduction to Map Datatype
/**
 * ? What is Map Datatype
 *  map datatype is datatype which also store our data in the key-pair value but with more better performance and features to create different type of keys
 *  map datatype unlikely regular javascript objects, which only allow strings and symbols as key. its allow any data type to be used as key - including functions, objects and primitives.
 *
 * Syntax of map:
 *  new Map()
 */

// Example of Map Datatype
const userMap = new Map();

/**
 * ? Map.set()
 *  We can add elements in map with the help of  set() method
 */
userMap.set("fullname", "Aayush Vyas");
userMap.set("age", 27);
userMap.set("city", "Indore");
userMap.set("state", "Madhya Pradesh");

console.log(userMap);

/**
 * ? Map.has()
 *  We can check if any element is present in Map data structure or not and it's return boolean value.
 */

console.log(userMap.has("fullname")); // Output: true
console.log(userMap.has("age")); // Output: true

/**
 * ? Map.size
 *  with the help of .size property we can check the size of our map.
 */

sizeOfMap = userMap.size;
console.log(sizeOfMap); // Output: 4

/**
 * ? Map.delete()
 *  map.delete() method is used to delete elements from our map data structure.
 */

userMap.delete("fullname");
console.log(userMap);
/**
 * Output:
 *   Map(3) { 'age' => 27, 'city' => 'Indore', 'state' => 'Madhya Pradesh' }
 */

/**
 * ? Map.clear()
 *  If we want to clear our map than we can use .clear() method to remove every element from our map
 */

userMap.clear();
console.log(userMap);
/**
 * Output: Map(0) {}
 */

//? Example of mapExample
/**
 *  - map provides better features to assign keys in different datatype also
 *!  - map always accept the data in to the form of arrays of arrays
 * Syntax of Map :
 *  new Map([
 *      [key, value]
 *      [key, value]
 *    ])
 */
const mapExampleOne = new Map([
  [true, "Aayush Vyas"],
  [null, "Employement"],
  [undefined, true],
  [
    function () {
      console.log("Hello World");
    },
    "function",
  ],
]);

console.log(mapExampleOne); 
/**
 * Output:  
 *  Map(4)  {    
 *   true => 'Aayush Vays',
 *   null => 'Employement',     
 *   undefined => true, 
 *   [Function(anonymous)] => 'function'
 *  }
 */

const mapExampleTwo = new Map([
  ["name", "Aayush Vyas"],
  ["age", 27],
  ["city", "Indore"],
]);

console.log(mapExampleTwo);
/**
 * Output: Map(3) { 'name' => 'Aayush Vyas', 'age' => 27, 'city' => 'Indore' }
 */