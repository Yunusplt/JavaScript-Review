//! ##########################################################
//! ********************global scope**************************
//! ##########################################################

let first = 5
let second = 25
let third = 100

console.log( first , second ,third)

const tryScope=()=>{
    first = 8
    let second = 45
    let fourth = 1234

    console.log(first, second, fourth);

    return fourth
}


console.log(tryScope());                //! with console.log is called 1234, also only return. return (fourth) can be called only with console.log. but it don't be used outside of local scope
console.log(first);
console.log(second);
//console.log(fourth);                  //! referenceError fourth is not defined.
tryScope()                              //! without console.log is called 16.line     8, 15, 1234


//!############################################################
//? local scope ???

