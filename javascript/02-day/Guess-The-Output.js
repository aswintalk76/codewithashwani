/* 💡"JavaScript-with-JC" - Guess the Output? */

// 👉 MCQ-1
function MCQ1() {
  const person = {
    name: "Jayesh",
    displayName1: function () {
      console.log("name1", this.name);
    },
    displayName2: () => {
      console.log("name2", this.name);
    },
  };
  person.displayName1();
  person.displayName2();

  // 👍A) name1 Jayesh , name2 Jayesh
  // 💡B) name1 Jayesh , name2 undefined
  // 💖C) name1 Jayesh , name2
  // 😀D) name1 , name2 Jayesh

  /* 
  In window browser answer is C) name1 Jayesh , name2 because arrow function inherits "this" from its outer function where "this" is window.
  and window has by default property name that is used for setting or returning the name of a window and in above case window.name is empty string.
  
  In other compilers answer is B) name1 Jayesh , name2 undefined because arrow function inherits "this" from its outer function where "this" refers to global object.
  */
}
// MCQ1();

// 👉 MCQ-2
function MCQ2() {
  let name = "Jayesh";
  function printName() {
    if (name === "Jayesh") {
      let name = "JC";
      console.log(name);
    }
    console.log(name);
  }
  printName();

  // 👍A) Jayesh     💡B) Jayesh, JC
  // 💖C) JC, JC     😀D) JC, Jayesh

  /* Answer is D) JC, Jayesh because let variables are block scope, name inside if condition will shadow outer name*/
}
// MCQ2();

// 👉 MCQ-3
function MCQ3() {
  var player = "Virat";
  function displayPlayer() {
    if (player === "Virat") {
      var player = "VK";
      console.log(player);
    }
    console.log(player);
  }
  displayPlayer();

  // 👍A) VK, Virat    💡B) VK, VK
  // 💖C) undefined    😀D) VK, undefined

  /* 
   Answer is C) undefined because var variables are functional scope, When displayPlayer fn starts executing, Execution context of
   displayPlayer will be created in callstack and at the memory creation phase var variable player is initialized as undefined. 
   hence if condition will become false and It will print only undefined.
  */
}
// MCQ3();

// 👉 MCQ-4
function MCQ4() {
  const person = {
    name: "Jayesh",
    age: 24,
  };

  const getAge = person.age;
  delete person.age;

  console.log(person);
  console.log(getAge);

  // 👍A) { name: 'Jayesh', age: 24 }, null
  // 💡B) { name: 'Jayesh' }, 24
  // 💖C) { name: 'Jayesh' }, undefined
  // 😀D) { name: 'Jayesh', age: 24 }, 24

  /*
  Answer is B) { name: 'Jayesh' }, 24 because delete keyword deletes property of an object and we are setting getAge as pass by value.
 */
}
// MCQ4();

// 👉 MCQ-5
function MCQ5() {
  // No Strict Mode
  name = "Jayesh"; // window.name ( property of window object )
  console.log(delete name);

  const displayName = (function (name) {
    console.log(delete name); // Local variable of function
    return name;
  })("JC");

  console.log(displayName);

  // 👍A) true, false, JC
  // 💡B) true, true, undefined
  // 💖C) false, false, JC
  // 😀D) false, true, undefined

  /*
  Answer is A) true, false, JC because delete keyword deletes only property of an object. 
  delete keyword can not delete local variables ( declared with var, let, and const ) and functions. 
  delete keyword can delete global variables as they are property of window object.
 */
}
// MCQ5();

// 👉 MCQ-6
function MCQ6() {
  const arr = [];

  for (var i = 0; i < 5; i++) {
    arr[i] = function () {
      return i;
    };
  }

  console.log(arr[0]());
  console.log(arr[4]());

  // 👍A) 0, 4     💡B) 4, 4
  // 💖C) 5, 5     😀D) TypeError

  /*
  Answer is C) 5, 5 because variables declared with var keyword are function-scoped or globally-scoped but not blocked scoped. 
  Inner function will form the closure and points to the updated value of i that is 5. 
  In the case of Let variable, as they are blocked scoped so inner function will hold different values of i from 0 to 4.
 */

  /* 👇 In the case of Let variable */
  const arrBlock = [];

  for (let i = 0; i < 5; i++) {
    arrBlock[i] = function () {
      return i;
    };
  }

  console.log(arrBlock[0]()); // 0
  console.log(arrBlock[4]()); // 4
}
// MCQ6();

// 👉 MCQ-7
function MCQ7() {
  let person = { name: "Jayesh" };
  const personArray = [person];
  person = null;
  console.log(personArray);

  personArray = [];
  console.log(personArray);

  // 👍A) [ { name: "Jayesh" } ], []
  // 💡B) [ { name: "Jayesh" } ] , TyperError
  // 💖C) [ null ], TypeError
  // 😀D) [ {} ], []

  /*
  Answer is B) [ { name: "Jayesh" } ] , TyperError because person = null will only disconnect the person variable from value { name: "Jayesh"} which is stored in memory, personArray[0] will still point to same value { name: "Jayesh"}.
  and personArray = [] at this line TyperError as const variable can't be redeclared and throws Uncaught TypeError: Assignment to constant variable.  
 */
}
// MCQ7();

// 👉 MCQ-8
function MCQ8() {
  const value = { number: 10 };

  const addition = (x = { ...value }) => {
    console.log((x.number += 5));
  };

  addition();
  addition();
  addition(value);
  addition(value);

  // 👍A) 15, 20, 25, 30    💡B) 15, 15, 20, 25
  // 💖C) 15, 15, 15, 15    😀D) 15, 15, 15, 20

  /*
  Answer is D) 15, 15, 15, 20 because when we call addition function 3rd time with passing value object as an argument, then x will take value as pass by reference and will update number property of original object ( value in this case ) to 15.  
  Hence, while calling addition function 4th time will console 15 + 5 => 20.
 */
}
// MCQ8();

// 👉 MCQ-9
function MCQ9() {
  function makePerson() {
    return {
      userName: "Jayesh",
      ref: this,
    };
  }

  const person = makePerson();
  console.log(person.ref.userName);

  // 👍A) Jayesh      💡B) ""
  // 💖C) undefined   😀D) TypeError

  /*
  Answer is C) undefined because "this" keyword in makePerson function will refer to the window object,
  person.ref.userName is same as Window.userName and no property named with userName is present in window object, Hence It will console undefined.
 */

  // 👇 We can get "Jayesh" as an output by doing small change in above question :-
  function makePerson2() {
    return {
      userName: "Jayesh",
      // 👇 Here, We have assigned a function to ref property of an object, and function's "this" will point to the returned object.
      ref: function () {
        return this;
      },
    };
  }

  const person2 = makePerson2();
  console.log(person2.ref().userName); // Jayesh
}
// MCQ9();

// 👉 MCQ-10
function MCQ10() {
  const user = {
    userName: "Jayesh",
    displayName: function () {
      console.log(this.userName);
    },
  };

  setTimeout(user.displayName, 1000);

  // 👍A) Jayesh     💡B) undefined
  // 💖C) ""         😀D) TypeError

  /*
  Answer is B) undefined because setTimeout is using user.displayName as a callback function rather than object method.
  callback function's "this" will refer to the window object and It will console undefined as there is no property such as userName in the window object.   
  */

  // 👇 We can get "Jayesh" as an output by wrapping the user.displayName() inside a function :-

  setTimeout(function () {
    user.displayName(); // Here, displayName is called by user object ( object method ). Hence, "this" will refer to user object.
  }, 1000);
}
// MCQ10();

// 👉 MCQ-11
function MCQ11() {
  const series = { name: "JavaScript-with-JC" };

  function getSatus(postNumber) {
    return `${this.name} 🌟 ${postNumber}`;
  }

  console.log(getSatus.call(series, 50));
  console.log(getSatus.bind(series, 50));

  // 👍A) JavaScript-with-JC 🌟 50, undefined
  // 💡B) JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50
  // 💖C) JavaScript-with-JC 🌟 50, [Function: bound getSatus]
  // 😀D) JavaScript-with-JC 🌟 50, TypeError

  /*
  Answer is C) JavaScript-with-JC 🌟 50, [Function: bound getSatus] because call, apply and bind methods are used for function borrowing in JavaScript.   
  The call method immediately invokes the borrowed function where as bind method does not invoke the borrowed function immediately, bind method returns a copy of borrowed function
  that can be called later on with or without passing new arguments to it.
  */

  // 👇 We can get 'JavaScript-with-JC 🌟 50, JavaScript-with-JC 🌟 50' as an output by calling borrowed function of bind method :-

  console.log(getSatus.call(series, 50)); // JavaScript-with-JC 🌟 50
  console.log(getSatus.bind(series, 50)()); // JavaScript-with-JC 🌟 50
}
// MCQ11();

// 👉 MCQ-12
function MCQ12() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method(fn) {
      fn();
    },
  };

  person.method(displayName);

  // 👍A) JC           💡B) Jayesh
  // 💖C) undefined    😀D) TypeError

  /*
  Answer is B) Jayesh because displayName function is passed to person object method as a callback function.
  "this" keyword in displayName function will refer to window object and window object has a property "name" with value "Jayesh". Hence, It will console Jayesh as an output.
  */

  // 👇 We can get JC as an output by attaching call method with fn() inside person method :-

  const person2 = {
    name: "JC",
    method(fn) {
      fn.call(this); // borrowing function and passing "this" of person2 object.
    },
  };

  person2.method(displayName); // JC
}
// MCQ12();

// 👉 MCQ-13
function MCQ13() {
  var length = 4;

  function callback() {
    console.log(this.length);
  }

  const object = {
    length: 5,
    method: function () {
      arguments[0]();
    },
  };

  object.method(callback, 2, 3);

  // 👍A) 2     💡B) 3
  // 💖C) 4     😀D) 5

  /*
  Answer is B) 3 because arguments keyword is an array of arguments passed to the function. 
  Here while calling object.method(), we are passing three arguments callback fn(), 2 and 3.
  If we try to console arguments it will look like this 👇

  Arguments(3) [ƒ, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
  0: ƒ callback()
  1: 2
  2: 3
  callee: ƒ ()
  length: 3
  Symbol(Symbol.iterator): ƒ values()
  [[Prototype]]: Object

  As we can clearly see, arguments is having length property that is equal to number of arguments passed to function.
  So, arguments[0] is nothing but the first argument passed to function that is callback function in this case.
  As we know, Everything in JavaScript is an object ( arguments is also an object which has length property with value 3 )
  arguments[0]() function's "this" will refer to arguments object. Hence, It will console 3 as an output.
  */
}
// MCQ13();

// 👉 MCQ-14
function MCQ14() {
  var name = "Jayesh";

  function displayName() {
    console.log(this.name);
  }

  const person = {
    name: "JC",
    method: displayName.bind(this),
  };

  person.method();

  // 👍A) Jayesh       💡B) JC
  // 💖C) undefined    😀D) TypeError

  /*
  Answer is A) Jayesh because "this" inside the definition for person object does not refer to person object. 
  "this" will refer to the window object here, and binding displayName function with passing window's this  
  as a context will return a copy of bound function that is stored in method property of person object. 
  So, While calling person.method() will console Jayesh as an output.
  */

  // 👇 We can get JC as an output by wrapping displayName.bind(this) inside a function because "this" inside the normal function of an object refers to the object :-

  const person2 = {
    name: "JC",
    method: function () {
      return displayName.bind(this); // Here, "this" refers to the person2 object
    },
  };

  person2.method()(); // JC
}
// MCQ14();

// 👉 MCQ-15
function MCQ15() {
  function show() {
    console.log(this.name);
  }

  const person1 = { name: "Jc" };
  const person2 = { name: "Jayesh" };

  show = show.bind(person1).bind(person2);
  show();

  // 👍A) Jayesh       💡B) undefined
  // 💖C) JC           😀D) TypeError

  /*
  Answer is C) JC because a function which is bound with bind keyword can not be re-bound with other new context, bind chaining does not exist.
  once the function is bound to a particular object, It will always be bound to that object no matter how many times it's further bounded.
  */
}
// MCQ15();

// 👉 MCQ-16
function MCQ16() {
  let person1 = {
    name: { firstName: "Jayesh" },
    age: 24,
  };
  let person2 = { ...person1 };

  person2.name.firstName = "Virat";
  person2.age = 33;

  console.log(person1.name.firstName);
  console.log(person1.age);

  // 👍A) Jayesh, 33     💡B) Jayesh, 24
  // 💖C) Virat, 33      😀D) Virat, 24

  /*
  Answer is D) Virat, 24 because The spread operator makes deep copies of data if the data is not nested. 
  When we have nested data in an array or object the spread operator will create a deep copy of the top most data 
  and a shallow copy of the nested data. 
  person1 and person2 is pointing to different memory address but person1.name and person2.name is pointing to the same memory address

  We Can do Deep copy of nested objects by using:-
  1) const copyObj = JSON.parse(JSON.stringify(originalObj))
  2) const copyObj = structuredClone(originalObj);
*/
}
// MCQ16();

// 👉 MCQ-17
function MCQ17() {
  for (var i = 0; i < 5; i++) {
    setTimeout(
      (i) => {
        console.log(i);
      },
      1000,
      i
    );
  }

  // 👍A) 0 1 2 3 4      💡B) 5 5 5 5 5
  // 💖C) 4 4 4 4 4      😀D) 0 1 2 3 4 5

  /*
  Answer is A) 0 1 2 3 4 because as we are passing i ( 0 to 4 ) value as an argument to setTimeout callback function
  therefore this will console different values of i from 0 to 4.

  if there was no argument passed to setTimeout callback function then the output would be 5 5 5 5 5 because variables declared 
  with var keyword are function-scoped or globally-scoped but not blocked scoped. Inner function i would point to the updated value of i that is 5.
*/
}
// MCQ17();

// 👉 MCQ-18
function MCQ18() {
  console.log(1);

  async function fetchData() {
    console.log(2);
    let result = await Promise.resolve(3);
    console.log(result);
  }

  fetchData();
  console.log(4);

  // 👍A) 1 2 3 4      💡B) 1 4 2 3
  // 💖C) 1 2 4 3      😀D) 1 3 4 2

  /*
  Answer is C) 1 2 4 3 beacause promise is used to handle the asynchronous result of an operation and 
  callback functions attached to the promises are stored into microtask queue. 
  So, first synchronous code will be executed i.e 1,2,4 and once callstack is empty, event loop pushes the microtask queue's task into callstack
  callstack will start executing the task and It will console 3 at last.
  */
}
// MCQ18();

// 👉 MCQ-19
function MCQ19() {
  console.log("start");

  const promise = new Promise((resolve) => {
    console.log(1);
    resolve(2);
    console.log(3);
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("end");

  // 👍A) start end 1 3 2      💡B) start 1 3 end 2
  // 💖C) start end 1 2 3      😀D) start 1 end 2 3

  /*
  Answer is B) start 1 3 end 2 beacause The function we pass into the Promise constructor runs synchronously, 
  but anything that depends on its resolution ( resolve or reject ) will be called asynchronously. 
  Even if the promise resolves immediately, any handlers ( callback attached to promise then and catch ) will execute asynchronously. 

  const promise = new Promise((resolve) => {
  console.log(1);  // runs synchronously
  resolve(2); // called asynchronously by then callback
  console.log(3); // runs synchronously
});
*/
}
// MCQ19();

// 👉 MCQ-20
function MCQ20() {
  console.log("First");

  const promise = new Promise((resolve) => {
    console.log("Second");
  });

  promise.then((result) => {
    console.log(result);
  });

  console.log("Third");

  // 👍A) First Second undefined Third      💡B) First Third Second
  // 💖C) First Second Third undefined      😀D) First Second Third

  /*
  Answer is D) First Second Third because as there is no resolve in Promise constructor, So it will not go inside of .then block.
  */
}
// MCQ20();

// 👉 MCQ-21
function MCQ21() {
  const fetchData = function () {
    return new Promise((resolve, reject) => {
      reject();
    });
  };

  fetchData()
    .then(() => {
      console.log("Success 1");
    })
    .catch(() => {
      console.log("Error 1");
    })
    .then(() => {
      console.log("Success 2");
    });

  // 👍A) Error 1 TypeError    💡B) Error 1
  // 💖C) Error 1 Success 2    😀D) undefined

  /*
  Answer is C) Error 1 Success 2 because in promise chaining .then method below .catch method will be called if in .catch method we are not 
  returning rejected promise ( by default implicitly returns a promise that is handled by it's below .then method )
  */
}
// MCQ21();

// 👉 MCQ-22
function MCQ22() {
  function foo() {
    let a = (b = 0);
    a++;
    return a;
  }
  foo();
  console.log(typeof a);
  console.log(typeof b);

  // 👍A) undefined number        💡B) ReferenceError number
  // 💖C) undefined undefined     😀D) number number

  /* 
  Answer is A) undefined number because variable a is declared with let it is blocked scope and will be "not defined" outside function foo().
  The typeof operator returns "undefined" even for “undeclared” (or “not defined”) variables.
  Notice that there was no error thrown when we executed typeof a, even though a is an undeclared variable. 
  This is a special safety guard in the behavior of typeof. 
  and variable b is a just global scope variable hence it will be available outside function foo() also. 
  */
}
// MCQ22();

// 👉 MCQ-23
function MCQ23() {
  console.log("start");

  setTimeout(() => {
    console.log("first");
  }, 0);

  Promise.resolve("second").then((res) => console.log(res));

  console.log("end");

  // 👍A) start end first second       💡B) start first second end
  // 💖C) start end second first       😀D) start first end second

  /* 
  Answer is C) start end second first because callback function attached to Promises added into microtask queue 
  whereas callback function of setTimeout added into callback ( macroTask ) queue. 
  microTask queue has more priority than callback ( macroTask ) queue.
  */
}
// MCQ23();

// 👉 MCQ-24
function MCQ24() {
  const person1 = {
    name: "Jayesh",
    age: 24,
  };

  const person2 = person1;
  person2.name = "Virat";

  console.log(person1.name);
  console.log(person2.name);

  // 👍A) Jayesh Virat  💡B) Virat Virat
  // 💖C) Virat Jayesh  😀D) Jayesh Jayesh

  /* 
  Answer is B) Virat Virat because objects are passed as a reference, person1 and person2 will hold the same memory address
  and altering any property of person2 will modify property of person1 as well.
  */
}
// MCQ24();

// 👉 MCQ-25
function MCQ25() {
  let p = new Promise((resolve, reject) => {
    reject(Error("Fails!"));
  });
  p.catch((error) => {
    console.log(error.message);
  }).then((result) => {
    console.log(result);
  });

  // 👍A) Fails! undefined    💡B) Fails!
  // 💖C) Fails! TypeError    😀D) Fails! Fails!

  /* 
  Answer is A) Fails! undefined because promise is rejecting so .catch callback will execute and console "Fails" first.
  In promise chaining .then method below .catch method will be called if in .catch method we are not 
  returning rejected promise ( by default implicitly it returns a promise that is handled by it's below .then method ).
  as .catch method is not returning anything, result of .then method will be undefined.

  The Error() constructor creates an error object. Error() can be called with or without new. Both create a new Error instance.
  Error objects are thrown when runtime errors occur. The Error object can also be used as a base object for user-defined exceptions.
  Error.message in user-created Error objects is the string provided as the constructor's first argument that is "Fails!" in our case.
  */
}
// MCQ25();

// 👉 MCQ-26
function MCQ26() {
  const person = {
    name: "JC",
    displayName() {
      console.log(this.name);
    },
  };

  const jayesh = Object.create(person);

  person.displayName();
  jayesh.displayName();

  // 👍A) JC undefined          💡B) undefined JC
  // 💖C) undefined undefined   😀D) JC JC

  /* 
  Answer is D) JC JC because Object.create() method creates a new object, using an existing object as the prototype 
  of the newly created object. Object.create() is used for Prototypal inheritance. jayesh.__proto__ will point to person object. 
  If child object does not have property then it will inherit the property from it's parent ( prototype ) object.
  */
}
// MCQ26();

// 👉 MCQ-27
function MCQ27() {
  const fetchData = function () {
    return new Promise((res) => res("One"));
  };

  let isLoading = true;
  fetchData()
    .then((result) => {
      console.log(result);
    })
    .finally(() => {
      console.log("Two");
      isLoading = false;
    });

  console.log(isLoading);

  // 👍A) One Two true   💡B) One Two false
  // 💖C) true One Two   😀D) false One Two

  /* 
  Answer is C) true One Two because first synchronous code will be executed i.e isLoading ( true ). 
  once callstack is empty and promise is resolved, callback function attached to the promise .then method() will execute
  and eventually .finally method will be executed.
  */
}
// MCQ27();

// 👉 MCQ-28
function MCQ28() {
  const calc = (a) => {
    return (b) => {
      if (b) return calc(a + b);
      return a;
    };
  };

  console.log(calc(1)(2)(3)(4)());

  // 👍A) 3   💡B) 10
  // 💖C) 5   😀D) 1

  /* 
  Answer is B) 10 because of Infinite Currying.
  Currying is a technique to convert multiple arguments function into a single argument functions (unary functions) in a sequence.
  There are two ways to perform currying :-
  1) Using Closures ( Used in above question )
  2) Using Bind
  */
}
// MCQ28();

// 👉 MCQ-29
function MCQ29() {
  const person1 = {
    name: "Jayesh",
  };

  const person2 = {
    name: "Virat",
  };

  const person = Object.assign(person1, person2);

  console.log(person.name);
  console.log(person1.name);

  // 👍A) Virat Virat   💡B) Virat Jayesh
  // 💖C) Jayesh Virat  😀D) Jayesh Jayesh

  /* 
  Answer is A) Virat Virat because Object.assign() method copies all own properties from one or more source objects to a target object. 
  It returns the modified target object. Merging objects with same properties overwritten by other objects that have the same properties later in the parameters order.

  In the above question, person1 is target object that is merged with person2 and as both objects have same property name
  that's why "Jayesh" is overwritten by "Virat". person and person1 points to the same memory address. comparing person === person1 results true.

  Note:- While Cloning an object using Object.assign makes deep copies of data if the data is not nested. When we have nested data in an object then 
  It will create a deep copy of the top most data and a shallow copy of the nested data.  
  
  Cloning an Object :-
  const obj = { a: 1 };
  const copy = Object.assign({}, obj);
  console.log(copy); // { a: 1 }

  Syntax-
  Object.assign(target, ...sources)
  */
}
// MCQ29();

// 👉 MCQ-30
function MCQ30() {
  const promise = () => Promise.resolve("Success");

  function first() {
    promise().then((res) => console.log(res));
    console.log("First");
  }

  async function second() {
    const res = await promise();
    console.log(res);
    console.log("Second");
  }

  first();
  second();

  // 👍A) First Success Second Success
  // 💡B) First Second Success Success
  // 💖C) Second Success First Success
  // 😀D) First Success Success Second

  /* 
  Answer is D) First Success Success Second because :-
  1) While calling first function, callback function attached to then method of promise will be stored into microtask queue 
  and next synchronous code i.e console.log("First") will be executed in callstack. 
  2) While calling second function which is async, The keyword await in async second function makes JavaScript wait until
  the promise settles and returns its result. So, as there are two resolved promises callback function stored in microtask queue.
  first promise .then method will console "Success", after that await promise of second promise will console "Success".
  3) At last, Synchronous code after the await keyword in async function will be executed i.e console.log("Second");
  */
}
// MCQ30();

// 👉 MCQ-31
function MCQ31() {
  console.log("start");

  async function getData() {
    console.log("JC");
    return "Jayesh";
  }

  getData().then((res) => console.log(res));

  console.log("end");

  // 👍A) start end JC Jayesh     💡B) start JC Jayesh end
  // 💖C) start JC end Jayesh     😀D) start Jayesh JC end

  /* 
  Answer is C) start JC end Jayesh because async function always returns a promise. If no promise is return other values are wrapped in a resolved promise automatically.
  So in the above question return "Jayesh" would be same as Promise.resolve("Jayesh");
  First, All the synchronous code will be executed i.e start JC end and later on callback function attached to promise that is stored in microtask queue will be executed by callstack.
  Hence, The Final Result will be:- start JC end Jayesh
  */
}
// MCQ31();

// 👉 MCQ-32
function MCQ32() {
  const p1 = Promise.resolve("First");
  const p2 = Promise.reject("Second");
  const p3 = Promise.resolve("Third");

  const runPromises = async () => {
    try {
      const res = await Promise.all([p1, p2, p3]);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  runPromises();

  // 👍A) [ First, Third ]    💡B) Second
  // 💖C) [ First ]           😀D) [ Second ]

  /* 
  Answer is B) Second because Promise.all() executes all passed promises concurrently and improves the performance of the application.
  👉 Promise.all() Cases :-
  1) If all promises resolve, returns the array of results of all promises resolved.
  2) If any promise fails, returns the rejected promise error.
  3) If passed empty [], returns empty [].

  In the above question, promise p2 is rejected. Hence, Promise.all() will return the rejected promise error "Second".
  */
}
// MCQ32();

// 👉 MCQ-33
function MCQ33() {
  const inc = async (x) => {
    x = x + (await 1);
    return x;
  };

  const increment = async (x) => {
    x = x + 1;
    return x;
  };

  inc(1).then((x) => {
    increment(x).then((x) => console.log(x));
  });

  // 👍A) 1    💡B) 2
  // 💖C) 3    😀D) 4

  /* 
  Answer is C) 3 because first promise return by async function "inc" will resolve and return ( 1 + 1 ) 2 as a result in .then method.
  secondly, promise return by async function "increment" will resolve and return ( 2 + 1 ) 3 as a result in .then method.

  Note:- await keyword in async function waits for the promise to fullfilled but if the value is not a Promise ( In above question await 1 ), 
  it converts the value to a resolved Promise, and waits for it. So. await 1 would be same as Promise.resolve(1).
  */
}
// MCQ33();

// 👉 MCQ-34
function MCQ34() {
  displayName();
  var displayName = function () {
    console.log("Jayesh");
  };

  function displayName() {
    console.log("JC");
  }
  displayName();

  // 👍A) Jayesh Jayesh   💡B) JC JC
  // 💖C) Jayesh JC       😀D) JC Jayesh

  /* 
  Answer is D) JC Jayesh because of Hoisting When javaScript engine starts executing the code, It creates the global execution 
  context in callstack, Each context in callstack has two phases:- 1) Memory Creation and 2) Code Execution

  at the Memory Creation, for var displayName = func(){} displayName will be undefined but below in the code declared function displayName() {} 
  will override the displayName value to function displayName() { console.log("JC") }

  displayName :  displayName() {
    console.log("JC");
  }

  at the Code Execution, first displayName() function will console "JC" and at the next line displayName will be assigned
  function () { console.log("Jayesh") } as value; 

  displayName :  displayName() {
    console.log("Jayesh");
  }

  Hence, last displayName() function will console "Jayesh"
  */
}
// MCQ34();

// 👉 MCQ-35
function MCQ35() {
  const fetchData = function () {
    return new Promise((res, reject) => {
      reject("Error");
    });
  };

  fetchData()
    .then(null, (err) => {
      console.log("First");
      console.log(err);
    })
    .catch(() => {
      console.log("Second");
      console.log(err);
    });

  // 👍A) First Error        💡B) Second Error
  // 💖C) Second undefined   😀D) ReferenceError

  /* 
  Answer is A) First Error because then() method takes up to two arguments: callback functions for the fulfilled and rejected 
  cases of the Promise.
  Syntax of then :- then(onFulfilled) or then(onFulfilled, onRejected).
  then(
  (value) => fulfillment handler 
  (reason) => rejection handler 
  );

  In the above question, Inside .then() - We are passing first argument as null and second argument as callback function for rejected 
  case of the Promise. So, Second argument callback function will be executed for rejected case and will console First Error. 
  */
}
// MCQ35();

// 👉 MCQ-36
function MCQ36() {
  function resolveAfterNSeconds(time, value) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(value);
      }, time);
    });
  }

  async function doTasks() {
    console.time("time");
    let a = await resolveAfterNSeconds(1000, 1);
    let b = resolveAfterNSeconds(2000, 2);
    let c = resolveAfterNSeconds(1000, 3);

    console.log(a + (await b) + (await c));
    console.timeEnd("time");
  }
  doTasks();

  // 👍A) 6 in 4 Sec      💡B) 6 in 3 Sec
  // 💖C) NaN in 1 Sec    😀D) 1 in 4 Sec

  /* 
  Answer is B) 6 in 3 Sec because while execution of doTasks function, first await resolveAfterNSeconds(1000, 1) will wait
  for 1 second. variable "a" will be assigned value as 1. a = 1, Total time = 1 Sec.

  In Next Line, resolveAfterNSeconds(2000, 2) pending Promise will be assigned to variable "b" and immediately next line
  resolveAfterNSeconds(1000, 3) pending Promise will be assigned to variable "c", both promises "b" and "c" will run concurrently.

  At Last Line, console.log(a + (await b) + (await c)), promise "b" will take 2Sec to resolve and concurrently promise "c" will 
  also get resolved in 1sec. overall time to execute (await b) + (await c) is only 2Sec because of concurrency.

  Hence, Output would be 6 where a = 1, b = 2, c = 3 and Total time = 3 Sec.
  */
}
// MCQ36();

// 👉 MCQ-37
function MCQ37() {
  let a = true;

  setTimeout(() => {
    a = false;
  }, 2000);

  while (a) {
    console.log("JC");
  }

  // 👍A) "JC" one time after 2 sec.
  // 💡B) "JC" continously till 2 sec.
  // 💖C) "JC" Infinite times.
  // 😀D) Console Nothing.

  /* 
  Answer is C) "JC" Infinite times because callback attached to setTimeout function is asynchronous task and need to wait
  for execution of main thread ( synchronous tasks in callstack ) to execute.

  As value of a is true, code will never exit from while loop ( callstack will never be empty to take callback attached to
  setTimeout function ). Hence, It will console "JC" Infinite times.
  */
}
// MCQ37();

// 👉 MCQ-38
function MCQ38() {
  console.log(1);

  setTimeout(function () {
    console.log(2);
  }, 1000);

  setTimeout(
    (function () {
      console.log(3);
      return () => {};
    })(),
    2000
  );

  console.log(4);

  // 👍A) 1 2 3 4    💡B) 1 4 3 2
  // 💖C) 1 4 2 3    😀D) 1 3 4 2

  /* 
  Answer is D) 1 3 4 2 because at first console.log(1) will print "1", callback function attached to first setTimeout will 
  wait for atleast 1 second.
  In the 2nd setTimeout we are passing IIFE ( Immediately Invoked Function Expression ). So, IIFE will print "3" immediately 
  and will return () => {} as callback that will wait for atleast 2 seconds. 
  console.log(4) will print "4", callstack will be empty as all synchronous tasks completed.
  After one second callback function attached to first setTimeout pushed into callstack and console.log(2) will print "2".
  */
}
// MCQ38();

// 👉 MCQ-39
function MCQ39() {
  const num = [1, 2, 3];
  const double = function (num) {
    return num * 2;
  };

  const res1 = num.map(double);
  const res2 = num.forEach(double);

  console.log(res1);
  console.log(res2);

  // 👍A) [2, 4, 6] [2, 4, 6]    💡B) [2, 4, 6] undefined
  // 💖C) [2, 4, 6] [1, 2, 3]    😀D) undefined [2, 4, 6]

  /* 
  Answer is B) [2, 4, 6] undefined because map function iterates through each element of an array and can modify each 
  element of an array. map function does not mutate the original array, Always returns new copy of a mutated array.

  Whereas, forEach function iterates through each element of an array and executes a callback function once for each 
  element and does not mutate the original array, Always returns undefined.
  */
}
// MCQ39();

// 👉 MCQ-40
function MCQ40() {
  setTimeout(() => {
    console.log(1);
    Promise.resolve().then(() => {
      console.log(2);
    });
  }, 0);

  Promise.resolve().then(() => {
    console.log(3);
    setTimeout(() => {
      console.log(4);
    }, 0);
  });

  // 👍A) 3 1 2 4    💡B) 3 2 1 4
  // 💖C) 1 2 3 4    😀D) 3 4 1 2

  /* 
  Answer is A) 3 1 2 4 because of taskqueue and microtask queue behaviour.
  callback attached to setTimeout will be pushed to taskqueue and callback of Promise.resolve().then will be pushed to microtask queue.

  As microtask queue has higher priority than taskqueue, callback attached to Promise.then will start executing in callstack 
  and console.log(3) will print "3", in the next line callback attached to setTimeout will be pushed to taskqueue.

  Now taskqueue has two setTimeout callback functions, So first callback function will start executing and console.log(1) will print "1"
  in the next line callback attached to Promise.resolve().then will be pushed to microtask queue.

  Now, microtask queue has one callback and taskqueue also has one callback, As microtask queue has higher priority than taskqueue
  from microtask queue callback function will execute and console.log(2) will print "2" and at last from taskqueue console.log(4) will print "4".
  */
}
// MCQ40();

// 👉 MCQ-41
function MCQ41() {
  const arr = [1, 2, 5, 3, 2, 4];

  const checkTwo = (num, i, arr) => {
    if (num === 2) return true;
    return false;
  };

  const res1 = arr.filter(checkTwo);
  const res2 = arr.find(checkTwo);

  console.log(res1);
  console.log(res2);

  // 👍A) [2, 2] [2, 2]    💡B) [2, 2] [2]
  // 💖C) [2] 2            😀D) [2, 2] 2

  /* 
  Answer is D) [2, 2] 2 because find method returns only first found value whereas filter method returns an array of filtered values.
  */
}
// MCQ41();

// 👉 MCQ-42
function MCQ42() {
  const person = {
    key: "name",
  };

  const jayesh = {
    name: "JC",
  };

  console.log(jayesh[person.key]);
  console.log(jayesh?.person?.key);
  console.log(jayesh[person["key"]]);

  // 👍A) undefined JC JC    💡B) JC JC JC
  // 💖C) JC undefined JC    😀D) JC JC undefined

  /* 
  Answer is C) JC undefined JC because jayesh object does not have property "person". So, jayesh?.person will be undefined
  and because of the optional chaining jayesh?.person?.key won't thow any error and return undefined.

  If there was no optional chaining used then jayesh.person.key would have thrown Uncaught TypeError: Cannot read properties of undefined (reading 'key')
  */
}
// MCQ42();

// 👉 MCQ-43
function MCQ43() {
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    getName() {
      return this.name;
    }
    static getAge() {
      return this.age;
    }
  }

  const jayesh = new Person("JC", 24);
  console.log(jayesh.getName());
  console.log(jayesh.getAge());

  // 👍A) JC 24          💡B) JC TypeError
  // 💖C) JC undefined   😀D) undefined JC

  /* 
  Answer is B) JC TypeError because static methods are created once and only access by class, static methods can not be called by an object 
  jayesh.getName() will throw an Uncaught TypeError: jayesh.getAge is not a function. static methods are also known as class methods.

  A static method cannot access a class's instance variables and instance methods, because a static method can be called even when 
  no objects of the class have been instantiated. For the same reason, the this reference cannot be used in a static method. 
  Person.getAge() will return undefined as "this" referes to the object. static methods can only use static variables and call static methods.

  In the static method, the method can only access static data members and static methods of another class or same class but cannot 
  access non-static methods and variables.
  */
}
// MCQ43();

// 👉 MCQ-44
function MCQ44() {
  const p1 = new Promise((res) => {
    setTimeout(() => res("One"), 2000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(() => rej("Two"), 1000);
  });

  Promise.race([p1, p2])
    .then((res) => {
      console.log("result", res);
    })
    .catch((err) => {
      console.log("error", err);
    });

  // 👍A) result One      💡B) result Two
  // 💖C) error One       😀D) error Two

  /* 
  Answer is D) error Two because Promise.race() executes all passed promises concurrently and returns the first resolved or rejected promise result. 
  In above question, promise p2 is getting rejected in one second before promise p1 that is taking 2 seconds to fullfill.
  */
}
// MCQ44();

// 👉 MCQ-45
function MCQ45() {
  function Person(name, age) {
    this.name = name;
    this.age = age;

    this.getInfo = function () {
      return this.name;
    };
  }

  Person.prototype.getInfo = function () {
    return `${this.name} ${this.age}`;
  };

  const jayesh = new Person("JC", 24);
  console.log(jayesh.getInfo());

  // 👍A) JC        💡B) undefined
  // 💖C) JC 24     😀D) TypeError

  /* 
  Answer is A) JC because Person.prototype.getInfo ( Prototye member ) will add getInfo function to Person object's Prototype ( Parent object of Person Object ), 
  where as this.getInfo = function () { return this.name }; will add the getInfo function to Person object ( Instance member )
  So, inner getInfo function will override it's parent prototype getInfo function and we will get the output as "JC". 
  */
}
// MCQ45();

// 👉 MCQ-46
function MCQ46() {
  Promise.resolve(1)
    .then((res) => {
      console.log(res);
      return res * 2;
    })
    .then((res) => {
      console.log(res);
      return res * 2;
    })
    .then((res) => {
      console.log(res);
      return res * 2;
    })
    .finally((res) => {
      console.log(res);
    });

  // 👍A) 1 2 4 TypeError     💡B) 1 2 4
  // 💖C) 1 2 4 undefined     😀D) 1 2 4 8

  /* 
  Answer is C) 1 2 4 undefined because of the Promise chaining.
  Promise chaining allows you to chain together multiple asynchronous tasks in a specific order where one asynchronous task needs to be performed 
  after the completion of other asynchronous task.

  💡 We can perform Promise Chaining :-
  👉 by returning a new instance of promise in then()
  👉 by returning a value in then (), behind the scene it returns a new promise that immediately resolves to the return value.

  .finally method() :- callback function attached to .finally method does not take any parameters, hence It will output undefined. 
  */
}
// MCQ46();

// 👉 MCQ-47
function MCQ47() {
  function checkPerson(data) {
    if (data === { name: "Jayesh" }) {
      console.log("One");
    } else if (data == { name: "Jayesh" }) {
      console.log("Two");
    } else {
      console.log("Three");
    }
  }

  checkPerson({ name: "Jayesh" });

  // 👍A) One Two      💡B) Three
  // 💖C) One          😀D) Two

  /* 
  Answer is B) Three because objects are non-primitive data types that compared by thier references.
  data and { name: "Jayesh" } will have diffrent memory reference Hence, It will console "Three" as an output.
  To compare object as value in the above case we can use JSON.stringify(), JSON.stringify(data) === JSON.stringify({ name: "Jayesh" }) results true.
  */
}
// MCQ47();

// 👉 MCQ-48
function MCQ48() {
  function getName1() {
    console.log(arguments[0]);
  }

  getName1("Jayesh");

  const getName2 = () => {
    console.log(arguments[0]);
  };

  getName2("JC");

  // 👍A) Jayesh ReferenceError    💡B) Jayesh undefined
  // 💖C) ReferenceError JC        😀D) Jayesh JC

  /* 
  Answer is A) Jayesh ReferenceError because Arrow functions don't have their own bindings to this, arguments, or super.
  Above code will give Uncaught ReferenceError: arguments is not defined at getName2. In place of arguments, we can use 
  rest operator in arrow function definition for arguments array.  
  const getName2 = (...arguments) => {
    console.log(arguments[0]);
  };
  getName2("JC"); // JC
  */
}
// MCQ48();

// 👉 MCQ-49
function MCQ49() {
  var name = "Jayesh";
  let age = "24";
  const player = "Virat";

  {
    var name = "JC";
    let age = "25";
    const player = "VK";
  }

  console.log(name);
  console.log(age);
  console.log(player);

  // 👍A) JC 25 Virat     💡B) JC 24 Virat
  // 💖C) Jayesh 25 Vk    😀D) JC 24 VK

  /* 
  Answer is B) JC 24 Virat because variables declared with "var" keyword are function-scoped whereas variables declared with "let" or "const" are block-scoped.
  */
}
// MCQ49();

// 👉 MCQ-50
function MCQ50() {
  const person = {
    name: "Jayesh",
    age: 24,
    name: "JC",
  };

  const { name: first, age, name: last } = person;

  console.log(first, age, last);

  // 👍A) JC 24 undefined    💡B) Jayesh 24 Jayesh
  // 💖C) JC 24 JC           😀D) Jayesh 24 TypeError

  /* 
  Answer is C) JC 24 JC because If in an object there are two keys with the same name, the "name" key will be replaced by the last value "JC". 
  "name" key will still be in its first position, but with the last replaced value.  

  In the next line we are destructuring the person object specifying an alternate destructured name for an object property ("name" as first and "name" as last)
  Both first and last will have "JC" as value.

  Final Output will be :- JC 24 JC
  */
}
// MCQ50();

// 👉 MCQ-51
function MCQ51() {
  const person = {};
  const name1 = { key: "name1" };
  const name2 = { key: "name2" };

  person[name1] = "Jayesh";
  person[name2] = "Virat";

  console.log(person[name1]);

  // 👍A) undefined          💡B) Jayesh
  // 💖C) [object Object]    😀D) Virat

  /* 
  Answer is D) Virat because Object keys are automatically converted into strings, name1 and name2 are keys of person object.
  as name1 and name2 are object after stringifying name1 and name2 will become [object Object], So person[name1] and person[name2] are nothing but person["object Object"]. 
  First, person["object Object"] will be set as "Jayesh" and in the next line person["object Object"] will have value as "Virat".

  When we log person[name1], which is actually person["object Object"] it will return value as "Virat". 
  */
}
// MCQ51();

// 👉 MCQ-52
function MCQ52() {
  const p1 = new Promise((res, rej) => {
    setTimeout(() => rej("One"), 1000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(() => res("Two"), 2000);
  });

  const p3 = new Promise((res, rej) => {
    setTimeout(() => res("Three"), 3000);
  });

  Promise.any([p1, p2, p3])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  // 👍A) One         💡B) Two
  // 💖C) Three       😀D) Error

  /* 
  Answer is B) Two because Promise.any() executes all passed promises concurrently and returns the first resolved promise result.
  If no promise resolves, It returns the AggregateError "All promises were rejected". If passed empty [], It returns error.

  In the above code, promise p2 is the first resolved promise, Hence It will output "Two" as a result.
  */
}
// MCQ52();

// 👉 MCQ-53
function MCQ53() {
  function showName() {
    return (() => "Jayesh")();
  }

  console.log(typeof showName);
  console.log(typeof showName());

  // 👍A) "function" "string"      💡B) "object" "string"
  // 💖C) "function" "function"    😀D) "function" "undefined"

  /* 
  Answer is A) "function" "string" because typeof showName is "function" as showName is function and for typeof showName(),
  immediately invoked function expression (IIFE) will execute immediately and return "Jayesh". "Jayesh" will be further returned by showName() function.
  typeof "Jayesh" will be "string". So, Final Output will be "function" "string".
  */
}
// MCQ53();

// 👉 MCQ-54
function MCQ54() {
  const arr = [1, 2, 3];

  const removeLast = function (array) {
    array.pop();
    return array;
  };

  removeLast([...arr]);
  console.log(arr);

  removeLast(arr);
  console.log(arr);

  // 👍A) [1, 2, 3] 3      💡B) [1, 2] [1, 2, 3]
  // 💖C) [1, 2] [1]       😀D) [1, 2, 3] [1, 2]

  /* 
  Answer is D) [1, 2, 3] [1, 2] because first time for removeLast([...arr]), arr is passed with spread operator because of which new copy ( different reference ) 
  of arr will be passed to removeLast function and won't mutate the original arr. arr will still have [1, 2, 3] as value.
  For second call of removeLast(arr), arr is passed directly with same memory reference so mutating array will change original "arr" as well, so arr will be modified to [1, 2].
  */
}
// MCQ54();

// 👉 MCQ-55
function MCQ55() {
  const list1 = ["Jayesh", "Virat"];
  const list2 = [];

  if (list1) {
    console.log("Display1");
  } else {
    console.log("Empty1");
  }

  if (list2) {
    console.log("Display2");
  } else {
    console.log("Empty2");
  }

  // 👍A) Empty1 Display2      💡B) Display1 Empty2
  // 💖C) Display1 Display2    😀D) Empty1 Empty2

  /* 
  Answer is C) Display1 Display2 because empty array [] or the empty object {} are truthy values in JavaScript, Boolean([]) is true.
  Hence, for both list1 and list2 the if statement condition will satisfy and will console Display1 Display2.

  Note:- To check if an array is empty, We can use array.length === 0.
  */
}
// MCQ55();

// 👉 MCQ-56
function MCQ56() {
  console.log("start");

  const first = setTimeout(() => {
    console.log("first");
    clearTimeout(second);
  }, 1000);

  const second = setTimeout(() => {
    console.log("second");
    clearTimeout(first);
  }, 2000);

  console.log("end");

  // 👍A) start first second end    💡B) start end first
  // 💖C) start end first second    😀D) start second end

  /* 
  Answer is B) start end first because The clearTimeout() method clears a timer set with the setTimeout() method.
  In variable "first" we are assigning id of first setTimeout and similarly in variable "second" we are assigning id of seconnd setTimeout.
  Both the setTimeouts ( asynchronous task ) will be handled by web api, as first setTimeout is taking only 1 second. So    
  callback function attached to first setTimeout will be executed and clearTimeout(second) will clear the second setTimeout from web api.
  Hence, The Final Output will be start end first.
  */
}
// MCQ56();

// 👉 MCQ-57
function MCQ57() {
  function* generateNumber(i) {
    yield i;
    yield i * 2;
    return i * 2 * 2;
    yield i * 2 * 2 * 2;
  }

  const numbers = generateNumber(10);

  console.log(numbers.next().value);
  console.log(numbers.next().value);
  console.log(numbers.next().value);
  console.log(numbers.next().value);

  // 👍A) 10 20 40 80    💡B) 10 20 undefined 40
  // 💖C) 10 20 20 40    😀D) 10 20 40 undefined

  /* 
  Answer is D) 10 20 40 undefined, Generator is a function that can be paused and resumed from where it was paused. It is written as the function keyword followed by an asterisk (*).
  Generator returns a Generator object that is used by calling the next method. For the first time calling numbers.next().value, we will get 10 as an output, second time 20 as an ouput.
  While calling numbers.next().value for third time, Inside generator function we have return keyword that will return 40 and also terminate the generator function and 
  as the generator function is finished calling numbers.next().value again for fourth time will give output as undefined. So, Final Output will be 10 20 40 undefined

  Note:- A return statement in a generator, when executed, will make the generator finish ( i.e. the done property of the object returned by it will be set to true ).
  */
}
// MCQ57();

// 👉 MCQ-58
function MCQ58() {
  const numbers = [1, 2, 3, 4, 5];

  const total1 = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);

  const total2 = numbers.reduce((acc, curr) => {
    return acc + curr;
  });

  console.log(total1);
  console.log(total2);

  // 👍A) 15 15     💡B) 10 15
  // 💖C) 15 10     😀D) 15 NaN

  /* 
  Answer is A) 15 15, Array.prototype.reduce is a higher order function that iterates through each value of an array and
  reduces array of values into single value.

  With initial value as second argument (callback loops for n times) accumulator takes initial value, and current takes first value of an array.
  Without initial value as second argument (callback loops for (n-1) times) accumulator takes first value of an array, and current takes second value of an array.
  */
}
// MCQ58();

// 👉 MCQ-59
function MCQ59() {
  const p1 = new Promise((res, rej) => {
    setTimeout(() => res("One"), 1000);
  });

  const p2 = new Promise((res, rej) => {
    setTimeout(() => rej("Two"), 2000);
  });

  Promise.allSettled([p1, p2])
    .then((result) => console.log(result))
    .catch((error) => console.log(error));

  // 👍A) [{ status: "fulfilled", value: "One" }]
  // 💡B) ["One", "Two"]
  // 💖C) [{ status: "fulfilled", value: "One" },
  //       { status: "rejected", reason: "Two" }]
  // 😀D) ["One"]

  /* 
  Answer is C) [{ status: "fulfilled", value: "One" },{ status: "rejected", reason: "Two" }]. Promise.allSettled() 
  returns a promise that gets resolved when all passed promises are settled ( either fulfilled or rejected ) and 
  in result it gives an array of objects having status and the value/reason of each promise.
  */
}
// MCQ59();

// 👉 MCQ-60
function MCQ60() {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.age = 24;

  const jayesh = new Person("JC");

  console.log(jayesh.hasOwnProperty("name"));
  console.log(jayesh.hasOwnProperty("age"));

  // 👍A) true true      💡B) true false
  // 💖C) false false    😀D) false true

  /* 
  Answer is B) true false because The hasOwnProperty() method returns a boolean indicating whether the object has the 
  specified property as its own property. If the specified property is inherited, or does not exist, the method returns false.
  */
}
// MCQ60();

// 👉 MCQ-61
function MCQ61() {
  const array = [
    "Whatever you want to do",
    "Believe it, believe it, believe it",
    "Even if you don't believe play the game of belief",
    "Act as if you believe. That is the Power",
  ];

  const result = array.slice(-2, 3);

  console.log(result[0]);

  // 👍A) "Whatever you want to do"
  // 💡B) "Believe it, believe it, believe it"
  // 💖C) "Even if you don't believe play the game of belief"
  // 😀D) "Act as if you believe. That is the Power"

  /* 
  Answer is C) "Even if you don't believe play the game of belief" because Array.prototype.slice returns a shallow copy 
  of an original array slicing it from given start index to end index (excluding end index) i.e start to end-1.
  slice method takes two arguments(optional) start and end, if no argument passed then it returns shallow copy of a original array with all values.

  positive index =>  0  1  2
  => for an array = [10,20,30]  
  negative index => -3 -2 -1
  */
}
// MCQ61();

// 👉 MCQ-62
function MCQ62() {
  setTimeout(() => {
    console.log(1);
  }, 1000);

  Promise.resolve(2).then((result) => {
    console.log(result);
  });

  setTimeout(() => {
    console.log(3);
  }, -1000);

  // 👍A) 1 3 2     💡B) 3 2 1
  // 💖C) 2 1 3     😀D) 2 3 1

  /* 
  Answer is D) 2 3 1 because If we provide something less than 0 sec then the browser will just ignore delay and use the minimum 0 sec.
  So, First Callback function attached to promise will console "2". Then second setTimout callback function will execute and console "3". 
  and after one second first setTimeout callback function will execute and console "1". Final result will be 2 3 1.
  */
}
// MCQ62();

// 👉 MCQ-63
function MCQ63() {
  let num = 10;

  const incrementNumber1 = () => num++;

  const incrementNumber2 = (num) => num++;

  const num1 = incrementNumber1();
  const num2 = incrementNumber2(num1);

  console.log(num1);
  console.log(num2);

  // 👍A) 11 12     💡B) 10 10
  // 💖C) 10 11     😀D) 11 11

  /* 
  Answer is B) 10 10 because The unary operator ++ first returns the value of the operand, then increments the value of the operand.
  So, incrementNumber1() will return "10" that will be assigned to "num1" and increment "num" by 1. incrementNumber2(num1) will also return "10" that will be assigned to "num2".
  */
}
// MCQ63();

// 👉 MCQ-64
function MCQ64() {
  const person = {
    name: "Jayesh",
    age: 24,
    lang: "JS",
  };

  const result = JSON.stringify(person, ["name", "age"]);
  console.log(result);

  // 👍A) "[object Object]"
  // 💡B) "{"name": "Jayesh", "age": 24, "lang": "JS"}"
  // 💖C) "{"name": "Jayesh", "age": 24}"
  // 😀D) "{"language": "JavaScript"}"

  /* 
  Answer is C) "{"name": "Jayesh", "age": 24}" because The second argument of JSON.stringify is the replacer. 
  The replacer can either be a function or an array that lets you control what and how the values should be stringified.
  If the replacer is an array, only the property names included in the array will be added to the JSON string. 
  In above case, only the properties with "name" and "age" are included, "lang" is excluded. So, result will be "{"name": "Jayesh", "age": 24}".
  */
}
// MCQ64();

// 👉 MCQ-65
function MCQ65() {
  const array = [1, 2, 3];
  const value = array.pop();

  const result = array.unshift(value);

  console.log(result);
  console.log(array);

  // 👍A) 3 [3, 1, 2]     💡B) [3, 1, 2] [3, 1, 2]
  // 💖C) 3 [1, 2, 3]     😀D) [3, 1, 2] [1, 2, 3]

  /* 
  Answer is A) 3 [3, 1, 2] because The pop() method removes the last element of an array and returns it. so value will be "3".
  The unshift() method adds n number of elements to the beginning of an array and returns the new length of the array. 
  array.unshift(value) will push "value" to beginning of array and will return the new size of the array. Hence, result => 3 array => [3, 1, 2]. 
  */
}
// MCQ65();

// 👉 MCQ-66
function MCQ66() {
  const person = {
    name: "Jayesh",
    age: 24,
    skill: {
      language: "JavaScript",
    },
  };

  Object.freeze(person);

  person.name = "JC";
  person.skill.language = "Java";

  console.log(person.name);
  console.log(person.skill.language);

  // 👍A) JC JavaScript        💡B) Jayesh Java
  // 💖C) Jayesh JavaScript    😀D) JC Java

  /* 
  Answer is B) Jayesh Java because The Object.freeze() method freezes an object. Freezing an object prevents extensions and makes existing 
  properties non-writable and non-configurable. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed.

  Note :- Object.freeze() method only freezes first level properties of an object, Nested properties of an object can still be changed, added and removed.
  as language property is nested property of person object so it can be altered. The Final Ouput will be Jayesh Java.
  */
}
// MCQ66();

// 👉 MCQ-67
function MCQ67() {
  const numbers = [1, 3, 11, 21, 2];

  const res1 = [...numbers.sort()];
  const res2 = [...numbers.sort((a, b) => a - b)];

  console.log(res1);
  console.log(res2);

  // 👍A) [1, 2, 3, 11, 21] [1, 2, 3, 11, 21]
  // 💡B) [1, 11, 2, 21, 3] [1, 11, 2, 21, 3]
  // 💖C) [1, 11, 2, 21, 3] [1, 2, 3, 11, 21]
  // 😀D) [1, 2, 3, 11, 21] [21, 11, 3, 2, 1]

  /* 
  Answer is C) [1, 11, 2, 21, 3] [1, 2, 3, 11, 21] because The sort() method by default sorts the elements of an array in 
  ascending order converting the elements into strings, then comparing their sequences of UTF-16 code units values.

  To compare numbers instead of strings, We can pass custom function ( compareFn ) in sort function, (a, b) => a - b is an arrow function that is passed.
  if compareFn(a, b) returns value > 0	sort a after b.
  if compareFn(a, b) returns value < 0	sort a before b.
  if compareFn(a, b) returns value === 0	keep original order of a and b. 
  */
}
// MCQ67();

// 👉 MCQ-68
function MCQ68() {
  const players = ["JC", "VK", "HP", "DK"];

  for (let player in players) {
    console.log(player);
  }

  for (let player of players) {
    console.log(player);
  }

  // 👍A) 0 1 2 3, 0 1 2 3
  // 💡B) JC VK HP DK, JC VK HP DK
  // 💖C) JC VK HP DK, 0 1 2 3
  // 😀D) 0 1 2 3, JC VK HP DK

  /* 
  Answer is D) 0 1 2 3, JC VK HP DK because for-in loop iterates over enumerable properties. In an array, the enumerable properties 
  are the "keys" of array elements, which are actually their indexes {0: "JC", 1: "VK", 2: "HP", 3: "DK"}.
  While for-of loop iterates over elements of an array, the variable "player" is equal to the element it's currently iterating over, "JC", "VK", "HP", "DK".
  */
}
// MCQ68();

// 👉 MCQ-69
function MCQ69() {
  obj1 = { a: 10 };
  const obj2 = obj1;
  obj2.a = 20;

  console.log(obj1);
  console.log(obj2);
  let obj1;

  // 👍A) { a: 10 } { a: 20 }
  // 💡B) { a: 20 } { a: 10 }
  // 💖C) { a: 20 } { a: 20 }
  // 😀D) ReferenceError

  /* 
  Answer is D) ReferenceError because "let" variables can not be accessed before their initialization. at the last line we are declaring let obj1. 
  and at first line obj1 = { a: 10 } we will get Uncaught ReferenceError: Cannot access 'obj1' before initialization.

  Once the "let" variables are declared then only we can initialize them. If we try to initialize "let" variables before their declaration It will throw ReferenceError.

  In the case of "var" variables, because of hoisting the obj1 variable will be initialized as undefined and will get { a: 20 } { a: 20 } as an output.
  In the case of "let" variables, the obj1 variable will be in temporal dead zone (time frame between hoisted to initialization).
  */
}
// MCQ69();

// 👉 MCQ-70
function MCQ70() {
  let user = {
    userName: "Jayesh",
    age: 24,
    getName: function () {
      return this.userName;
    },
  };

  let getName = user.getName;

  console.log(getName());
  console.log(getName.call(user));

  // 👍A) Jayesh Jayesh        💡B) undefined Jayesh
  // 💖C) Jayesh undefined     😀D) ReferenceError

  /* 
  Answer is B) undefined Jayesh because when we use let getName = user.getName, getName variable will be assigned as function () { return this.userName },
  "this" of getName function will point to window object and no property named with userName is present in window object, Hence It will console undefined.

  getName.call(user) will console "Jayesh" because call method is used for function borrowing, getName.call(user) is equivalent to user.getName().
  */
}
// MCQ70();

// 👉 MCQ-71
function MCQ71() {
  const person = {
    name: "Jayesh",
  };

  const { name = "Virat", age = 34 } = person;

  console.log(name);
  console.log(age);

  // 👍A) Jayesh 34     💡B) Virat undefined
  // 💖C) Virat 34      😀D) Jayesh undefined

  /* 
  Answer is A) Jayesh 34 because With destructuring we can set defaults, or fallback values so that if an item is not in the object (or Array) it will fall back to what we have set at the default.
  as "age" property is not present in person object, while destructuring age = 34 will set "age" variable as 34 default value.  
  */
}
// MCQ71();

// 👉 MCQ-72
function MCQ72() {
  const person = {
    name: "Jayesh",
  };

  const person1 = Object.create(person);
  person1.age = 24;

  delete person1.name;
  delete person1.age;

  console.log(person1.name);
  console.log(person1.age);

  // 👍A) undefined undefined   💡B) undefined Jayesh
  // 💖C) Jayesh undefined      😀D) Jayesh 24

  /* 
  Answer is C) Jayesh undefined because Object.create() method creates a new object, using an existing object as the prototype 
  of the newly created object. Object.create() is used for Prototypal inheritance. person1.__proto__ will point to person object. 
  If child object does not have property then it will inherit the property from it's parent ( prototype ) object.

  delete person1.name and delete person1.age will delete "name" and "age" property of person1 object but "name" property will still be inherited from it's parent ( prototype ) "person" object. 
  */
}
// MCQ72();

// 👉 MCQ-73
function MCQ73() {
  showName1();
  showName2();
  showName3();

  function showName1() {
    console.log("JC1");
  }

  var showName2 = function () {
    console.log("JC2");
  };

  var showName3 = () => {
    console.log("JC3");
  };

  // 👍A) JC1 undefined JC3   💡B) JC1 TypeError
  // 💖C) JC1 JC2 undefined   😀D) JC1 JC2 JC3

  /* 
  Answer is B) JC1 TypeError because function expressions and arrow functions are not hoisted in javascript only function declarations are hoisted.
  At the memory creation phase, variable "showName2" and "showName3" will be initialized as "undefined". while calling showName2() it will throw Uncaught TypeError: showName2 is not a function.
  */
}
// MCQ73();

// 👉 MCQ-74
function MCQ74() {
  const person = { name: "Jayesh" };

  function verifyPerson1(person) {
    return person === { name: "Jayesh" };
  }

  function verifyPerson2(person) {
    let p1 = JSON.stringify(person);
    let p2 = JSON.stringify({ name: "Jayesh" });
    return p1 === p2;
  }

  console.log(verifyPerson1(person));
  console.log(verifyPerson2(person));

  // 👍A) true false     💡B) true true
  // 💖C) false false    😀D) false true

  /* 
  Answer is D) false true because While comparing non-primitives data types (objects or arrays) with "===" operators it compares objects by their references.
  JSON.stringify is used for deep comparison of objects, JSON.stringify converts the object into string and "===" operators compares strings by their value.

  Default comparison :- "==" or "===" ( compare by value )
  Shallow comparison :- for comparing objects without nested property shallowCompare({a: 1}, {a: 1})
  Deep comparison :- for comparing objects with nested property deepCompare({a: {b: 1}}, {a: {b: 1}})
  */
}
// MCQ74();

// 👉 MCQ-75
function MCQ75() {
  function Person(name) {
    this.name = name;
  }

  Person.prototype.age = 24;

  const jayesh = new Person("JC");

  console.log(Object.keys(jayesh));

  let keys = [];
  for (let key in jayesh) {
    keys.push(key);
  }

  console.log(keys);

  // 👍A) ['name', 'age'] ['name', 'age']    💡B) ['name', 'age'] ['name']
  // 💖C) ['name'] ['name', 'age']           😀D) ['name', 'age'] ['age']

  /* 
  Answer is C) ['name'] ['name', 'age'] because Object.keys() method returns an array of a given object's own properties only,
  whereas for...in loop enumerates properties in the prototype chain as well.
  */
}
// MCQ75();

// 👉 MCQ-76
function MCQ76() {
  const person = {
    pName: "Jayesh",
    getInfo() {
      function getName() {
        console.log(this.pName);
      }
      getName();
    },
  };

  person.getInfo();

  // 👍A) undefined     💡B) Jayesh
  // 💖C) ""            😀D) Error

  /* 
  Answer is A) undefined because "this" keyword inside nested normal function refers to window object and no property named with pName is present in window object.
  We can get "Jayesh" as an output using arrow function, Because in arrow function the 'this' pointer is interpreted lexically, so it will refer to the object as desired.
  */
}
// MCQ76();

// 👉 MCQ-77
function MCQ77() {
  const person = {
    name: "JC",
    age: 24,
  };

  let lang = person.lang;
  lang = "JS";

  console.log(person);

  // 👍A) {name: 'JC', age: 24, lang: undefined}
  // 💡B) {name: 'JC', age: 24}
  // 💖C) {name: 'JC', age: 24, lang:'JS'}
  // 😀D) Error

  /*
  Answer is B) {name: 'JC', age: 24} because We are setting the variable lang equal to the value of the property called lang on the person object. 
  There is no property on this object called lang, so the variable lang has the value of undefined.
  We are not referencing the person object itself, We simply set the variable lang equal to the current value of the lang property on the person object.
  Then, we are setting lang equal to the string "JS". This doesn't change the person object beacuse there is no reference to that object.
  */
}
// MCQ77();

// 👉 MCQ-78
function MCQ78() {
  const players = ["VK", "HP", "Dk"];

  const result = players.splice(2, 1, "RP");

  console.log(players);
  console.log(result);

  // 👍A) ['Dk'] ['VK', 'HP', 'RP']
  // 💡B) ['VK', 'HP', 'RP'] ['VK', 'HP', 'RP']
  // 💖C) ['VK', 'HP', 'RP'] ['Dk']
  // 😀D) ['VK', 'HP', 'RP', 'Dk'] ['Dk']

  /*
  Answer is C) ['VK', 'HP', 'RP'] ['Dk'] because Array.prototype.splice modifies an original array and returns deleted values array.
  splice method takes (start, howManyDelete, newAdd1, newAdd2, newAddN), If no argument is passed then original array remains as it is and it returns an empty array [].
  positive index =>  0  1  2
    for an array = [10,20,30]  
  negative index => -3 -2 -1
  */
}
// MCQ78();

// 👉 MCQ-79
function MCQ79() {
  const person = {
    name: "Jayesh",
    age: 24,
    skill: {
      lang: "JavaScript",
    },
  };

  Object.seal(person);

  person.name = "JC";
  person.skill.lang = "Java";

  console.log(person.name);
  console.log(person.skill.lang);

  // 👍A) JC JavaScript        💡B) Jayesh Java
  // 💖C) Jayesh JavaScript    😀D) JC Java

  /* 
  Answer is D) JC Java because The Object.seal() method seals an object. A sealed object has a fixed set of properties: new properties cannot be added, 
  existing properties cannot be removed, But values of existing properties can still be changed as long as they are writable. seal() returns the same object that was passed in.
  
  Note :- Object.seal() method only seals first level properties of an object, Nested properties of an object can still be changed, added and removed.
  as existing properties can still be changed "name" will be changed to "JC" and lang property is nested property of person object so it can be altered. The Final Ouput will be JC Java.
  */
}
// MCQ79();

// 👉 MCQ-80
function MCQ80() {
  function Person(name, age) {
    this.name = name;
    this.age = age;
  }

  class Player {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }

  const jayesh = new Person("JC", 24);
  const virat = new Player("VK", 34);

  console.log(typeof Person);
  console.log(typeof Player);

  // 👍A) "object" "object"     💡B) "function" "function"
  // 💖C) "function" "class"    😀D) "object" "class"

  /* 
  Answer is B) "function" "function" because The typeof operator in JavaScript returns "function" for user-defined function, a predefined function, or a class.
  console.log(typeof function() {}) - user-defined function => "function"
  console.log(typeof Math.tan) - predefined function => "function"
  console.log(typeof class C {}) - class => "function"
  */
}
// MCQ80();

// 👉 MCQ-81
function MCQ81() {
  function add(num1, num2 = num1) {
    return num1 + num2;
  }

  const result = add(10);
  console.log(result);

  // 👍A) undefined         💡B) NaN
  // 💖C) ReferenceError    😀D) 20

  /* 
  Answer is D) 20 because while calling add(10) the value of num1 is equal to the passed value 10 and The default value of num2 is the 
  value of num1 that is 10. So, num1 + num2 will return 20.
  */
}
// MCQ81();

// 👉 MCQ-82
function MCQ82() {
  function getName1() {
    return "Jayesh";
  }

  const getName2 = () => {
    return "JC";
  };

  console.log(getName1.prototype);
  console.log(getName2.prototype);

  // 👍A) { constructor: ...} { constructor: ...}
  // 💡B) {} { constructor: ...}
  // 💖C) { constructor: ...} {}
  // 😀D) { constructor: ...} undefined

  /* 
  Answer is D) { constructor: ...} undefined because regular functions have a prototype property, which is an object (prototype object) with a constructor property. 
  Where as arrow functions do not have this prototype property. undefined gets returned when trying to access the prototype property using getName2.prototype.

  Difference b/w Regular Function and Arrow Function :-
  1) Arrow Function does not have it's own "this" keyword. 
  2) Arrow Function does not have it's own "argument" keyword. 
  3) Arrow Function can not be used as object function constructor.
  4) We can not use "new" keyword with arrow function.
  */
}
// MCQ82();

// 👉 MCQ-83
function MCQ83() {
  const numbers = [1, 2, 3, 4];

  delete numbers[2];

  console.log(numbers[2]);
  console.log(numbers.length);

  // 👍A) 3 4       💡B) undefined 4
  // 💖C) 4 3       😀D) undefined 3

  /* 
  Answer is B) undefined 4 because as we know that everything in javascript is an object. array [1, 2, 3, 4] is similar to { "0":1, "1":2, "2":3, "3":4 }.
  delete numbers[2] will delete the index 2 from array and array will become [1, 2, empty, 4]. the length of the array will not change.
  As index "2" property is removed from the array, numbers[2] will be undefined.
  */
}
// MCQ83();

// 👉 MCQ-84
function MCQ84() {
  const arr = [1, "Jayesh", { name: "JC" }];

  for (let value of arr) {
    console.log(value + 1);
  }

  // 👍A) 2 NaN [object Object]1        💡B) 2 NaN NaN
  // 💖C) 2 Jayesh1 [object Object]1    😀D) 2 Jayesh1 NaN

  /* 
  Answer is C) 2 Jayesh1 [object Object]1 because The + operator is not only used for adding numerical values, but we can also use it to concatenate strings. 
  Whenever the JavaScript engine sees that one or more values are not a number, it coerces the number into a string.
  The first one is 1, which is a numerical value. 1 + 1 returns the number 2.
  The second one is "Jayesh". "Jayesh" is a string and 1 is a number: 1 gets coerced into a string. "Jayesh" and "1" get concatenated, which results in the string "Jayesh1".
  The third one { name: "JC" } is an object. Neither a number nor an object is a string, so it stringifies both. Whenever we stringify a regular object, it becomes "[object Object]". "[object Object]" concatenated with "1" becomes "[object Object]1".
  */
}
// MCQ84();

// 👉 MCQ-85
function MCQ85() {
  function getName() {
    name = "JC";
    console.log(name);
  }

  let name = "Jayesh";
  getName();
  console.log(name);

  // 👍A) JC JC       💡B) JC undefined
  // 💖C) JC Jayesh   😀D) ReferenceError

  /* 
  Answer is A) JC JC because at first name is initialized as "Jayesh", while calling getName() function name will be overwritten by "JC".
  Hence, The result will be "JC" "JC".
  */
}
// MCQ85();

// 👉 MCQ-86
function MCQ86() {
  const person = [{ name: "Jayesh" }, 24];
  const result = person.slice();

  result[0].name = "JC";
  result[1] = 34;

  console.log(person[0]);
  console.log(person[1]);

  // 👍A) {name: 'Jayesh'} 24     💡B) {name: 'JC'} 24
  // 💖C) {name: 'Jayesh'} 34     😀D) {name: 'JC'} 34

  /* 
  Answer is B) {name: 'JC'} 24 because Array.prototype.slice method returns only a shallow copy of an original array.
  While changing result[0].name will also change person[0].name as nested property of array will have same reference.
  */
}
// MCQ86();

// 👉 MCQ-87
function MCQ87() {
  const calc = (a) => {
    return (b) => {
      return (c) => {
        return a + b + c;
      };
    };
  };

  console.log(calc(1)(2)(3));

  // 👍A) NaN     💡B) 3
  // 💖C) 6       😀D) Error

  /* 
  Answer is C) 6 because of function currying.
  Currying is a technique to convert multiple arguments function into a single argument functions (unary functions) in a sequence.
  There are two ways to perform currying :-
  1) Using Closures ( Used in above question )
  2) Using Bind
  */
}
// MCQ87();

// 👉 MCQ-88
function MCQ88() {
  const numbers = [1, 2, 3, 2, 2, 3];
  const obj = {};

  for (let num of numbers) {
    obj[num] = (obj[num] || 0) + 1;
  }

  console.log(obj[1]);
  console.log(obj[2]);

  // 👍A) 1 1       💡B) 1 2
  // 💖C) 2 3       😀D) 1 3

  /* 
  Answer is D) 1 3 because the above code is to find out the count of each number in an array. 
  the final "obj" will be {1: 1, 2: 3, 3: 2} where obj[1] is 1 and obj[2] is 3.
  */
}
// MCQ88();

// 👉 MCQ-89
function MCQ89() {
  const numbers = [1, [2, [3], 4], 5];

  const res1 = numbers.flat();
  const res2 = numbers.flat(2);

  console.log(res1);
  console.log(res2);

  // 👍A) [1, [2, [3], 4], 5] [1, [2, [3], 4], 5]
  // 💡B) [1, 2, [3], 4, 5] [1, 2, 3, 4, 5]
  // 💖C) [1, [2, [3], 4], 5] [1, 2, 3, 4, 5]
  // 😀D) [1, 2, [3], 4, 5] [1, [2, [3], 4], 5]

  /* 
  Answer is B) [1, 2, [3], 4, 5] [1, 2, 3, 4, 5] because Array.prototype.flat method flattens a given array up to the given depth. 
  By default, It takes depth as 1.
  */
}
// MCQ89();

// 👉 MCQ-90
function MCQ90() {
  class Person {
    constructor() {
      console.log("parent");
    }
  }

  class Player extends Person {
    constructor() {
      console.log("child");
      super();
    }
  }

  const virat = new Player();

  // 👍A) child parent     💡B) parent child
  // 💖C) child            😀D) parent

  /* 
  Answer is A) child parent because We create the variable virat which is an instance of the Player class so the constructor on Player gets called. 
  after which we call super(), super() calls the constructor of the parent class which is Person class so the constructor in Person gets called.
  */
}
// MCQ90();

// 👉 MCQ-91
function MCQ91() {
  const players = ["JC", "VK", "HP", "DK"];
  players.length = 0;

  console.log(players[0]);
  console.log(players[2]);

  // 👍A) JC undefined            💡B) JC HP
  // 💖C) undefined undefined     😀D) Error

  /* 
    Answer is C) undefined undefined because players.length = 0 will make players array empty, players[0] and players[2] both will be undefined.
  */
}
// MCQ91();

// 👉 MCQ-92
function MCQ92() {
  const person = ["Jayesh", "Virat"];

  const personObj = { ...person };

  console.log(personObj);

  // 👍A) {0, 1}
  // 💡B) {0: 'Jayesh', 1: 'Virat'}
  // 💖C) {'Jayesh', 'Virat'}
  // 😀D) Error

  /* 
  Answer is B) {0: 'Jayesh', 1: 'Virat'} because while destructuring the array in {} converts the array into object having key as element index and value as element itself.
  */
}
// MCQ92();

// 👉 MCQ-93
function MCQ93() {
  const array = [1, ["2", 3], "4"];
  const result = [];

  for (let item of array) {
    if (!Array.isArray(item)) {
      result.push(item);
    }
  }

  console.log(result);

  // 👍A) [1, ["2", 3], "4"]     💡B) [1]
  // 💖C) [1, "4"]               😀D) ["4"]

  /* 
  Answer is C) [1, "4"] because Array.isArray() method checks if the passed value is an Array. Hence, the result array will have only 1 and "4".
  */
}
// MCQ93();

// 👉 MCQ-94
function MCQ94() {
  let a = 10;
  let b = 20;

  [a, b] = [b, a];

  console.log(a);
  console.log(b);

  // 👍A) 10 10     💡B) 10 20
  // 💖C) 20 20     😀D) 20 10

  /* 
  Answer is D) 20 10 because [a, b] = [b, a] will swap the value of "a" and "b" due to array destructuring.
  */
}
// MCQ94();

// 👉 MCQ-95
function MCQ95() {
  const num1 = [1, 2];
  const num2 = [3, 4];

  const res = num1.concat(num2);

  console.log(num1);
  console.log(res);

  // 👍A) [1, 2] [1, 2, 3, 4]
  // 💡B) [1, 2, 3, 4] [1, 2, 3, 4]
  // 💖C) [1, 2] [1, 2]
  // 😀D) [1, 2, 3, 4] [1, 2]

  /* 
  Answer is A) [1, 2] [1, 2, 3, 4] because The concat() method is used to merge two or more arrays. It does not mutate the original array, and returns a new array.
  */
}
// MCQ95();

// 👉 MCQ-96
function MCQ96() {
  const user = { name: "Jayesh", age: 24 };
  const admin = { admin: true, ...user };

  console.log(admin);

  // 👍A) { admin: true, user: { name: "Jayesh", age: 24 }}
  // 💡B) { admin: true, name: "Jayesh", age: 24 }
  // 💖C) { admin: true, user: ["Jayesh", 24] }
  // 😀D) { admin: true }

  /* 
  Answer is B) { admin: true, name: "Jayesh", age: 24 } because of spread operator ..., user object will be unpacked and all the properties of user object will be added to the admin object.
  */
}
// MCQ96();

// 👉 MCQ-97
function MCQ97() {
  let a = 10;
  let b = new Number(10);

  console.log(a == b);
  console.log(a === b);

  // 👍A) true true     💡B) false true
  // 💖C) true false    😀D) false fasle

  /* 
  Answer is C) true false because new Number() is a built-in function constructor which returns an object. When we use the == operator, it only checks whether it has the same value. 
  They both have the value of 10, so it returns true. However, when we use the === operator, both value and type should be the same.
  */
}
// MCQ97();

// 👉 MCQ-98
function MCQ98() {
  const array = ["JavaScript", "with", "JC"];

  const result = array.join("-");

  console.log(result);

  // 👍A) ["JavaScript-with-JC"]
  // 💡B) ["JavaScript", "-", "with", "-", "JC"];
  // 💖C) "-JavaScript-with-JC-"
  // 😀D) "JavaScript-with-JC"

  /* 
  Answer is D) JavaScript-with-JC because The join() method creates and returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string. 
  It does not mutate the original array, and returns a string value. 
  */
}
// MCQ98();

// 👉 MCQ-99
function MCQ99() {
  function getName(...args) {
    console.log(typeof args);
  }

  getName("Jayesh");

  // 👍A) "array"     💡B) "object"
  // 💖C) "string"    😀D) "NaN"

  /* 
  Answer is B) "object" because The rest parameter (...args) converts all remaining arguments into an array. An array is an object, so typeof args returns "object". 
  */
}
// MCQ99();

// 👉 MCQ-100
function MCQ100() {
  const numbers = [1, 2, 3, 2, 4, 3];

  const result = [...new Set(numbers)];

  console.log(result);

  // 👍A) [1, 2, 3, 2, 4, 3]
  // 💡B) [1, 4]
  // 💖C) [1, 2, 3, 4]
  // 😀D) {1, 2, 3, 4}

  /* 
  Answer is C) [1, 2, 3, 4] because The Set object lets you store unique values of any type, whether primitive values or object references.
  A value in the Set may only occur once. it will remove duplicates from an array.
  */
}
// MCQ100();

// 👉 MCQ-101
function MCQ101() {
  let name = "Jayesh";
  let result = "";

  for (let char of name) {
    result = char + result;
  }

  console.log(result);

  // 👍A) hseyaJ     💡B) Jayesh
  // 💖C) eshJay     😀D) Error

  /* 
  Answer is A) hseyaJ because the above code will reverse the name "Jayesh".
  */
}
// MCQ101();

// 👉 MCQ-102
function MCQ102() {
  const arr1 = new Array(3);
  const arr2 = new Array(1, 2, 3);

  console.log(arr1);
  console.log(arr2);

  // 👍A) [3] [1, 2, 3]
  // 💡B) [empty × 3] [3]
  // 💖C) [3] [3]
  // 😀D) [empty × 3] [1, 2, 3]

  /* 
  Answer is D) [empty × 3] [1, 2, 3] because The Array() constructor is used to create Array objects. 
  If the only one argument passed to the Array constructor then it returns a new empty slots array of the passed argument as length.
  Syntax :-
  new Array(element0, element1, ....., elementN)
  new Array(arrayLength)
  */
}
// MCQ102();

// 👉 MCQ-103
function MCQ103() {
  const str = "Jayesh-JC";

  const result = str.split("-");

  console.log(str);
  console.log(result);

  // 👍A) Jayesh-JC Jayesh-JC
  // 💡B) Jayesh-JC ['Jayesh', 'JC']
  // 💖C) ['Jayesh', 'JC'] ['Jayesh', 'JC']
  // 😀D) ['Jayesh', 'JC'] Jayesh-JC

  /* 
  Answer is B) Jayesh-JC ['Jayesh', 'JC'] because The split() method takes a separator and divides a String into an list of substrings by searching for the separator, 
  puts all these substrings into an array, and returns the array. It does not mutate the original string.
  */
}
// MCQ103();

// 👉 MCQ-104
function MCQ104() {
  const num1 = 0;
  const num2 = "0";

  const res1 = num1 || null;
  const res2 = num2 || null;

  console.log(res1);
  console.log(res2);

  // 👍A) 0 null      💡B) 0 "0"
  // 💖C) null "0"    😀D) null null

  /* 
  Answer is C) null "0" because The logical OR (||) operator returns the value of one of the specified operands, 
  If the left operand is truthy value it will return that value else it will return right operand value.
  As num2 is "0" (Non-empty string) that is truthy value so it will return "0" for res2.
  */
}
// MCQ104();

// 👉 MCQ-105
function MCQ105() {
  const nums = [1, 2, 3, 2, 4, 3];

  const res = nums.reduce((acc, curr) => {
    return !acc.includes(curr) ? [...acc, curr] : acc;
  }, []);

  console.log(res);

  // 👍A) [2, 3]
  // 💡B) [1, 2, 3, 4]
  // 💖C) [1, 4]
  // 😀D) [1, 2, 3, 2, 4, 3]

  /* 
  Answer is B) [1, 2, 3, 4] because the above code is to remove the duplicates from an array with the help of reduce method.
  */
}
// MCQ105();

// 👉 MCQ-106
function MCQ106() {
  const name = " Jayesh ";

  const result = name.trim();

  console.log(name);
  console.log(result);

  // 👍A) " Jayesh " "Jayesh"
  // 💡B) " Jayesh " "Jayesh "
  // 💖C) " Jayesh " " Jayesh"
  // 😀D) "Jayesh" "Jayesh"

  /* 
  Answer is A) " Jayesh " "Jayesh" because The trim() method removes whitespace from both ends of a string and returns a new string, without modifying the original string.
  */
}
// MCQ106();

// 👉 MCQ-107
function MCQ107() {
  const numbers = [1, 2, 3, 2, 2, 3];

  const result = numbers.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (acc[curr] || 0) + 1,
    };
  }, {});

  console.log(result[1]);
  console.log(result[2]);

  // 👍A) 1 1       💡B) 1 2
  // 💖C) 2 3       😀D) 1 3

  /* 
  Answer is D) 1 3 because the above code is to find out the count of each number in an array. 
  the final result will be {1: 1, 2: 3, 3: 2} where result[1] is 1 and result[2] is 3.
  */
}
// MCQ107();

// 👉 MCQ-108
function MCQ108() {
  const num1 = 123;
  const num2 = -123;

  function reverse(num) {
    let res = num.toString().split("").reverse().join("");
    return parseFloat(res) * Math.sign(num);
  }

  const res1 = reverse(num1);
  const res2 = reverse(num2);

  console.log(res1);
  console.log(res2);

  // 👍A) 321 -123       💡B) 321 321
  // 💖C) 321 -321       😀D) 321 NaN

  /* 
  Answer is C) 321 -321 because the above code is to reverse a number.
  */
}
// MCQ108();

// 👉 MCQ-109
function MCQ109() {
  const num1 = 034;
  const num2 = 082;

  console.log(num1);
  console.log(num2);

  // 👍A) 34 82      💡B) 28 82
  // 💖C) 82 28      😀D) 82 34

  /* 
  Answer is B) 28 82 because of the Octal literals in JavaScript. If the number has zero prefix (0) followed by a sequence of octal digits (from 0 to 7) 
  then the number will be converted into octal number. num1 => 034 is equal to 3*8 + 4*1 => 24 + 4 => 28.
  If the octal literal contains a number that is out of range, JavaScript ignores the leading 0 and treats the octal literal as a decimal.
  num2 => 082 has "8" which is out of range ( 0 to 7 ) so num2 will be treated as 82 only.
  */
}
// MCQ109();

// 👉 MCQ-110
function MCQ110() {
  const res1 = ("b" + "a" + +"b" + "a").toLowerCase();
  const res2 = ("b" + "a" + +"b" + "a").toUpperCase();

  console.log(res1);
  console.log(res2);

  // 👍A) baNANa BANANA     💡B) baba BABA
  // 💖C) baNANa baNANa     😀D) banana BANANA

  /* 
  Answer is D) banana BANANA because +'b' resolves to NaN ("Not a Number"), the unary operator + attempts to convert its operand into a number, 
  the value NaN is returned as "b" is character and can not be converted into number.
  */
}
// MCQ110();

// 👉 MCQ-111
function MCQ111() {
  const displayAmount = (() => {
    return amount ?? 0;
  })();

  var amount = 999;

  console.log(displayAmount);

  // 👍A) 999             💡B) 0
  // 💖C) Function(){}    😀D) Error

  /* 
  Answer is B) 0 because of nullish coalescing (??). The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand 
  when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand. 
  Due to hoisting of "var" variable "amount" will be undefined so function will return 0 (right-hand side operand). 
  */
}
// MCQ111();

// 👉 MCQ-112
function MCQ112() {
  const players = ["JC", { name: "VK" }, "DK"];

  const index1 = players.indexOf({ name: "VK" });
  const index2 = players.indexOf("DK");

  console.log(index1);
  console.log(index2);

  // 👍A) 0 2           💡B) 1 2
  // 💖C) -1 2          😀D) undefined 2

  /* 
  Answer is C) -1 2 because The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
  It compares searchElement to elements of the array using strict equality ( === ). players.indexOf({ name: "VK" }) will return -1 object are compared by their references.
  */
}
// MCQ112();

// 👉 MCQ-113
function MCQ113() {
  const str1 = "hello";
  const str2 = "eolhl";

  function foo(s1, s2) {
    s1 = s1.split("").sort().join("");
    s2 = s2.split("").sort().join("");
    return s1 === s2;
  }

  const res = foo(str1, str2);
  console.log(res);

  // 👍A) true         💡B) false
  // 💖C) ehllo        😀D) Error

  /* 
  Answer is A) true because the above code is to compare two strings by sorting.
  */
}
// MCQ113();

// 👉 MCQ-114
function MCQ114() {
  const nums = [1, 2, 3, 2, 4, 3];

  const res = nums.filter((num, i, arr) => {
    return arr.indexOf(num) === i;
  });

  console.log(res);

  // 👍A) [2, 3]
  // 💡B) [1, 2, 3, 2, 4, 3]
  // 💖C) [1, 4]
  // 😀D) [1, 2, 3, 4]

  /* 
  Answer is D) [1, 2, 3, 4] because the above code is to remove the duplicates from an array with the help of filter method.
  */
}
// MCQ114();

// 👉 MCQ-115
function MCQ115() {
  const nums = [1, 2, 3];

  nums[5] = 6;

  console.log(nums);

  // 👍A) [1, 2, 3, empty × 2, 6]
  // 💡B) [1, 2, 3, 6]
  // 💖C) [1, 2, 3, null × 2, 6]
  // 😀D) Error

  /* 
  Answer is A) [1, 2, 3, empty × 2, 6] because When you set a value to an element in an array that exceeds the length of the array, It creates "empty slots". 
  These actually have the value of undefined and console [1, 2, 3, empty × 2, 6] as an output. 
  */
}
// MCQ115();

// 👉 MCQ-116
function MCQ116() {
  const number = "9816231529845612";

  const last = number.slice(-4);
  const res = last.padStart(number.length, "*");

  console.log(res);

  // 👍A) 9816************
  // 💡B) ************5612
  // 💖C) 9816********5612
  // 😀D) ****************5612

  /* 
  Answer is B) ************5612 because The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length. 
  The padding is applied from the start of the current string. Masking the important details of user is the use case of padStart(). 
  */
}
// MCQ116();

// 👉 MCQ-117
function MCQ117() {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [1, 2, 3, 8, 9];

  const res = arr1.filter((num) => {
    return arr2.includes(num);
  });

  console.log(res);

  // 👍A) [4, 5, 8, 9]
  // 💡B) [1, 2, 3, 4, 5, 8, 9]
  // 💖C) [1, 2, 3]
  // 😀D) [1, 2, 3, 4, 5]

  /* 
  Answer is C) [1, 2, 3] because the above code is to find the intersection of two arrays.   
  */
}
// MCQ117();

// 👉 MCQ-118
function MCQ118() {
  const num = 5431;

  function addition(num) {
    let sum = 0;
    while (num !== 0) {
      let rem = num % 10;
      sum += rem;
      num = parseInt(num / 10);
    }
    return sum > 9 ? addition(sum) : sum;
  }

  const res = addition(num);

  console.log(res);

  // 👍A) 11         💡B) 13
  // 💖C) 9          😀D) 4

  /* 
  Answer is D) 4 because the above code is to find the sum of digits of a number until the sum becomes a single digit.   
  */
}
// MCQ118();

// 👉 MCQ-119
function MCQ119() {
  const arr = ["JC", { name: "VK" }, "JC", { name: "VK" }];

  const res = arr.filter((item, index, array) => {
    if (array.indexOf(item) === index) {
      return true;
    } else {
      return false;
    }
  });

  console.log(res);

  // 👍A) ["JC", { name: "VK" }, "JC", { name: "VK" }]
  // 💡B) ["JC", { name: "VK" }, { name: "VK" }]
  // 💖C) ["JC", { name: "VK" }]
  // 😀D) ["JC", { name: "VK" }, "JC"]

  /* 
  Answer is B) ["JC", { name: "VK" }, { name: "VK" }] because the above code is to remove the primitive type duplicates from an array with the help of filter method.
  Non-primitive type duplicates will not be filtered out as indexOf() method uses strict equality ( === ), array.indexOf({ name: "VK" }) will return -1 as object are compared by their references.   
  */
}
// MCQ119();

// 👉 MCQ-120
function MCQ120() {
  function Person(name) {
    this.name = name;
  }
  Person.prototype.country = "India";

  function Child(name) {
    Person.call(this, name);
  }
  Child.prototype = Object.create(Person.prototype);
  Child.prototype.constructor = Child;

  const baby = new Child("Baby");

  console.log(baby.name);
  console.log(baby.country);

  // 👍A) Baby undefined       💡B) undefined India
  // 💖C) Baby India           😀D) undefined undefined

  /* 
  Answer is C) Baby India because of the Prototype Inheritance The prototype is an object that is associated with every functions and objects by default in JavaScript,
  Every object includes __proto__ property that points to prototype object of a function that created the object and With the help of Prototype Chaining, Child Object is inheriting the properties of Parent Object.
  */
}
// MCQ120();

// 👉 MCQ-121
function MCQ121() {
  const str = "hello";
  let resultChar = "";
  let maxCount = 1;
  const obj = {};

  for (let char of str) {
    if (obj[char]) {
      obj[char] += 1;
      if (obj[char] > maxCount) {
        maxCount = obj[char];
        resultChar = char;
      }
    } else {
      obj[char] = 1;
    }
  }

  console.log(resultChar);

  // 👍A) h       💡B) e
  // 💖C) l       😀D) o

  /* 
  Answer is C) l because the above code is to find the maximum char from the string "hello" => Output: "l".   
  */
}
// MCQ121();

// 👉 MCQ-122
function MCQ122() {
  const arr = [1, 2, 3, 4, 5, 1, 2];
  const result = [];

  const obj = arr.reduce((acc, curr) => {
    return {
      ...acc,
      [curr]: (acc[curr] || 0) + 1,
    };
  }, {});

  for (let [key, val] of Object.entries(obj)) {
    if (val === 1) {
      result.push(+key);
    }
  }

  console.log(result);

  // 👍A) [1, 2, 3, 4, 5]
  // 💡B) [1, 2]
  // 💖C) [1, 2, 3, 4, 5, 1, 2]
  // 😀D) [3, 4, 5]

  /* 
  Answer is D) [3, 4, 5] because the above code is to find the elements occurring only once in the array. Input: [1, 2, 3, 4, 5, 1, 2] => Output: [ 3, 4, 5 ].   
  */
}
// MCQ122();

// 👉 MCQ-123
function MCQ123() {
  const one = false || {} || null;
  const two = null || false || "";
  const three = [] || 0 || true;

  console.log(one, two, three);

  // 👍A) null null true
  // 💡B) {} "" []
  // 💖C) false null []
  // 😀D) null "" true

  /* 
  Answer is B) {} "" [] because With the || operator, we can return the first truthy operand. If all values are falsy, the last operand gets returned.
  (false || {} || null): the empty object {} is a truthy value. This is the first (and only) truthy value, which gets returned. one is equal to {}.
  (null || false || ""): all operands are falsy values. This means that the last operand, "" gets returned. two is equal to "".
  ([] || 0 || ""): the empty array[] is a truthy value. This is the first truthy value, which gets returned. three is equal to [].
  */
}
// MCQ123();

// 👉 MCQ-124
function MCQ124() {
  const isAdmin = true;

  const person = {
    name: "jayesh",
    ...(isAdmin && { admin: true }),
  };

  console.log(person);

  // 👍A) {name: 'jayesh', admin: true}
  // 💡B) {name: 'jayesh', { admin: true }}
  // 💖C) {name: 'jayesh'}
  // 😀D) Error

  /* 
  Answer is A) {name: 'jayesh', admin: true} because the above code is to conditionally add property to an object.
  */
}
// MCQ124();

// 👉 MCQ-125
function MCQ125() {
  const num1 = 1;
  const num2 = "1";
  const obj1 = { name: "JC" };
  const obj2 = { name: "JC" };

  console.log(Object.is(num1, num2));
  console.log(Object.is(obj1, obj2));

  // 👍A) true true
  // 💡B) true false
  // 💖C) false false
  // 😀D) false true

  /* 
  Answer is C) false false because Object.is() determines whether two values are the same value. Object.is() is similar to the === operator. 
  The only difference between Object.is() and === is in their treatment of signed zeros and NaN values.
  */
}
// MCQ125();

// 👉 MCQ-126
function MCQ126() {
  let a = null;
  let b = undefined;

  console.log(a == b);
  console.log(a === b);

  // 👍A) true true
  // 💡B) true false
  // 💖C) false false
  // 😀D) false true

  /* 
  Answer is B) true false because Loose Equality Operator (==) checks whether the values are same, as null and undefined both are falsy values, a == b will return true. 
  Strict Equality Operator (===) compares value as well as type of operands, typeof null is "object" whereas typeof undefined is "undefined", a === b will return false.
  */
}
// MCQ126();

// 👉 MCQ-127
function MCQ127() {
  const arr1 = [1, 2, 3];
  const arr2 = arr1.reverse();
  arr2.push(4);

  console.log(arr1);
  console.log(arr2);

  // 👍A) [3, 2, 1, 4] [3, 2, 1, 4]
  // 💡B) [3, 2, 1] [3, 2, 1, 4]
  // 💖C) [1, 2, 3, 4] [3, 2, 1, 4]
  // 😀D) [1, 2, 3] [3, 2, 1, 4]

  /* 
  Answer is A) [3, 2, 1, 4] [3, 2, 1, 4] because The reverse() method reverses an array and returns the reference to the same array,
  The reverse() method returns reference to the original array, so mutating the returned array will mutate the original array as well.
  */
}
// MCQ127();

// 👉 MCQ-128
function MCQ128() {
  const map = new Map();

  map.set("a", 1);
  map.set("b", 2);
  map.set("c", 3);
  map.set("a", 7);

  console.log(map.get("a"));
  console.log(map.size);

  // 👍A) 7 4      💡B) 1 4
  // 💖C) 1 3      😀D) 7 3

  /* 
  Answer is D) 7 3 because Map objects are collections of key-value pairs. A key in the Map may only occur once; it is unique in the Map's collection.
  map.set("a", 7) will override key "a" with value "7" and the size of map object will be 3.
  */
}
// MCQ128();

// 👉 MCQ-129
function MCQ129() {
  const str = "Jayesh";

  function foo(str) {
    if (str.length < 2) {
      return str;
    }

    return foo(str.slice(1)) + str[0];
  }

  const result = foo(str);
  console.log(result);

  // 👍A) "hseyaJ"      💡B) "aJ"
  // 💖C) "Jayesh"      😀D) "Ja"

  /* 
  Answer is A) hseyaJ because the above code will reverse the name "Jayesh".
  */
}
// MCQ129();

// 👉 MCQ-130
function MCQ130() {
  const add = (x) => x + x;

  function addition(num = 2, val = add(num)) {
    console.log(num, val);
  }

  addition(3);

  // 👍A) 2 4            💡B) 3 6
  // 💖C) 2 6            😀D) 3 Error

  /* 
  Answer is B) 3 6 because While calling addition function we have passed 3 as the argument for "num" and We didn't pass an argument for "val". 
  Since we didn't pass a value for the "val" argument, it got the default value: the returned value of the add function. 
  To add function, we pass num, which has the value of 3. add returns 6, which is the value of "val".
  */
}
// MCQ130();

// 👉 MCQ-131
function MCQ131() {
  const calc = {
    total: 0,
    add: function (num) {
      this.total += num;
      return this;
    },
    sub: function (num) {
      this.total -= num;
      return this;
    },
    mul: function (num) {
      this.total *= num;
      return this;
    },
  };

  console.log(calc.add(10).sub(5).mul(10).total);

  // 👍A) 0   💡B) -50   💖C) 50   😀D) Error

  /* 
  Answer is C) 50 because Method chaining. Method chaining is a chain of methods where each method shares the same reference means each method returns an object, allowing the calls to be 
  chained together in a single statement. Method chaining is used to write more readable code.
  */
}
// MCQ131();

// 👉 MCQ-132
function MCQ132() {
  const success = "{email} logged-in";
  const user = "jc@gmail.com";

  let display = success.replace("{email}", user);

  console.log(display);

  // 👍A) "undefined logged-in"
  // 💡B) "jc@gmail.com logged-in"
  // 💖C) "{email} logged-in"
  // 😀D) "null logged-in"

  /* 
  Answer is B) "jc@gmail.com logged-in" because The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement. 
  If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.
  */
}
// MCQ132();

// 👉 MCQ-133
function MCQ133() {
  const age = 24;
  const key = "age";

  const person = {
    name: "Jayesh",
    [key]: age,
  };

  console.log(person.name);
  console.log(person.age);

  // 👍A) "Jayesh" 24       💡B) "Jayesh" undefined
  // 💖C) "Jayesh" "age"    😀D) "Jayesh" Error

  /* 
  Answer is A) "Jayesh" 24 because the above code is to add dynamic key to an object. "[]" is used to add dynamic key to an object.
  */
}
// MCQ133();

// 👉 MCQ-134
function MCQ134() {
  function sum(x, y) {
    if (y !== undefined) {
      return x + y;
    } else {
      return function (y) {
        return x + y;
      };
    }
  }

  console.log(sum(2, 3));
  console.log(sum(2)(3));

  // 👍A) 2 5      💡B) 5 NaN
  // 💖C) 5 5      😀D) NaN 5

  /* 
  Answer is C) 5 5 because of Currying. Currying is a technique to convert multiple arguments function into a single argument functions (unary functions) in a sequence.
  */
}
// MCQ134();

// 👉 MCQ-135
function MCQ135() {
  var result;
  for (var i = 5; i > 0; i--) {
    result = result + i;
  }

  console.log(result);

  // 👍A) 14      💡B) 15
  // 💖C) 10      😀D) NaN

  /* 
  Answer is D) NaN because at first line declaring "result" variable without initialization will store result value as undefined.
  + operator applies an implicit coercion to an integer to an operand when the other is a number undefined is coerced to NaN.
  */
}
// MCQ135();

// 👉 MCQ-136
function MCQ136() {
  const arr = [{ key: 1 }, { key: 1 }, { key: 2 }];
  const result = [];
  const map = new Map();

  for (let item of arr) {
    if (!map.has(item.key)) {
      result.push(item);
      map.set(item.key, item);
    }
  }

  console.log(result);

  // 👍A) [{ key: 1 }, { key: 2 }]
  // 💡B) [{ key: 1 }, { key: 1 }, { key: 2 }]
  // 💖C) [{ key: 2 }]
  // 😀D) [{ key: 1 }, { key: 1 }]

  /* 
  Answer is A) [{ key: 1 }, { key: 2 }] because the above code is to remove duplicate objects from an array.
  */
}
// MCQ136();

// 👉 MCQ-137
function MCQ137() {
  const arr1 = [1, 2, 3];
  const arr2 = [1, 2, 4];

  const result = arr1.concat(
    arr2.filter((num) => {
      return !arr1.includes(num);
    })
  );
  console.log(result);

  // 👍A) [1, 2, 1, 2, 3, 4]
  // 💡B) [3, 4]
  // 💖C) [1, 2, 3, 4]
  // 😀D) [1, 2]

  /* 
  Answer is C) [1, 2, 3, 4] because the above code is to find the union of two arrays.
  */
}
// MCQ137();

// 👉 MCQ-138
function MCQ138() {
  const str = "Hello";
  str[1] = "a";

  const arr = ["H", "e", "l", "l", "o"];
  arr[1] = "a";

  console.log(str);
  console.log(arr);

  // 👍A) "Hello" ["H", "e", "l", "l", "o"]
  // 💡B) "Hello" ["H", "a", "l", "l", "o"]
  // 💖C) "Hallo" ["H", "a", "l", "l", "o"]
  // 😀D) "Hallo" ["H", "e", "l", "l", "o"]

  /* 
  Answer is B) "Hello" ["H", "a", "l", "l", "o"] because We cannot assign a new character to an index in String by square bracket notation.
  As Strings are immutable, by doing that we will be updating the content of String reference which cannot be possible in case of immutability.
  */
}
// MCQ138();

// 👉 MCQ-139
function MCQ139() {
  var output = (function (x) {
    delete x;
    return x;
  })(0);

  console.log(output);

  // 👍A) undefined        💡B) true
  // 💖C) Function(){}     😀D) 0 1, "truexyz", 2, 1

  /* 
  Answer is D) 0 because delete operator is used to delete a property from an object. Here x is not a property of an object it’s local variable. delete operator doesn’t affect local variables.
  */
}
// MCQ139();

// 👉 MCQ-140
function MCQ140() {
  var str = true;
  console.log(str + 0);
  console.log(str + "xyz");
  console.log(str + true);
  console.log(str + false);

  // 👍A) 1, NaN, 2, 1
  // 💡B) "true0" "truexyz" 2 1
  // 💖C) 1, "truexyz", 2, 1
  // 😀D) 1, "truexyz", 1, 0

  /* 
  Answer is C) 1, "truexyz", 2, 1 because general rules of plus operator are:-
  Number + Number -> Addition
  Boolean + Number -> Addition
  Boolean + Boolean -> Addition
  Number + String -> Concatenation
  String + Boolean -> Concatenation
  String + String -> Concatenation
  */
}
// MCQ140();

// 👉 MCQ-141
function MCQ141() {
  const calc = eval("10*10+5");

  console.log(calc);

  // 👍A) "105"     💡B) 105
  // 💖C) 150       😀D) "10*10+5"

  /* 
  Answer is B) 105 because eval method evaluates codes that's passed as a string. If it's an expression, it evaluates the expression. 
  The expression is 10 * 10 + 5 returns the number 105.
  */
}
// MCQ141();

// 👉 MCQ-142
function MCQ142() {
  const user = {
    fName: "Jayesh",
    lName: "Choudhary",
    email: null,
  };

  let res = Object.values(user).every((val) => val);

  console.log(res);

  // 👍A) true        💡B) undefined
  // 💖C) false       😀D) null

  /* 
  Answer is C) false because The every() method tests whether all elements in an array pass the test implemented by the provided callback function.
  email is null hence the output will be false.
  */
}
// MCQ142();

// 👉 MCQ-143
function MCQ143() {
  function getNumber() {
    return 2, 4, 5;
  }

  var number = getNumber();

  console.log(number);

  // 👍A) 2        💡B) 4
  // 💖C) 5        😀D) undefined

  /* 
  Answer is C) 5 because The above code will return the last value which is 5 and ignore all the other values.
  To return multiple values we can use array of values [2, 4, 5].
  */
}
// MCQ143();

// 👉 MCQ-144
function MCQ144() {
  function mul(x) {
    return function (y) {
      return [
        x * y,
        function (z) {
          return x * y + z;
        },
      ];
    };
  }

  console.log(mul(2)(3)[0]);
  console.log(mul(2)(3)[1](4));

  // 👍A) 6 10           💡B) undefined undefined
  // 💖C) 6 undefined    😀D) ReferenceError

  /* 
  Answer is A) 6 10 because of Closure, Inner function can access all the variables and functions of it's outer function even after the execution context of outer function has been completely removed from the call stack.   
  */
}
// MCQ144();

// 👉 MCQ-145
function MCQ145() {
  let players = [
    { name: "VK", role: "Batsman" },
    { name: "HP", role: "All-Rounder" },
    { name: "RJ", role: "All-Rounder" },
  ];

  let result = players.some((player) => {
    return player.role === "Batsman";
  });

  console.log(result);

  // 👍A) true        💡B) undefined
  // 💖C) false       😀D) null

  /* 
  Answer is A) true because The some() method tests whether at least one element in the array passes the test implemented by the provided callback function.
  player name "Vk" has role of "Batsman" is present in players array. 
  */
}
// MCQ145();

// 👉 MCQ-146
function MCQ146() {
  const numbers = [1, 2, 3, 4, 5];
  const [y] = numbers;

  console.log(y);

  // 👍A) [1]
  // 💡B) [1, 2, 3, 4, 5]
  // 💖C) 1
  // 😀D) [[1, 2, 3, 4, 5]]

  /* 
  Answer is C) 1 because through destructuring We can unpack values from arrays or properties from objects. y is equal to the first value in the array, which is the number 1.
  */
}
// MCQ146();

// 👉 MCQ-147
function MCQ147() {
  const a1 = [1, 2, 3, 4];
  const a2 = [1, 2, 5, 6];

  let res1 = a1.filter((num) => !a2.includes(num));
  let res2 = a2.filter((num) => !a1.includes(num));

  console.log([...res1, ...res2]);

  // 👍A) [1, 2, 3, 4]
  // 💡B) [3, 4, 5, 6]
  // 💖C) [1, 2]
  // 😀D) [1, 2, 5, 6]

  /* 
  Answer is B) [3, 4, 5, 6] because The above code is to find unique elements from two arrays.
  */
}
// MCQ147();

// 👉 MCQ-148
function MCQ148() {
  const arr = [1, 2, 3, 4];
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }

  console.log(arr);

  // 👍A) [1, 2, 3, 4]
  // 💡B) [3, 4, 1, 2]
  // 💖C) [2, 4, 1, 3]
  // 😀D) [4, 3, 2, 1]

  /* 
  Answer is D) [4, 3, 2, 1] because The above code is to reverse an array.
  */
}
// MCQ148();

// 👉 MCQ-149
function MCQ149() {
  const str = "JavaScript-with-JC";
  const res1 = str.startsWith("Java");
  const res2 = str.startsWith("java");

  console.log(res1);
  console.log(res2);

  // 👍A) true true    💡B) true false
  // 💖C) false true   😀D) false false

  /* 
  Answer is B) true false because startsWith() method determines whether a string begins with the characters of a specified string, returning true or false as appropriate.
  This method is case-sensitive.
  */
}
// MCQ149();

// 👉 MCQ-150
function MCQ150() {
  const arr = [0, 2, 1, 2, 0];
  let count = 0;

  for (let num of arr) {
    if (num !== 0) {
      arr[count++] = num;
    }
  }

  while (count < arr.length) {
    arr[count++] = 0;
  }

  console.log(arr);

  // 👍A) [0, 0, 2, 1, 2]
  // 💡B) [0, 2, 1, 2, 0]
  // 💖C) [2, 1, 2, 0, 0]
  // 😀D) [2, 1, 2]

  /* 
  Answer is C) [2, 1, 2, 0, 0] because the above code is to move all 0 to end of an array.
  */
}
// MCQ150();

// 👉 MCQ-151
function MCQ151() {
  let str = "abcba";
  let res = str.split("").reverse().join("");

  console.log(str === res);

  // 👍A) true         💡B) false

  /* 
  Answer is A) true because the above code is to check whether a String is Palindrome or not.
  */
}
// MCQ151();

// 👉 MCQ-152
function MCQ152() {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const output = [];

  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push([i, j]);
      }
    }
  }

  console.log(...output);

  // 👍A) [0, 2]     💡B) [2, 0]
  // 💖C) [1, 0]     😀D) [0, 1]

  /* 
  Answer is D) [0, 1] because the above code is to find pairs of number's index whose sum is equal to given number. 2(at index 0) + 7(at index 1) is equal to target 9.
  */
}
// MCQ152();

// 👉 MCQ-153
function MCQ153() {
  Array.prototype.skip = function (arg) {
    let array = this;
    if (typeof arg === "function") {
      return array.filter((num) => !arg(num));
    } else {
      return array.filter((num) => num !== arg);
    }
  };

  let res1 = [1, 1, 2, 3, 4].skip(1);
  let res2 = [1, 1, 2, 3, 4].skip((num) => num < 3);

  console.log(res1);
  console.log(res2);

  // 👍A) [1, 1] [1, 1, 2]   💡B) [2, 3, 4] [3, 4]
  // 💖C) [1, 1] [3, 4]      😀D) [2, 3, 4] [1, 1, 2]

  /* 
  Answer is B) [2, 3, 4] [3, 4] because the above code is to implement the polyfill of skip function.
  */
}
// MCQ153();

// 👉 MCQ-154
function MCQ154() {
  const x = [1, 2, 3, 4, 5];
  const y = [5, 2, 1, 4, 3];

  x.sort((a, b) => a - b);
  y.sort((a, b) => a - b);

  let res = JSON.stringify(x) === JSON.stringify(y);

  console.log(res);

  // 👍A) false    💡B) ReferenceError
  // 💖C) true     😀D) TypeError

  /* 
  Answer is C) true because the above code is to Check whether two array are equal or not, does not matter the position of their elements.
  */
}
// MCQ154();

// 👉 MCQ-155
function MCQ155() {
  const str = "Consistency Is the Key";
  const choices = "aeiou";
  let count = 0;

  for (let char of str) {
    if (choices.includes(char.toLowerCase())) {
      count++;
    }
  }

  console.log(count);

  // 👍A) 5            💡B) 6
  // 💖C) 3            😀D) 4

  /* 
  Answer is B) 6 because the above code is to find vowels count in the given string. 
  */
}
// MCQ155();

// 👉 MCQ-156
function MCQ156() {
  const arr = [1, 2, 3];

  const res = Array.from(arr, (x) => 2 * x);

  console.log(res);

  // 👍A) [2, 4, 6]    💡B) [1, 2, 3]
  // 💖C) [1, 2, 6]    😀D) [2, 2, 3]

  /* 
  Answer is A) [2, 4, 6] because The Array.from() method creates a new shallow-copied Array instance from an iterable or array-like object.
  Syntax :- Array.from(array, mapFn), 2nd parameter mapFn is a function to call on every element of the array. 
  */
}
// MCQ156();

// 👉 MCQ-157
function MCQ157() {
  const arr = [1, 2, 3, 1, 2];
  const obj = {};

  arr.forEach((number) => {
    obj[number] = true;
  });

  console.log(Object.keys(obj));

  // 👍A) [1, 2, 3, 1, 2]              💡B) ['1', '2', '3']
  // 💖C) ['1', '2', '3', '1', '2']    😀D) [1, 2, 3]

  /* 
  Answer is B) ['1', '2', '3'] because in the above code, Each element of an array is stored as a key (string type) in object and Object.keys() method returns array of Object's keys. 
  */
}
// MCQ157();

// 👉 MCQ-158
function MCQ158() {
  const arr = [1, 2, 3, 4, 5];

  const a = arr.at(1);
  const b = arr.at(-1);

  console.log(a);
  console.log(b);

  // 👍A) 1 5      💡B) 2 4
  // 💖C) 1 4      😀D) 2 5

  /* 
  Answer is D) 2 5 because The at() method takes an integer value and returns the item at that index, allowing for positive and negative integers. 
  Note :- Negative integers count back from the last item in the array.
  */
}
// MCQ158();

// 👉 MCQ-159
function MCQ159() {
  let arr = ["Java Script", "with", "JC"];

  let res = arr.flatMap((ele) => ele.split(" "));

  console.log(res);

  // 👍A) ['Java', 'Script', 'with', 'JC']
  // 💡B) ["Java Script", "with", "JC"]
  // 💖C) ['Java', 'Script', ['with'], ['JC']]
  // 😀D) ['Java Script', ['with'], ['JC']]

  /* 
  Answer is A) ['Java', 'Script', 'with', 'JC'] because The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. 
  It is similar to a map() followed by a flat() of depth 1. 
  */
}
// MCQ159();

// 👉 MCQ-160
function MCQ160() {
  const arr = [1, 2, 3, 4];

  arr.fill(0, 1, 3);

  console.log(arr);

  // 👍A) [0, 0, 0, 0]   💡B) [0, 1, 3, 4]
  // 💖C) [1, 0, 0, 4]   😀D) [1, 0, 0, 0]

  /* 
  Answer is C) [1, 0, 0, 4] because The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (excluding end index and default array.length). 
  It returns the modified array.
  */
}
// MCQ160();

// 👉 MCQ-161
function MCQ161() {
  const arr = [1, 2, 3];

  let sum = arr.reduceRight((acc, curr) => {
    console.log(curr);
    return acc + curr;
  });

  // 👍A) 3 2 1        💡B) 2 1
  // 💖C) 1 2 3        😀D) 1 2

  /* 
  Answer is B) 2 1 because The reduceRight() is a higher order function that iterates through each value of an array (from right-to-left) and reduces array of values into single value.
  as second argument is not passed to reduceRight() method, currentValue will start from last second element of an array. 
  */
}
// MCQ161();

// 👉 MCQ-162
function MCQ162() {
  const arr1 = Array.of(3);
  const arr2 = Array.of(1, 2, 3);

  console.log(arr1);
  console.log(arr2);

  // 👍A) [3] [1, 2, 3]
  // 💡B) [empty × 3] [3]
  // 💖C) [3] [3]
  // 😀D) [empty × 3] [1, 2, 3]

  /* 
  Answer is A) [3] [1, 2, 3] because The Array.of() method creates a new Array instance from a variable number of arguments.
  Syntax :-
  Array.of(element0)
  Array.of(element0, element1, ..., elementN)
  */
}
// MCQ162();

// 👉 MCQ-163
function MCQ163() {
  const str1 = "JavaScript";
  const str2 = "Jayesh";

  function foo(str) {
    let obj = {};

    for (let char of str) {
      if (obj[char]) {
        return false;
      } else {
        obj[char] = true;
      }
    }

    return true;
  }

  console.log(foo(str1));
  console.log(foo(str2));

  // 👍A) true true    💡B) true false
  // 💖C) false true   😀D) false false

  /* 
  Answer is C) false true because the above code is to check all the chars are unique in a given string.
  */
}
// MCQ163();

// 👉 MCQ-164
function MCQ164() {
  const person = {};

  Object.defineProperties(person, {
    name: {
      value: "JC",
      writable: true,
    },
    age: {
      value: 24,
      writable: false,
    },
  });

  person.name = "VK";
  person.age = 34;

  console.log(person.name);
  console.log(person.age);

  // 👍A) JC 34     💡B) JC 24
  // 💖C) VK 34     😀D) VK 24

  /* 
  Answer is D) VK 24 because The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object.
  if writable: true then value associated with the property can be modified else value can not be modified.
  */
}
// MCQ164();

// 👉 MCQ-165
function MCQ165() {
  const person = {
    name: "JC",
    age: 24,
    skill: {
      lang: "JavaScript",
    },
  };

  Object.freeze(person);

  let res1 = Object.isExtensible(person);
  let res2 = Object.isExtensible(person.skill);

  console.log(res1);
  console.log(res2);

  // 👍A) true true      💡B) false true
  // 💖C) true false     😀D) false false

  /* 
  Answer is B) false true because Object.freeze() method only freezes first level properties of an object, Nested properties of an object can still be changed, added and removed.
  The Object.isExtensible() method determines if an object is extensible, person.skill is a nested object so it can be extensible.
  */
}
// MCQ165();

// 👉 MCQ-166
function MCQ166() {
  class Person {
    constructor(name) {
      this.name = name;
    }
  }

  Person.prototype.age = 24;

  const jayesh = new Person("JC");

  console.log(Object.hasOwn(jayesh, "name"));
  console.log(Object.hasOwn(jayesh, "age"));

  // 👍A) true true      💡B) true false
  // 💖C) false false    😀D) false true

  /* 
  Answer is B) true false because The Object.hasOwn() method returns a boolean indicating whether the object has the 
  specified property as its own property. If the specified property is inherited, or does not exist, the method returns false.
  */
}
// MCQ166();

// 👉 MCQ-167
function MCQ167() {
  const arr = [1, 2, 3, 2, 3, 2];
  arr.sort((a, b) => a - b);
  const result = [];
  let temp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      temp.push(arr[i]);
    } else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  console.log(result);

  // 👍A) [ [ 2, 2, 2 ], [ 3, 3 ] ]
  // 💡B) [ [ 1 ], [ 2, 2 ], [ 3, 3, 3 ] ]
  // 💖C) [ [ 1 ], [ 2 ], [ 3 ] ]
  // 😀D) [ [ 1 ], [ 2, 2, 2 ], [ 3, 3 ] ]

  /* 
  Answer is D) [ [ 1 ], [ 2, 2, 2 ], [ 3, 3 ] ] because the above code is to pair elements of an array.
  */
}
// MCQ167();

// 👉 MCQ-168
function MCQ168() {
  const str = "aaaaaabbcc";
  const map = new Map();
  let res = "";

  for (let char of str) {
    if (map.get(char)) {
      let count = map.get(char);
      map.set(char, count + 1);
    } else {
      map.set(char, 1);
    }
  }

  for (let [key, value] of map) {
    res += key + value;
  }

  console.log(res);

  // 👍A) "a6b2c2"     💡B) "a5b1c1"
  // 💖C) NaN          😀D) "abc"

  /* 
  Answer is A) "a6b2c2" because the above code is of String Compression.
  */
}
// MCQ168();

// 👉 MCQ-169
function MCQ169() {
  const arr1 = [1, 100, 10, 20, 50];
  const arr2 = [2, 30, 21, 10, 20];
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
        break;
      }
    }
  }

  console.log(result);

  // 👍A) [1, 100, 50]    💡B) [2, 30, 21]
  // 💖C) [10, 20]        😀D) [10, 20, 10, 20]

  /* 
  Answer is C) [10, 20] because the above code is to find the intersection of two arrays using Two for loops O(n2). 
  */
}
// MCQ169();

// 👉 MCQ-170
function MCQ170() {
  const str = "jayesh choudhary";
  const arr = str.split(" ");

  const res = arr.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  });

  const output = res.join("");

  console.log(output);

  // 👍A) "Jayesh Choudhary"    💡B) "JayeshChoudhary"
  // 💖C) "jayeshchoudhary"     😀D) "Jayeshchoudhary"

  /* 
  Answer is B) "JayeshChoudhary" because the above code is of string capatalize and join.
  */
}
// MCQ170();

// 👉 MCQ-171
function MCQ171() {
  const obj1 = { a: 20, b: { x: 40, y: 60 } };
  const obj2 = { a: 20, b: { x: 40, y: 60 } };
  const obj3 = { a: 20, b: { x: 80, y: 60 } };

  function compare(obj1, obj2) {
    for (let key in obj1) {
      if (typeof obj1[key] === "object") {
        return compare(obj1[key], obj2[key]);
      } else {
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
    return true;
  }

  console.log(compare(obj1, obj2));
  console.log(compare(obj1, obj3));

  // 👍A) true true      💡B) true false
  // 💖C) false false    😀D) false true

  /* 
  Answer is B) true false because the above code is to compare nested object.
  */
}
// MCQ171();

// 👉 MCQ-172
function MCQ172() {
  let arr = ["eat", "tea", "dna", "and"];
  let obj = {};

  for (let word of arr) {
    let key = word.split("").sort().join("");
    if (obj[key]) {
      obj[key] = [...obj[key], word];
    } else {
      obj[key] = [word];
    }
  }

  console.log(Object.values(obj));

  // 👍A) [["eat", "tea"], ["dna", "and"]]
  // 💡B) [["tea"], ["and"]]
  // 💖C) [["eat"], ["dna"]]
  // 😀D) ["aet", "adn"]

  /* 
  Answer is A) [["eat", "tea"], ["dna", "and"]] because the above code is to find group of anagrams string in an array.
  */
}
// MCQ172();

// 👉 MCQ-173
function MCQ173() {
  const nums = new Set();

  nums.add(1);
  nums.add(2);
  nums.add(3);
  nums.add(1);

  nums.delete(1);

  console.log(nums.has(1));
  console.log(nums.size);

  // 👍A) true 3      💡B) false 3
  // 💖C) true 2      😀D) false 2

  /* 
  Answer is D) false 2 because Set objects are collections of unique value of any type (primitive or object). A value in the Set may only occur once.
  */
}
// MCQ173();

// 👉 MCQ-174
function MCQ174() {
  const hof = (callBack1, callBack2) => {
    callBack1();
    setTimeout(callBack2, 1000);
    console.log("Three");
  };

  const callBack1 = () => {
    console.log("One");
  };

  const callBack2 = () => {
    console.log("Two");
  };

  hof(callBack1, callBack2);

  // 👍A) One Two Three     💡B) Two Three One
  // 💖C) One Three Two     😀D) Three Two One

  /* 
  Answer is C) One Three Two because Callback functions are first class citizens passed as an argument to higher order function,
  and later on higher order function calls the callback function to perform some operation. 
  callBack2 is passed to setTimeout so it will be called later after all synchronous task.
  */
}
// MCQ174();

// 👉 MCQ-175
function MCQ175() {
  const str1 = "Virat";
  const str2 = "Jayesh";

  const foo = (str) => {
    const n = str.length;
    if (n === 0) return "";
    if (n === 1) return str;

    const mid = parseInt(n / 2);

    if (n % 2 === 0) {
      return str.slice(mid - 1, mid + 1);
    } else {
      return str[mid];
    }
  };

  console.log(foo(str1));
  console.log(foo(str2));

  // 👍A) "r" "y"     💡B) "r" "ye"
  // 💖C) "ra" "y"    😀D) "ra" "ye"

  /* 
  Answer is B) "r" "ye" because the above code is to find the middle character of the word. 
  If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
  */
}
MCQ175();
