//* Callback hell in Javascript

/**
 * ? Callback Hell in Javascript
 *  Callback hell is also known as `Pyramid of Dooms` is an anti-pattern in Javascript where multiple asynchronous operation are nested in one another using callback function.
 *
 *  They are nested because each task depends on the result of previous one, the code indents deeper with every step, making it difficult to read, debug and maintain.
 *
 * ? Why it happens
 *  Javascript executes code sequentially on a single thread. To handle time consuming tasks like API Calls, file reads, or database queries without blocking the main thread, developers pass callback functions to execute once a task finishes. When you need to run several dependent asynchronous task in a strict order, nesting callbacks becomes the default
 *
 * Let understand with example
 * Suppose on e-commerce you are purchase any product and developer create flow of purchase with callback hell than, it look like this
 */

const user = {
  id: "userAv01",
  fullname: "Aayush Vyas",
  orders: ["Iphone", "Gaming Laptop"],
};

// This all are DB operations
function getUser(user, callback) {
  callback();
  console.log("User purchase product successfully");
}

function getOrders(id, callback) {
  callback();
}

function getOrdersDetail(orderId, callback) {
  callback();
}

function paymentProcess(details, callback) {
  callback();
}

// Let's create flow of purchase with the help of callback hell
getUser(user, function (user) {
  // This callback function call the getOrders function
  getOrders(user.id, function (orders) {
    getOrdersDetail(orders.id, function (details) {
      paymentProcess(details, function (receipt) {
        console.log("Payment Complete: ", receipt);
      });
    });
  });
});

// This above callback Hell Creates Problem to read and understand 

/**
 * ? Key Problems with Callback Hell 
 * - Poor Readability: Deep horizontal Indentation Obscures the logical flow of the program and makes matching closing brackets tedious. 
 * 
 * -  Complex Error Handling: You must write separate error-checking logic at every single nested level rather than handling errors in one central places. 
 *  
 * - Inversion of Control: Passing a callback hands control of your program's execution over to a third-party function or API, forcing you to trust that it will invoke your callback properly and only once.  
 * 
 * - Difficult Debugging: Tracing bugs and stack traces through layers of anonymous nested functions takes significantly more effort.
 */

/**
 * ! How to avoid callback Hell ? 
 * Modern Javascript provides in-built features and design pattern to flatten asynchronous operations code by promises, promises-chaining, async-await function , fetch API methods 
 */