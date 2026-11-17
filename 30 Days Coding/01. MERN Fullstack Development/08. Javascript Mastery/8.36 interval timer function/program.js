//* setInterval and clearInterval function

/**
 * ? setInterval and clearInterval function
 *
 *  setInterval
 *   • setInterval is not a native part of the core JavaScript language. Instead, it is provided by the host environment, such as Web APIs in browsers or the runtime environment in Node.js.
 *
 *  • It is a non-blocking timer function. It repeatedly executes a specified function after a set delay without pausing or blocking the rest of the program's execution.
 *
 * clearInterval
 *  • The clearInterval() method in Javascript stops a repeating timer that was previously started with setInterval() function
 *
 * ? Let understand setInterval() and clearInterval() function with example
 */

function count(start, end, mid = null) {
  // debugger;
  const timerId = setInterval(() => {
    console.log(start);
    start++;

    // custom stop
    if (mid) {
      if (start > mid) clearInterval(timerId);
    }

    if (start > end) {
      clearInterval(timerId);
    }
  }, 1000); // after 1 sec
}

count(51, 100);
