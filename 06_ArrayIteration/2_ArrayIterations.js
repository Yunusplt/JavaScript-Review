//!###########################################################
//! ******************ARRAY ITERATIONS************************
//!###########################################################
//! ForEach
//! Map
//! Filter



//!###########################################################
//! ********************ForEach Method************************
//!###########################################################
//* ForEach is a void method   // ForEach ist eine void-Methode
//* Void in Javascript indicates that a specific function does not return a value. and it has no output. It is used only in a function.

//* Void bedeutet in Javascript, dass eine bestimmte Funktion keinen Wert zurückgibt. und es gibt keine Ausgabe. Es wird nur in einer Funktion verwendet.

const prices = [100, 250, 50, 90];

prices.forEach(item => console.log(item));

// for (const item of prices) {
//     console.log(item);
// }

let total = 0

prices.forEach(item =>{
    total += item
})
console.log(total);     //!!!! total = 490

let terminal = prices.forEach(item => total+=item)
console.log(terminal);  //!!! undefined weil es void method ist.
console.log(total);     //!!! total = 980

//! ************************************************************
//? const prices = [100, 250, 50, 90];

let sum = 0

prices.forEach((item, i, prices) => {
  sum += item;
  console.log(`${i}. total ${sum}`);
  item = item * 2;           //! interim Change 200
  console.log(prices);
});
console.log(prices);        // [100, 250, 50, 90];

prices.forEach((item,i,prices)=>{
    sum += item
    console.log(`${i}. total ${sum}`);
    prices[i] = item*2       //! permanent change
    console.log(prices);

})
console.log(prices);        // [200, 500, 100, 180]

//!###########################################################
//! ***********************Map Method*************************
//!###########################################################
console.log("******MAP METHOD******");

const namen = ["peter", "anna", "helga", "lars", "clara"];

const namenUpper = namen.map(newname=>newname.toUpperCase())
console.log(namen);
console.log(namenUpper);

// const namenUpper2 = namen.map(newName=>newName.toUpperCase()).forEach((a)=>console.log(a))

// console.log(namenUpper.forEach(a=>console.log(a)));
console.log(prices);        // [200, 500, 100, 180]

prices.map((item,i,array)=>{    // prices yerine array yazdik!!!
    if (item<250) {
        array[i] = item * 1.5
    }else array[i] = item * 1.2
})
console.log(prices);

//* ************************************************************
//? Exchange

const moneyTL = [100, 200, 50, 150]
const Dolar = 29
const Euro = 32
const moneyDolar = []
const moneyEuro = []

moneyTL.map((item=>{
    moneyDolar.push(item*Dolar)
}))

moneyTL.map((item=>moneyEuro.push(item*Euro)))

console.log(moneyDolar);
console.log(moneyEuro);


//!###########################################################
//! *********************Filter Method************************
//!###########################################################

const numbers3 = [50, 75, 25, 125 , 150, 200]

//! For of
// const unter100 = []

// for (const item of numbers3) {
//     if (item<100) {
//         unter100.push(item)
//     } 
// }
// console.log(unter100);           //![50, 75, 25]

//! FILTER

const unter100 = numbers3.filter((item)=> item<100)
console.log(unter100);              //![50, 75, 25]


//!###########################################################
//! ************************PIPELINE**************************
//!###########################################################
//! Der Begriff „Pipeline“ bedeutet in JavaScript normalerweise, dass Operationen miteinander verbunden und nacheinander ausgeführt werden.

//! RETURN dikkat
// const prices2 = [50, 75, 25, 125, 150, 200];

// const newPrices = prices2.map((price)=>{
//     if (price < 100) {
//         price = price * 1.15
//     }else price = price * 1.10
//     return price                                //! return !!
// })
// console.log(newPrices);

//! return dikkat
// const prices2 = [50, 75, 25, 125, 150, 200];

// const newPrices = prices2.map((price)=>{
//     if (price < 100) {
//         return price * 1.15
//     }else return price * 1.10                 //! return !!
// })
// console.log(newPrices);

//! Without return 
const prices2 = [50, 75, 25, 125, 150, 200];

prices2.map((item, i, array)=>{
    if (item<100) {
        array[i] = item * 1.15
    }else array[i] = item * 1.10;
})

console.log(prices2);

//****************************************************
//! with concat
const prices3 = [50, 75, 25, 125, 150, 200];
const first = prices3.filter((item)=> item>100).map((a)=>a*1.10)
const second = prices3.filter((item)=> item<=100).map((a)=> a*1.15)

console.log(first.concat(second));

//*********************************************************
const people = [
  "kubilay",
  "irfan",
  "fatih",
  "özlem",
  "nihal",
  "yunus",
  "emirhan",
  "halit",
  "esra",
  "hüseyin",
];

const findLetter = (harf) => {
  people
    .filter((isim) => isim.startsWith(harf))
    .map((isim) => isim.slice(0, 3))
    .forEach((isim) => console.log(isim));
};

findLetter("e");
findLetter("h");


//! Another PIPELINE

const sayilar = [1, 2, 3, 4, 5];

const sonuc = sayilar
  .map(x => x * 2)          // Her elemanı 2 ile çarp
  .filter(x => x > 5)       // 5'ten büyük olanları filtrele
  .reduce((acc, x) => acc + x, 0); // Topla

console.log(sonuc);         // 24


//!###########################################################
//! ************************REDUCE****************************
//!###########################################################

const salaries = [3000, 5000, 4000, 6000, 7500];

const result = salaries.reduce((item, sum)=> item + sum, 0)
//! toplamin etkisiz elemani 0 oldugu icin sifir yazdik
//! islem carpma olsaydi bu sefer 1 yazacaktik.

console.log(result);



//!###########################################################
//!###########################################################
//!###########################################################

const text = "Clarusway Online Career IT Training School";

const newArray = text.split(" ");
// console.log(newArray);

newArray.map((a) => a.toUpperCase()).forEach((a) => console.log(a));

const newArray2 = newArray.map((a) => a.toUpperCase());
console.log(newArray2);

newArray
  .filter((item) => item.startsWith("T"))
  .map((a) => a[0].toLowerCase() + a.slice(1))
  .forEach((a) => console.log(a));

//******************************************************
const yeni = people
  .filter((a) => a.endsWith("n"))
  .map((a) => a.split("").reverse().join(""));

console.log(yeni);