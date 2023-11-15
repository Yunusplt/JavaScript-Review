//!##############################################
//! ******** Taschenrechner / Calculator ******** 
//!##############################################


//* Take the data from user with Prompt 
//* Sie können die Datei vom Benutzer mit Promt bekommen.

const number1 = +prompt("Write your first number")          //* Type Convertion
const operations = prompt("+,-,*,/ (choose one of them)")   
const number2 = Number(prompt("Write your second number"))  //* Type Convertion 

let result

if (operations == "+")
  result = number1 + number2;                               
else if (operations == "-") result = number1 - number2;
else if (operations == "*") {
  result = number1 * number2;
} else if (operations == "/") {
  if (number2 == "0") {
    alert("denominator can't be zero");
  } else {
    result = number1 / number2;
  }
} else {
  alert("You selected the wrong operation");
}
//! We don't need curly braces in one line (line 16-19)
console.log(number1 + operations + number2 +"="+ result);


//!###############################################################
//! ************************* Ternary ****************************
//!###############################################################

const age = +prompt("write your age")
console.log(age >= 18 ? "You can smoke" : "You can't smoke");



//!###############################################################
//! ********************** Switch-Case ***************************
//!###############################################################

const month = prompt("enter a month name")
let rdMonth 

switch (month) {
    case "January":
        rdMonth = "first";
        break;
    case "February":
        rdMonth = "second";
        break;
    case "March":
        rdMonth = "third";
        break;
    case "April":
        rdMonth = "fourth"
        break;
    case "May":
        rdMonth = "fifth"
        break;
    case "June":
        rdMonth = "sixth"
        break;
    case "July":
        rdMonth = "seventh"
        break;
    case "August":
        rdMonth = "eighth"
        break;
    case "September":
        rdMonth = "ninth"
        break;
    case "October":
        rdMonth = "tenth"
        break;
    case "November":
        rdMonth = "eleventh"
        break;
    case "December":
        rdMonth = "twelfth"
        break;

    default:
        alert("You wrote the wrong month name!")
        break;
}

console.log(`${month} is the ${rdMonth} month `);