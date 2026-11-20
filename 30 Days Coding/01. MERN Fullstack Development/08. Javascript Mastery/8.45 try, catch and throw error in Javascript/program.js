//* try, catch and throw in Javascript

/**
 * ? try, catch and throw in Javascript
 *  In Javascript, `try`, `catch`, and `throw` work together to handle runtime errors gracefully without crashing your program.
 *
 *  How Each keywords work:
 *   - `try` block: It wraps code that might be fail. if an error happens execution stops immediately and jumps to `catch`.
 *
 *   - `throw` statement: It's manually creates and triggers a custom errors (usually with new Error("message")).
 *
 *   - `catch` block: It runs only if an error is throw inside `try`. It receives the error object so you can log it or recover.
 *
 *   - `finally` block (optional): Runs after `try` and `catch` regardless of whether an error occurred, making it ideal for cleanup task.
 */

/**
 * ? Example with Error Handling:
 */

function divide(a, b) {
  try {
    if (b === 0) {
      // manually create and trigger a custom error with throw and new Error Obj
      throw new Error("Can't divide by Zero");
    }

    return a / b;
  } catch (error) {
    console.error(error);
    return null;
  } finally {
    console.log(`Calculation attempt finished!!!`);
  }
}


// case 1: 
// const resOne = divide(10,0); //  Error: Can't divide by Zero
// console.log(resOne);// Output: null 

// case 2: 
const resTwo = divide(10, 5); 
console.log(resTwo); // Output: 2  


/**
 * ? Key Best Practice: 
 *   - Always throw Error objects. While you can technically `throw` a string or number, using new Error() gives you standard .name, .message, and .stack properties for debugging. 
 *  - Watch out for syntax error: try...catch block only catches runtime errors in valid javascript; it can't catch parse-time syntax typos. 
 * - Async code: Async code requires `async/await`. Standard try..catch will not catch errors inside asynchronous callbacks like setTimeout unless you wrap an await call inside an async function. 
 */