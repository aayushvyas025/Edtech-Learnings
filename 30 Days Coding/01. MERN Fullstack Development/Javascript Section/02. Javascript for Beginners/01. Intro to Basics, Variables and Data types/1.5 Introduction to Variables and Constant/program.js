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
 * To stop this wied behaviour we have to use "use strict" statement so javascript will more strict according to syntax rules and regulation  
 */  
console.log(name);  

//* var variables doesn't omit block scope   

{
  var name2 = 'Sam'; 
}

console.log(name2); // Output: Sam 
/** 
 * In the case of let name2 give error which name2 is not defined but in var case variables omit's the existence of block scope
 */ 


//? let keyword 
/** 
 *  - We can initialize and declare variable with let keywords also and it's newer and safer way to create 
 *  - let keyword create a block scope variable and it introduce in ES06 version of Ecmascript or javascript
 *  - We can re-assign the let keyword variable also but can't re-declare it. 
 */ 

let birthDate = 25;   
/**
 * Here, we initialize the birthDate variable : 
 *  let -> keyword 
 *  birthDate -> identifier or `variable name` 
 *  = -> assignment operator 
 *  25 -> value or data 
 */   
console.log(birthDate) // Output: 25 
//* We can re-assign the value in let keyword variable also 
birthDate = 24;  // re-assign or update value 
console.log(birthDate);  // Output: 24   

//*  let keyword is blocked scope variable 
// Here the point to understand that we can access the parent scope variable inside the child scope but don't scared to other 

{ 
  console.log(birthDate); // printing parent scope variable 
  let isRetired = false; 
  console.log(isRetired); 
}
 
// console.log(isRetired); //* It give error in output variable is not defined.


//! we can't re-declare let keyword variable 
// let birthDate = 30;  It give error and code editor give suggestion that already declared variable. 

/** 
 * * Difference between var and let variable   
 * 
 *  ? var                                                         let 
 * - var keyword is first and oldest way to create              - let keywords is introduce in ES06 version of Javascript 
 *   variable in javascript which now-days don't                  or Ecmascript developers prefer let to create variable 
 *   consider as best practice.                                     in modern javascript    
 * 
 * - var keyword variable are function scoped so,               - let keywords are blocked scope and don't re-declare but 
 *   they update or reassign and redeclared very                   we can update or re-assign the value of it. 
 *   easily that's create our code buggy.  
 * 
 * - As we know that var keyword is function scope              - let keyword is blocked scope and they are tightly
 *   and they omit the existence of block scope                   coupled with it and it's existence to under the block
 *                                                                 only. 
 */                                                                 


//? constant 
/** 
 * - constant are variables which remains constant throughout the program. 
 * - In javascript we create constant with `const` keyword  
 * - const is also introduced in ES06 version of ecmascript or javascript to create constant. 
 */ 

/**
 * ! Rules to create constants in javascript 
 *  We have to follow this rules otherwise js engine give throw error 
 *  
 *  - constant should be initialized not be declared 
 *    example: 
 *    const PI_VALUE;  //* throw  error 
 *  - constant can't be re-assigned  
 *    example: 
 *    const PI_VALUE = 3.144
 *     PI_VALUE = 3.14 //* throw error 
 */ 

const PI_VALUE = 3.14;  
/** 
 *  const -> keyword to create constant 
 *   PI_VALUE -> identifier or constant name 
 *    = -> assignment operator '=' 
 *   3.14 -> value 
 */
 

//?  Initialization and Declaration of Variables  

/** 
 * * Declaration of variable 
 *  When we only create value but don't assign value than it's know as declaration of variable  
 */  

let declaredVariable ;  
console.log(declaredVariable); // Output: undefined 
/** 
 * * This is the example of declared variable not assign the value to it.
 * * When we console variable than it give undefined as output which also a datatype in js 
 */

/** 
 * * Initialization of Variable 
 * When we create variable and assign the value than it's know as initialization of variable 
 */ 

let initializedVariable = 'Aayush'; 
console.log(initializedVariable); 


