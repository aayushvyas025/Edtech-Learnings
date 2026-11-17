//* Call, Bind and Apply method in Javascript

/**
 * ? Call, bind and Apply method in Javascript
 *  - This all methods used to explicitly set the `this` context inside the function
 *  - They allow an object to borrow methods from another object or control which object a function refers a function refers to when executing.
 *
 *  Let understand call, bind and apply methods with example
 */

function greetUser(accType) {
  console.log(
    `Welcome ${this.username} ${accType.toLowerCase() !== "basic" ? `to ${accType} account` : ""}`,
  );
}

/**
 * ? call() method
 *  - The call() method invokes the function immediately. The first argument is object you want to use as `this`. Any additional arguments are passed individually.
 */

greetUser.call({ username: "Aayush Vyas" }, "platinum"); // user one
greetUser.call({ username: "Saijal Vyas" }, "premium"); // user two

//! Here call() method invokes function immediately.

/**
 * ? apply() method
 *  -  The apply() method also invokes the function immediately. The only difference from call() is that additional argument must passed inside an array.
 */

greetUser.apply({ username: "Peter Parker" }, ["Premium"]);
greetUser.apply({ username: "John doe" }, ["Basic"]);

/**
 * ? bind() method
 *  - The bind() method is unlike two above methods it doesn't immediately invoke function for execution instead it return new function with this `this` keyword context locked to the object you provided. So, we can call the function later whenever needed.
 */

const greetShanks = greetUser.bind({ username: "shanks" }, "premium");
console.log(typeof greetShanks);
greetShanks(); 