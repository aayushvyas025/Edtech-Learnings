//* Continue and Break Statement

/**
 * ? Break Statement
 *  break statement are used to break the loop and stop the execution of loop
 */

// Example of break statement
function breakLoop(startPoint, endPoint, breakPoint) {
  for (startPoint; startPoint <= endPoint; startPoint++) {
      console.log(startPoint); 
    // Here we are checking the i and breakPoint same than break loop and stop execution
    if(startPoint === breakPoint) {
        break; 
    }
  }
}

breakLoop(1, 100, 69); 

/**
 * ? Continue 
 * - continue statement is used for skips the iteration of our loop 
 * 
 */ 

function skipTheLoopIteration(startPoint, endPoint, skipIteration) {
    for(startPoint; startPoint < endPoint; startPoint++) {
        // When the startPoint and skipIteration becomes equal than skip that particular iteration
        if(startPoint === skipIteration) {
             continue; 
        } 
        console.log(startPoint); 
    }
}

skipTheLoopIteration(1, 10, 5); 