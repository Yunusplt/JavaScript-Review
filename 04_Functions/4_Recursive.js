//! Functions that can call themselves are called recursive functions.
//! A stack overflow error may occur in recursive 
//! Such functions are often used to solve a given problem by dividing it into smaller subproblems.

//!##############################################################################
//? with for factorial

let sum = 1             //! sum i global scopeda tanimladik. cunku daha sonra local global disinda birdaha kullanabilelim diye.
let number = 5

for (let i = 1; i <= number; i++) {     //! ne zaman 0 la baslamali ne zaman 1 ile baslamali cok guzel bir örnek. toplamada etkisiz eleman 0 carpmada 1 o yüzden. 
    
    sum = sum * i 
    
}

console.log("the total of the numbers until 10 is " + sum);

//!##############################################################################
//? with recursive factorial

function factorial(n) {
  // Base Case
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // Problem reduction
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // 5! = 5 x 4 x 3 x 2 x 1 = 12'


//!##############################################################################
//!##############################################################################
//! ******************** Fubonacci with Recursive *******************************


const fibonacci=(n)=>{

        if (n <= 0) {
          return "Please enter a number greater than 0";
        } else if (n == 1) {
          return 0;
        } else if (n == 2 || n == 3) {
          return 1;
        } else {
          return fibonacci(n - 1) + fibonacci(n - 2);
        }
}

console.log(fibonacci(8));

