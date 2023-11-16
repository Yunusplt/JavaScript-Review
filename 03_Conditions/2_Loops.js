//* javascript supports many types of loops
//* Javascript unterstützt viele Arten von Loops

//! FOR / FOR IN / FOR OF / FOREACH / MAP / FILTER/ WHILE / DO-WHILE


//!###############################################
//! ****************** FOR ***********************
//!###############################################

for (let i = 0; i < 10; i++) {
    console.log(i +"Hello World!");    
}

//!###############################################
//? to add all numbers from 0 to 20

const number = +prompt("to add all numbers from 0 to 20");
let result=0

for (let i = 0; i<= number ; i++) {
    result += i 
}
console.log(result);

//!###############################################
//? Prime Number, Primzahl

const pNumber = +prompt(
  "Geben Sie eine Zahl ein, um zu prüfen, ob es sich um eine Primzahl handelt."
);

const isPrime =(pNumber)=>{
    let prime = true
    for (let i = 2; i<pNumber ; i++) {
        if (pNumber % i == 0) {
            prime = false
            break
        }
    }
    return prime ? "Prime Number" : "Not Prime Number"
}
console.log(`${pNumber} is ${isPrime(pNumber)}`);

//!##############################################
//? Create n number between 0 and 100

const howMany = +prompt(
  "Enter a number to generate as many numbers as you enter between 0 and 100."
);

for (let i = 0; i < howMany; i++) {
    const random = Math.round(Math.random()*100)
    console.log(random);
}

//!###############################################
//! ***************** Do While *******************
//!###############################################

let devam;

do {
  let exam1 = +prompt("write the result of the first exam");
  let exam2 = +prompt("write the result of the second exam");

  let averageOfExams = exam1 * 0.4 + exam2 * 0.6;
  const barrage = 50
  console.log(averageOfExams >= barrage ? "successfully" : "not successfully");

  devam = prompt("to write e/E if you want to continue entering the result of the exams");
} while (devam.toUpperCase() == "E");

console.log("out of loop");

//!###############################################