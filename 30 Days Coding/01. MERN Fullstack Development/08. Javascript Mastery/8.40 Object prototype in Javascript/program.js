//* Object prototype in Javascript

/**
 * ? prototype in Javascript Object
 *  In Javascript, a prototype is an internal, built-in object that every other objects inherit properties and methods from. Instead of copying shared methods onto every new object instance, Javascript links objects to a single prototype blueprint to save memory and enable inheritance.
 *
 * ? How the Prototype Chain works ?
 *  When you try access a property or methods on an object, Javascript follows a specific lookup path called prototype chain.
 *
 *  - Local lookup first: Javascript checks if the property exists directly on the object itself.
 *  - Walking up the chain: If property not found locally than Javascript engine than checks the object prototype, then that prototype's prototype than so on.
 *  - End of the chain: The search stops when the property is found or when the it reaches to Object.prototype, whose own prototype is null.
 *
 * ? prototype vs __proto__
 *  Understanding the difference between two terms clears up most confusion around Javascript inheritance.
 *
 * Feature           |   prototype                    | __proto__ dunder proto or [[Prototype]]
 * - Where it lives  | Exists only func and classes   | Exists on every  object instances
 * __________________|________________________________|_____________________________________________
 * - Purpose        | Acts as the blueprint object    |  Points directly to the prototype object that
 *                  | assigned to new instances       |  the instance inherits from.
 *                  | created with the new keyword    |
 * _________________|________________________________|______________________________________________
 * - Standard usage | Used to attach shared methods  | Non-standard getter/setter; use of Object.getPrototypeOf() from
 *                  | (e.g. Person.prototype.greet())|
 *
 *
 * ? Practical Code Example
 *  You can attach methods to a constructor function's `prototype` so that every instance shares the same function in memory.
 *
 */

// Here we create Car constructor function for creating car object

function Car(name, model, brand) {
  this.name = name;
  this.model = model;
  this.brand = brand;
}

Car.prototype.honk = function () {
  return `${this.model} goes beep!`;
};

const carOne = new Car("Mustang", "GT", "Ford");
const carTwo = new Car("Safari", "LX", "Tata");

// Let check if both have honk method or not in their prototype 
console.log(carOne); 
console.log(carTwo);

const honkCarOne = carOne.honk(); 
const honkCarTwo = carTwo.honk();

console.log(honkCarOne);
console.log(honkCarTwo);