//* Function inside function

/**
 * ? Function inside function
 *  --> When we write function inside function are known as `Nested Function`.
 *
 */

// Example of Function inside function

function outerFunc() {
  console.log(`Outer Function`);
  function innerFunc() {
    console.log(`Inner Function`);
  }

  return innerFunc; // we are passing as function reference
}

// outerFunc()?.(); // We can call like this also

const resultOutput = outerFunc();
resultOutput();

function parentFunc(str) {
  return function () {
    console.log(str); 
  };
}

const resultedFunc = parentFunc('Hello How are you'); 
resultedFunc(); 