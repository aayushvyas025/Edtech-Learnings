//* setTimeout Timer Function

/**
 * ? setTimeout function
 *  - This setTimeout is timer function which once executes a argument function after specified delay of milliseconds.
 *  - It runs asynchronously without blocking the rest of your code from executing.
 *  - This timer function `setTimeout` is not native to core javascript feature it's provided by browser API ir browser runtime environment.
 *
 * ? Syntax of setTimeout function
 *   setTimeout(callback, delay(in ms), param1, param2, .....)
 *
 *  callback: The function you want to run when time expires
 *  delay: The wait time in milliseconds (1 seconds = 1000ms `milliseconds`). If omitted it default to 0.
 *  arg1, arg2, ... (Optional): Extra parameters passed directly into callback function when it executes.
 *
 *  ? We can save this setTimeout function in variable which work as timeoutId ` a numeric ID  returned by the method that uniquely identifies the timer.`
 *
 */

/**
 * ? Example of setTimeout function
 *
 */

// Example One: Using an arrow func

console.log("Start");

setTimeout(() => {
  console.log("Run after 2 seconds");
}, 2000);

setTimeout(() => {
  console.log("Run after 4 seconds");
}, 4000);

setTimeout(() => {
  console.log("Run after 6 seconds");
}, 6000);

setTimeout(() => {
  console.log("Run after 8 seconds");
}, 8000);

console.log("End");

/**
 * setTimeout function is non-blocking so first synchronous task execute 'Start', 'End' than after our setTimeout timer func execute
 */

/**
 * Example Two: Passing a Named function with arguments
 */

function greet(name, role) {
  console.log(`Hello, ${name}! Welcome to ${role}`);
}

setTimeout(greet, 10000, "Aayush Vyas", "Under-grade"); 
//! Always pass callback function as reference not execute instantly 

/**
 * Example Three: Canceling a Timer clearTimeout() fun
 *  You can stop a scheduled timeout from running before its delay finishes  by passing it's ID to clearTimeout()
 *
 */

const timerId = setTimeout(() => {
  console.log("Run after 4 seconds ");
}, 4000);

// Here we using clearTimeout function to clear setTimeout function

  clearTimeout(timerId);

