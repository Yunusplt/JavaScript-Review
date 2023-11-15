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

const month = prompt("enter a month name").toLowerCase().trim();
let rdMonth 

switch (month) {
    case "january":
        rdMonth = "first";
        break;
    case "february":
        rdMonth = "second";
        break;
    case "march":
        rdMonth = "third";
        break;
    case "april":
        rdMonth = "fourth"
        break;
    case "may":
        rdMonth = "fifth"
        break;
    case "june":
        rdMonth = "sixth"
        break;
    case "july":
        rdMonth = "seventh"
        break;
    case "august":
        rdMonth = "eighth"
        break;
    case "september":
        rdMonth = "ninth"
        break;
    case "october":
        rdMonth = "tenth"
        break;
    case "november":
        rdMonth = "eleventh"
        break;
    case "december":
        rdMonth = "twelfth"
        break;

    default:
        alert("You wrote the wrong month name!")
        break;
}

console.log(`${month} is the ${rdMonth} month `);