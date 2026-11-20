//* Inheritance in Classes of Javascript

/**
 * ? Inheritance in Classes
 *  Classes can inherit properties and methods from class using the `extends` keywords. Inside the child class constructor, you must call `super()` before using `this` to the parent's class constructor.
 *
 * Let understand with example how classes inherit other class
 */

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  roleOfUser() {
    console.log(`${this.name}, role: ${this.role}`);
  }

  greet() {
    console.log(`Welcome ${this.name} to our application`);
  }
}

// Let's create inheritance class
class Admin extends User {
  // This `extends` keyword helps to inherit other class in it.
  constructor(name, permissions) {
    super(name, "Admin"); // This super() calls the parent User constructor
    this.permissions = permissions;
  }

  showPermissions() {
    console.log(`${this.name} can: ${this.permissions.join([","])}`);
  }
}

// Let's create Admin
const user = new Admin("Aayush", ["Read", "Write", "Update", "Delete"]);
const userOne = new User('Kratik Vyas', 'User'); 

console.log(user); 
user.roleOfUser();
user.showPermissions();
console.log(userOne)
userOne.roleOfUser(); 
// userOne.showPermissions(); we can't access the userOne.showPermission because role is not admin 

/**
 * ? Importance rule to remember: 
 *  - No hoisting: Unlike regular function declarations, class declarations are not hoisted. You must declare a class before you can instantiate it in your code. 
 * 
 * - Strict Mode: All code inside a class body automatically executes in `strict` mode which enforces strict error checking. 
 *  
 */
