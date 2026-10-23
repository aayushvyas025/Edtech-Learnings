//* Looping in Javascript

/**
 * ? Looping in Javascript
 *  - looping in programming mechanism to perform any specific task repetitively for certain condition or duration.
 *  - For looping we have loops in our programming language we perform this repetitive task programmatically.
 *  - This all loops follow DRY principle which means `Don't Repeat Yourself`
 *  - Assume that you have to print 5 times your name than you can print with ease with console.log manually but what if you want to print your name 500 or 1000 times than we have to use loops rather than using console.log 500 or 1000 times.
 */

/**
 * ? Different types of loops
 *  In programming language, mainly we have three types of loops let explore and understand how they work.
 */

/**
 * ? for loop
 *  -> for loop is used to perform looping task in our program.
 *  -> for loop is entry control loop and mainly use when we know iteration to execute our loop.
 *
 * ? Syntax of for-loop
 *   for(initialize-variable, loop-condition, update-looping variable) {
 *        logic of our loop
 *     }
 */

// example of for-loop - Print number from 0 to 1000
for (let num = 1; num <= 1000; num++) {
  console.log(num);
}

/**
 * ? While-loop
 *  -> While loop is another loop to perform looping task and it is also entry controlled loop.
 *  -> While loop is use when we don't know the iteration to execute our loop.
 *
 * ? Syntax of while-loop
 *
 *  initialization of variable
 *
 *   while(condition of loop) {
 *
 *      logic of while-loop
 *      update-looping variable
 *     }
 */

// Example of while loop: print even numbers from 1 - 200

let number = 1;

while (number <= 200) {
  if (number % 2 === 0) {
    console.log(number);
  }

  number++;
}

/**
 * ? do while loop
 *  - In programming, we have do-while loop also for perform looping and this loop is special because exit control loop
 *  - do-while loop default iterate once if condition becomes failed also. 
 * 
 * ? Syntax of do-while loop
 *  initialize the variable
 *  
 *  do { 
 *      logic of loop 
 *      update-looping variable 
 *     } while(condition)
 */

do {
    if(number % 2 !== 0) {

        console.log(number); 
    }
    number++; 
} while(number <= 400)

//! Here for and while loop is entry controlled and do-while loop is exist control loops 