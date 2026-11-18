//* Dunder Proto in Javascript 

/**
 * ? Dunder proto in Javascript 
 *  - Dunder proto (__proto__) is a built-in accessor property on javascript objects that expose their internal [[Prototype]] link. 
 *  - The term "dunder" is short for 'double underscore' __proto__ , and it points to the prototype object which an instance inherits properties and methods.  
 *  
 * ? How Dunder Prototype works 
 *  
 * 1. The prototype chaining : when you access a property or methods that doesn't exit directly on object, the javascript engine looks upto the __proto__ chain. It continues the moving up this chain until it finds the property or reaches the null at the end of Object.prototype. 
 * 
 * 2. Getter and Setter : Under the hood, Object.prototype.__proto__ acts as both a getter and setter for an object internal [[Prototype]]. You can read it to see what an object inherit from, or assign another object or null to mutate its prototype. 
 * 
 * 3. Automatic Assignment: Whenever you create an object literal, array, or function, the javascript engine automatically points it's __proto__ to the corresponding constructor prototype (Object.prototype, Array.prototype or Function.prototype).     
 */


const animal ={
    name: 'Bruno',
    type:'Dog' 
}

// Attach the function to the animal object's prototype
animal.__proto__.type =  function () {
    console.log(`Animal is ${this.type} and it name is ${this.name}`); 
};

console.log(animal)
animal.type()