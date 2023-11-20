//! ############################################################
//! ************Calculate the area of the triangle.*************
//! *************Berechne die Fläche des Dreiecks.**************
//! ############################################################
//? the area of the triangle. = 1/2 x Base Length x Height

const triangleArea = (length, height) => {
  return (1 / 2) * length * height;
};
console.log(triangleArea(10, 8));


//! ############################################################
//! *********************Calculate the age**********************
//! *********************Berechne das Alter*********************
//! ############################################################

const ageFind=(BirthYear)=> new Date().getFullYear() - BirthYear
console.log(ageFind(1992));


//! ############################################################
//! ************Calculate the volume of the cylinder.***********
//! *************Berechne das Volumen des Zylinders.************
//! ############################################################
//? Volume=πr2h

const pi = Math.PI

const cylinderVolume = (radius, height) =>{
    return pi * Math.pow(radius,2) * height
}
console.log(cylinderVolume(10,30).toFixed(2));


//! ############################################################
//! ***********************FIBONACCI.***************************
//! ############################################################
//? 0,1,1,2,3,5,8,13,21,34,…

const FibonacciNumber=(n)=>{

    if (n===1) {
        return 0
    }else{
    let firstNumber = 1
    let secondNumber = 1
    let total = 2

    for (let i = 4; i < n ; i++) {
        firstNumber = secondNumber
        secondNumber = total
        total = firstNumber + secondNumber
        console.log(firstNumber, secondNumber, total);
    }
     return total;
    }

}
console.log(FibonacciNumber(9));


// function Fibonacci(n) {
//     if (n <= 0) {
//         return [];
//     }
//     if (n === 1) {
//         return [0];
//     }
//     if (n === 2) {
//         return [0, 1];
//     }

//     let fib = [0, 1];
   
//     while (fib.length < n) {
//         fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
//     }
//     console.log(fib);
//     return fib;
    
// }

// let n = 10;
// console.log(Fibonacci(n)[n-1]); // 7. sayı (8) döndürür
