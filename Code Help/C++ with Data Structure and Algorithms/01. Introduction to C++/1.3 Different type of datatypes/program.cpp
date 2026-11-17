#include <iostream>
using namespace std;

int main()
{
    /**
     * ? Different types of datatype in C++
     *  Mainly in programming datatypes are divided into sub-types which are:
     *  1st. Primitive datatype
     *    - This primitive datatype are inbuilt datas which are immutable and we used to store simple or basic data in our program.
     *
     *  2nd. Non Primitive datatype
     *    - This Non-primitive are derived datatypes from primitive datatype that's why they are known as `Derived datatype` also.
     *    - They are mutable in nature and we can store complex datas with in like multiple primitive.
     *
     *  3rd. User Derived datatype
     *   - They are derived from user or created from developer from existing built-in (primitive) datatypes for custom datatypes for solving real-world data
     */

    /**
     * ? Exploring and Understanding different primitive datatypes
     */
    /**
     * int datatype for integer type data
     */
    int num = 25;
    cout << num << endl; // Output: 25
    /**
     * float datatype for decimal data or floating point data
     */

    float float_num = 25.667;
    cout << float_num << endl; // Output: 25.667

    /**
     * char datatype for storing characters in our program
     */
    char my_char = 'A';      //! for character always use single quote not double
    cout << my_char << endl; // Output: A

    /**
     * double datatype for storing decimal numbers only but having bigger range than float type
     */
    double dbl_num = 225.7889;
    cout << dbl_num << endl; // Output: 225.789 // todo  Assignment why the output is 225.789 instead of 255.7889 
    
   /**
    * long datatype for storing integer numbers only but having bigger range than integer type 
    */
    
    long number_one = 2556; 
    cout << number_one << endl; 

    /**
     * bool datatype for storing logical type which creates conditional logic in our program
     *  bool datatype have two value only true and false which in C++ represent in integer 1 means true and 0 for false.
     *
     */

    bool isAdult = true;
    cout << isAdult << endl; // Output: 1 means true

    /**
     * ? Understand under the hood how data is stored in our program
     * We understand that whenever we create variables than memory block is created in our program memory
     * for example:
     *  we create int age = 25 ----> in program memory  ---> block of memory assign to age variable where 25 data is saved.
     *
     *  similarly ...
     * we create float decimalNum = 25.66 -----> in program memory -----> block of memory assign to decimalNum variable where 25.66 data is saved.
     *  we create char myChar = 'A' -----> in program memory -----> block of memory assign to myChar variable where 'A' data is saved.
     *
     *!  Now actually data is saved in this format only or other format ??? 
     *  As we know that computer system is machine which have circuit also so every data stored in the decimal format only it's convert decimal into binary in program memory.
     * 
     *
     * todo Assignment:
     *   1. Understand how we store data in our program like how integer, char, bool, float, double stored.
     *   2. How's positive and negative number stored in memory 
     */ 

     /**
      * ? Size of datatypes in C++  
      *   As we understand that this datatypes takes memory size in our program memory and in c++ the memory size of datatypes are machine dependent it's vary according to computer system machine specification. 
      *  
      * In c++ we have inbuilt utility function to check the size of our datatype with the help of sizeof() 
      *  
      * ? sizeof() method  
      *  - In C++ sizeof() is unary compiled time operator that returned the memory size of variable or data types in `bytes`   
      * todo It returns an unsigned integer value of type std::size_t Understand this also !!!! 
      */

      /**
       * Let practically find memory size of variable with sizeof operator 
       */ 
     // int datatype 
       cout << sizeof(num) << '\n'; // Output: 4 
       /**
        * ? Here Output: 4 means Bytes and in 1 BYTE = 8 bits so, 4 * 8 = 32 bits memory space takes by integer datatype in c++ program memory 
        */
   // float datatype 
      cout << sizeof(float_num) << endl; // Output: 4 it means it also takes 4 Byte of memory block size in our program memory 
    
      // double 

    return 0;
}