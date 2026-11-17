//* Property flags and descriptor

/**
 * ? Property flags and descriptor of Objects
 *  - In Javascript, every object property has a value along three hidden attributes called  property flags: `writable`, `enumerable`, and `configurable`.
 *  - Together, the value and these flags form property descriptor object, which allows you to control how a property behaves.
 *
 */

const user = { name: "Aayush Vyas", age: 27 };

/**
 * ? Three Property Flags
 *  Above we create user object in which it have two properties and default all three hidden property flags are true
 *  - writable: Determines whether the property value can be changed. if set to false, the property becomes readonly.
 * 
 *  - enumerable: Determines whether the property shows during the iteration. if set false than properties will hidden from Object.keys() and for...in loops.
 * 
 *  - configurable: Determines whether the property can be deleted or have its flags modified later. Once set to false, you can't delete the property or revert configurable or enumerable back to true.
 */

/**
 * ? Object.getOwnPropertyDescriptor(obj, prop)
 *   It returns the full descriptor object containing the property value and flags.
 */
console.log(Object.getOwnPropertyDescriptor(user, "name")); // Passing property name in string otherwise it return undefined

/**
 * Output:  {
 *             value:'Aayush Vyas',
 *             writable:true,
 *             enumerable:true,
 *             configurable:true
 *           }
 */

/**
 * ? Object.defineProperty(obj, prop, descriptor)
 *   Creates a new property or updates with existing one with specific flags. Any Flag omitted during defaults to `false`.
 */

  Object.defineProperty(user, "age", {
    value:27,
    writable: false,
    enumerable: false,
    configurable: false,
  }) 
  
  console.log(Object.getOwnPropertyDescriptor(user, "age"));

/**
 * Let change the value according to property flags we set in descriptor object 
 */

user.age = 55;  // Here we update age property 
console.log(user.age) // Output: 27 the age is not change because we set writable: false in descriptor object 

// Let iterate keys of user object 
const userKeys = Object.keys(user); 
console.log(userKeys); // Output: ['name']  age key is not iterated because enumerable:false  

// let's try to delete age property from our user 
delete user.age // Not delete age property because configurable:false 
console.log(user); 

/**
 * ? We have properties for multiples property flag and descriptor also
 *
 * ? Object.defineProperties(obj, descriptors)
 * • Object.defineProperties(obj, descriptors). Defines or modifies multiple properties at once.
 *
 * ? Object.getOwnPropertyDescriptors(obj)
 * • Object.getOwnPropertyDescriptors(obj). Retrieves all property descriptors of an object, which is useful for making flag-aware clones
 */
