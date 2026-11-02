//* Object inside Arrays

/**
 * ? Objects inside Arrays
 *  - Objects inside arrays the structure to iterate on the data with help of looping.
 *  - API structure is also in objects in arrays only so we can iterate our data.
 */

const data = [
  { id: 1, name: "Aayush Vyas", age: 27 },
  { id: 2, name: "John doe", age: 25 },
  { id: 3, name: "Kratik Vyas", age: 30 },
];

//? We can loop over the array with the help of object
// for loop
for (let idx = 0; idx < data.length; idx++) {
  console.log(data[idx]);
}

// for of loop
for (let user of data) {
  console.log(user);
}

// Introducing to new array method which is based on array higher order method 
/** 
 * ? .forEach() method 
*  - .forEach(callback-func) method is array higher-order method which takes call-back function to iterate over the every elements of an array.
* 
*  - this callback func takes three parameter: currentValue , index and array  
*/

data.forEach((ele, idx, arr) => console.log(ele, idx, arr)); 