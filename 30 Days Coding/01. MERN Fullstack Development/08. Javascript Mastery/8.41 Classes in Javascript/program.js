//* Classes in Javascript

/**
 * ? CLasses in Javascript
 *  - Javascript classes are templates (or blueprints) used for creating objects that share the same properties and methods.
 *  - Introduced in ES06 (Ecmascript 2015), they serve as cleaner syntax build on top of Javascript existing over the prototype-based inheritance.
 *
 * ? Basic Syntax and Usage
 * To define a class, use the `class` keyword followed a capitalized name. You create new object instances from the class using new keyword.
 *
 *  Let see the example of class
 */

class User {
  // Here in class we have constructor func which automatically creates brand new object when we invoke with new keyword
  constructor(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;
  }

  // class methods
  greet() {
    console.log(`Hello, Iam ${this.name} ${this.role}`);
  }
}

const userOne = new User("Aayush Vyas", "aayush@email.com", "User");

console.log(userOne);

const userTwo = new User("Kratik Vyas", "kratik@vyasemail.com", "User");
console.log(userTwo);

// Adding the userRole method also with the help of prototype
User.prototype.userRole = function () {
  console.log(`${this.name} is ${this.role}`);
};

// userOne.userRole();


/**
 * ? Key Features: 
 *  - The constructor() method: This special method run once when you instantiate a class with `new`. It sets up initial properties on the object using `this`. A class can only on constructor. 
 * 
 * - Instance methods or Class Methods: Functions defined inside the class body becomes methods available on every object created from that class. You write them without the `function` keyword. 
 * 
 * - Class fields (Public & Private): You can declare properties directly inside the class body without `let` or `const`. Prefixing a field or method with '#' makes it strictly private, meaning it can't be access or modified outside the class. 
 * 
 * - Getters and Setters: Using the `get` and `set` keywords let you define methods that look and behave like normal object properties when accessed. 
 * 
 * - Static methods: Adding the `static` keyword attaches a method or property directly to class rather than to individual object instances. They are often used for utility functions.  
 */