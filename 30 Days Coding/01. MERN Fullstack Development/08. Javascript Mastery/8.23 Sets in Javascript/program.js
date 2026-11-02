//* Sets in Javascript

/**
 * ? Set Datatype in Javascript
 * - A javascript set is a collection of unique sets.
 * - Each value can only occur once in a Set and the values of any primitive type or objects
 * - We can also understand set is like array type with collection of unique values
 */

/**
 * ? How to create a Set
 *  We can create a javascript set by:
 *   1. Passing an array to new Set()
 *   2. Create a empty Set and use add() to add values
 */

const myArr = [10, 20, 30, 40, 30, 40, 60, 70, 80, 50, 80, 90, 90, 100];

const myArrSet = new Set(myArr);

// Let's check the difference between array and set as we discuss 
console.log("array datatype: ", myArr); // Output: (14) [10, 20, 30, 40, 30, 40, 60, 70, 80, 50, 80, 90, 90, 100]
console.log("set datatype: ", myArrSet); // Output: Set(10) {10, 20, 30, 40, 60, 70, 80, 90, 100} 
/** 
 * In output of both array and set we see that set datatype has only unique elements and repetitive elements are remove from the set. 
 */

/**
 * ? Adding values in set with add() method 
 */

const setOfLetters = new Set(); 
console.log(setOfLetters); 

setOfLetters.add('A');
setOfLetters.add('B');
setOfLetters.add('C');
setOfLetters.add('D'); 
setOfLetters.add('A');  // Now this letter is not add in setOfLetters because of duplication

console.log(setOfLetters); 

// Check typeof  and instance of Sets 
console.log(typeof setOfLetters) // Output: object 
console.log(setOfLetters instanceof Set); // Output: true 

//? Methods of Set 
// Let explore more methods of set and understand them what their functionality  

/** 
 * ? Set.size property 
 *  .size property will give length of our set type 
 */ 

console.log(setOfLetters.size); // Output: 4 



/**
 * ? Can be loop through Set type 
 *  We can iterate the values of set type because it like an array type of object 
 */

// for loop 
for(let idx = 1; idx <= setOfLetters.size; idx++) {
    // console.log(setOfLetters[idx]);  We can iterate over but here problem is we can't access the index of set 
}

// for of loop 
for(chars of setOfLetters) {
    console.log(chars); 
}
/**
 * Output: 
 * A
 * B
 * C
 * D
 */ 


// forEach() method 
setOfLetters.forEach((char) => console.log(char)); 

//? Both for of loop and forEach loop will iterate values of set  


/**
 * ? Set.has() property 
 *  - The `has()` method returns true if a specified value exist in a set. 
 */

console.log(setOfLetters.has('E')); // Output: false 
console.log(setOfLetters.has('A')); // Output: true 

/**
 * ? Set.values() property 
 *  The values() method returns iterator object with the values in a set. 
 */

console.log(setOfLetters.values()); // Output: {0:'A', 1:'B', 2:'C', 3:'D'} 

/**
 * ? Set.keys() property 
 *  The keys() method returns an iterator object with the value in a Set. 
 *  A Set doesn't have keys, so keys() return same as values() 
 *  This makes Sets compatible with Maps 
 */

console.log(setOfLetters.keys()); // Output: {0:'A', 1:'B', 2:'C', 3:'D'}  

/**
 * ? Set.entries() property 
 * The entries() method returns an Iterator with [value, value] pairs from a Set. 
 * The entries() method returns an [key:value] from an object but Set doesn't have keys so it return [value, value]
 * This makes Sets compatible with Maps 
 */

console.log(setOfLetters.entries()); // Output: {'A' => 'A', 'B' => 'B', 'C' => 'C', 'D' => 'D'}

/**
 * ? Set.delete() 
 *  The .delete() method delete values from Set
 */

console.log(setOfLetters.delete('D'));
console.log(setOfLetters); // Output: {'A', 'B', 'C'}


/**
 * ? Set.clear() 
 * The .clear() method clear our Set 
 */

setOfLetters.clear(); // It removes all elements from an array 
console.log(setOfLetters); // Output: Set(0)
