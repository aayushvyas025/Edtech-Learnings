//* Introduction to Conditional 

/**
 * Conditional Statement 
 * - Conditional statement are used to create conditional logic in our program. 
 * - We can implement conditional logic if the condition pass than we can execute specific task or failed than we have to execute secondary condition. 
 * - we can create multiple condition or nested condition also with the help of this statements 
 */

// Let explore various type of conditional statement: 

/**
 * ? 1st. if statement 
 *  if statement is used to create single conditional logic in our program 
 * 
 *  syntax of if statement 
 *   if(<condition-if-statement>) {
 *       block of if statement 
 *       here we create logic of if block 
 *    }
 */

let isAdult = true; 

// case 
isAdult = false; 

if(isAdult) {
    console.log("You are adult")
}

console.log("You are not adult"); 
// This statement run default if the if condition statement fail or not  
// for secondary statement we have else statement 

/** 
 * ? else statement 
 *  - else statement is used to process secondary condition if the if-statement condition failed 
 *  - else statement always used as pair with if statement or multiple if, else-if statement as the fallback or secondary condition. 
 * 
 *  Syntax of else statement 
 *  if(<if-condition>) { 
 *      logic of if-condition 
 *    }else {
 *      secondary condition when if-statement condition failed. 
 *     }
 */

// example of else-if statement 
let myAge = 15; 
// case 
myAge = 27; 

if(myAge >= 18) {
    console.log("You can apply for driving license")
}else {
    console.log("Not eligible to apply driving license")
}



