//* Conditional Statements in Javascript

/**
 * ? Conditional statements in Javascript
 *   - Conditional statements are use to create conditional flow for our program
 *   - This statements will create single or multiple conditions flow in our program like this if the primary condition doesn't satisfies than execute secondary or after that condition.
 *
 *  - We have multiple statements or operator to create conditions in our javascript program.
 */

/**
 * ? Different types of Conditional  Statements
 */

/**
 *?  if statement
 * - if statement is used to create single conditional flow in our program.
 * - When the condition of if-statement satisfies or become true than only if block execute
 *
 * ? syntax of if-statement
 *   if('pass condition of if') {
 *       after the if condition become true than we enter in this block and execute the logic written of if-statement
 *    }
 */

// Example: Some website check the age of user than give access to visit

let age = 16;

// update age
age = 25;

// update age greater than 100
age = 101;

// if-condition
if (age >= 18 && age <= 100) {
  console.log(
    "You can access the website because adult age greater than or equal to 18.",
  );
}

/**
 * ? else statement
 * - else statement is the secondary statement which we use if the primary statement "if, else-if statements" condition failed.
 * - We can't use else statement independently we have to use with primary statement as pair.
 *
 * ? Syntax of else statements
 *   else {
 *         After the if-condition fails than this else statement execute
 *      }
 */

age = 17;

if (age >= 18) {
  console.log("You can vote and elect your government");
} else {
  console.log("You can't vote");
}

/**
 * ? Nested If Statement
 * - Nested if-statement means multiple if-statements inside if-statements
 */

// Example of Nested if-statement

age = 27;
let havingAdharCard = true;

if (age >= 18) {
  // nested -if
  if (havingAdharCard) {
    console.log("You can vote and elect your government");
  }
} else {
  console.log("You can't vote");
}

/**
 *  ? else if statement
 *  - else if statement is use to create multiple conditions in our program
 *  - We use else if conditions as secondary, if as primary and else statement as default if all conditions failed.
 *
 * ? Syntax of else-if statement
 *  if(condition) {
 *
 *   } else if(condition) {
 *
 *   } else if (condition) {
 *
 *   }else {
 *
 *    }
 */

/**
 * Example of Else-if statement
 *  Find greater number between three
 */

let numOne = 5;
let numTwo = 10;
let numThree = 45;

// case
numOne = 25;
numThree = 15;
numTwo = 50;

if (numOne > numTwo && numOne > numThree) {
  console.log(`${numOne} is greater than others`);
} else if (numTwo > numThree && numTwo > numThree) {
  console.log(`${numTwo} is greater than others`);
} else {
  console.log(`${numThree} is greater than others`);
}

/**
 * ? Switch Case Statement
 *  - This switch statement is more readable, clean version of our conditional statements
 *  - In switch case, we passes our variable to match cases of switch statement if the case match with cases of switch statement than it execute.
 *  - Note: switch case statement default execute all cases so we have to use break statement which break the switch statement and start execution out from it.
 *
 * ? Syntax of our switch case
 *  switch(variable) {
 *    case 1:
 *       logic of case;
 *       break;
 *
 *   case 2:
 *       logic of case;
 *       break;
 *
 *   default :
 *     logic of default
 *    This default execute when the all cases don't match
 *
 *    }
 */

/**
 * Example of switch statement
 */

let day = 0;

switch (day) {
  case 0:
    console.log(`Today is Monday`);
    break;

  case 1:
    console.log(`Today is Tuesday`);
    break;

  case 2:
    console.log(`Today is Wednesday`);
    break;

  case 3:
    console.log(`Today is Thursday`);
    break;
  case 4:
    console.log(`Today is Friday`);
    break;

  case 5:
    console.log(`Today is Saturday`);
    break;

  case 6:
    console.log(`Today is Sunday`);
    break;

  default:
    console.log(`Please enter the numbers from 0 to 6`);
}
