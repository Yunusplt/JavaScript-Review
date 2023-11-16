//! #####################################################################
//? How many different ways are there to define a function in JavaScript?
//! Function Declaration
//! Function Expression
//! Arrow Function
//! Function Constructor

(function () {
  console.log("Hello World");
})();

//! #####################################################################
//! ********************* Function Declaration **************************
//! #####################################################################
//? In Function Declaration can come call before function!!!
printAge(); //! call / invoke
function printAge() {
  console.log(`My name is Yunus and I'm ${2023 - 1992}`);
}

//! ### with parameter ###
//? paramater and argument have difirent position !!
function printAgePar(name,yearOfBird, yearOfToday) {
    console.log(`My name is ${name} and I'm ${yearOfToday - yearOfBird}`);
}
printAgePar("Ali", 1990, 2023);
//? name is parameter
//? Ali is argument. 
//? name parametresine Ali argumenti atanacaktir.

//! #####################################################################
//! ### Tachenrechner mit Functions ###
//! #####################################################################
function addition(num1,num2) {
    return num1 + num2   
}
function subtraction(num1,num2) {
    return num1 - num2   
}
function multiplication(num1,num2) {
    return num1 * num2   
}
function division(num1,num2) {
    return num1 / num2   
}

// const number1 = +prompt("Write your first number");         //* Type Convertion
// const operations = prompt("+,-,*,/ (choose one of them)");
// const number2 = Number(prompt("Write your second number")); //* Type Convertion
// let result;

// if (operations == "+") result = addition(number1,number2);
// else if (operations == "-") result = subtraction(number1, number2);
// else if (operations == "*") result = multiplication(number1, number2);
// else if (operations == "/") {
//   if (number2 == "0") alert("denominator can't be zero");
//   else result = division(number1, number2);
// } else alert("You selected the wrong operation");

// console.log(number1 + operations + number2 + "=" + result);
//! #####################################################################
//! #####################################################################



//! #####################################################################
//! ********************* Function Expression **************************
//! #####################################################################

const evenOdd = function(number) {
    return number % 2 == 0 ? "Even Number" : "Odd Number"
}
console.log(evenOdd(16));




//! #####################################################################
//! *********************** Arrow Functions *****************************
//! #####################################################################

//? It can be written on a single line.
//? If there is more than one line, we have to use curly brackets.
//? We have to use return inside curly brackets.
//? The this keyword cannot be used here.


const oddEven=(num)=> num % 2 == 0 ? "even number" : "odd number" 
console.log(oddEven(15));

