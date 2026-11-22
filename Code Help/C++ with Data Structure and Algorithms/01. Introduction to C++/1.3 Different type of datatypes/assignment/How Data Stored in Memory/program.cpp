#include <iostream>

int main()
{
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

  std::cout << "Profit: " << profit << std::endl;
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
   *
   * ? 3.A practical C++ example: Signed vs Unsigned
   */

  int signedNumber = -10;
  unsigned int unsignedNumber = 10; // unsigned keyword int value

  std::cout << "Signed Number: " << signedNumber << std::endl;
  std::cout << "Unsigned Number: " << unsignedNumber << '\n';

  std::cout << "Signed Size: " << sizeof(signedNumber) << " Bytes" << std::endl;
  std::cout << "Unsigned Size: " << sizeof(unsignedNumber) << " Bytes" << std::endl;

  /**
   * ? Typical Output:
   *  -  Signed Number: -10
   *  - Unsigned Number: 10
   *  - Signed Size: 4 Byte
   *  - Unsigned Size: 4 Byte
   *
   *  Note that both use the same amount of memory.
   *  Developer lesson: Signedness affects the range and interpretation of values, not the typical memory size value.
   */

  /**
   * 3.1 A Common developer mistake
   *   Consider:
   */

  unsigned int quantity = 0;
  quantity = quantity - 1; // It give maximum range value because we are using `unsigned int`
  std::cout << quantity << '\n';

  /**
   * Output on a typical system:
   *  4294967295
   *  Why ?
   *    - Unsigned wraps around when it goes below down 0.
   *    - This is why you should be careful when decrementing unsigned variable:
   *
   *    For example, this loop can cause problems
   */

  // for (unsigned int i = 5; i >= 0; i--)
  // {
  //   std::cout << i << std::endl;
  // }

  /**
   * The condition i >= 0 is always `true` for an unsigned integer. When `i` reaches zero, decrementing it wraps around to its maximum value. 
   * 
   * My recommendation: As a beginner C++ developer, use `int` for ordinary integer calculations unless you have a specific reason to use an unsigned type.  
   */

   /**
    * ? 4. How understand float and double from developer perspective 
    *  Imagine you're developing an e-commerce application 
    *   
    *  You need to store: 
    */
      int quantityProduct = 0; 
      float quantityWeight = 5.55f; 

      double productPrice = 255.7889; 
    std::cout << "Quantity Product: " << quantityProduct << std::endl; // Output: Quantity Product: 0
    std::cout << "Quantity Weight: " << quantityWeight << std::endl; // Output: Quantity Weight: 5.55
    std::cout << "Product Price: " << productPrice << std::endl;  // Output: Product Price: 255.789 
    
    /**
     * Why can't we use `int` for everything ? 
     *  Because an integer can't represent fractional values:  
     *  
     * For example:  
     *  int price = 255.78; 
     * 
     * The fraction part is discarded during conversion, leaving 255. 
     * 
     * That's why we need floating point data types. 
     */

    /** 
     *  4.1 What happen when a declare float ? 
     *    - A typical `float` occupies 4 Byte (32 bits) 
     *   
     */ 

      float temperature = 25.6f; 

      std::cout << "Temperature: " << temperature << std::endl; 

      /**
       *  But unlike an integer, a float doesn't simply stores the whole number and fractional digits as separate binary values. 
       * 
       *  It uses a representation like IEEE 754 Floating-point format 
       *  For now, understand it's three components: 
       *   
       *  ! float memory: 32 bits 
       *   
       *  ______________________________________________________
       * |       |               |                             |
       * |  1    |     8         |         23                  |
       * | Sign  | Exponent      |      Fraction               |
       * |       |               |                             |
       * |_______|_______________|_____________________________|  
       * 
       *   Component   |   Developer Friendly meaning 
       *  - Sign       |  Is the number positive or number ?  
       *  - Exponent   | How large or small is the number  
       *  - Fraction   | What are the significant digits ? 
       *  
       *  Let understand with an actual number 
       *  
       *  Example: Store 5.5 in float            
       */
       float  number = 5.5f; 
       std::cout << "Floating point number: " << number << std::endl; 

       /**
        * First computer converts 5.5 into binary: 
        *   5.5 = 101.1   
        *     for decimal part, we do 0.5 x 2 = 1.0 , 
        * 
        *  Than it converts that into normalized binary notation 
        *    1.011 x 2^2 
        *   
        *  Now the computer encodes the information into three fields: 
        *  Sign: Positive 
        *  Exponent: 2 (with exponent bias). 
        *  Fraction: 011 followed by zeroes 
        *  
        * That's how the value is represented in 32 bits 
        * You don't need to manually perform this conversion when writing applications. 
        * 
        */ 

        /**
         * 4.2 What happens when we declared a double ?  
         *  
         */ 

          double product = 225.7889 ; 
         std::cout << "Product Price: " << product << "\n"; 
         /**
          * double uses the same fundamentals representation as float, but typically occupies 8 Bytes (64 bits)  
          * 
          *  Double memory: 64 bits 
          * 
          *    _____________________________________
          *   |  1      |     11    |  52          |
          *   |  Sign   | Exponent  | Fraction     |
          *   |_________|___________|______________| 
          *  
          *   Compare: 
          *   Property    |     float    |     double 
          * ______________|______________|______________
          *    Memory     |     4 Bytes  |     8 Bytes 
          * ______________|______________|______________
          *   Total bits  |   32 bits    |   64 bits   
          * ______________|______________|______________ 
          *  Precision    | 6-7 digits   | 15-16 digits
          *  Range        |              |
          * ______________|_____________|________________ 
          *  range        | Smaller     | Much larger    
          * ______________|_____________|_________________  
          * 
          *  Think like a developer: If double has more memory and greater precision, why would we choose float ? 
          *   Because sometimes: 
          *    - Memory usage matters, especially with large arrays.  
          *    - The application doesn't need high precision.   
          *    - The APIs or libraries we are using expect float values. 
          * 
          *  For general C++ calculation, 'double' is usually the better default.  
          * 
          */

          /**
           * ? 5. The most important real-world problem: Floating-point precision 
           *  let's consider: 
           */ 
            double a = 0.1; 
            double b = 0.2; 

            std::cout << a + b << std::endl;  

            // You expect: 0.3 Output but the result might be: 0.30000000000004

            /**
             * Why ? 
             *  Because computers use binary, so decimal fractions can't be represented exactly in binary 
             *   For example: 
             *    0.1 in decimal  has a repeating binary representation: 0.00011001100110011....  
             * 
             *  But double has limited storage capacity. Therefore, the computer stores the nearest representable value. this is called floating point precision. 
             */
           
  return 0;
}