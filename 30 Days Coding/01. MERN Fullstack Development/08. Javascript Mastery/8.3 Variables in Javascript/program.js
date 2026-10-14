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

