//* Callback functions in Javascript

/**
 * ? Callback function in Javascript
 *  - callback function are those when we are passing function (as reference) as argument to other function for perform some specific task.
 */

function addition(one, two) {
  console.log(`result: ${one + two}`);
}

function subtraction(one, two) {
  console.log(`result: ${one - two}`);
}

function multiplication(one, two) {
  console.log(`result: ${one * two}`);
}

function division(one, two) {
  console.log(`result: ${one / two}`);
}

function calculator(one, two, operation, callback) {
  switch (operation.toLowerCase()) {
    case "addition":
      callback(one, two);
      break;
    case "subtraction":
      callback(one, two);
      break;

    case "multiplication":
      callback(one, two);
      break;

    case "division":
      callback(one, two);
      break;

    default:
      console.log("chose only basic 4 calculator operation");
  }
}

calculator(25, 50, "Addition", addition);
calculator(50, 30, "subtraction", subtraction);
