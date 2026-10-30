document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Content loaded Successfully");

  // Q1. Print Hello World to the Console
  console.log("Hello World");

  // Q2. Print the number from 1 to 5 through loop

  // for loop
  for (let num = 1; num <= 5; num++) {
    console.log(num);
  }

  // while loop
  let numOne = 1;

  while (numOne <= 5) {
    console.log(numOne);
    numOne++;
  }

  // Do-while loop
  let numTwo = 1;
  do {
    console.log(numTwo);
    numTwo++;
  } while (numTwo <= 5);
});

// Q3. Write a function to add two numbers and return the result

function sum(valOne, valTwo) {
  return valOne + valTwo; 
}

let result = sum(5, 15); 
console.log(result); 

// Q4. Write a function to calculate area of rectangle 

function areaOfRectangle(width, length) {
  return width * length; 
}

let areaResult = areaOfRectangle(22, 30); 
console.log(areaResult); 