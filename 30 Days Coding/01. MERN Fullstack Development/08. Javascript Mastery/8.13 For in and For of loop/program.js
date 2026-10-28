//* For in and For of Loop

/**
 * ? For in Loop
 *  For in loop mainly associated with objects. it use to iterate over the enumerable properties(keys) of an object.
 *  We can use to iterate array also but it will iterate over the indexes not on the elements of it.
 *
 *  Syntax of an array:
 *  for(<let/const> <keys/idx> in <array/obj> ) {
 *    logic of loop
 * }
 *
 */

// Example of for-in loop
const arr = ["One", "Two", "Three", "Four", "Five", "Six"];
const user = {
  fullname: "Aayush Vyas",
  age: 27,
  city: "Indore",
  state: "Madhya Pradesh",
  country: "India",
};

for (let idx in arr) {
  // console.log(idx); // It print index of our arr
  console.log(arr[idx]); // Now we get output as arr elements.
}

// The best use of for-in loop is to iterate object properties, we can easily iterate over the keys of an object.

for (let info in user) {
  console.log(user[info]); // We can access the dynamic keys from obj with the help of bracket object
}

/**
 * ? For of loop
 *  for-of loop is used to directly iterate over the values of iterable objects
 *  We don't have to loop over through the length of iterables which was handle programmatically
 *  Example of iterables are Arrays, Strings etc.
 *
 * Syntax of For of Loop
 *   for(<let/const> element of iterable-objects) {
 *        logic of loop
 *    }
 */

// Example of myStr
const myStr = "Aayush Vyas";

for (const str of myStr) {
  console.log(str);
}

// Example of Arrays

for (const element of arr) {
  console.log(element);
}
