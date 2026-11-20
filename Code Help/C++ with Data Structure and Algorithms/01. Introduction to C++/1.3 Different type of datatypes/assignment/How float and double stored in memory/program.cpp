#include <iostream> 

using namespace std; 

int main() {
/**
 * ? Understand in depth How float and double data stored in program's  memory ?  
 *   Let's understand deeper `float` and `double` from the actual memory - storage perspective, not just memorize that float takes 4 Byte and double takes 8 Byte.  
 * 
 *  There are three important concepts you need to understand: 
 *   1. How decimal numbers are converted into binary number  
 *   2. How IEEE 754 stores floating-point numbers in memory. 
 *   3. Why floating-point numbers sometimes produce unexpected result such as 0.1 + 0.2 != 0.3  
 * 
 *  Let's build this understanding from first principle  
 *   
 *   # First: understand how integers are stored in binary 
 *      Before understanding floating point numbers, let's revise binary representation. 
 *      Computers understand only binary digits 0 and 1. 
 * 
 *      For example: Decimal number 13 is represented in binary as:   
 *       Power of 2        2^3 = 8  | 2^2 = 4 |  2^1 = 2 | 2^0 = 1        
 *       Binary position      3     |  2      |   1      |   0 
 *       Binary digit         1     |  1      |  0       |   1   
 *     
 *         13 = 8 + 4 + 1   
 *         decimal: 13  
 *         binary: 1101 
 *     
 *      How does a computer represent a decimal number like 13.625 using only 0s and 1s ?  
 *   
 *      That's where floating-point representation comes in ? 
 * 
 *    # Second: How decimal fractions are converted into binary  
 *        Let's take this number:   13.625  
 *        We separate it into two parts: 
 *         - Integer part: 13 
 *         - Fractional part: .625 
 *      
 *       We already know:  13 'base10' = 1101 'base2' 
 *       
 *       Now let's convert .625 into binary for fractional binary conversion, repeatedly multiple the fractional part by 2 
 *        
 *       Step  | Multiplication     | Integer Result | Remaining fraction 
 *        1    |  0.625 x 2 = 1.25  |    1           |   0.25  
 *        2    | 0.25 x 2 = 0.5     |    0           |   0.5 
 *        3    | 0.5 x 2 = 1.0      |    1           |    0  
 * 
 *     Read the integer from top to bottom and ignore fractional part 
 *      
 *       .625  =  .101 (binary)   
 *       
 *       Therefore decimal to binary 
 *         13.625 = 1101.101  
 *                                13.625 'base10' = 1101.101 'base2' 
 * 
 *  Now we understand how a decimal fraction can be represented in binary But floating-point numbers need a more organized representation than simple storing the binary digits.  
 *            
 *   
 *  # Floating point representation: Binary scientific notation  
 *   you might have studied scientific notation in mathematics  
 *     
 *      for example: 1234  = 1.234 x 10^3  
 * 
 *     Instead of storing the entire number, we represent it using: 
 *       - A significant part 
 *       - An exponent  
 *   
 *   A computer use a similar concept for floating point numbers, except they use base 2 instead of base10 
 *   
 *   let's take our previous number: 
 *     13.625 = 1101.101 
 *     base10    base2 
 * 
 *    1101.101 = 1.011101 x 2^3   
 *   This is called binary scientific notation or normalized binary representation.  
 * 
 *   Now we have three important pieces floating point representation.  
 * 
 *   ________________________________________________________________________
 *   |           +          |       3              |  1.101101 significand   |
 *   |        sign          |  Exponent 'scale of  |  (significant digits)   |
 *   |(Positive/ Negative)  |   numbers'           |                         |
 *   |______________________|______________________|_________________________|
 *    
 *    Conceptual representation of a normalized flating-point number  
 * 
 *   These three components allow the computer to represent very large and very small numbers efficiently. 
 * 
 *  
 */
    return 0;  
}