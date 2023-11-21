//! Array
//! We use array to save multiple values 

//!##########################################################
//! Array Literal (square brackets)

const cars = ["BMW", "MERCEDES", "AUDI", "PORSCHE", "VOLKSWAGEN"]


//! with new Keyword

const models = new Array("X6", "S Class", "A7")


//!##########################################################
//! indexing (Indexing is done to reach each element in the list.)

const numbers = new Array(10)               //! An Array with 10 elements
const numbers1 = new Array()                //! An empty Array
const numbers2 = []                         //! An empty Array

numbers[4] = 4
numbers[9] = "ninth"

console.log(numbers);       //! [empty × 4, 4, empty × 4, 'ninth']

numbers2[0] = 1
numbers2[1] = 2
console.log(numbers2);      //! [1, 2]
numbers2[4] = 5             //! to add a value in list
console.log(numbers2);      //! [1, 2, empty × 2, 5]

//?const cars = ["BMW", "MERCEDES", "AUDI", "PORSCHE", "VOLKSWAGEN"]

console.log(cars[1][3]);    //! C

//* dizinin icerigi degistirilebilir const ile tanimlanmis olmasina ragmen
//* cünkü arraylar non primitivedir. 
//* ama tamamen baska bir array ile degistirilemez. sadece icerike mudahale !!


//!##############################################################
//! *****************array modification methods******************
//!##############################################################
//! fruits.pop()                
//! fruits.push()
//! fruits.reverse()
//! fruits.shift()
//! fruits.unshift()
//! fruits.sort()           //!According to ASCII 
//! fruits.splice()

const fruits = ["Apple", "Banana", "Orange", "Grapes", "Watermelon"];
fruits.pop()                //! Watermelon
console.log(fruits);        //! ['Apple', 'Banana', 'Orange', 'Grapes']
fruits.push("Watermelon")
console.log(fruits);        //! ["Apple", "Banana", "Orange", "Grapes", "Watermelon"]
fruits.reverse()
console.log(fruits);        //! ['Watermelon', 'Grapes', 'Orange', 'Banana', 'Apple']
fruits.shift()
console.log(fruits);        //! ['Grapes', 'Orange', 'Banana', 'Apple']
fruits.unshift("Watermelon")
console.log(fruits);        //! ['Watermelon', 'Grapes', 'Orange', 'Banana', 'Apple']
fruits.sort()
console.log(fruits);        //! ['Apple', 'Banana', 'Grapes', 'Orange', 'Watermelon']
fruits.splice(2,0,"Mango")
console.log(fruits);        //! ['Apple', 'Banana', 'Mango', 'Grapes', 'Orange', 'Watermelon']
fruits.splice(1,2,"Ananas")
console.log(fruits);        //! ['Apple', 'Ananas', 'Grapes', 'Orange', 'Watermelon']
//! ASCII
const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];

console.log(number.sort());             //! [1, 10, 22, 231, 3, 35, 5, 55, 77]
console.log(number.sort((a,b)=>a-b));   //! [1, 3, 5, 10, 22, 35, 55, 77, 231]



//!##############################################################
//! *******************array access methods**********************
//!##############################################################
//! fruits.concat() 
//! fruits.includes() 
//! fruits.join() 
//! fruits.slice()
//! fruits.toString() 
//! fruits.indexOf()
//! fruits.lastIndexOf()
//! ***********************every()**********************
//! ***********************every()**********************
//? const number = [3, 5, 1, 35, 10, 22, 55, 77, 231];
const number1 = [4, 2, 6]

const united = number.concat(number1)
console.log(united);                //! [1, 3, 5, 10, 22, 35, 55, 77, 231, 4, 2, 6]
console.log(number.includes(10));   //! true
console.log(number1.join(""));      //! 426
const number3 = number.slice(0,3)
console.log(number3);               //! [1, 3, 5]
console.log(number3.toString());    //! 1,3,5
console.log(number3.indexOf(4))     //! -1
console.log(number1.indexOf(4));    //! 0
console.log(number.lastIndexOf(55));//! 6
console.log(number1.every(x=>x<10));//! true
console.log(number.every(x=>x<100));//! false
console.log(number.some(x=>x>100)); //! true        one right is enough
console.log(number.some(x=>x>500)); //! false



//!##############################################################
//!##############################################################
//!##############################################################

















