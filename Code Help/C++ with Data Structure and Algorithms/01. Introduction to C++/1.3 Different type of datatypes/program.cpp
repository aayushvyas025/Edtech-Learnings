#include <iostream>
#include <iomanip>
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
    cout << dbl_num << endl; // Output: 225.789 
    /**
     * ? Why the output is roundof to 255.789 not print 255.7889 
     * 
     * ? Why happening 
     *  This is happening because of default decimal precision and floating point-representation in C++'s cout, not because double is storing only three decimal points.   
     * 
     *  Let understand step by step  
     *    our code 
     *    double dbl_num = 255.7889; 
     *     cout << dbl_num << endl;  
     *   
     *  Output: 
     *    255.789  
     * 
     * ? Why does is happen 
     *    By default, C++ cout uses a precision of 6 significant digits when displaying floating-point numbers 
     *    Notice that significant digits are different from decimal places. 
     *    
     *    For example:  
     *     Number                                       Significant digits 
     *     255.7889                                          7
     *     255.789                                           6 
     * 
     *  That's mean default show 6 digits including  decimals also  
     * 
     * ! Important: Your `double` variable still stores an approximation of the original decimal value. `cout` is only limiting how many digits is display. 
     *  
     * ? How to display the complete decimal value ?  
     *  You can use setPrecision(n) from <iomanip> header. 
     *  
     * ? iomanip header file : 
     *  The <iomanip> header in C++ is part of the standard input/output library that provides parametric stream manipulators. These functions allow you to control how data is formatted and displayed on the console or read from streams without changing the underlying value. 
     * 
     * You must include #include<iostream> at the top of our file to use these functions, all of which reside in std namespace.   
    * 
    * ? Let how we set decimal precision for our double and float point  with setprecision(n)
     */ 

   cout << "double point value with precision: " << setprecision(10) << dbl_num <<endl;  // Output: double point value with precision: 225.7889 

   /**
    * ? We use fixed keyword also which display exactly four digits after the decimal 
    *  let understand practically 
    */
   cout << fixed << setprecision(4) <<  dbl_num << endl;  

   /**
    * ? Difference between precision and fixed 
    *  Manipulator         |      Purpose 
    * - setprecision(n)   |  display 6 significant digit default 
    *                     |
    * - fixed             |  Changes precision to count digits after the decimal 
    *                     |
    * - fixed <<          |  Display exactly 4 digits after the decimal   
    *   setprecision(n)   | 
    * 
    * ! Important to Understand 
    *   - float generally provides about 6-7 decimal digits of precision. 
    *   - double generally provides about 15-16 decimal digits of precision. 
    *   - cout has a default precision of 6 significant digits. 
    * 
    * ! Both float and double use binary floating point representation. Therefore, some decimal values cannot be represented exactly in memory   
    */
    
   /**
    * long datatype for storing integer numbers only but having bigger range than integer type 
    */
    
    long number_one = 2556; 
    cout << number_one << endl;  

  /**
   * short datatype for storing integer numbers but it's range is lesser as compare to integer mainly we used to preserve or save our memory compared to standard int datatype. 
   */
   short number_two = 125; 
   cout << number_two << endl; 

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
     *  As we know that computer system is machine which have circuit also so every data stored convert decimal into binary in program memory.
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
    
      // double datatype 
      cout << sizeof(dbl_num) << endl;  
      // Output: 4 means 8 Byte means 64 bits  
      
      // long datatype 
      cout << sizeof(number_one) << endl;  // Output: 4 means 4 Byte means 32 bit  

      // short datatype 
      cout << sizeof(number_two) << endl; // Output: 2 means 2 Byte 

      // char datatype 
      cout << sizeof(my_char) << endl; // Output: 1 Byte means 8 bits  

      // bool datatype 
      cout << sizeof(isAdult) << endl; // Output: 1 Byte means 8 bits 
      /**
       * ! In bool only 1 bits needed to save our bool data because it's have only two value 0 and 1 and other 7 bits are going wasted but we use byte as standard unit for computer memory 
       */


       /**
        * ? Range of Datatypes  
        *  - Every primitive datatype have ranges to store maximum/minimum amount of data in it. 
        *  - We can find the ranges of datatype with formula of 2 the power n - 1 `2^n-1` where n represent n numbers of bit 
        *  - Binary numbers have only 0 and 1 value so its outcomes always comes 2 only 1 or 0  
        * 
        *  ? So in programming data stored in two ways signed and unsigned data 
        * 
        *  - Unsigned data type (Positive and zero only numbers) 
        *    Formula: 0 to 2^n - 1  
        *    Why: All `n` bits are used for the number itself. We subtract 1 from 2n because counting starts from 0. 
        *   Example: 1 Byte (8-bit unsigned): 0 to (2^8 - 1) --> 0 to 255 
        * 
        *  - Signed data type (Both Negative and Positive numbers) 
        *    Formula: -2^(n-1) to 2^(n-1) - 1 
        *    Why: One bit (the leftmost bit) is reversed to store sign (0 for positive, 1 for negative) leaving n - 1 bits for actual value. 
        *    Example: 1 Byte 2^(8-1) to 2^(8-1) - 1 = 2 ^ 7-1 to 2^7 -1 = -128 to 127  
        */
     
        /**
         * todo Assignment 
         *  - Decimal to Binary & Binary to Decimal Number System 
         *  - How data stored in our program memory 
         *  - After understanding data stored in memory find how formula of range datatype is working correctly 
         */
    return 0;
}