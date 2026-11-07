//* Introduction to Asynchronous Programming

/**
 * ? Asynchronous Programming
 *
 * First understand javascript is inherently a single-threaded, synchronous programming language.
 * ! This means it execute code line by line, in order using single call-stack. However to handle time consuming tasks like database queries, network requests, or timers without freezing the user interface, JavaScript relies on the asynchronous programming powered by the browser or runtime javascript.
 *
 * Here just look at the direct trade-offs between the two models:
 *
 * Feature          |   Javascript Synchronous Programming         |  Javascript  Asynchronous Programming
 * Execution Flow    Line-by-Line, sequentially order. Each line    Tasks run independently. It starts a task and moves on immediately
 *
 * Thread Impact    Blocking. If one task takes too long, the      Non-blocking. Long tasks run in the background, keeping the UI
 *                   whole program freezes                          responsive.
 *
 * Complexity       Simple to read, trace, and debug.              More Complex to understand; requires handling timing and data flow
 *                                                                 via callback or promises
 *
 * Best Used       Mathematical calculations, array data           API calls(fetch), timers (setTimeout), File uploads and database
 *  For            manipulation, and simple logic.                 operations.
 *
 *
 */

/**
 * ? Synchronous Code Example
 *  In a synchronous flow, everything stops until the current line completes its task .
 *
 */

console.log("Start the processing");
function loopProcessing() {
  for (let i = 0; i <= 1000; i++) {
    console.log("Processing.....");
  }

  console.log("Processing completed");
}
loopProcessing(); 
console.log("End the Program"); 

/**
 * Output: 
 *   - Start 
 *   - ( Noticeable pause while calculating runs ) 
 *   - Calculation Finish 
 *   - End 
 */

/**
 * ? Asynchronous Code Example 
 *  Asynchronous programming hands off the long operation to a Web API (Like the browser's timer or network layer) which takes some time to perform operations as we know that javascript is single threaded so first priority is going for synchronous task than asynchronous task is completed but always executed after the synchronous only. 
 */

console.log('Start'); 
setTimeout(() => console.log('Async Task'), 5000); 
console.log('End'); 

/**
 * Output: 
 * - Start 
 * - End 
 * - (5 second later) 'Async Task'  
 */ 

