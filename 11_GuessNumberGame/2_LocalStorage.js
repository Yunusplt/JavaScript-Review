//* create localStorage     localStorage.setItem("topScore" , skor)
//* use localStorage        localStorage.getItem("topScore") || 0


// let rastgeleSayi = Math.ceil(Math.random() * 20);
let randomNumber = Math.floor(Math.random() * 20) + 1; //! create a random number let ile yapmak önemli
const checkBut = document.querySelector(".check");
const mesage = document.querySelector(".start");
const guesBox = document.querySelector(".guessBox");

let score = 10;
// let topScore = 0;
let topScore = localStorage.getItem("topScoreLocal") || 0
console.log(topScore);
document.querySelector(".topScoreS").textContent = topScore

checkBut.onclick = () => {
  const userNum = document.querySelector("input").value; //! take the number of user
  console.log(randomNumber);
  console.log(userNum);
  if (!userNum) {
    mesage.innerText =
      "Input is empty or wrong value. \nEnter a valid value please!!";
  } else if (userNum == randomNumber) {
    mesage.innerText = "Congratulations, you guessed it";
    document.querySelector("body").style.backgroundColor = "lightgreen";
    guesBox.innerText = randomNumber;

    if (score > topScore) {
      topScore = score;
      //!eğer yeni skor localStoroge den yüksekse, kayıtlı topScore u benim skor umla güncelle
      localStorage.setItem("topScoreLocal", score)
      document.querySelector(".topScoreS").textContent = topScore;
    }
  } else {
    if (score > 1) {
      score--;
      document.querySelector(".scoreS").textContent = score;
      userNum < randomNumber
        ? (mesage.textContent = "guess bigger")
        : (mesage.textContent = "guess smaller");
    } else {
      mesage.textContent = "LOSER!!!";
      document.querySelector(".scoreS").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
};
//!#####################################################
//!#####################################################
//!#####################################################
//!#####################################################
//todo ENTER!!!!
document.querySelector("input").onkeydown = (key) => {
  key.keyCode === 13 && checkBut.click();
};

//! #####################################################
//! #####################################################
//! #####################################################
//! #####################################################
//!! BUTTON AGAIN

document.querySelector(".again").onclick = () => {
  document.querySelector("body").style.backgroundColor = "#2d3436";
  document.querySelector("input").value = "";
  mesage.innerText = "2. Player";
  randomNumber = Math.floor(Math.random() * 20) + 1;
  score = 10;
  document.querySelector(".scoreS").textContent = score;

  guesBox.innerHTML = "?";
};

//todo let score dersem yeni bir score olusur.
//todo again e bastigin zaman bir defalik 10 olur.
//todo daha sonra eski score again block unun disindaki score gecerli olur.

//todo randomNumber const ile tanimlandigi icin onu burada göremiyorum...
//todo yeni bir random üretemem if döngüleri yukarida cünkü.
//todo o yüzden randomNumberi yukarida let ile tanimlamam lazim
