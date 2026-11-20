//* Static Methods in Classes of Javascript

/**
 * ? Static keyword in javascript classes
 *  In Javascript classes, the `static` keyword defines properties (fields), methods, and initialization blocks that belong to class itself rather than to individual object instance.
 *
 *  You access static members directly through the class-name (eg. <Classname>.method()), and calling them on an instance will result `undefined` (for fields) or a TypeError (for methods)
 *
 *  Let understand with practical example
 *
 */

class User {
  // static class member
  static userCount = 0;

  constructor(name) {
    this.name = name;
    // access the static property using class name inside the constructor
    User.userCount++;
  }

  // this greet is Object instance method
  greet() {
    return `Hello, ${this.name}`;
  }

  // static method (called on the class)
  static getTotalUsers() {
    return `Total users created: ${User.userCount}`;
  }
}

const userOne = new User('Aayush'); 
const userTwo = new User('Kratik'); 

// Accessing static method with the help of class 
console.log(User.userCount); // Output: 2 
console.log(User.getTotalUsers()); // Output: Total users created: 2 

// Attempting to access on an instance fails 
// console.log(userOne.userCount) // Output: undefined 
// console.log(userTwo.greet.getTotalUsers())  Uncaught TypeError: userTwo.greet.getTotalUsers is not a function


/**
 * ? Common Use Cases 
 *  - Utility and helper function: Group functions that relate to a class concept without needing instance like (Math.random() or custom formatting helpers.) 
 * 
 *  - Factory methods: Create alternative ways to instantiate a class, such as User.getTotalUsers() or Array.from(). 
 * 
 *  - Shared configuration and constants: Stored fixed data, caches, or counters that shouldn't be duplicate in memory for every single object instance. 
 *  
 * ? Key Rules to Remember 
 *  - Using `this` inside static methods: Inside a `static` method, `this` refers to the class constructor itself allowing you to call other static methods and properties on the class. 
 * 
 *  -  Accessing static members from instance methods: Because `this` inside a regular method point to the instance, you must reference static members using ClassName.staticMember and or this.constructor.staticMember. 
 * 
 * - Inheritance: Static properties and methods are inherited by subclasses when using the `extends` keyword. 
 * 
 * - Private static members: You can combine `static` and `#` (e.g static #secretKey=125488) to restrict the access strictly to code inside the class declaration. 
 * 
 *
 */
