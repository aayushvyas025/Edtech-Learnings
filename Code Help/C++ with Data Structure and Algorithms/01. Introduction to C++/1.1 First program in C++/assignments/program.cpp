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
  * Ways to standard library  
  */

 int main() {
    cout << "Hello" << endl; 
    std::cout << 'World' << std::'\n'; 
    return 0; 
   
 }



