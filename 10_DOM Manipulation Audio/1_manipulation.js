const title = document.querySelector("h1");
console.log(title);
title.style.color = "red";
title.style.borderBottom = "2px solid red";
title.style.display = "inline";
//* inline yaptiktan sonra text-center yeterli olmadigi icin div in icine aldim H1 i
const titleDiv = document.querySelector(".title-div");
titleDiv.style.display = "flex";
titleDiv.style.justifyContent = "center";
titleDiv.style.alignItems = "center";

//!###################################################
const resim = document.querySelector(".image");

resim.onmouseover = () => {
  resim.src = "./img/aslan2.jpeg";
};

resim.onmouseout = () => {
  resim.src = "./img/aslan1.jpeg";
};
//!###################################################
//!###################################################
const audio = document.querySelector("audio");
document.querySelector(".btn-danger").addEventListener("click", () => {
  resim.src = "./img/img.gif";
  audio.play();
  audio.volume = 0.1;
});

//!###################################################
//!###################################################
document.querySelector(".btn-success").addEventListener("click", () => {
  resim.src = "./img/telbagla.gif";
  audio.pause();
});

//!###################################################
//!###################################################
document.querySelector(".btn-primary").onclick = () => {
  resim.src = "./img/telefon.gif";
  audio.pause();
};

//!###################################################
//!###################################################
const checkBox = document.querySelector("#checkBox");
const input = document.querySelector("#textBox");

input.onkeyup = () => {
  if (checkBox.checked) {
    input.value = input.value.toUpperCase();
  }
};

//!###################################################
//!###################################################
//!###################################################
//!###################################################

const title2 = document.createElement("h1");
title2.className = "title1";
const text = document.createTextNode(
  "This sentence was created by createTextNode"
);
title2.appendChild(text);
// document.querySelector(".input-div").appendChild(title2) //! it is added as LastChild
document.querySelector(".input-div").after(title2); //! it is also added as LastChild
document.querySelector(".input-div").before(title2); //! it is added as FirstChild
//? ikisini ayni anda kullandim. sonuncuyu dikkate aldi. sadece üstte gözüküyor suan
// document.body.appendChild(H1);   //! body e ekleme sekli.

//!###################################################
//!###################################################
//!###################################################
//!###################################################
//!###################################################
//!###################################################

const inputLang = document.querySelector("#inputLang");
const addLang = document.querySelector("#add");
const delLang = document.querySelector("#del");

//todo  Way_1
// addLang.addEventListener("click", ()=>{
//     const newLi = document.createElement("li")
//     const text = document.createTextNode(inputLang.value)
//     newLi.appendChild(text)
//     document.querySelector(".list").appendChild(newLi)
//     inputLang.value = ""
// })

//todo Way_2 
const list = document.querySelector(".list")

addLang.onclick = () => {
    if (inputLang.value.trim()) {
        list.innerHTML =
        list.innerHTML + `<li>${inputLang.value}</li>`;
        inputLang.value = "";
    }
   
};

delLang.onclick=()=>{
  list.removeChild(list.lastElementChild)                    //! lastChild
  // list.removeChild(list.firstElementChild)                   //! firstChild
  // list.removeChild(list.children[0])                         //! firstChild
  // list.removeChild(list.children[list.children.length - 1]); //! lastChild
}

//! enter a basinca da ekleme yap.
inputLang.onkeydown=(key)=>{
    key.keyCode === 13 && addLang.click()
}