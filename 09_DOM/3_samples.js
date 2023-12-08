//!##############################################################
//! create a new element with JS
//!##############################################################
//? createElement() creates a H1 element
//? createTextNode()creates a textNote
//? appendChild() connects nodeText and H1
//* to locate in body
const H1 = document.createElement("h1")
const text = document.createTextNode("This sentence was created by createTextNode method in JS file.")
H1.appendChild(text)
document.body.appendChild(H1)

H1.style.color = "purple"

//!#############################################################
//* to locate in any element
const H2 = document.createElement("h2")
const text1 = document.createTextNode("This Sentence was located in div element")
const DIV = document.querySelector("div")
H2.appendChild(text1)
DIV.appendChild(H2)


//!#############################################################
//!#############################################################
//!#############################################################
//!#############################################################
//!#############################################################
//!#############################################################
//? asagida 2 farkli yöntemle click islemini gerceklestirmeyi görüyorsunuz. 

const newLi=()=>{
    const UL = document.querySelector(".list")
    const inputList  =document.querySelector("input").value
    const textNode = document.createTextNode(inputList)
    const newList = document.createElement("li")
    newList.appendChild(textNode)
    UL.appendChild(newList)
    document.querySelector("input").value = ""
}

document.querySelector(".del").addEventListener("click", ()=>{
    const liste = document.querySelector(".list")
    liste.removeChild(liste.lastElementChild)
})


//!#############################################################
//!#############################################################
//!#############################################################
//!#############################################################
//!#############################################################
//!#############################################################