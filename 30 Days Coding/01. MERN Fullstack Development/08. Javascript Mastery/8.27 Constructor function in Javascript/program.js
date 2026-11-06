//* Constructor Function in Javascript

/***
 * ? Constructor function in JavaScript
 *  A `constructor` function in JavaScript is a special typeof function used to blueprint, create, and initialize multiple objects of the same kind. It serves as a template, allowing you to define a set of properties and methods that every instance will inherit.
 *
 * Here is how they work, how to write them, and how modern javascript implements them.
 *
 */

/**
 * ? Basics Syntax, & Examples
 *  By convention constructor function are named as `Capitalized first letter` to distinguish them from regular functions. they use the `this` keyword to assign properties.
 *
 */

// Example
function User(name, role) {
  // issue solve when instance of object will not create with new keyword.
  if (!new.target) {
    return new User(name, role);
  }
  this.name = name;
  this.role = (role || "user").toLowerCase();

  this.login = function () {
    console.log(`${this.name} has logged in.`);
  };

  this.checkAdmin = function () {
    if (this.role === "admin") {
      console.log("Admin");
      return;
    }
    console.log("User");
  };
}

const userOne = new User("Aayush", "admin"); //! When have to use new keyword to always instantiate new objects from constructor.
console.log(userOne);

userOne.login();

/**
 * ? Let understand what's happening behind the scene
 * When we call constructor function with the `new` keyword, JavaScript automatically execute 4 steps under the hood.
 *
 * 1. Create a brand, new empty object {}
 * 2. Binds `this` inside the function to point to that new created object.
 * 3. Execute the functions code, assigning properties and method like this.name = name, this.role = role, and this.login func to the newly made object.
 * 4. Automatically return `this` (the new object) at the end, so you don't need a manual `return` statement.
 *
 */

/***
 * ? Adding methods property via Prototypes (Memory optimization)
 *  In first example, every time `new User()` is called a unique copy of login function is created in memory. If you plan to make thousands of instances, this can be inefficient.
 *
 * To share a single method across all instances, you should attach it to the constructor's prototype property.
 *
 */

function Car(model, year, company) {
  this.model = model;
  this.year = year;
  this.company = company;

  this.info = function () {
    console.log(
      `car model:${this.model}, company:${this.company} and year:${this.year}`,
    );
  };
}

// Now we attach the method to the prototype so all instance share it.
Car.prototype.drive = function () {
  console.log(`${this.year} ${this.model} is driving `);
};

const mustang = new Car("Mustang GT", 2024, "Ford");
console.log(mustang); 

mustang.drive(); 
mustang.info(); 