#include <iostream>

/**
 * ? What is #include in our c++ program 
 * - `#include` is pre-processor directive, They are speical instructions that are processed by the preprocessor before the actual compilation of our code begins. 
 * - Every directive starts with a hash/pound symbol `#` occupies its own line, and does not end with semicolon. They essentially manipulate the source code text before passing it to the compiler. 
 *  
 * We have different type of preprocessor directive 
 * ?  Category          |   Directives    | Primarily Purpose         |   Example 
 *   File inclusion       #include         Inserts the content of        #include<isotram>
 *                                        another file into current
 *                                        file. 
 * 
 *  Macro definition    #define           Creates or removes text      #define PI 3.14 
 *                      #undef            substitution macros and 
 *                                        constant 
 * 
 * Conditional       #if, #elif, #else,     Compiles or skips sections   #ifdef DEBUG 
 * Compilation       #else, #endif, #ifdef,  code based on specific  
 *                   #ifndef                 conditions   
 * 
 * Diagnostics/       #error #warning        Forces the compiler to emit  #error "Unsupported OS "
 * Error Control                             a custom error or warning  
 *                                            message. 
 * 
 * Compiler          #pragma                 Issues non-standard           #pragma once 
 * Instruction                               implementation - defined 
 *                                            commands to the compiler 
 * 
 *  Syntax and Key Usage for File Inclusion 
 *  
 * - Angle Brackets <> : Used for standard library headers. Compiler searches in standard system directories. example: #include<iostream>
 * - Double Quotes "  ": Used for user define local files. The compiler searches the current project folder list. example: #include "my_header.h" 
 */  

 
 using namespace std; 

 /**
  * ? Can we use other way to declare std library namespace instead of using globally namespace statement 
  *  
  *  What is Namespace ?  
  *  - Think of a namespace like  family last name. If you have two named "John" in the same room, it causes confusion. But if one is 'John Smith' and other is 'John Doe', you can easily tell them apart or recognise them apart. 
  *   
  * - In programming, a namespace acts as a container that groups related functions, variables, and classes together under a single name. This prevents naming collisions - which happen when you write a function that has the exact same name as a build-in tool or a third party library.  
  * 
  * Ways to  use standard library in C++ 
  *  
  * ? 1st. The Scope resolution operator (::) 
  * - The double colon (::) is called scope resolution operator. It tells the compiler exactly where to look for a methods in our program or 
  * 
  * 
  * - When you type std::cout , you are telling to compiler that 'Look inside the std namespace container, find cout functionality and use it.  
  * 
  * ? 2nd. Using namespace std;  statement 
  *   You will often seen that beginners and competitive programmers using `using namespace std` at the top of their files 
  *  While save you from typing std:: 'Scope resolution operator' repeatedly, it is generally discouraged in large or professional projects. Importing the entire namespace dumps thousands of standards C++ names into your global code space, which drastically increases the risk of accidental naming conflicts (know as namespace pollution). 
  * 
  * ! Explicitly typing std:: keeps your code clean, predictable and collision free.  
  */

 int main() {
    cout << "Hello" << endl; 
    std::cout << "World" << '\n'; 
   // Here we are using std library namespace with scope resolution operator std:: 
   
   /**
     * ? How we can start our execution from new line in C++ 
     *  To start the execution or printing of text from a new line in C++, you can break the output using either the escape sequence 'new line character' or the stream manipulator endl 'end the line'  
     * 
     * Let explore and understand both methods in depth. 
     *  
     * 1. Using the `\n` Escape sequence (Recommended for speed) 
     *  The `\n` character is placed  directly inside double quotes (""). It tells the compiler to move outout cursor to the next line immediately.  
     *  The escape sequence is also known as new line character also. 
     * ! escape sequence is native to c language which default added in c++ because it's extension of c language 
     */
    
     std::cout << "Hello\n Again\n"; 
     // Here in above line of code "Hello" first print than execution starts printing from new line before Again 
    
    /**
     * 2. Using the std::endl Manipulator 
     *  The std::endl manipulator stands outside of quotation marks. It moves the cursor to a new line and flushes the output buffer (forces the text to appear on the screen immediately). 
     * 
     * 
     */ 

     /**
      * ? Summary Comparison 
      *  Method    |   Syntax                 | Performance                   |  Use Cases 
      *  \n        |  Inside quotes:"Text\n"  | Faster(don't flush buffer)    | General text formatting and loops 
      *  std::endl | Chained with `<<`:`<<`  | Slower (forces a buffer flush) | Debugging or interactive console inputs 
      */
     return 0; 
   
 }



