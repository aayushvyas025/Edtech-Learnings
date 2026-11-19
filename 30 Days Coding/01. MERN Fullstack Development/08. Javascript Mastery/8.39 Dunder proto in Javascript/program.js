//* Dunder Proto in Javascript

/**
 * ? Dunder proto in Javascript
 *   - In Javascript, __proto__ (pronounced dunder proto) is an accessor property on Object.prototype that exposes an object's hidden internal [[Prototype]] link.
 *  - It points to the parent object which an instance inherits properties and methods, forming the prototypal chaining.
 *
 * ? How Prototype Works ?
 *  When you try to access a property or methods on an object, Javascript first looks directly on the object itself. if it cannot find it. the engine follows the __proto__ reference up the prototype chain until it either finds property or reaches null.
 *
 *  Let understand dunder proto __proto__ with practical example
 */

const animal = {
  eats: true,
  getAnimalType: function (type) {
    console.log(type);
  },
};

const dog = {
  barks: true,
};

// Here we attach the animal methods and property through dunder proto in dog
dog.__proto__ = animal;

console.log(dog);
dog.getAnimalType("domestic");
console.log(dog.eats);

/**
 * ? Difference between __proto__ vs prototype 
 *  
 *   Feature           |   __proto__                         | .prototype 
 *  - Where it live   | Exist on every object instance.      | Exists only on constructor function and classes 
 * __________________|_______________________________________|______________________________________________________________
 * - Purpose         | Points actual parent object used for  | Acts as a blueprint object assigned to new instance created with new 
 *                   | inheritance lookups                  | 
 * __________________|______________________________________|______________________________________________________________
 *  - Relationship   | For an instance user created by new |  Defines what user.__proto___ will point to upon instantiation.
 *                   | User(), user.__proto__  ===         | 
 *                   | User.prototype is true   
 *     
 * 
 * 
 *  ! Important: We mainly use __proto__ 'dunder proto' will use for inheritance lookup and create prototypal chaining but __proto__ does not always point directly to Object.prototype—it points to whatever immediate parent created the instance, which eventually leads up to Object.prototype at the top of the chain.              
 */