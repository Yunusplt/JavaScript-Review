//!##############################################################
//! *********************** Objects new *************************
//!##############################################################

console.log("********objects********");

const leeresObjekt = new Object ({})
console.log(leeresObjekt);                  //!{}

const car1 = new Object({name: "BMW", engine: 2.0, model: 2010})
console.log(car1);          //! {name: 'BMW', engine: 2, model: 2010}
console.log(car1.name);     //! BMW
// console.log(car1[engine]);  //! engine is not defined
console.log(car1["model"]); //! 2010

//! *************************************************************

const car2 = new Object({})
console.log(car2);                  //! {}
car2.name = "Mercedes"
car2.engine = 1.6
car2.model = 2020
console.log(car2);  //! {name: 'Mercedes', engine: 1.6, model:2020}

//!##############################################################
//! ******************** Objects literals ***********************
//!##############################################################
console.log("***** Objects literals *****");
const birth = 1923

const person = {
  name: "Johny",
  surname: "Deep",
  birth: 1970,
  job: "actor",
  hasDriverLicence: true,
  agefind: function () {            //! Function Expression
    return new Date().getFullYear() - this.birth;
  },

  languages: ["C", "C++", "JAVA", "PYTHON"],
};

console.log(person);  
console.log(person.name);                   //! Johny
// console.log(person.agefind());           //! without this 100
console.log(person.agefind());              //! 53
console.log(person.languages[2]);           //! JAVA
console.log(person.birth);                  //! 1970

//!##############################################################
//! ****************** Objects Constructor **********************
//!##############################################################
//! Function Decleration 
//! In Object Constructor muss be used this key-word
//! this key-word muss be used in Function Decleration
//! new key-word


function employee(id, name, salary){
    this.employeeId = id
    this.employeeName = name
    this.employeeSalary = salary
    console.log(this);
}

console.log(this);  //! Window {window: Window, self: .....
employee(100, "yunus", 50000)
const person1 = new employee(100, "yunus", 50000); //! employee {employeeId: 100, employeeName: 'yunus', employeeSalary: 50000}
const person2 = new employee(101, "Mehmet", 80000); //!employee {employeeId: 101, employeeName: 'Mehmet', employeeSalary: 80000}
console.log(person1);  //! employee {employeeId: 100, employeeName: 'yunus', employeeSalary: 50000}
console.log(person2);//! employee {employeeId: 101, employeeName: 'Mehmet', employeeSalary: 80000}



//!##############################################################
//!##############################################################

const people = [
  {
    name: "Mehmet",
    surname: "Rosenberg",
    job: "team lead",
    age: 40,
  },
  {
    name: "Ozkul",
    surname: "Gutenberg",
    job: "developer",
    age: 26,
  },

  {
    name: "Baser",
    surname: "Shaffer",
    job: "tester",
    age: 24,
  },
];

console.log(people);
people.forEach((item)=> console.log(item.name))
//!mehmet
//!Ozkul
//!Baser

//! ornek1 : yaslari 1 arttir ve sonucu yeni bir diziye aktar.
const newArray = people.map((x)=>(x.age+1))
console.log(newArray);
console.log(people[0].age);
console.log(people[0]);

//! Ornek 2 : yaslari 1 er arttir, sonucu dizide kalici degistir. 

people.map((item,i,array)=>{
    // console.log(item.age)   //! item da degisiklik yaparsan degisiklik olmaz. index ile degisiklik yapmalisin....
    array[i].age = array[i].age +1 
})
console.log(people);


