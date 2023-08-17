/*1. ============  Reverse a given array  ============*/

function findStringReverse() {
    const string = "ashwani";
  
    //first method
    const reverseString1 = string.split("").reverse().join("");
    console.log("Reverse String First :", reverseString1);
  
    //second
    let reverseString2 = "";
    for (i = string.length - 1; i >= 0; i--) {
      reverseString2 += string[i];
    }
    console.log("Reverse String Second :", reverseString2);
  }
  findStringReverse();
  