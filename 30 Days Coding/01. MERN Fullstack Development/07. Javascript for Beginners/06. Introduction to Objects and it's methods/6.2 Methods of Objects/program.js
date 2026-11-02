//* Methods of Objects 

/**
 * Let explore inbuilt methods of an object data-type 
 */

const user = {
    firstname:"Aayush",
    lastname:"Vyas",
    age:27,
    citizen:"Indian",
    city:"Indore",
    state:"Madhya Pradesh",
    display:() => "This is display method"
}

//? Object.keys() 
/**
 * This Object.key() method will return array of keys which object we pass as argument to this method 
 */

const keys = Object.keys(user); 
console.log(keys); // Output: [ 'firstname', 'lastname', 'age', 'citizen', 'city', 'state' ]

//? Object.value() 
/**
 * This Object.value() method will return array of values which object we pass as argument to this method. 
 */

const values = Object.values(user); 
console.log(values); 

//? Object.entries()
/**
 * This Object.entries() method will return array of entries which are register in object mainly it give each array of key-pair value inside array 
 */

const userEntries = Object.entries(user); 
console.log(userEntries); 

//? Object.assign 
/**
 * - When we have to create new copy of existing object than we use Object.assign() method to assign the exact copy of our object. 
 * Syntax : Object.assign(new-object, copy-object)
 */

const newUser = Object.assign({}, user); 
console.log(newUser); 

//? Object.freeze() 
/**
 * If we want to restrict adding or updating key-value pair than we use Object.freeze() it does'nt allow to add or update our object and secure also. 
 */

const newUserOne = newUser 

// freezing the object to don't add or update key-value pair 
Object.freeze(newUserOne); 
console.log(newUserOne); 

// let's try adding some key-value pair 
newUserOne.isAdult = true; 
newUserOne.graduated = true; 
console.log(newUserOne); 
// No new key-value add in our object 

// update the key-value pair of object 
newUserOne.city = "Mumbai"; 
console.log(newUserOne); // No updated in Object  
