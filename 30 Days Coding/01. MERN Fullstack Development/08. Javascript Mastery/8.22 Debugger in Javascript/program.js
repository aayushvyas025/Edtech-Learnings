//* Debugger in Javascript

/**
 * ? Debugger in Javascript
 *  The `debugger;` Statement invokes any available debugging functionality in the js environment (like browser, nodejs, etc.) when the javascript engine hits this line, it pause execution like a breakpoint. allowing you to inspect the program state
 *
 * Let understand debugging with debugger our javascript code
 */

for (let numb = 10; numb > 0; numb--) {
  debugger;
  console.log(numb);
}


