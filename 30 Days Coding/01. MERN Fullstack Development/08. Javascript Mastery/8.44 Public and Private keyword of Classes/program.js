//* Public and Private keyword of Classes

/**
 * ? Public and Private keyword
 *  Javascript classes don't use the `public` and `private` keywords. Instead, class properties, methods are public by default and private members created using hash(#) prefix. 
 *  
 * ! Note while `public` and `private` are reserved words in strict mode - and are actively used in Typescript - using them in standard javascript classes will throw a Syntax-error 
 * 
 * ? How Access Control Work in JS 
 *  - Public Member (default): Any field or method declared without prefix # is accessible from anywhere - inside the class, in subclasses and on class instances. 
 * 
 * - Private Member (# Prefix): Prefixing a field, method, getter, or setter with # enforces strict runtime privacy. It can be only accessed or modified inside the exact class where it defined. Attempting to access it from outside the class (or even from a subclass) throws SyntaxError. 
 * 
 * - Static Members (static keyword):  Both public and private members can be used combined with `static` keyword (e.g. #secretContent=0) so they belong to the class itself rather than individual instances.  
 * 
 * Let understand public and private keyword with practically by example
 */

class BankAccount {
  //! private classes members are access by Class only or within class.
  owner; // default all methods and member are public
  #balance = 0; // We create balance class member public so it can't access by the object instance.

  constructor(owner) {
    this.owner = owner;
  }

  accountDetail() {
    console.log(`User name:${this.owner} and balance: ${this.#balance}`);
  }

  deposit(amt) {
     this.#logTransaction(amt);
  }

  checkBalance() {
    console.log(`Bank Account balance: ${this.#balance}`);
  }

  withdraw(amt) {
    if (amt > this.#balance) console.log("Insufficient funds");
    this.#balance -= amt;
    console.log(
      `${amt} withdraw from your bank Account, Your bank balance is ${this.#balance}`,
    );
  }

  // private class methods and use inside the class only. 
  #logTransaction(amt) {
    if (amt > this.#balance) console.log("Insufficient funds");
    this.#balance += amt;
    console.log(`Deposited ${amt}. New balance: ${this.#balance}`);
  }
}

const userAccount = new BankAccount("Aayush Vyas");
userAccount.deposit(20000);
userAccount.checkBalance(); 
userAccount.deposit(60000); 
userAccount.withdraw(40000);


