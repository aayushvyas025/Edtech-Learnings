//* New keyword in Javascript

/**
 * ? `new` keyword in Javascript
 *  The `new` keyword in javascript is an operator to instantiate a user defined object type or a build-in object that has a constructor function
 *  When we use `new` with a function or a class. it tells a javascript to run a specific sequence of operations behind the scene to setup inheritance and context.
 *
 * ? The 4 Steps Performed by new keyword
 *  1. Creates a blank object: Javascript allocates memory for a new plain object ({})
 *
 *  2. Links the prototype: It sets the internal [[Prototype]] (__proto__) of this new object to match the constructor functions prototype property. This links the new instance to prototype chain.
 *
 * 3. Binds `this`: It passes the new object as the `this` context to the constructor function and executes the function code.
 *
 * 4. Returns the object: By default, it automatically returns the newly created object. (Note: If the constructor explicitly returns a separate non-primitive object, that object is returned instead, discarding the original one.)
 */

/**
 * ? Example of new Keyword with functions
 */

//! Whenever we have to create objects with function we have to name in capitalize way
function User(name, age, city, state) {
  this.name = name;
  this.age = age;
  this.city = city;
  this.state = state;
  // method
  this.info = function() {
    console.table(this);
  }
}

const userOne = new User("Aayush Vyas", 27, "Indore", "Madhya Pradesh");

console.log(userOne); 

userOne.info();  

/**
 * ? Key behavioral Differences 
 *  Aspect          |  Using `new`                         |  Calling without new 
 *  this context    | Points directly to newly created     | Points to the global object (window or global) or is undefined in strict 
 *                  | object instance.                     | mode. 
 * _________________|______________________________________|_______________________________________________________________________ 
 * Return Value     | The newly constructed object instance| Undefined (unless the function includes an explicit return statement)
 *                  |(unless overridden).                  | 
 * _________________|______________________________________|_______________________________________________________________________
 * Prototypal chain | Inherits properties and methods      | Does not setup the prototypal chain for a new instance 
 *                  | define on Constructor.prototype      | 
*/                


