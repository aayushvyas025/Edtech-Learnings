//* Async and await keyword function

/**
 * ? async and await function
 *   - `async` - `await` keywords is wrapper function to perform asynchronous Promise task more effectively.
 *   - `async` and `await` are javascript keywords that make asynchronous, promises based code look and behave like synchronous code. They remove the need for deeply nested .then() chains while keeping execution non-blocking.
 * !  - async await keyword always return the promise only.
 *
 * ? Core keys
 *   - The `async` keyword. Placing `async` before a function declaration ensures the function always return a new Promise. If you return a plain value which automatically wraps it in a resolved Promise.
 *  - The `await` keyword. Using await inside `async` function only which pauses the function execution until the Promise settled. Once settled, it unwraps and return the resolved directly.
 */

// Example of async-await function

function userData(boolValue) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (boolValue) {
        resolve({
          success: true,
          message: "Data fetched Successfully",
          data: [
            {
              id: 1,
              name: "John Doe",
            },
            {
              id: 2,
              name: "Jon Wright",
            },
            {
              id: 3,
              name: "Peter Stand",
            },
          ],
        });
      } else {
        reject({
          success: false,
          message: "Error, while fetching Data",
          data: null,
        });
      }
    }, 3000);
  });
}
 

// Now we are using async-await function 
async function fetchUserData() {
 // For safe fetching data from user we are using error handling try-catch block 
 try {
    console.log('Fetching Data')
     const response = await userData(true);
     console.log(response);
 } catch (error) {
    console.error(`Error, while fetching userData`)
 }finally {
    console.log(`Data fetched Successfully`)
 }
}

fetchUserData();