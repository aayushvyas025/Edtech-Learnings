//* async-await function 

//? What is JSON 
/** 
 * JSON  stands for `Javascript Object Notation`. It's just a text format for sending and storing data - think of its as a way to write simple javascript object as plain text so, they can travel between a browser and server  (or any two programs, in any language). 
 */

//* Example of JSON  
/* 
{
    "name":"Bhopal",
    "temperature":32, 
    "isRaining":false, 
    "forecast":["Sunny", "Cloudy", "Rainy"]
} 
*/ 

/** 
 * This json is almost exactly like a Javascript Object, because that's literally where the name comes from. the rules are just slightly stricter. 
 * 
 * * Property names must be in double quotes ("name", not name, not 'name') '
 * * No trailing commas, 
 * * No Functions, no comment - just data (strings, numbers, booleans, arrays, objects, null)
 */ 

//* Why it exists 
/** 
 * - Servers can't send you can actual Javascript object over the internet - they can only send text. 
 * - JSON is agreed upon text format everyone converts data into before sending, and converts back once it arrives.
 * 
 * * JS object   -->  JSON text  -->  sent on the internet  -->  JSON text  -->  JS Object  
 * *  (you)           (server)         (JSON Data)               (server)       (you, object)
 */ 


//? Async Await function 
/** 
 * - Reading a file (or calling an API) takes time - even if it's tiny, it not instant. Javascript doesn't want to freeze the whole page while waiting, so fetch() doesn't hand you the data immediately.  
 * - fetch() function is used to fetch json data which hands you a `Promise` a placeholder that's a data.    
 * - async-await function is the cleaner way to perform async operation. it's pause the function here until the promise done, then continue with the result. 
 * 
 */

//* Syntax of async-await function 
/** 
 * async <function-name>()  {  
 *   logic of async operation  
 *    await Promise 
 * }
 * * async keyword makes the function async and await.
 * * await keyword wait upto the data comes and it's return Promise.  
 * * async-await function returns Promise only. 
 */

async function fetchWeather() { 
    try {
        const response = await fetch('./data.json'); 
        const data = await response.json(); 
        console.log(data); 
    } catch (error) {
        console.error(`Error, while fetching weather ${error.message}`);
    }
 } 

fetchWeather(); 
// We use the async-await function for the async operations 

