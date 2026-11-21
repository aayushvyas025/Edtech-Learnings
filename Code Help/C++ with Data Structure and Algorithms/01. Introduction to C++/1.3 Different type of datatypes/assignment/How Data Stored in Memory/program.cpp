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
      *  Imagine you're developing e-commerce application 
      *  You need to store: 
      *   User's  age 
      *   Product quantity 
      *   Account balance 
      *   Number of product in a cart 
      * 
      *  you might write:
      */ 
        int user_age = 27; 
        int total_products = 1000; 
        unsigned inventory = 50; 

      std::cout << "User Age: " << user_age << "\n"; 
      std::cout << "Total Products: " << total_products << "\n"; 
      std::cout << "Inventory: " << inventory << "\n"; 
      
     /**
      *  Why do we have different types ? 
      *  Because different variables have different requirements 
      * 
      *  2.1 Signed integers 
      *   A signed integer can represent: 
      *    - Negative numbers 
      *    - Zero 
      *    - Positive numbers 
      * 
      *  Examples   
      */ 
     int profit = 5000; 
     int loss = -5; 
    
     std::cout << "Profit: " << profit  << std::endl; 
     std::cout << "Loss: " << loss << std::endl; 
     
    /** 
     * Memory size of int: 
     * - A typical 32-bit signed integer occupies 4 Byte  
     * - It's range is -2^31 to 2^31 - 1 and formula is 2^(n-1)  - 1  and range is -2^n-1 - 2^(n-1) - 1 
     *  Which means it's range:  -2,147,483,648 to 2,147,483,647 
     *  
     */ 

     /**
      * But how does c++ stores negative data ? 
      *   
      *  2.2 How negative data stored in memory ? 
      *  We initialize the variable loss which have negative value -5  
      *  
      * Let's use an 8-bit example because it's easier to understand. 
      *   positive 5: 00000101 
      *  
      *   Negative 5 uses two's complement: 
      *    positive 5: 00000101 
      *   Inverse bit: 11111010 
      *   Add 1             + 1
      *               __________
      *                11111011 
      * Therefore -5 = 11111011 
      * 
      * In modern C++, signed integers use two's complement representation.  
      * You don't need to manually convert negative numbers into binary when writing C++ programs. The compiler and hardware handle that representation. 
      * 
      *  2.2 Unsigned Integers 
      *   Now imagine you're storing the quantity of products in your shopping cart. 
      *   Can product quantity be negative ? 
      *    Usually no. 
      *   
      * An unsigned integer represent only non-negative values. 
      *   For a typical 32-bit unsigned integer means non-negative value.
      *  
      *  Formula for signed values 2^n - 1 so, its range 0 to 2^32 - 1  that means: 0 to 4,294,967,295 
      *  
      * What's the actual difference in memory ? Both types typically occupy 4 Bytes: 
      * 
      *  Signed 'int'                |        Unsigned 'int' 
      * _____________________________|____________________________________
      *  memory size: 32 bits        | memory size: 32 bits 
      *  Negative values  supported  | Negative values not supported 
      *  Maximum: 2,147,483,647      | Maximum: 4,294,967,295 
      * uses two's complement for    | Uses ordinary binary representation 
      *  negative number             | 
      *             
      * Consider the same 8 bit pattern: 
      *    11111111 
      *   - As a signed 8 bit integer: 1 
      *   - As an unsigned 8 bit integer: 255 
      * 
      *  Here, the bits are identical. Their interpretation is different.  
      */
    return 0; 
}