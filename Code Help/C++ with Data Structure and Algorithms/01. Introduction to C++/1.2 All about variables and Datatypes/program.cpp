#include <iostream> 
using namespace std; 


int main() {

    //* All about variables and datatypes in C++
    
/**
 * ? Variables in Programming
 *   - variables are the fundamental storage unit in our program which mainly use to store program's data.
 *   - when we store data or value in our program behind the scene it's create memory block or memory space in our program's memory with specific  address associated with it.
 *  - That memory block we access through variable identifier `name` for output or update our data 
 * ! In our computer system we store data in `bytes` it's standard unit for data  and 1 byte = 8 bits 
 *
 * ? Syntax of variable
 *  <type> <variable-identifier> = data/value;
 *
 *
 */

// Example of variable 
int myAge = 255;
cout << myAge << endl;   
/**
 * Here int -> datatype which specifies the size and type of information will variable store in our example we are storing integer type data in our variable. 
 * myAge -> MyAge is identifier/name to access the variable by reference. 
 *  = -> assignment operator to assign the value or data to variable 
 * 255 -> data or value 
*/

/**
 * ? Datatypes in C++ 
 *  Programming language facilitate data for processing, manipulation, and calculation in our program for creating software, programming etc.  
 *  This data are classified into different type which are mainly classified in Datatypes like integer, float, character, boolean, etc. 
 * 
 * ! - Datatype give two important information related to data we are storing in C++ 
 *     -- 1st. type of data we are stored in our variable
 *     -- 2nd. Size of data.  
 */

 // Example of datatypes in C++ 
 int rollNumber = 02;  
 // Here we creating rollNumber variable which having integer value 02 
cout << rollNumber << endl; // Output: 02  

/**
 * ? Declaration and Initialization of Variables  
 * 
 *  ? Declaration of variable: 
 *  When we declare or create our variable but don't assign value/data than it's known as Declaration of variable. 
 *  
 * ? Initialization of variable: 
 *  When we declare variable and assign value/data to it than it's know as initialization of variable.  
 * 
 * Let understand practically with examples 
 */ 

 int number;  // declaration of variable 

 // let's print number variable 
 cout << number << '\n';  
 // Output: 4201024 random 7 digits number 
 /**
  * ? this random generated number is garbage value which generate on every execution  
  */ 

int numberOne = 2;  // initialization of variable 
cout << numberOne << endl; 

// update the variable  
number = 100; // updating number var 
cout << number << endl; 






  return 0; 
 }