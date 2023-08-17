/*1. ============  Find find 5 factorial ============*/
function findFactorial() {
    let num = 5;
    let factorial = 1;
    for (i = 1; i <= num; i++) {
      factorial = factorial * i;
    }
    console.log(factorial);
  }
  findFactorial();
  