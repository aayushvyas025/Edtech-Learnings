#include <iostream> 

int main() {
  /**
   * ? How data stored in memory ? 
   *  Let understand how data stored in memory from first principle 
   *   
   *  Our goal is to understand: 
   *   - How C++ Stores integer values 
   *   - What signed and unsigned means 
   *   - How C++ stores floating-point values 
   *   - When to use `int`, `unsigned int`, `float`, and `double` in real development 
   * 
   *  ?  First, understand what happens when you declare variables 
   *      
   *   Consider this code:  
   */ 
     int age = 25; 
     std::cout << age << "\n"; 

    /**
     * As a developer, you should understand four things: 
     *   Part   |   Meaning  
     *  - int   | Data type 
     *  - age   | Variable name 
     *  - 25    | value 
     *  - =     | assignment operator 
     *  
     *  When this code executes, C++ creates an object named `age` with automatic storage duration (assuming it's declared inside a function.) 
     *  
     *  Typically, an `int` occupies 4 Byte 
     *  Those 4 Bytes contains the binary representation of the value 25  
     *   int var = 25; 
     *     25 (base 10)  = 11001 (base 2)
     *   
     *  <----------------------------------- 4 BYTE = 32 Bits ---------------------------------------------> 
     *   00000000                00000000                00000000                            00011001 
     *    Byte4                   Byte3                     Byte2                               Byte1   
     *   memory address:153    memory address:152     memory address:151                 memory address:150
     * 
     * ! Important concept to understand `A variable has a datatype, a value, a size, and a memory location. The data type determines how c++ interprets the bits.   
     * 
     * 
     */

     /**
      * ? 2. Signed and Unsigned integers in C++ 
      *   Let's start with a real development example 
      *   
      */

    return 0; 
}