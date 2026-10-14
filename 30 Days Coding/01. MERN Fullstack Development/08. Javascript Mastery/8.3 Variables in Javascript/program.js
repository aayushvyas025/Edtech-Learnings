//* Variables in Javascript  


/**
 * ? Introduction to Variables 
 *  - Variables are the fundamental storage unit in programming language to store our data for processing. it acts as empty container or placeholder in our program.   
 *  - When we use variable to store our data so it's create a memory block in program memory and assign the address to it which we access through variable identifier 'name' for processing. 
 *  - As the name suggest variable so we can update our variable value by accessing through identifier as per our needs. 
 * 
 * ? Syntax of variable 
 *  <keyword-variable> <variable-identifier> = data 
 *  keyword variable: in javascript we create variables in three ways: var, let and const 
 *  variable identifier: the name we assign to memory-block of our variable  
 *   = : assignment operator to assign data to our variable 
 *  data : the data to process our program   
 * 
 * ? Rules and Convention to create variable 
 *  1. Variable always starts with alphabet characters or with name not numeric characters or number 
 *     var user = 'Aayush Vyas'   - this is correct 
 *     var 1RollNumber = 'Aayush Vyas' - this  incorrect 
 *  2. We can use numbers or numeric correct in between or after alphabet characters but not start with it. 
 *     var user1 = 'Aayush Vyas' - this is correct 
 *     var user1Two = 'Kratik Vyas' - this incorrect 
 *  3. Don't give gap between our variable always write in continuos manner otherwise it give error. 
 *     var user one = 'Aayush Vyas' - this incorrect 
 *     var userone = 'Kratik Vyas' - this is correct 
 *  4. We can't use special character except dollar sign `$` and underscore (_) for creating variable 
 *     var $username = 'Aayush Vyas'; 
 *     var user_name = 'Kratik Vyas'; 
 *  5. Variables are Case-sensitive means lower-case and upper-case have different meaning 
 *      var USERNAME = 'Aayush Vyas'   - this create new variable in memory 
 *      var username = 'Kratik Vyas'   - this create new variable in memory  
 *  6. In Javascript we create variable in Camel-case convention  
 *      var userName = 'Aayush Vyas' after full-meaning of first-word we use Capitalize words for variable 
 */

// ?  Example of Variable 
var userOne = 'Aayush Vyas'; 
console.log(userOne);  

/**
 * ? Different ways to create variables in Javascript 
 *  We have three different ways to  create variables in Javascript : 
 *  1. var  2. let   3. const 
 * ! - var is the first and oldest way to create variables in javascript, in modern era we don't use or recommended to create with it it's have some flaw 
 * ! - let and const are the newer way to create variables in javascript which introduced in ES06 version of javascript and it's fix all the flaw of var keyword .  
 * 
 * Let explore and understand  var, let and const keyword in depth   
 */

/**
 * ? var keyword in javascript 
 *  - var keyword is used to create variables in javascript and it's a function-scope variable 
 *  - We can re-assign the var keyword variable and also re-declare it. 
 *  - var keyword doesn't follow  and existence of block-scope.  
 */ 

/**
 * Example of var keyword variable 
 *  
 */ 

var number = 25; 

console.log(number); 

// let re-assign the variable number 
number = 50;   
console.log(number); 

// We can redeclare the variable also 
var number = 100; 
console.log(number); 

// var keyword doesn't follow and existence of the block-scope 
{
    var myName = 'Aayush Vyas'; 
    console.log(myName); // Output: Aayush Vyas 
}

// can we access the var keyword variable 
console.log(myName); // Output: Aayush Vyas 

/**
 * ? let keyword in Javascript 
 * - let keyword is also used to create variables in javascript and it's modern approach 
 * - let keyword create block-scope variable and we can red-assign but can't re-declare it like var keyword. 
 * - let keyword block-scope variable means variable is tightly coupled with that block and accessible, validate and live-up in that variable. 
 */

/**
 * Example: let keyword variable 
 */

let userName = 'Aayush Vyas'; 
console.log(userName); 

// re-assign the value of userName 
userName = 'Kratik Vyas'; 
console.log(userName);  

// Case: let keyword variable creates block-scope variable 

{
    // let access userName variable, we can because this block-scope is child of global scope methods environment 
    console.log(userName); 

    // Let creates variable 
    let myAge = 27; 
    console.log(myAge); 
}

// Can we access this variable outside block-scope 
// console.log(myAge); // It give error : myAge is not defined 


/**
 * ? const keyword in javascript 
 *  - const keyword also used to create variables but constants and they would be static throughout the program we can't update them in some complex data the context is memory address remain same but we can changes it's value. 
 *  - const keyword also creates block-scoped variables same as let keyword constant 
 * 
 * ? Some rules of const keyword 
 *  This are the mandatory rules of const keyword otherwise js engine throw error to us. 
 *  - We can't just declare our constant we have to initialized 
 *  - We can't re-assign the value of constant  
 * 
 *! - const and let are introduced in es06 version and creates block-scoped variable.  
 */ 

/**
 * Example: const keyword  
 */

// const myConstant;  It give error we can't declare our variable 

const myConstant = 25; 
console.log(myConstant); // Output: 25 

// We can re-assign the value 
// myConstant = 30; We can't re-assign the value of constant. 

