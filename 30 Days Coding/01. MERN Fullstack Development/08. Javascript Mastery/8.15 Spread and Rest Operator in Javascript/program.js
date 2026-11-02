//* Spread and Rest Operator in Javascript

/**
 * ? Spread operator in Javascript
 *  - Spread operator help to spread all the elements or copy elements of an enumerable objects to another objects
 *  - We use three dots ... for spread operator
 */

// Example of spread operator

// Spread operator with array
let string = "Aayush Vyas";
const concatStringArr = [...string];
console.log(concatStringArr);

//  Spread operator with object
const userAddress = {
  street: "315, Shri Nagar Ext Near Kalindi Park",
  city: "Indore",
  state: "Madhya Pradesh",
  postCode: 452018,
  country: "India",
};

const userInfo = {
  firstname: "Aayush",
  lastname: "Vyas",
  age: 27,
  nationality: "Indian",
  ...userAddress,
};

console.log(userInfo);

/**
 * ? Rest Operator in Javascript
 *  -  Rest operator in Javascript collects multiple elements or arguments into the single compressed  enumerable objects.
 *  - It acts as opposite of the spread element where it unpacks here it packs into one enumerable objects.
 *  -  Rest operator also use three dots ... but it's depends on the context of our logic where is consider as rest and spread
 *  - Default rest operator collects all value in array.
 */

/**
 * Example of Rest operator  with Spread operator
 */

const sumOfNumbers = (...numbers) => {
  // We passes rest parameters of numbers which collect all the numbers into array
  let sum = 0;
  for (let idx = 0; idx < numbers.length; idx++) {
    sum += numbers[idx];
  }

  console.log(sum);
};


sumOfNumbers(12, 3, 55, 6);