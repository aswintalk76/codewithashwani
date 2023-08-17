/*
findArrayReverse,findSmallestNumber,findLargestNumber,findUniqueArray,findDuplicateArray,
findCountDuplicateArray,findFirstElement,findLastElement,updateArray

*/

/*1. ============  Reverse a given array  ============*/

function findArrayReverse() {
  const array = [1, 2, 7, 8, 4, 3, 10, 12];
  //first method
  const reverseNumber1 = array.reverse();
  console.log("Reverse Array First :", reverseNumber1);

  //second
  let reversedArray2 = array.slice().reverse();
  console.log("Reverse Array Second:", reversedArray2);

  //third
  let reversedArray3 = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray3.push(array[i]);
  }
  console.log("Reverse Array Third:", reversedArray3);
}
findArrayReverse();

//first method ,second,third
//const array = [1, 2, 7, 8, 4, 3, 10, 12];

/*2. ============  Find the smallest number in an array ============*/

function findSmallestNumber() {
  const array = [1, 2, 7, 8, 4, 3, 10, 12];

  //first
  const smallestNumber1 = Math.min(...array); //1
  console.log("Smallest Number First :", smallestNumber1);

  //second
  let smallestNumber2 = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] < smallestNumber2) {
      smallestNumber2 = array[i];
    }
  }
  console.log("Smallest Number Second :", smallestNumber2);
}
findSmallestNumber();

/*3. ============  Find the largest number in an array ============*/

function findLargestNumber() {
  const array = [1, 2, 7, 8, 4, 3, 10, 12];

  //first
  const largestNumber1 = Math.max(...array); //12
  console.log("Largest Number First :", largestNumber1);

  //second
  let largestNumber2 = array[0];
  for (i = 0; i < array.length; i++) {
    if (array[i] > largestNumber2) {
      largestNumber2 = array[i];
    }
  }
  console.log("Largest Number Second :", largestNumber2);
}
findLargestNumber();

/*4. ============  Find Unique Value in array ============*/
//first method ,second,third

function findUniqueArray() {
  const array = [2, 2, 2, 1, 2, 3, 4, 5];

  // first
  const uniqueArray1 = [...new Set(array)];
  console.log("Unique Array First :", uniqueArray1);

  //second
  let uniqueArray2 = array.filter((item, index) => {
    return array.indexOf(item) === index;
  });
  console.log("Unique Array Second :", uniqueArray2);

  //third
  const uniqueArray3 = [];
  array.forEach((item) => {
    if (uniqueArray3.indexOf(item) === -1) {
      uniqueArray3.push(item);
    }
  });
  console.log("Unique Array Third :", uniqueArray3);

  //four
  const uniqueArray4 = array.reduce((unique, item) => {
    return unique.includes(item) ? unique : [...unique, item];
  }, []);
  console.log("Unique Array four :", uniqueArray4);
}
findUniqueArray();

/*5. ============  Find Duplicate Value in array ============*/
function findDuplicateArray() {
  const array = [2, 2, 2, 1, 2, 3, 4, 5];

  //first

  let duplicateArray1 = array.filter((item, index, self) => {
    return self.indexOf(item) !== index;
  });
  console.log("Duplicate Array First :", duplicateArray1);
}
findDuplicateArray();

/*6. ============  Find Count Duplicate Value in array ============*/

function findCountDuplicateArray() {
  const array = ["a", "b", "c", "c", "b", "d"];

  //first
  const countDuplicateArray1 = {};
  array.forEach((element) => {
    countDuplicateArray1[element] = (countDuplicateArray1[element] || 0) + 1;
  });

  for (const [key, value] of Object.entries(countDuplicateArray1)) {
    console.log(`${key} appears ${value + 1} times`);
  }
  console.log("count Duplicate Array First :", countDuplicateArray1);
}
findCountDuplicateArray();
/*7. ============  Find first element in  array ============*/
function findFirstElement() {
  const array = [22, 3, 4, 5];
  let firstElement = array.shift();
  console.log("First Element in Array First :", firstElement);
}
findFirstElement();

/*8. ============  Find Last element in  array ============*/
function findLastElement() {
  const array = [22, 3, 4, 5];

  //first
  let lastElement = array.slice(-1);
  console.log("Last Element in Array First :", lastElement);

  //second
  let lastElement1 = array[0];
  for (let i = 1; i < array.length; i++) {
    if (i === array.length - 1) {
      lastElement1 = array[i];
    }
  }
  console.log("Last Element in Array Second :", lastElement1);
}
findLastElement();

/*9. ============  update new array ============*/

//8.update new array
function updateArray() {
  const update_arr = [2, 3, 4, 5];
  for (let i = 0; i <= update_arr.length - 1; i++) {
    if (update_arr[i] == 2) {
      update_arr[i] = 200;
    } else if (update_arr[i] == 3) {
      update_arr[i] = 300;
    } else {
      update_arr[i];
    }
  }
  console.log("Update Array first :", update_arr);
}
updateArray();
