//* Multi-dimensional Arrays in Javascript

/**
 * ? Multi-dimensional Arrays in Javascript
 *  Javascript doesn't have the native multi-dimensional of array we can create multi-dimensional array with the help of arrays of array by nesting.
 *  Where outer arrays represent the rows and inner arrays consider as columns.
 */

const matrixArr = [
  [2, 4, 6],
  [8, 10, 12],
  [14, 16, 18],
];

// matrixArr is of 3X3 
// console.log(matrixArr); 

/** 
 *  How we can access the elements of an 2d array 
 *  We have to use double bracket [][] for an array 
*/

console.log(matrixArr[1][2]);  // Here we are accessing the first row and 2 element of an array : 12 
console.log(matrixArr[2][1]); // Here we are accessing the second row and 1 element of an array : 16 

// How we can iterate over the 2d array with loops 

// for loop 
for(let row = 0; row< matrixArr.length; row++ ) {
    for(let col = 0; col < matrixArr[row].length; col++) {
        console.log(matrixArr[row][col])
    }
}

// For of loop 
// Here we have to loop 2 times 

for(let row of matrixArr) {
    for(let col of row) {
        console.log(col)
    }
}