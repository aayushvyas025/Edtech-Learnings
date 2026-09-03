//* Introduction to Variables and Constants 

//? Introduction to Variables 
/**
 *?  Introduction to Variables 
 *
 * → Variables are a fundamental mechanism in programming languages
 *   used to store and work with data during program execution.
 *
 * → A variable is a named reference that allows a program to access
 *   a value stored in memory.
 *
 * → The variable's identifier (name) is used to refer to that value
 *   and, depending on how the variable is declared, the value can
 *   be reassigned.
 */

 // Example of variable  
 var number = 25;  // initialize the variable 
 /** 
  ** var -> keyword for creating variable 
  ** number -> identifier which the name of our variable 
  **  = -> assignment operator to assign value 
  ** 25 -> data or value which we assign to variable 
  */

console.log(number) // Output: 25 

//? Different types to create variables in Javascript 
/** 
 * -> In javascript, we have three ways to create variable var, let and const  
 * -> `var` and `let` keyword to create variable and `const` to create constant 
 */ 


//? var keyword 
// we create variable with var keyword and it's the first and oldest way to create variables in javascript. 
// var keywords create the function scope variable which doesn't consider the existing of block scope 

var name = 'Aayush';  
// Here we initialize the variable name with var keyword 
console.log(name); 

//* Re-assign the variable name 
name = 'Kratik'; 
console.log(name); 

//* var keyword variable also re-declare 
var name = "Rahul" 
/** 
 * We can re-declare the var keyword variable but not in let keyword  
 */
console.log(name);  