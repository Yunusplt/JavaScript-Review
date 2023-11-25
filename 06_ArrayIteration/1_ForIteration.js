//!####################################################
//! ************** For Iteration **********************
//!####################################################
//! for index
//! for in
//! for of


const numbers1 = [-5, 15, 22, -4, 45, 78, -25]

let total =0

for (let i = 0; i < numbers1.length; i++) {
    total = total + numbers1[i]
}

console.log(total);                         //! 126

//! ***************************************************
const positiveNumber = []
const negativeNumber = []

const seperateNumber=()=>{
   for (let i = 0; i < numbers1.length; i++) {
    if (numbers1[i]<0) {
        negativeNumber.push(numbers1[i])
    }else positiveNumber.push(numbers1[i]);  
}
console.log(positiveNumber);
console.log(negativeNumber); 
}

seperateNumber()

//!####################################################
//! ******************* For IN ************************
//!####################################################
//? const numbers1 = [-5, 15, 22, -4, 45, 78, -25]
//? index döndürür 0,1,2,3,4,5,6

const positiveNumber2 = []
const negativeNumber2 = []

const seperateNumber2=()=>{
    for (const i in numbers1) {
//        console.log(i);                   //!!! 0, 1, 2, 3, 4, 5...
        if (numbers1[i]<0) {
            negativeNumber2.push(numbers1[i])
        }else positiveNumber2.push(numbers1[i])
    }
    console.log(positiveNumber2);
    console.log(negativeNumber2);
}

seperateNumber2()

//!####################################################
//! ******************* For of ************************
//!####################################################
//? const numbers1 = [-5, 15, 22, -4, 45, 78, -25]
//? For in in aksine degerleri döndürür -5,15,22,-4,45,78,-25

const negativeNumber3 = []
const positiveNumber3 = []

const seperateNumber3 =()=>{
    for (const item of numbers1) {
//        console.log(item);                //!!!! 5, 15, 22, -4 ...
        if (item<0) {
            negativeNumber3.push(item)
        }else positiveNumber3.push(item)

    }
    console.log(positiveNumber3);
    console.log(negativeNumber3);
}
seperateNumber3()

//! ***************************************************


//!####################################################
//! ***************** For in LOOP *********************
//!####################################################

const animal = [
  "fil",
  "aslan",
  "deve",
  "fil",
  "kaplan",
  "fil",
  "deve",
  "aslan",
  "aslan",
  "aslan",
];

const userAnimal = "aslan"

const findAnimal =()=>{
    let sayac = 0

    for (const i in animal) {
        if (animal[i] == userAnimal) sayac++
    }
    return (`${userAnimal} ${sayac} adet bulunmaktadir.`)
}

// alert(findAnimal())


//!####################################################
//! ***************** For of LOOP *********************
//!####################################################

const cars = ["bmw", "mercedes", "audi", "volvo"];

console.log(cars.join(" "));    // bmw mercedes audi volvo
//* to do this witth "For of LOOP"

let car = ""

for (const item of cars) {
    car += " "+item
}

console.log(car.trim());


