//!#############################################
console.log("****** SpreadAndRest ******");
//!########################################################################
//!Rest

const personel = {
    vorName : "Yunus",
    lastName : "Polat",
    age : 31,
    Job : "Frontend Developer"
}

const {vorName, lastName, ...rest} = personel
console.log(vorName);               //! Yunus
console.log(personel.vorName);      //! Yunus
console.log(rest);                  //! {age: 31, Job: 'Frontend Developer'}


//!#########################################################################
//! Object Copy

const {...copyPersonel} = personel
console.log(copyPersonel);              //! {vorName: 'Yunus', lastName: 'Polat', age: 31, Job: 'Frontend Developer'}


//!#########################################################################
//! bir fonksiyonun argument lerini diziye cevirmek icin kullanilabiilir,

const sum = (x, y) => x + y;
console.log(sum(1, 2, 3, 4, 5));                    //! 3


const sum2 = (...x) => {
  console.log(x); // [1, 2, 3, 4, 5]
  console.log(x.reduce((total, a) => total + a, 0));//! 15
};
sum2(1, 2, 3, 4, 5);


//!########################################################################
//!Spread

const cars = ["BMW", "Mercedes", "AUDI", "VolksWagen"]
const fruits = ["Cherry", "Banana", "WaterMelon", "Ananas"]


console.log([cars,fruits]);         //!  [ ["BMW", "Mercedes", "AUDI", "VolksWagen"], ["Cherry", "Banana", "WaterMelon", "Ananas"] ]
console.log([...cars, ...fruits]);  //! ['BMW', 'Mercedes', 'AUDI', 'VolksWagen', 'Cherry', 'Banana', 'WaterMelon', 'Ananas']
console.log(cars.concat(fruits));   //! ['BMW', 'Mercedes', 'AUDI', 'VolksWagen', 'Cherry', 'Banana', 'WaterMelon', 'Ananas']
console.log(cars.join(","));        //! BMW,Mercedes,AUDI,VolksWagen
console.log([cars.join(",")]);      //! [BMW,Mercedes,AUDI,VolksWagen]


//!########################################################################
//!########################################################################

const personel3 = {
  pName: "Johny",
  surname: "DEEP",
  job: "actor",
  age: 55, 
}


//! How can be add new data in object. 
const neue = { ...personel3, job: "father", location: "USA" };
console.log(neue);


//! #######################################################################
//! age 5 arttir. 

// const neueJohny = personel3.map((item)=>({      //! objectlerde map calismaz
//     ...item, age: item.age +5 
// }))

// console.log(neueJohny);

// const keysObject = Object.keys(personel3)
// const mappedKeys = keysObject.map(([key, value])=>{
//     if (key === "age") {
//         return[key, value +5]
//     }
//     return [key, value]
// })
// console.log(keysObject);                            //! sadece key ler üzerinde islem yapti, values gözukmuyor.

//!########################################################################
//!########################################################################
//!########################## Object with map #############################
//!########################################################################

const updatePersonel3 = Object.fromEntries(
    Object.entries(personel3).map(([key, value])=>{
        if (key === "age") {
            return [key, value +5]
        }
        return [key, value]
    })
)
console.log(updatePersonel3) //! {pName: 'Johny', surname: 'DEEP', job: 'actor', age: 60}


//!########################################################################
//!########################################################################
//!########################################################################
//!########################################################################
//! BUT BUT
//! Das Durchlaufen von Arrays ist schneller als das Durchlaufen von Objects. Es könnte sinnvoller sein, wenn die Objekte in einem Array abgelegt werden.