//!###############################################################
//! Mouse Over, Mouse Out
//!###############################################################

//?METHOD-1 (HTML-INLINE)
//?---------------------------------------------------------------
    // <h1 
    // onmouseover="style.color='blue'"
    // onmouseout="style.color='red'"
    // >JAVASCRIPT'TE DOM</h1>

//? METHOD-2 (Function calling in HTML)
//?---------------------------------------------------------------
    //<h1 class="H5" 
    //onmouseover="yesil()" 
    //onmouseout="kirmizi()">
    //  JAVASCRIPT IN HTML</h1>;

const title = document.querySelector(".H5")
const green =()=> title.style.color = "green"
const purple =()=> title.style.color = "purple"

//? METHOD-3 (Only in JS)
//?---------------------------------------------------------------
//todo window.getComputedStyle //
const körperElement = document.querySelector("#körper");
const firstKörperBackColor = window.getComputedStyle(körperElement).backgroundColor;


document.querySelector("#world").onmouseover=()=>{
    document.querySelector("#körper").style.backgroundColor = "lightblue"
    document.querySelector("#world").style.color = "yellow"
}

document.querySelector("#world").onmouseout=()=>{
    document.querySelector("#körper").style.backgroundColor = firstKörperBackColor
    document.querySelector("#world").style.color = "red"
}



//!###############################################################
//! onclick-ondblclick
//!###############################################################
//* Bu uygulamada resim yokken ortaya cikarttik. 
src = "./img/clarusway.png";

const firstImg = document.querySelector(".clrimg")

firstImg.onclick=()=>{
    firstImg.src = "./img/clarusway.png";
}


//* in this ablehnen button escape from user. ;)
const yesButton = document.querySelector("#yes")
const noButton  = document.querySelector("#no")

noButton.onmouseover =()=>{
    noButton.innerText = "annehmen"
    yesButton.innerText = "ablehnen"
}

noButton.onmouseout =()=>{
    noButton.innerText = "ablehnen"
    yesButton.innerText = "annehmen"
}

//* Change body with button.
const buton = document.querySelector("#btn")

buton.onclick=()=>{
    document.querySelector("#körper").style.backgroundImage =
      "linear-gradient(to right, purple, gray)";
    
    buton.textContent = "SEARCH"
    buton.style.fontSize = "40px"
    buton.style.color = "red"
}


//? METHOD-4 (addEventListener() works in only in JS)
//?---------------------------------------------------------------
//* Change body with button way 2
buton.addEventListener("click", () => {
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right, purple, gray)";
  buton.textContent = "addEventListener";
  buton.style.fontSize = "30px";
  header.style.color = "red";
});


















