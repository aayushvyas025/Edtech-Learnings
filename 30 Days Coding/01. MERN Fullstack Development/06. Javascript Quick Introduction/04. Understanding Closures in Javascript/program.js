//* Understanding Closures and Other Javascript Topics

//? What is Closures
// Closures is when a function `remembers` the variable from where it was created, even after the outer scope function is executed. Inner function keeps the access of the outer function's scope.

// Let understand with the help of example:

//* Example One: Basic Idea
// outer function
function outerFunc() {
  let name = "Aayush Vyas"; // Outer func scope variable

  function innerFunc() {
    console.log(name); // Accessing the outer func scope variable inside innerFunc
  }

  return innerFunc; // Returning the inner func
}

// saving the reference in the closuresOne variable
const closureOne = outerFunc(); // here, we pass the reference outerFunc() which return innerFunc reference
closureOne(); // Output: Aayush Vyas
/**
 * * Here question arise how the ClosureOne have the reference of "Aayush Vyas" because innerFunc() creates the closures by accessing the outerFunc() scope variable name, after the outerFunc completely executed.
 */

//* Example Two: Classic Example - Counter
// counter function is perfect example of understanding closures and kept the counter variable private also instead of creating public variable
function createCounter() {
  let count = 0; //  count variable of createCounter() function scope
  // inner anonymous function
  return function () {
    //updating the count value of outer function scope which create the closures over the count variable of outer function scope.
    count++;
    return count; // returning count function
  };
}

// Passing the reference of createCounter() to counterOne variable
const counterOne = createCounter();
// console.log(counterOne()); // Output: 1
// console.log(counterOne()); // Output: 2
// console.log(counterOne()); // Output: 3

// Passing the new reference of createCounter() to counterTwo variable which have separate states
const counterTwo = createCounter();
// console.log(counterTwo());
// console.log(counterTwo());
// console.log(counterTwo());

//* Example Three: The Classic Interview Problem
// This is the most asked and famous interview question which asked by companies with two versions of it

// Version - 1 var keyword variable
// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => console.log(i), 2000); // execute after 2 sec. 
// } 

//* Output of above version is `6` not 1, 2, 3, 4, 5 why ??? 

/* Understand the above code statement: 
 -> Here the output is 6 because for-loop is synchronous task and it's already executed before when setTimeout func is starting  execution and give output 6 shared value after all looping iteration done.

 -> setTimeout func is asynchronous task which delay some time for execution according to our code statement  is 2sec. 
 
 -> var is function scope variable so it doesn't follow the rules of block-scoping and don't tied upto that scope only, so closures kept the reference of 6 only after the loop `synchronous task` executed than setTimeout func `asynchronous task` executed have value 6  as output 5 times.  
 */  


 // Version 2 - let keyword variable 
/** 
 * -> Above version is broken due to usage of var function scope variable but when we used let keyword variable it fixed 
 * -> let keyword is block-scope so it's tightly couple with this for loop scope only and closures keep every reference of iteration of for-loop than for-loop executed because of synchronous task after 2 sec setTimeout execute and print iteration from 1- 5  
 */

// for(let i = 1; i <= 5; i++) {
//     setTimeout(() => console.log(i), 2000); 
// }
 
//* Output: 1, 2, 3, 4, 5  

//* Example Four: Data Privacy/ encapsulation (practical use) 
function createBankAccount(balance) {
    // Here we accessing the local variable of function which is parameter which exist inside the function and lexical scope of function only 
    return {
        //  deposit method 
        deposit(amount) {
            balance += amount; 
            return `${balance}Rs in your saving account`; 
        },
        //  withdraw method 
        withdraw(amount) {
        if(amount > balance) {
        console.log("Insufficient funds"); 
          return `${balance}Rs in your saving account`;
        }
        balance -= amount; 
        return `${balance}Rs in your saving account`; 
        },
        // getBalance method 
        getBalance() {
          return `${balance}Rs in your saving account`; 
        }
    }  
} 

const userOne = createBankAccount(10000); 
const currentBalance = userOne.getBalance(); 
console.log(currentBalance); 
const depositedBalance = userOne.deposit(10000); 
console.log(depositedBalance); 
const withdrawBalance = userOne.withdraw(5000); 
console.log(withdrawBalance); 


//* Example Five - Function Factories 
function multiplyBy(x) {
  return function (y) {
    return x * y; 
  }
} 

const double = multiplyBy(2); 
const triple = multiplyBy(3); 

console.log(double(11)); // Output: 22 
console.log(triple(11)); // Output: 33 