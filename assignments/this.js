/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Is the function called by `new`?
* 2. Is the function called by `call()`, `apply()`, or `bind()`?
* 3. Is the function called as a method, ie: `obj.func()`?
* 4. Is the function called in the global scope?
        -If strict mode is enabled, return undefined.
        -Otherwise, return the global object, ie: window.
*

1. Is there a dot? Look to the left. That's this.
2. Do you see .call() or .apply()? What's passed in before the first comma? Thats this.
3. Does the function stand alone when it's invoked? Then what's your global context? That's this.

* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");


// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');


// Principle 3

// code example for New Binding

function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();


// Principle 4

// code example for Explicit Binding

jerry.speak.call(newman);
newman.speak.apply(jerry);