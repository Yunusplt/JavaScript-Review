// let rastgeleSayi = Math.ceil(Math.random() * 20);
const randomNumber = Math.floor(Math.random() * 20) + 1; //! create a random number
const checkBut = document.querySelector(".check");
const mesage = document.querySelector(".start");
const guesBox = document.querySelector(".guessBox")

let score = 10
let topScore = 0
 
checkBut.onclick = () => {
  const userNum = document.querySelector("input").value; //! take the number of user
  console.log(randomNumber);
  console.log(userNum);
  if (!userNum) {
    mesage.innerText = "Input is empty or wrong value. \nEnter a valid value please!!";
  } else if (userNum == randomNumber) {
    mesage.innerText = "Congratulations, you guessed it";
    document.querySelector("body").style.backgroundColor = "lightgreen";
    guesBox.innerText = randomNumber

    if (score > topScore) {
        topScore = score
        document.querySelector(".topScoreS").textContent = topScore
    }

  } else{
    if (score > 1) {
        score--
        document.querySelector(".scoreS").textContent = score
        userNum < randomNumber ? mesage.textContent = "guess bigger" : mesage.textContent="guess smaller"
    }else{
        mesage.textContent = "LOSER!!!"
        document.querySelector(".scoreS").textContent = 0
        document.querySelector("body").style.backgroundColor = "red";
    }
  }
};
