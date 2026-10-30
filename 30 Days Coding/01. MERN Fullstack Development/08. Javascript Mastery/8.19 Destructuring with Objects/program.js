//* Destructuring with Objects

/**
 * ? Destructuring with Objects
 *  Let understand how destructure objects properties with example
 */

const spiderman = {
  name: "Peter Parker",
  age: 20,
  city: "New York",
  place: "Queens",
  power: "Super strength, In-human ability",
  genes: "spider",
};

// Let's destructure the obj 
const {age, genes} = spiderman; 
console.log(age, genes); 

// If we want to change the name of our variable than we do this 
const {name:realName} = spiderman; // just add colon to rename our keyname 
console.log(realName)