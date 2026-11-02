//* First program in C++

// In every programming language having starting point from where our program starts so in C++ the starting point int main() which is function
#include <iostream>
using namespace std;

/**
 * ? What is function ?
 *  function is re-usable block of code which perform given specific task.
 */

int main()
{
    cout << "Hello World" << endl;
    // Here we are printing 'Hello World' string on standard output screen or terminal

    /**
     * Understand the logic of this int main() function
     * cout - cout is the functionality to perform the output operation in c++
     *  <<  - `<<` this is insertion operator which we use with cout as syntax
     *  "Hello World" : this is the value or data we are printing on screen or terminal this double quotes data is known as strings.
     * ! endl: This endl is the standard keyword which help to terminate the current line and start execution from new line.
     */

    /**
     * ? Here is problem our compiler doesn't understand the meaning of cout & endl too ?
     * -  Here the problem occurs our compiler doesn't understand the meaning of `cout` so it give error to us
     * - We have to use c++ standard library where all the methods, constant definition is define in it. For that we have to use `using namespace std`  statement to use all the c++ standards methods, constants, keywords etc.
     *
     * ! What is Namespace
     *  Namespace is way to group related code together under a name. It helps you avoid naming conflicts when your code grows or when you use code from multiple sources.
     *
     * Think of namespace like a folder: you can have same method or variable `x` in two different folders, and they won't clash.
     *
     */

    /**
     * ? Here is another problem is compiler can't understand what is cout ?
     *  - For using cout feature for print or giving output we have to use `iostream` header file which have the definition of cout and what functionality it have.
     *
     * - Whatever the operation related to input-output operations or standard operations we have to import `iostream` file to process our code.
     *
     */
    //! For cout/cin functionality we have to use `iostream` header file and std namespace

    return 0;
}

/**
 * ? int main() function
 * int -> int is the datatype which return by main() function
 * main() -> main function is the entry point of our program from where our program starts execution
 * {} -> Curly braces are known as scope of main function in which logic of function we implement, variables and methods are valid, visible, and accessible inside this braces only.
 * ! This curly braces define the scope of our function
 * return 0; As we understand that c++ is static type language so this 0 in integer which we are returning , here 0 conveys message to our system that our program executed successfully and if use non-zero value that indicate that error to execute our program
 */