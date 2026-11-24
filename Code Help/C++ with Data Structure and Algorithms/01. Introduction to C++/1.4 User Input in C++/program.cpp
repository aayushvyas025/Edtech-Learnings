#include <iostream>
#include <iomanip>

/**
 *  This iostream header-file is required for taking input same as returning output. So, performing input operation we need for processing.
 *
 */
using namespace std;

int main()
{
    /**
     * * Variable declaration:
     * For taking input first we have to declare user which holding garbage value which after user's input having user data.
     */
    int user_age;
    /**
     * Here, we declare user_age variable for taking input data from user
     */
    cout << "Enter your age: " << endl;
    cin >> user_age; // Compiler waits for user to input data than our execution begins start.

    /**
     * - We are taking input from user_age with cin utility method which means `Character input`
     * - It used to read data from the standard input stream, typically the keyboard.
     * - It is defined in the `iostream` header within the `std` namespace and works alongside the extraction operator (>>)
     **/

    /**
     * Let's print user age
     */
    cout << "User age: " << user_age << endl;

    /**
     * ? Let's take input from different datatype also:
     *
     */

    // float type
    float decimal_value;
    cout << "Enter decimal Value: " << endl;

    // Taking input decimal_value
    cin >> decimal_value;
    cout << "Input decimal value: " << setprecision(6) << decimal_value << endl;

    // double type
    double decimal_value_one;
    cout << "Enter decimal value in bigger decimal range:" << endl;

    // taking input decimal_value_one
    cin >> decimal_value_one;
    cout << "Input bigger-range decimal number" << setprecision(16) << decimal_value_one << endl;

    // char type
    char first_letter;
    cout << "Enter your name first letter" << endl;
    cin >> first_letter;

    cout << "First letter of your name is: " << first_letter << endl; 

    // bool data type 
    bool employed; 
    cout << "Are you employed or not ?" << endl; 
     cin >> employed; 

    //! Note: Boolean value always input in integer for true `1` and false `0` other wise it default give 0 as false  
    cout << "Your employed status: " << employed << endl; 
    
    /**
     * ? Why we have to input bool value is integer type in C++ ? 
     *  In C++, you have to enter `bool` values as integers (1 and 0) during standard input (std::cin) because c++ treats `bool` as an integral type under the hood and defaults to numeric input for backward compatibility with C. 
     * 
     * ?  Why this Happens ? 
     *   - Legacy from C : The original C language did not have a built-in boolean type and used integers (0 for false, any non-zero number for true) instead. To stay compatible with old C code. C++ kept this numeric behaviour. 
     *     
     */ 

     /**
      * ? How to input `true` and `false` Instead. 
      *  If you want users to type the actual words `true` and `false` rather than `1` and `0`, use std::boolalpha stream manipulator.  
      * 
      * ? std::boolalpha  
      *   std::boolalpha is a C++ I/O manipulator in the iostream header file that formats `bool` values as `true` and `false` instead of `1` and `0`. It works on both output streams (like std::cout) and input streams (like std::cin). 
      *  
      * ? Key behavior: 
      *   - Output (<<): Prints `true` or `false` instead of 0 or 1 once enabled on the stream. 
      *   - Input (>>): Expects textual boolean strings (true or false) rather than numeric 1 or 0. 
      *  
      */
       bool isIndian; 
       cout << "Are are you indian ?" << endl; 
       cin >> boolalpha >> isIndian; 

       cout << boolalpha << isIndian << endl; 
    return 0;
}