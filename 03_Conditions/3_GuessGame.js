//* to guess the number
//* You have 5 rights

const random = (Math.round(Math.random()*100))
console.log(random);
let right = 5

while (right>0) {
    const guess = +prompt("to guess the number")
    right --;
    if (random == guess) {
       alert("congratulations, you guessed it right");
       break         
    }else if (guess > random) {
        alert(`You should guess a number less than ${guess}. You have ${right} rights left `)
    }else if (guess < random) {
        alert(
          `You should guess a number greater than ${guess}. You have ${right} rights left `
        );
    }else{
        alert("You entered the wrong value")
    }

    if (right==0) {
        alert("You couldn't guess and your right is over");
    }
}
