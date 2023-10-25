let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".check").addEventListener("click", function () {
    let guess = document.querySelector(".guess").value;
    // console.log(guess);
    let message = document.querySelector(".message");
    if (!guess) {
        message.textContent = "NO NUMBER!!!!!";
        document.querySelector(".score").textContent = --score;
    } else if (guess > secretNumber) {
        message.textContent = "Too High ↗↗";
        document.querySelector(".score").textContent = --score;
    } else if (guess < secretNumber ) {
        message.textContent = "Too Low ↘↘";
        document.querySelector(".score").textContent = --score;
      }
    //  else if(guess < 1 || guess > 20){
    //     message.textContent = "your range between 1 to 20";
    //  }
    else {
        message.textContent = "mia mia👍👌";
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").textContent = secretNumber;
        if (score > highScore) {
            highScore = score;
        }
        document.querySelector(".highscore").textContent = highScore;
    }
    
});

document.querySelector(".again").addEventListener("click", function () {
    let guess = document.querySelector(".guess").value;
    let message = document.querySelector(".message");
    message.textContent = "Start guessing...";
    document.querySelector(".score").textContent = 20;
    document.querySelector(".highscore").textContent = 0;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").textContent ="?";
    document.querySelector(".guess").value ="";

});
document.querySelector(".check").addEventListener("click", function () {
let guess = document.querySelector(".guess").value;
let message = document.querySelector(".message");
 if(guess < 1 || guess > 20){
    
message.textContent = "your range between 1to20";

}
 
});
