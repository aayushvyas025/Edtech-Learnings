#include <iostream>
using namespace std;

int main()
{
    /**
     * ? Switch Case Statement
     *  - Switch case statement is also used for conditionals only but it's more cleaner or better visual approach compare to if-else, else-if, if statement.
     *  - In switch case statement we match the cases with providing expression value or data if the case match that case will be executed.
     *  - Default switch case execute all cases so, we have to use break statement that stop the switch case execution and start execution from after switch  block
     *
     * ?  Syntax
     *    switch(expression-value) {
     *       case <expresion-value>
     *           logic of this case;
     * !          break; this statement is important otherwise it execute every case of switch statement so it's stop execution and start from this block
     *
     *         case <expresion-value>
     *           logic of this case;
     *           break;
     *
     *  ! Here we have default case also it will work same as else block , if all cases are not match than execute default case
     *       default:
     *        logic of default case;
     *      }
     *
     *   Let understand practically with example
     */

    char student_grade;
    cout << "Enter your grade: " << '\n';
    cin >> student_grade;

    switch (student_grade)
    {
    //! case student_grade >= 90:  cases should be constant not expresion
    case 'A':
        cout << "Your percentage range: 81 to 100 " << endl;
        break;

    case 'B':
        cout << "Your percentage range: 61 to 80" << endl;
        break;

    case 'C':
        cout << "Your percentage range: 41 to 61" << endl;
        break;

    case 'D':
        cout << "Your percentage range: 31 to 40" << endl;
        break;

    default:
        cout << "You failed in exam" << endl;
    }

    /**
     * Example 2: Week days
     */

    int days;

    cout << "Enter Days Number" << endl;
   cin >> days; 

    switch (days)
    {
    case 0:
        cout << "Today Monday" << endl;
        break;
    case 1:
        cout << "Today Tuesday" << endl;
        break;
    case 2:
        cout << "Today Wednesday" << endl;
        break;

    case 3:
        cout << "Today Thursday" << endl;
        break;

    case 4:
        cout << "Today Friday" << endl;
        break;

    case 5:
        cout << "Today Saturday" << endl;
        break;

    case 6:
        cout << "Today Sunday" << endl;
        break; 

    default: 
     cout << "Please enter weekdays between 0 - 6"; 
    } 

    /**
     * ? Condition pertaining to switch statement
     *  1. expression type: Here we assign datatypes like int, char, enum or custom datatype but we can't assign decimal value like float, double and strings etc. 
     * 2. Unique Case: cases of switch should be unique not same if we do it not execute properly 
     * 3. No range checking: So we don't assign expression value, case must be constant for example (age >= 18) it give compiler error and suggestion also. but we can pass expression value in switch condition
     * 4. Fall Through Behaviour: We have to uses break statement otherwise it execute all cases 
     * 5. Execution order: switch case execute sequential all cases in order 
     * 
      */

    return 0;
}