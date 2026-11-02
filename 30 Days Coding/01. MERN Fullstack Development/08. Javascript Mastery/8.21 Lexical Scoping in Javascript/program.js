//* Lexical Scoping in Javascript

/**
 * ? Lexical Scoping
 *  Lexical scope in javascript means that variable accessibility is determined entirely by the physical position of the variable and function declarations within in source code.
 *
 *  ? The Golden Rule of lexical scope
 *  - Inside-out access: An inner function can always look "up" and access variables declared in its outer parent functions or the global functions.
 *
 * - No outside-in access: A parent or outer scope can't  look 'down' to access variables declared inside a child function.
 *
 * - Static over Dynamic: The scope is locked in when you write the code. It doesn't matter where or how a function eventually called at runtime.
 */

function outer() {
  let valOne = 25;
  // valOne variable belongs to outer-scope variable
  function inner() {
    let valTwo = 50;
    console.log(valOne); // child scope access the parent scope variable 
    console.log(valTwo);
  }
//   valTwo = 30;  this valTwo can't access by outer scope or parent scope 
  inner(); 

}

outer(); 