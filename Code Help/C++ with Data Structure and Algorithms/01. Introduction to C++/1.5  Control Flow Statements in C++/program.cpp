#include <iostream>
using namespace std;

int main()
{
    /**
     * ? Conditional Statements in C++
     *  - Conditional statements in programming create conditional based programming scenario for example if you are 18 or 18+ you will eligible for driving license or less than 18 than not eligible for driving license.
     * - With conditional statements we can create single or multiple conditions according to our program.
     *  - We have different type of conditional statements let explore and understand how they work
     */

    /**
     * ? if statement
     *  Syntax:
     *    if(condition) {
     *         logic of if-statement
     *       }
     *
     *   - we have to pass condition in if-statement if it's true than only if-block executed
     */

    bool nationality;
    cout << "Are you indian ?" << '\n';
    cin >> nationality;
    if (nationality)
    {
        //? This if-block only executed when condition becomes true other-wise after this block-scope code executed.
        cout << "Your country has Taj Mahal one of the Seven Wonders of the World" << endl;
    }

    /**
     * ? if-else block statement:
     *  Syntax:
     *    if(condition)  {
     *         logic of if-block
     *     } else {
     *         logic of else block
     *        }
     *
     *   - if-statement is primary and we understand when if-condition becomes true than only if-block executed
     *   - else-statement is secondary statement so, if-statement condition becomes false than else statement will executed !!!
     *   - if-else always use with pair we can't use else statement individually.
     */

    if (nationality)
    {
        cout << "One of the faster economic growth country" << '\n';
    }
    else
    {
        cout << "You are not from India" << '\n';
    }

    /**
     * ? if -else-if- else statement
     *   Syntax
     *   if(condition) {
     *      logic of if-condition
     *    } else if(condition) {
     *       logic of else-if condition
     *     } else {
     *       else block logic
     *       }
     *
     *   - else-if statement is used for creating multiple logic  for our conditional
     *   - if-statement is primary and else is secondary
     *
     */
    int student_marks;
    cout << "Enter your marks: " << endl;

    cin >> student_marks;

    if (student_marks >= 90)
    {
        cout << "Grade: A+" << endl;
    }
    else if (student_marks >= 80)
    {
        cout << "Grade A" << endl;
    }
    else if (student_marks >= 70)
    {
        cout << "Grade B+" << endl;
    }
    else if (student_marks >= 60)
    {
        cout << "Grade B" << endl;
    }
    else if (student_marks >= 50)
    {
        cout << "Grade C+" << endl;
    }
    else if (student_marks >= 40)
    {
        cout << "Grade C" << endl;
    }
    else if (student_marks >= 30)
    {
        cout << "Grade D" << endl;
    }
    else
    {
        cout << "Failed in Exams" << endl;
    }

    /**
     * ? Nested If statements
     *  - When we create if-statements inside a if-statement than it knows as Nested if statements
     *  Let understand with practical example
     */

    int user_age;
    bool indian;
    cout << "Enter your age: " << endl;
    cin >> user_age;


    cout << "Are you Indian national" << endl;
    cin >> indian; 
    
    if (indian)
    {
        // nested if
        if (user_age >= 18)
        {
            cout << "Eligible to vote and elect government" << '\n';
        }
    }
    else
    {
        cout << "Not eligible to vote" << endl;
    }

    return 0;
}