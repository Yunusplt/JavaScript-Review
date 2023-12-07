//!################################################
//! getElementById()
//!################################################

// document.getElementById("del").style.backgroundColor = "yellow"
const button = document.getElementById("del")

button.style.backgroundColor = "yellow"


//!################################################
//! getElementByTagName()
//!################################################

//! HTML Collection   cünkü birden fazla ayni isimde element var

const resim = document.getElementsByTagName("img")

console.log(resim);

resim[0].style.width = "300px"
resim[1].style.border = "5px solid red"
resim[1].style.borderRadius = "25%"


//!################################################
//! getElementByClassName()
//!################################################

//! HTML Collection cünkü birden fazla ayni isimde class var. 
//! HTML Collection dinamiktir. 
//! yani Dom daki bir listeye yeni bir <li> elementi eklerseniz HTML Collection güncellenir
//! elemanlara indixing ile erisilir ama array methodlar kullanilamaz.


const baslik2 = document.getElementsByClassName("learn")

baslik2[0].style.color = "red"
baslik2[0].innerHTML = "<a href='www.clarusway.com'>Web Site</a>"
//! We are learning yazan h2 elementini, Web site yazan a elementine dönüstürdük.
// console.log(document.getElementsByTagName("h1")[0].innerText)    //! DOM Selector
document.getElementsByTagName("h1")[0].innerText = "DOM Selector Lesson"



//!################################################
//! querySelector()
//!################################################

//! 2 adet p elementi var. 

document.querySelector("p").style.fontSize = "28px"
//! ilk p yi degistirdi. 
console.log(document.querySelectorAll("p"));
//! NodeList   
//! Nodelists statiktir.
//! Yani Dom daki bir listeye yeni bir <li> elementi eklerseniz NodeList güncellenmez.
//! Dizi methodlari dogrudan uygulanabilir. 

 
document.querySelector("#name").style.backgroundColor = "red"
document.querySelector(".surname").style.backgroundColor = "orange"