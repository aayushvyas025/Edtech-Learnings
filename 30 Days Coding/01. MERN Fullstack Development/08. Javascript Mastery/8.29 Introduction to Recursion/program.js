//* Introduction to Recursion

/**
 * ? Introduction to Recursion
 *  - Recursion is a programming and problem-solving technique where function calls itself to solve smaller, self-similar instances of the same problem.
 *
 */

/**
 * ? Understand Recursion practically from 1 to 10
 *  First print with loop
 */

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

/**
 * Now understand how we can print numbers from 1 to 10
 */

function printNumbersRecursively(num) {
  if (num < 0) {
    console.log("number should be greater than 0");
    return;
  }

  if (num <= 20) {
    console.log(num);
    // Here we do recursive call
    printNumbersRecursively(num + 1);
  }
}

/**
 * ? Recursive function consists of two main cases: 
 * - Base Case: The stopping condition that provides a direct answer without any further recursive calls, preventing infinite loops or stack overflow error. 
 * - Recursive Case: The part where the function calls itself with a smaller or simpler input to move the problem closer to the base case.  
 */

printNumbersRecursively(10);

/**
 * Recursive function for table
 */

function recursiveTable(number, i = 1) {
  if (i > 10) {
    return;
  }
  console.log(`${number} * ${i} = ${number * i}`);
  recursiveTable(number, i + 1);
}

recursiveTable(5);

/**
 * Recursive function for Even or odd numbers
 */

function recursiveEvenOdd(num) {
  if (0 < num) {
    if (num % 2 === 0) {
      console.log(num);
    }
    recursiveEvenOdd(num - 1);
  }
}

recursiveEvenOdd(10);

/**
 * ? Recursive famous example factorial
 */

function recursiveFactorial(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * recursiveFactorial(num - 1);
  }
}

console.log(recursiveFactorial(8));
