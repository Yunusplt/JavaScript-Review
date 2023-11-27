//!##################################################
console.log("****** Destructuring ******");


const car1 = {
    title : "Mercedes",
    engine : 3,
    model : 2020
}

console.log(car1.title);            //! Mercedes
console.log(car1["model"]);         //! 2020

//! Destructuring

const {title,model} = car1
console.log(title);


//! Destructuring in Nested Objects

const cars = {
  car2: {
    brand: "BMW",
    year: 1990,
    color: "red",
  },
  car3: {
    brand: "MERCEDES",
    year: 1980,
    color: "white",
  },
  car4: {
    brand: "AUDI",
    year: 2000,
    color: "gray",
  },
};

const { car2, car3, car4 } = cars
//! 1 Method
const {brand:brand_2, year:year_2} = car2
console.log(brand_2);                       //! BMW

//! 2 Method

const {brand, year} = car4
console.log(brand);                         //! AUDI

//! 3 Method
for (const i in cars) {
    //console.log(i);                         //! car2, car3, car4
    console.log(cars[i].brand);
}

// for (const item of cars) {               //! cars is not iterable....
//     console.log(item);
// }

//!#############################################################
//! Fonksiyonlar object parametreleri destructuring yapabilir. 

const kontrol = (veri) => {
  console.log(veri);
  console.log(veri.adi);
  console.log(veri.renk);

  const { adi, renk, yildiz } = veri; // destructing

  console.log(adi);
  console.log(renk);
};

const data = { adi: "GS", renk: "sari-kirmizi", yildiz: 4 };
kontrol(data);

//!#############################################################


