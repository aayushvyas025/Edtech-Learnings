//* Symbol type in Javascript 

/**
 * ? Symbol Type in JavaScript 
 *  In Javascript, a `symbol` is a primitive datatype introduced in es6 that is used to create complete unique and immutable identifier. 
 * 
 * Unlike other primitives type (like numbers and strings), two symbols are never equal to each other, even if they are given the exact same name or description.   
 */

/**
 * ? 1st. Creating an Symbol 
 * You create a symbol by creating a factory function Symbol(). 
 *  - Note: You can't use the `new` keyword with Symbol(), as its primitive, not an object constructor. 
 */

const sym1 = Symbol(); 
const sym2 = Symbol('description');
const sym3 = Symbol('description'); 

console.log(sym1.toString()); // We can use toString() method for string value  
console.log(sym2.toString()); 
console.log(sym3.description); // We use description property of symbol 

// Check if two symbols are equal to each other or not 
console.log(sym2 === sym3); // Output: false 
// They are not equal to each other  

/**
 * ? 2nd. Primary Use Case: Unique Object Key 
 *  The most common use for symbol is to add hidden, collision-free properties to objects. Because every symbol is unique, third-party libraries or other parts of your code cannot accidentally overwrites a symbol-keyed property. 
 * 
 *  When we using symbol as an object key, you must wrap it in square brackets: [ ]  
 */

const userId = Symbol("userId"); 

const user = {
    [userId]:'user01', // Using symbol as a key 
    name:'Aayush Vyas',
    age:27
} 


// How we can access the userId property from an object 
console.log(user.userId); // Output: undefined (Doesn't work with dot notation) 
console.log(user[userId]); // Output: user01  

/**
 * ? 3rd. Property Enumeration and Hidden Nature 
 *  Symbol keys are deliberately hidden from traditional loop structure and serialization routines 
 *  
 * Let practically explore that: 
 */ 

// Skipped: for in loop 
for(let keys in user) {
    console.log(keys); 
}

/**
 * Output: name 
 *         age
 */

// Skipped: Object.keys() method 
const userKeys = Object.keys(user); 
console.log(userKeys); // Output: ['name', 'age']


/**
 * To access the symbol object properties we need special methods 
 *  ? Object.getOwnPropertySymbols() : Returns an array of all symbol properties found directly on object 
 */

console.log(Object.getOwnPropertySymbols(user)) // Output: [Symbol(userId)]



