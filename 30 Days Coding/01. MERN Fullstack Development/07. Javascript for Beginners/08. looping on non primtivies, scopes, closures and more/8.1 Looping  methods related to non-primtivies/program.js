/**
 ** Looping methods for Non-primitive Type
 *  In Javascript we have inbuilt methods to looping through non-primitive type data like objects, arrays  through programmatic manner.
 */

/**
 * ? For-in loop
 *  for-in loop in javascript, specially designed to iterate over all the enumerable properties(key) of an object
 */

const userInfo = {
  firstname: "Aayush",
  lastname: "Vyas",
  age: 27,
  city: "Indore",
  state: "Madhya Pradesh",
  country: "India",
};

// applying for-in loop on userInfo Object

for (let info in userInfo) {
  // Mainly it's loop through on keys of an object
  console.log(`${info} = ${userInfo[info]}`);
}

// We can apply on array also but it's iterate on index's of our array

const arr = ["one", "two", "three"];

for (let idx in arr) {
  console.log(arr[idx]);
}

/**
 * ? for of loop
 *  for-of loop is special type of loop which direct iterate on the elements of iterable objects.
 * Mainly use for arrays
 */

const justiceLeagueSuperHeros = [
  "Superman",
  "Batman",
  "Flash",
  "Wonder woman",
  "Aqua man",
  "Cyborg",
  "Lantern",
];


// Now we use for-of loop to iterate it 
for(let superHero of justiceLeagueSuperHeros) {
    console.log(superHero)
} 

// We can use for-of loop on objects also by modify the key or pair into array 

for(let values of Object.values(userInfo)) {
    console.log(values); 
}