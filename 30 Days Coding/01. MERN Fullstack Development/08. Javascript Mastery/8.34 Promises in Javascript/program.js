//* Promises in Javascript

/**
 * ? Promises in Javascript
 *  - In Javascript, Promises are special type of an object which representing the eventual completion or failure of asynchronous operation.
 * - It acts as placeholder for a value that is not yet available, allowing non-blocking execution for task like API calls, file reading, or timers.
 * - Promises have three states also for our eventual completion of async operation which are fulfilled, reject and pending which is default.
 *
 * ? Three States of Promises:
 *  - Pending: The initial state before the asynchronous operation finishes.
 *  - Fulfilled: The operation completed successfully and produced a resulting value.
 *  -  Rejected: The operation failed and returned a reason or error.
 *
 * Once a promise is either fulfilled or Rejected, it is considered as settled and it's state can't change again.
 *
 * ? Creating and Consuming Promises:
 *  We create promises using constructor Promise which takes an executor function with resolve and reject function let's understand with syntax and Example
 *
 * ? Syntax of Promise
 *  new Promise((resolve, reject) => {
 *        Here resolve and reject are callback func
 *    })
 *
 */

// Example of Promises
function downloadFile(file) {
  // This function return promise if the async operation completes
  return new Promise((resolve, reject) => {
    if (typeof file === "string") {
      resolve("File downloaded successfully");
    } else {
      reject("File not downloaded");
    }
  });
}

/**
 * For consuming promises we use chaining methods which are:
 * .then() for retrieve success state data
 * .catch() for error handling when promise is rejected,
 * .finally() method is using for completion indicator or for cleanup tasks.
 */

const result = downloadFile("spiderman movie")
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));
