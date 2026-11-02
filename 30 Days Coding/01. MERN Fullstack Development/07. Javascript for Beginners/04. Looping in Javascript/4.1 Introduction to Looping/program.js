//* Looping in Javascript 

/**
 * ? What is Looping ? 
 *  - Looping is the process to execute repetitive task for certain iteration. 
 *  -  Time consuming repetitive task are perform through looping also. 
 *  - For looping in programming language have loops which follow DRY principle  
 */

/**
 * ? For-loop 
 *  - For loop is entry control loop which use for looping. 
 *  - For-loop is prefer when we know when upto to iterate our loop 
 *  
 * ? Syntax of for-loop 
 *  for(loop-variable, loop-condition, loop-variable-updation) { 
 *        Logic for-loop are implement inside this for-loop scope 
 *   }
 */ 

// Example of for-loop 
/**
 * We can loop through string also and strings are iterable 
 */ 

// Example One 
const name = "Aayush"; 
const nameLength = name.length; 

for(let idx = 0; idx < nameLength; idx++) {
    console.log(name[idx]); 
}

/**
 * Output: 
 *  A 
 *  a
 *  y
 *  u
 *  s
 *  h
 */

// Example Two: Print Number 1 - 10  
for(let num = 1; num <= 10; num++) {
   console.log(num)
}

// Example Three: Print Even between 50 - 1 
for(let num = 50; num>= 1; num-=2) {
   console.log(num); 
}

/** 
 * ? While loop 
 *   - While loop is also use for looping and it's also entry control loop 
 *   - while loop is prefer when we don't know at what upto we have to iterate our loop 
 * 
 *  Syntax of while loop 
 * 
 *  <looping-variable> In while loop variable initialize outside our loop 
 * 
 *  while(loop-condition) { 
 *        logic implementation of while-loop 
 *        
 *        <looping-variable-updation>
 *     }
 */ 

// Example One: Print table of 2 
function table(userNum, upto) {
    let number = 1; 
    while(number <= upto) {
        console.log(`${userNum} X ${number} = ${userNum * number} `); 
        number++; 
    }
}

table(2, 100); 

/**
 * ? Do While-loop 
 *  - Do while loop is also used for looping and it is exist control loop 
 *  - Do while loop execute one iteration by default, if do-while loop condition failed 
 * 
 *  ? Syntax of do-while loop 
 *    <looping-variable>
 *   
 *   do { 
 *        loop logic implementation 
 * 
 *         updation-looping-variable
 *    } while(<while-loop-condition>)
 */ 

let iterableNumber = 1; 

do {
   console.log(iterableNumber); 
   iterableNumber++; 
}while(iterableNumber <= 10); 

// case when condition failed 

let iterableNumberOne = 1; 

do {
   console.log(iterableNumberOne); 
   iterableNumberOne++;
}while(iterableNumberOne < 0);  // Here 1 < 0 but do-while loop execute once so output 1 



