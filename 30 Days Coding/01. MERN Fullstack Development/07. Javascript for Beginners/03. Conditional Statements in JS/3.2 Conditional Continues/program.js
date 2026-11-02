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

// Example One: Creating condition of casting vote in india

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

// Example Two: LoggedIn and Admin check
// Creating with function
function checkAdmin(email, loggedIn) {
  if (loggedIn) {
    if (email === "user@admin" && loggedIn) {
      console.log("Admin loggedIn");
    } else {
      console.log("User loggedIn");
    }
  } else {
    console.log("Please login to check admin");
  }
}

checkAdmin("user@user", true);
checkAdmin("user@admin", false);

//? Else-if Statement
/**
 * Else if statement are used for implementation of multiple conditions
 * else-if statement are also compulsory use with if-statement.
 *
 * Syntax of Else-if
 *  if(<if-condition>) {
 *        if statement logic
 *    } else if(<else-if-condition)  {
 *        else-if statement logic
 *    } else {
 *       else-statement logic
 *     }
 */

// Example One: Find greater, smaller or equal between two numbers
// we are creating this example with function
function compareNumber(numOne, numTwo) {
  if (numOne > numTwo) {
    console.log(`${numOne} is greater than ${numTwo}`);
  } else if (numTwo > numOne) {
    console.log(`${numTwo} is greater than ${numOne}`);
  } else {
    console.log("Both numbers are equal");
  }
}

compareNumber(7, 2);
compareNumber(15, 20);
compareNumber(2, 2);

// Example Two: Creating the student grade system according to their Percentage
// Here also we are using function

function gradeGenerator(student, percentage) {
  if (percentage <= 100 && percentage > 90) {
    console.log(`${student} got A+ grade`);
  } else if (percentage <= 90 && percentage > 80) {
    console.log(`${student} got A grade`);
  } else if (percentage <= 80 && percentage > 70) {
    console.log(`${student} got B+ grade`);
  } else if (percentage <= 70 && percentage > 60) {
    console.log(`${student} got B grade`);
  } else if (percentage <= 60 && percentage > 50) {
    console.log(`${student} got C+ grade`);
  } else if (percentage <= 50 && percentage > 40) {
    console.log(`${student} got C grade`);
  } else if (percentage <= 40 && percentage > 30) {
    console.log(`${student} got D grade`);
  } else {
    console.log(`${student} failed the exams`);
  }
}

gradeGenerator("Aayush Vyas", 34);
gradeGenerator("Saijal Vyas", 75);

//? ternary operator
/**
 * - Ternary operator is shorter form with syntactic sugar on if-else conditional statement.
 * - Ternary operator mainly use for single line condition based implementation but we can implement nested multiple condition also.
 * - In ternary we using '?' question mark and colon ":"
 *
 *  Syntax of ternary operator
 *   condition ? ` ternary-condition satisfied than this block of code executed`: `ternary-condition failed than this block of code executed`
 */

function findBiggerNumber(numOne, numTwo) {
  const findingBiggerNumb =
    numOne > numTwo
      ? `${numOne} is bigger than ${numTwo}`
      : `${numTwo} is bigger than ${numOne}`;
  console.log(findingBiggerNumb);
}

findBiggerNumber(5, 2);
findBiggerNumber(2, 4);

//? Switch Statement
/**
 * - Switch Statement is also alternative statement for implement conditional logic.
 * - Switch statement is more better cleaner way and readable approach to create conditional statement
 * - In switch statement we match the cases with given expression to switch parentheses if the case match than it execute that statement among all.
 *
 *  Syntax of switch statement
 *   switch(expression) {
 *     case <first-expression>:
 *           logical-implementation to this case;
 *          break;  //! We have to use break statement other wise switch execute all the statement
 *     case <second-expression>:
 *          logical-implementation to this case;
 *          break;
 *      default:
 *         logical-implementation to the default case:
 *        * If no case matches default case run and executed
 *    }
 */

// Example of Switch Case
/**
 * Let's create student grade system with switch Case
 */

function studentGradeSystem(student, grade) {
  // switch(percentage) {
  //     case percentage <= 100 && percentage > 90:
  //       console.log(`${student} got A+ grade`);
  //       break;

  //     case percentage <= 90 && percentage > 80:
  //          console.log(`${student} got A grade`);
  //          break;

  //     case percentage <= 80 && percentage > 70:
  //         console.log(`${student} got B+ grade`);
  //         break;

  //     case percentage <= 70 && percentage > 60:
  //         console.log(`${student} got B grade`);
  //         break;

  //     case percentage <= 60 && percentage > 50:
  //         console.log(`${student} got C+ grade`);
  //         break;

  //     case percentage <= 50 && percentage > 40:
  //         console.log(`${student} got C grade`);
  //         break;

  //     case percentage <= 40 && percentage > 30:
  //         console.log(`${student} got D grade`);
  //         break;

  //     default:
  //       console.log(`${student} failed in the exam`);
  // }

  /**
   * ! This switch case is logic is wrong because it's match value not condition
   * ! `switch` is primarily used for exact value matching,
   * whereas `if...else` is used to evaluate conditions
   * such as ranges, comparisons, and boolean expressions.
   *
   *  Now we change the logic so user provide grade we give ranges of percentage
   */
  const userGrade = String(grade).toLowerCase();
  switch (userGrade) {
    case "a+":
      console.log(`${student} percentage range between 91-100`);
      break;

    case "a":
      console.log(`${student} percentage range between 91-80`);
      break;

    case "b+":
      console.log(`${student} percentage range between 81-70`);
      break;

    case "b":
      console.log(`${student} percentage range between 71-60`);
      break;

    case "c+":
      console.log(`${student} percentage range between 61-50`);
      break;

    case "c":
      console.log(`${student} percentage range between 51-40`);
      break;

    case "d":
      console.log(`${student} percentage range 41-30`);
      break;

    default:
      console.log(`${student} failed the exam`);
  }
}

studentGradeSystem("Aayush", "A+");
studentGradeSystem("Saijal", "B+"); 
