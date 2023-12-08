const title = document.querySelector("h1")
console.log(title);
title.style.color = "red"
title.style.borderBottom = "2px solid red"
title.style.display = "inline"
//* inline yaptiktan sonra text-center yeterli olmadigi icin div in icine aldim H1 i
const titleDiv = document.querySelector(".title-div")
titleDiv.style.display = "flex"
titleDiv.style.justifyContent = "center"
titleDiv.style.alignItems = "center"


//!###################################################
const resim = document.querySelector(".image")

resim.onmouseover=()=>{
    resim.src = "./img/aslan2.jpeg"
}

resim.onmouseout=()=>{
    resim.src = "./img/aslan1.jpeg"
}
//!###################################################
//!###################################################
const audio = document.querySelector("audio");
document.querySelector(".btn-danger").addEventListener("click", ()=>{
    resim.src="./img/img.gif"
    audio.play()
    audio.volume=0.10
})

//!###################################################
//!###################################################
document.querySelector(".btn-success").addEventListener("click", ()=>{
    resim.src="./img/telbagla.gif"
    audio.pause()
})

//!###################################################
//!###################################################
document.querySelector(".btn-primary").onclick=()=>{
    resim.src="./img/telefon.gif"
    audio.pause()
}