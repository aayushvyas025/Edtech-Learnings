//* This keyword in Javascript 

/**
 * ? This keyword in Javascript 
 *  `this` keyword in Javascript refers to the context in which the current piece of code is executing. Unlike many other programming languages, its value is dynamically determined at runtime based on how a function is called, not where it is defined. 
 * 
 * ? Main 4 Context of `this` 
 * Context         | Regular function/Behavior                         |  Example         |
 * ________________|___________________________________________________|__________________|
 * Object Method   | Points to the owner object (The object to the    | Obj.method() ->   |
 *                 |  left of the dot )                               | this -> obj.      |
 * _______________|___________________________________________________|___________________|
 * Global Scope   | Points to the global obj of the js runtime        | console.log(this) |
 *                | environment like in browser refer to window and   | window (browser)  |
 *                | global in Nodejs                                  |                   |
 * _______________|__________________________________________________|____________________|
 * Standalone     | Non-strict mode: global scope & strict mode:     | show(): global or  |
 *  function      | undefined                                        | undefined          |
 * _______________|__________________________________________________|____________________| 
 * Constructor    | Points to the newly created object instance      | new MyClass() ->   |
 *                |                                                  | this is the new    |
 *                |                                                  | instance           |
 * _______________|__________________________________________________|____________________|  
 */ 


/**
 * ? Arrow Function vs Regular Functions 
 * Arrow functions do not have their own `this` binding. Instead, they inherit `this` lexically from the surrounding parent scope. 
 */

// Example of `this` keyword with arrow function and regular function 

const user = {
    name:'Aayush Vyas', 
    // regular method: 'this' points towards this user object 
    regularMethod: function() {
        console.log(this); 
        console.log(this.name); 
    },
    // Arrow method: 'this' is inherited from the global scope 
    arrowMethod:() => {
       console.log(this); 
       console.log(this.name)
    }
}

user.regularMethod();
user.arrowMethod(); 


/**
 * ? Explicitly  Binding 
 *  You can manually force a function to use a specific `this` context using three inbuilt methods. 
 *  
 * - call(object, arg1, arg2, ...): Invokes the function immediately, passing arguments one by one. 
 * - apply(object, [arg1, arg2...]): Invokes the function immediately, passing arguments as an array. 
 * - bind(object): Returns a brand new function with `this` permanently fixed to the target object, to be called later 
 */

// Example of call method 
function showAge() {
    console.log(this.age); 
}

const person = {age:27}; 

showAge.call(person); 

