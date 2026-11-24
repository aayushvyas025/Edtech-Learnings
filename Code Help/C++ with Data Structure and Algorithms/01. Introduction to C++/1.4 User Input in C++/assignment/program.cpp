#include <iostream>
#include <limits>

int main()
{
    /**
     * ? Assignment on User Input
     * Let's understand some methods of input with cin utility method:
     *  In C++,
     *   -- getLine() reads full lines of text
     *   -- cin.ignore() clears unwanted characters from the input buffer.
     *   -- cin.fail() checks whether an input operation encountered a mismatch or error.
     *  Together, they prevent skipped inputs and infinite loops when handling user data.
     **/

    /**
     * ? 1st. getline()
     *   - getline(cin, variable), Standard cin>> stops reading at the first space. If a user types "John Doe", cin >> only grabs   "John". getline() reads the entire line. including spaces. until the user hit Enter.
     * */
    std::string username;

    std::cout << "Enter your name: " << std::endl;

    //  std::cin >> username;  It's print only first non-white-space string and after space trimmed out from our input.
    // instead of cin we use getline() method
    getline(std::cin, username);

    std::cout << "User name: " << username << std::endl;

    /**
     * ? 2nd. cin.ignore()
     *  This method discards unwanted characters waiting in the input buffer. You need it in two main situations:
     *
     *   Situation One:
     *   - Switching from cin >> to getline(): cin >> leaves the Enter key than `new line` (\n) in the buffer. Without cin.ignore(), sees that leftover newline (\n) and immediately finishes with an empty string.
     *
     *  - Recovering from cin.fail(): After resetting the error with cin.clear(), you use cin.ignore() to flush out the bad text the user typed.
     */

    int userAge;
    std::string fullName;
    std::cout << "Enter your Age: " << std::endl;
    std::cin >> userAge;
    /**
     * Using cin.ignore() for ignoring unwanted characters like Enter's new line `\n`
     *  !But here is the issue:
     *  The problem is that cin.ignore() without arguments ignores only one character.
     *  Consider this input:
     *
     *  Enter your Age:
     *    25abc
     *    Aayush Vyas
     *
     *  After extracting the integer, the remaining buffer is:
     *   abc\n
     *
     *  Now
     *  std::cin.ignore()
     *  Only removes a
     *
     *  The remaining characters in a buffer is:
     *   bc\n
     *
     *  So, Consequently, getline() reads bc instead of your name
     **/
    std::cin.ignore(std::numeric_limits<std::streamsize>::max(), '\n'); 

    /**
     * ? Understand this cin.ignore() part 
     *  .ignore() :  Discards the characters from input buffer. 
     *  numeric_limits<streamsize>::max(): Allows it to discard up the maximum stream size because without max() it's ignore one character default 
     *  '\n': Stops discarding when it encounters a new line. 
     */

    std::cout << "Enter your Full Name: " << std::endl;
    getline(std::cin, fullName);

    std::cout << fullName << std::endl;

    /**
     * ? 3rd. cin.fail() 
     */

    return 0;
}