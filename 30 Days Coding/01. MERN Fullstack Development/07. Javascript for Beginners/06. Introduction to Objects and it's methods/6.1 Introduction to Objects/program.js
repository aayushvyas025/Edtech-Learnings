//* Introduction to Objects
/**
 * What is Objects in Javascript ?
 * Objects are the non-primitive datatypes to store collection of primitive data in key-value pair .
 *
 */

// Example of Object
const personInfo = {
  // Inside this curly braces we define our key-value pair
  // Our key's will mainly string type
  firstName: "Aayush",
  //  key    :  pair
  lastName: "Vyas",
  // key    : pair
  age: 27,
  // key : pair
  citizen: "Indian",
  // key   : pair
  city: "Indore",
  // key : pair
  // We can create functions also
  display: function () {
    console.log(
      `User name:${this.firstName}${this.lastName} is ${this.citizen} belongs to ${this.city} and age is ${this.age}`,
    );
  },
};

// Printing Object
console.log(personInfo);
/**
 * Output: { firstName: 'Aayush', lastName: 'Vyas', age: 27, citizen: 'Indian', display:function }
 */

//? How we can access the key-value pair from the objects
/**
 * We have two methods to access the key-value pair
 *  1st. dot operator : with the help of dot '.' operator we can access the object key-value pair
 *  2nd. bracket operator: this bracket operator will help to access the dynamic keys from our object
 */

// dot notation operator
console.log(personInfo.citizen); // Output: Indian
console.log(personInfo.firstName); // Output: Aayush

// bracket notation
console.log(personInfo["city"]); // Output: "Indore"
console.log(personInfo["lastName"]); // Output: "Vyas"

// We can access the function method also with dot notation
personInfo.display();

//? How we add and modify our key value pair
/**
 * We can add and update the object key value pair by this two operators only  let understand by practical example
 */

// Adding new key-value pair

personInfo.employed = false; // Here we create new key-value pair
personInfo.graduated = true; // another new key-value pair
console.log(personInfo);
/*
{
  firstName: 'Aayush',
  lastName: 'Vyas',
  age: 27,
  citizen: 'Indian',
  city: 'Indore',
  display: [Function: display],
  employed: false,
  graduated: true
}
*/

// Update the value in our object
personInfo.city = "Bangalore";
personInfo.firstName = "Kratik";

console.log(personInfo);

/**
 {
  firstName: 'Kratik',
  lastName: 'Vyas',
  age: 27,
  citizen: 'Indian',
  city: 'Bangalore',
  display: [Function: display],
  employed: false,
  graduated: true
}
 */

//? How we can delete the Object key-value pair from the objects
delete personInfo.employed;
// above we are using delete keyword to remove employed from our object.
console.log(personInfo);
/**
 * {
 *   firstName: 'Kratik',
 *   lastName: 'Vyas',
 *   age: 27,
 *   citizen: 'Indian',
 *   city: 'Bangalore',
 *   display: [Function: display],
 *   graduated: true
 *  }
 */
