//* Scoping in Javascript
/**
 * ? What is Scoping in Programming Language ?
 *  Scoping defines the visibility, existing, availability, and Validity of our code variables, functions and objects 
 * 
 * ? Lexical Scoping in Javascript 
 *  - Lexical scoping means that the accessibility of variables is determined entirely by their physical location within the source code. 
 *  
 * - In Javascript, the word "lexical" refers to fact that the scope is set during compilation/parsing based on where the functions and blocks are written, not where they executed 
 * 
 * - Javascript is lexical scoped, nested (inner) function always have access to the variables declared in their outer (parent) scopes but parent scopes doesn't look downward into children.    
 */


//? Example of Lexical Scope 

function outerFunc() {
    let outerScopeVal = 12; 

    function innerFunc() {
        // According to lexical scoping inner-scope 'children' can access the outer-scope environment variables and methods  
        console.log(outerScopeVal); 
    }

    innerFunc(); 
}

outerFunc(); 

