//* Conditional Continues

//? Nested if Statements
/**
 * Nested if-statements
 *  - We can create if-statement inside the if-statement than it called as Nested if Statement
 *
 */

//* Example of Nested-if Statement

let age = 19;
let citizen = "American";

// case 
citizen = "Indian"; 

// Creating condition of casting vote in india

if (age >= 18) {
  // Here we created nested if-statement to check citizen
  if (citizen === "Indian") {
    console.log("You are eligible to cast your vote");
  } else {
    console.log("You are not Indian");
  }
} else {
  console.log("You are not eligible to cast your vote");
}


