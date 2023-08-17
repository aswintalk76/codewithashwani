const number = [1, 2, 3, 4, 5];
const string = "Hello world, welcome to the universe.";
let string1 = "Hello world!";

/* =============== array method Start =========================*/
const fruits = ["banana", "apple", "banana", "orange", "grape"];
/*1.push() =Adds one or more elements to the end of an array and returns the new length of the array */
const arrayPush = number.push(4, 5); //[1, 2, 3,4,5]
/*2.pop() =Removes the last element from an array and returns that element. */
const arrayPop = number.pop(); //3
/*3.shift()=Removes the first element from an array and returns that element. */
const arrayShift = number.shift(); //1
/*4.unshift() = Adds one or more elements to the beginning of an array and returns the new length of the array. */
const arrayUnShift = number.unshift(0, -1); //[0,-11, 2, 3]
/*5.find() = Returns the value of the first element in the array that satisfies the provided testing
function. Otherwise, undefined is returned. */
const arrayFind = number.find((num) => num > 3); //4
/*6.some() =Tests whether at least one element in the array passes the test implemented by the
provided function. It returns true if any element passes the test, otherwise it returns false. */
const arraySome = number.some((num) => num % 2 === 0); //true
/*7.every() = Tests whether all elements in the array pass the test implemented by the provided
function. It returns true if all elements pass the test, otherwise it returns false. */
const arrayEvery = number.every((num) => num % 2 === 0); //false
/*8.sort() = Sorts the elements of an array in place and returns the sorted array. The default sort
order is built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.*/
const arraySort = fruits.sort(); //["apple","banana","banana","grape","orange"]
const arraySortNumber = number.sort((a, b) => a - b); //[1,2,3]
/*9.includes() = Determines whether an array includes a certain element, returning true or false as appropriate. */
const arrayIncludes = number.includes(3); //true
/*10.slice() = Returns a shallow copy of a portion of an array into a new array object selected
from start to end (end not included). The original array will not be modified. */
const arraySlice = number.slice(0, 2); //[1,2]
/*11.map() = Creates a new array with the results of calling a provided function on every element in the calling array. */
const arrayMap = number.map((num) => num * 2); //[2,4,6,8,10]
/*12.filter() = Creates a new array with all elements that pass the test implemented by the provided function. */
const arrayFIlter = number.filter((num) => num % 2 === 0); //[2,4]
/*13.reduce() = Executes a reducer function on each element of the array, resulting in a single output value. */
const arrayReduce = number.reduce((total, num) => total + num, 0); //15
/*14.forEach() =Executes a provided function once for each array element. */
const arrayForeach = number.forEach((num) => num * 2); //[2,4,6,8,10]
/*15.indexOf() = Returns the first index at which a given 
element can be found in the array, or -1 if it is not present. */
const arrayIndexOf = fruits.indexOf("apple"); //1
/*16.lastIndexOf() =Returns the last index at which a given
element can be found in the array, or -1 if it is not present. */
const arrayLastIndexOf = fruits.lastIndexOf("banana"); //2
/*17.reverse() =Reverses the order of the elements of an
array in place. The first element becomes the last, and the last element becomes the first. */
const arrayReverse = number.reverse(); //[5,4,3,2,1]
/*18.concat() =Returns a new array that includes elements from the original array and
additional elements. */
const moreArray = [6, 7];
const ArrayConcat = number.concat(moreArray); //[1,2,3,4,5,6,7]
/*19.join() =Joins all elements of an array into a string.
The elements are separated by a specified
separator string. */
const arrayJoin = fruits.join(", "); //"banana", "apple", "banana", "orange", "grape"
/*20.toString()=Returns a string representing the specified number or array and its elements. */
const arrayToString = number.toString(); //'1,2,3,4,5'

/*21.length =*/
const arrayLength = number.length;

/*22.fill()=*/
/*23.shift()=*/
/*24.splice()=*/
/*25.of()=*/
/*26.findIndex()=*/
/*27.reduceRight()=*/
/*28.isArray()=*/
const arrayIsArray = Array.isArray(number);
/*29.entries()=*/
let languages = ["HTML", "CSS", "JavaScript", "ReactJS"];
let arrayEntries = languages.entries();
for (x of arrayEntries) {
  console.log("ashwani", x);
}

/*30.keys()=*/
const arrayKeys = number.keys();
for (let key of arrayKeys) {
  console.log(key);
}
/*31.values()=*/
let objectValues = { 0: "23", 1: "geeksforgeeks", 2: "true" };
console.log(Object.values(objectValues));
/*32.from()= The from() method creates a new array from any array-like or iterable object.
Array.from(arraylike, mapFunc, thisArg)*/
// creating an array from a string
let arrayFrom = Array.from("JavaScript");

console.log(arrayFrom);

// function that returns a new array
function createArray(arraylike, mapFunc) {
  return Array.from(arraylike, mapFunc);
}

// using arrow function for mapFunc
let arrayFrom1 = createArray([2, 4, 6], (element) => element + 2);

console.log(arrayFrom1);
/*33.constructor=*/
/*34.copyWithin()=*/
/*35.toLocaleString()=*/
let arrayToLocaleString = [1, "JavaScript", new Date()];
let stringFromArray = arrayToLocaleString.toLocaleString();
/*36.flat()=*/
const myArr = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const newArr = myArr.flat();
console.log(newArr);

const myArr1 = [1, 2, [3, [4, 5, 6], 7], 8];
const newArr1 = myArr1.flat(2);
console.log(newArr1);
/*37.flatMap()=*/

// Taking input as an array A having some elements.
let A = [1, 2, 3, 4, 5];
// Mapping with map method.
b = A.map((x) => [x * 3]);
console.log(b);

// Mapping and flatting with flatMap() method.
c = A.flatMap((x) => [x * 3]);
console.log(c);

// Mapping and flatting with flatMap() method.
d = A.flatMap((x) => [[x * 3]]);
console.log(d);
/* =============== array method End =========================*/

/* =============== string method start =========================*/
/*1.length = */
const stringLength = string.length;
/*2.replace() = string.replace(searchValue, newValue)*/
const stringReplace = string.replace("Hello", "Hii"); //Hii world, welcome to the universe."
/*3.indexOf() = */
const stringIndexOf = string.indexOf("welcome"); //13
/*4.lastIndexOf() = */
const stringLastIndexOf = string.lastIndexOf("universe"); //28
/*5.startsWith() = string.startsWith(searchValue, start)
 */
const stringStartsWith = string.startsWith("Hello", 0); //true

/*6.endsWith() = */
const stringEndsWith = string.endsWith("universe"); //true

/*7.toUpperCase() = */
const stringToUpperCase = string.toUpperCase();

/*8.toLowerCase() = */
const stringToLowerCase = string.toLowerCase();
/*9.includes() = */
const stringInclude = string.includes("universe");
/*10.repeat() = */
const stringRepeat = string;
/*11.charAt() = */
const stringCharAt = "Hello";
/*12.charCodeAt() = */
const stringCharCodeAt = "Hello";
/*13.fromCharCode() = */
const stringFromCharCode = "Hello";
/*14.substring() = */
const stringSubstring = "Hello";
/*15.padStart() = */
const stringPadStart = "Hello";
/*16.padEnd() = */
const stringPadEnd = "Hello";
/*17.codePointAt() = */
const stringCodePointAt = "Hello";
/*18.fromCodePoint() = */
const stringFromCodePoint = "Hello";
/*19.match() = */
const stringMatch = "Hello";
/*20.matchAll() = */
const stringMatchAll = "Hello";
/*21.localeCompare() = */
const stringLocaleCompare = "Hello";
/*22.search() = */
const stringSearch = "Hello";
/*23.replaceAll() = */
const stringReplaceAll = "Hello";
/*24.concat() = */
const stringConcat = "Hello";
/*25.split() = */
const stringSplit = "Hello";
/*26.trim() =  removes whitespace from both sides of a string.
The trim() method does not change the original string.*/
let text = "       Hello World!        ";
const stringTrim = text.trim();
let stringTrim1 = text.replace(/^\s+|\s+$/gm, "");
/*27.slice() = */
const stringSlice = string1.slice(0, 5); //Hello
const stringSlice1 = string1.slice(5); //world!

let result = text.slice(5);

/* ============== string method End =========================*/ 29;

// (Topics) =>
// 1.Promise,2.CallBack ,2.1 CallBack Hell,3.closure

// 2.1 CallBack Hell=>
//callback hell start

function someAsyncTask(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

someAsyncTask(() => {
  console.log("First callback");

  someAsyncTask(() => {
    console.log("Second callback");

    someAsyncTask(() => {
      console.log("Third callback");

      someAsyncTask(() => {
        console.log("Fource callback");
      });
    });
  });
});
//callback hell start

//1.callback hell

//callback hell start

function someAsyncTask(callback) {
  setTimeout(() => {
    callback();
  }, 2000);
}

someAsyncTask(() => {
  console.log("First callback");

  someAsyncTask(() => {
    console.log("Second callback");

    someAsyncTask(() => {
      console.log("Third callback");

      someAsyncTask(() => {
        console.log("Fource callback");
      });
    });
  });
});
//callback hell start
