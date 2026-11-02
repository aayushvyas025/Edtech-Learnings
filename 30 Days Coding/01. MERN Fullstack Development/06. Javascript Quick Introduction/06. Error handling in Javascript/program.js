//* Error Handling in JavaScript

//? What is Error Handling in Javascript ?
/**
 * Error handling is Anticipating the things can go wrong and dealing with them gracefully - instead of letting whole application crash when something unexpected happens (a failed api call, invalid user input, a bug in your logic).
 */

//* 1st. try-catch block
// Mainly we used try-catch block for error handling

// Here we create dummy api asynchronous task with promises
const uploadMedia = function (file) {
  if (!file) return;
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (typeof file !== "string" || !file.trim()) {
        reject({ success: false, message: "Error, uploading file" });
      } else {
        resolve({ success: true, message: "file uploaded successfully" });
      }
    }, 1000);
  });
};

/**
 * Syntax of Try-catch block
 *
 *  try {
 *     Here all the success asynchronous task logic will be implemented
 *   } catch(error)  {
 *    here all the error asynchronous task logic will be implemented
 *   }
 */

// We are using async-await function

async function uploadingData(url) {
  if (typeof url !== "string" || !url) return;
  try {
    const response = await uploadMedia(url);
    console.log(response);
  } catch (error) {
    console.error(`Error, while uploading file: ${error}`);
    return { success: false, message: "Error, while uploading file" };
  }
}

// Case One
// uploadingData("program.js"); // resolve case which handle with grace
// Case two
// uploadingData(1234); // reject case which also handle grace neither breaking our code.

//* 2nd finally block
/**
 *  -> finally block main purpose of cleanup if the function returns success state or error state, it run and execute always
 * -> We used finally with try-catch block only not individually
 *
 * * Syntax of finally block
 *  try {
 *    handling the success logic of asynchronous task
 *   } catch((error)  {
 *    handling the error logic of asynchronous task
 *   }finally {
 *      handling the cleanup of the function it state's that function execution is completed.
 *    }
 */

function processData(boolFlag) {
  if (typeof boolFlag !== "boolean") {
    throw new Error("Pass the boolean value");
  }
  try {
    console.log("Processing data started....");
    setTimeout(() => console.log("Processing........"), 3000);
    setTimeout(() => console.log("Processing Stopped and Completed"), 5000);
  } catch (error) {
    console.error(`Error, while processing data`);
  } finally {
    setTimeout(() => console.log("Data is Processed and ready to use"), 6000);
    //* finally block always runs - cleanup, closing connections, hiding loaders etc.
  }
}

// processData(true);

//* 3rd. throw keyword
// throw keyword helps to create our own errors, you're not limited to catching errors JS given you, - you can throw your own logic detect problems

// example of throw

function withdrawAmount(balance = 0, amount = 0) {
  if (amount > balance) {
    throw new Error("Insufficient funds");
  }
  balance -= amount;
  console.log(`Your account balance: ${balance.toLocaleString()} Rs`);
}

// withdrawAmount(2, 4);
// here my balance is 2 and amount withdraw is 4 than what happens

withdrawAmount(20000000, 25000); 