//* Objects in Javascript

/**
 * ? Objects in Javascript
 *  Objects are the non-primitive datatype in javascript which help to store enumerable data in key-value pair
 *  We define object with curly braces.
 *
 * ? Syntax of object
 *    {
 *     [key_1]: value,
 *     [key_2]: value,
 *     [key_3]: value
 *     }
 *
 */

// Example of Object
const userInfo = {
  firstname: "Aayush",
  lastname: "Vyas",
  age: 27,
  // roll number:2 we can't give spaces in our object keys
  "roll number": 2,
  info: () => console.log("user name is Aayush Vyas"),
};

console.log(userInfo); // Output: {firstname: 'Aayush', lastname: 'Vyas', age: 27}

/** 
 * ? Accessing the properties of object
 * - We can access the properties of an object with the help of  dot operator . & bracket notation operator to access dynamically property of object.
 * - We can create keys of an our objects with string type only.
 */

console.log(userInfo.firstname); // Output: Aayush
// Using dot operator to access properties of an object.

//! console.log(userInfo.roll number ); We can't access the string type or dynamic keys with the help of dot operator

// We have to use bracket notation operator
console.log(userInfo["roll number"]);

console.log(userInfo.age); 

/**
 * ? Creating new properties in Objects 
 *  - We can create new properties with the help of dot operator and bracket notation operator  
 */

userInfo.city = 'Indore'; 
// create new property with the help of dot operator 

userInfo['state'] = 'Madhya Pradesh'; 
// create new property with bracket notation 

console.log(userInfo); 

// Output:  
// const userInfo = {
//   firstname: "Aayush",
//   lastname: "Vyas",
//   age: 27,
//   "roll number": 2,
//   info: () => console.log("user name is Aayush Vyas"),
//   city:"Indore", 
//   state:"Madhya Pradesj"
// }


//?  We know that for-in loop is to iterate keys  of an object. 
for(let info in userInfo) {
    console.log(`${info} = ${userInfo[info]}`); 
}