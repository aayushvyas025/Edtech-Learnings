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

// Q5. Write a function that takes a string and returns the reversed version of it 

// version first : for loop 
function reverseStrOne(str="") {
  let reverseStr = ''; 
  for(let idx = str.length - 1; idx >=0; idx--) {
    reverseStr += str[idx]; 
  }

  return reverseStr; 
}


let resultStr = reverseStrOne('Aayush'); 
console.log(resultStr); 


// version second: array and string conversion methods 

function reverseStrTwo(str="") {
 const strArr = str.split(""); 
return strArr.reverse().join("")
}

resultStr = reverseStrTwo('Kratik'); 
console.log(resultStr); 

// Q6. Write a function that checks if a given number is even or odd and return string output as 'Even' or 'Odd' 

function checkEvenOdd(num) {
  if(typeof num !== 'number') console.log('Please, pass number as an args'); 

  if(num % 2 === 0) {
    console.log('Even'); 
  }else {
    console.log('Odd'); 
  }
}

// checkEvenOdd('QQ'); 
checkEvenOdd(555); 
checkEvenOdd(200); 
