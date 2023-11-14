console.log("Hello World!");

//! *** OPERATORS *** !//

//!###########################################
//! ******* arithmetischer Operator **********
//!###########################################
const Phone = 250
const Computer = 650
const Printer = 100
let sum = Phone+Computer+Printer   //! Es wurde mit Let definiert, weil sum später geändert wird.
console.log(sum);

sum ++
console.log(sum);
sum -- 
console.log(sum);

const tax = 100
sum+=tax
console.log(sum);

const vorname = "Jean"
const lastname = "Paul"
console.log(vorname + lastname);  //JeanPaul
//! String Concatenation
console.log("My Name is "+vorname+" "+lastname);
//!Template literals(backticks)
console.log(`My Name is ${vorname} ${lastname}`);

const no1 = 7
const no2 = "5"
console.log(no1-no2);   //2
console.log(no1+no2);   //75

// Math.floor();    //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();     //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc();    //* sayının tam kısmını alır.
// Math.round();    //* en yakın tam sayıya yuvarlar.
// Math.random();   //* 0 ve 1 arasında rasgele sayı üretir.

a = 9.56
b = 9.46
console.log(Math.floor(a));     // 9
console.log(Math.floor(b));     // 9
console.log(Math.ceil(a));      // 10
console.log(Math.ceil(b));      // 10
console.log(Math.trunc(a));     // 9
console.log(Math.trunc(b));     // 9
console.log(Math.round(a));     // 10
console.log(Math.round(b));     // 9
console.log(Math.random());     // 0-1 random sayi


//!###########################################
//! ********* Vergleichsoperatoren ***********
//!###########################################

const sayi1 = 4;

console.log(sayi1==4);      //true
console.log(sayi1===4);     // true
console.log(sayi1=="4");    // true
console.log(sayi1==="4");   //false

console.log(sayi1!=4);      //false
console.log(sayi1!="4");    // false

console.log(sayi1>4);       // false
console.log(sayi1<=4);      //true

//!###########################################
//! ********** logische Operatoren ***********
//!###########################################

console.log(Boolean(5));    //true
console.log(Boolean(-5));   //true
console.log(Boolean(-15.5));//true

console.log(Boolean(0));        //false
console.log(Boolean(null));     //false
console.log(Boolean(""));       //false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));      //false

console.log(false || 0 || "first" || "second" || false || null);    // first
console.log(false || 0 || null || undefined || NaN);                // NaN
console.log(5 && true && true && 0 && "");                          // 0
console.log(6 && true && 12.5 && 7);                                // 7


console.log(Number("0x11"));    // 17 x=hexa=16
console.log(Number("0b101"));   // 5 b=binary 2lik taban
console.log(Number("0o11"));    // 9 o=octal=8
console.log(Number("sayi"));    //NAN


//!###########################################
//! ************* Typänderung ***************
//!###########################################

const para = Number("1000") + Number("900")
console.log(para);
console.log(typeof para);   // number
console.log(Number(""));    //hiclik sayiya döndürülür ise 0 degerini alir
console.log(Number(null));  // 0
console.log(Number(true));  // 1
console.log(Number(false)); // 0


