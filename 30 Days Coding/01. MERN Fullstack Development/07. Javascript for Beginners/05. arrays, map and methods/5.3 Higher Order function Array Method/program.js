//* Higher Order Function Array Method
/**
 * Higher order function Method:
 * Let's explore the higher order function methods of an array
 */

/**
 * ? .map() method
 *  - map method is higher order method which used to map over the array and return the new copy array or modified array.
 */

const numbers = [1, 2, 3, 4, 5, 6];
const copyNumbersArr = numbers.map((number) => number);
const doubleNumber = numbers.map((number) => number * 2);
console.log("Numbers :", numbers); // Original array
console.log("copyNumberArr :", copyNumbersArr); // Modified copyNumberArr with map method
console.log("Double Number :", doubleNumber); // Modified Double array with map method

/**
 * ? .filter() method
 *  - filter method is higher order method which used to filter our array provide the condition and return the new array.
 */

const filterEvenNumbers = function (array = []) {
  return array.filter((arr) => arr % 2 === 0);
};

const filterOddNumbers = function (array = []) {
  return array.filter((arr) => arr % 2 !== 0);
};

const evenNumber = filterEvenNumbers(numbers);
console.log(evenNumber); // Output: [2, 4, 6]

const oddNumber = filterOddNumbers(numbers);
console.log(oddNumber); // Output: [1, 3, 5]

/**
 * ? reduce() method
 * - This reduce higher order method will process each element of an array and accumulates the result into single value.
 * - The final value can be any data type, such as: numbers, string, object, array etc.
 */

const reduceEvenNumberArr = evenNumber.reduce(
  (accumulator, initial) => accumulator + initial,
  0,
);

console.log(reduceEvenNumberArr); // Output: 12

const reduceOddNumberArr = oddNumber.reduce(
  (accumulator, initial) => accumulator + initial,
  0,
);

console.log(reduceOddNumberArr); // Output: 9

/**
 * ? .find() method
 *  - find method is higher order method which find the element in our array and it return the first match element according to condition we provide.
 */

const findFirstEvent = evenNumber.find((numb) => numb % 2 === 0);
console.log(findFirstEvent); // Output: 2

// example two
/**
 * Create the method which find index of provided array element
 */

function findIndex(value, array = []) {
  const indexedArray  = array.map((element, index) => {
     return {element , index}
   })

   const result = indexedArray.find((item) => item.element === value); 

   return result ? result.index : -1; 
}

const findIndexResult = findIndex(4, numbers);
console.log(findFirstEvent);

const superHeroes = ["Spiderman", "Superman", "Flash", "Hulk", "Ironman"];
const findSuperHeroIdx = findIndex("Flash", superHeroes);
console.log(findSuperHeroIdx);

/**
 * ? findIndex() method: 
 * - findIndex method is higher Order function which return the first index number of given condition provided to method 
 */

const firstEvenIndex = evenNumber.findIndex((number) => number % 2 === 0); 
console.log(firstEvenIndex) // Output: 0  

/**
 * ? .every( ) method : 
 * - every method is higher order function which checks all the array element provided condition is applied or not 
 * - every method return boolean value. 
 */

const checkTypeOfElement = numbers.every((number) => typeof number === 'number'); 
console.log(checkTypeOfElement);  // Output: true 
const isEvenElements = evenNumber.every((number) => number % 2 === 0); 
console.log(isEvenElements); // Output: true 
const isOddElements = oddNumber.every((number) => number % 2 !== 0); 
console.log(isOddElements); // Output: true  


/**
 * ? .some() method: 
 * - some method is higher order function which checks if the single element of an array condition is applied than it returns boolean value 
 * - If the condition satisfied on the first element it returns the boolean value.  
 */

const isEventType = numbers.some((number) => number % 2 === 0 ); 
console.log(isEventType); // Output: true  

/**
 * ? sort() method: 
 *  - sort method is array method which sort() our elements in ascending and descending order 
 *  - default is sort order by ASCII value associated to it  and we can pass callback function also to sort custom. 
 * 
 */ 

const fruits = ["Banana", "Apple", "Mango", "Strawberry"]; 
const sortedFruits = fruits.sort(); 
console.log(sortedFruits); 

// Let sort numbers
const num = [100, 45, 78, 4, 2, 99] 
console.log(num.sort()); // Output: [ 100, 2, 4, 45, 78, 99 ] 
/**
 * In above expression we get sorting like this [ 100, 2, 4, 45, 78, 99 ] which is not according to outcomes we want because sorted according to ASCII value  
 * For this we have to pass callback function with logic of ascending/ descending order. 
 */

//? for ascending order 
const ascendingNumbers = num.sort((a,b) => a - b); 
console.log(ascendingNumbers); // Output: [2, 4, 45, 78, 99, 100]

const descendingNumbers = num.sort((a, b) => b - a); 
console.log(descendingNumbers); // Output: [100, 99, 78, 45, 4, 2] 

/**
 * ? join() method 
 * - join method is array method which concat elements of an array and return as string type with pass separator 
 *  
 *  Syntax of join() method 
 *  .join(separator)  
 *  which separate our elements and convert into string with separator
 */ 

const wordsArr = ["My", "name", "is", "Aayush", "Vyas" ]; 

const sentence = wordsArr.join(" "); // .join() method 
console.log(sentence); 
console.log(typeof sentence); // Output: string  

/**
 * ? concat() method 
 *  concat method is array method which helps to join or concat two or more array with each other and return new array. 
 */

const concatArray = numbers.concat(numbers, superHeroes, wordsArr); // Here we concat three arrays to one 
console.log(concatArray); 

