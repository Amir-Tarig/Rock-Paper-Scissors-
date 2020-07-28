function game () {

    let Pscore = 0;
    let Cscore = 0;

    const phand = document.querySelector(".phand");
    const chand = document.querySelector(".chand");
    const Boptions = document.querySelectorAll(".options button");
    const btn = document.querySelector(".btn");

    //fadeing in/out the intro section
    btn.addEventListener('click', () => {
        const intro = document.querySelector(".intro");
        const game = document.querySelector(".game");
        intro.classList.add("fade");
        game.classList.add("fadeout");
    });


    //player/computer choice
    Boptions.forEach(option => {

        option.addEventListener("click", function(){
            const computerSelection = ["rock","paper","scissors"];
            const randomNumber = Math.floor(Math.random() * 3);
            const Cchoice = computerSelection[randomNumber];
            compareHansd(this.textContent, Cchoice);
            phand.src = `./image/${this.textContent}.png`;
            chand.src = `./image/${Cchoice}.png`;
            
        });
    });

    const updateScore = () => {
        const playerScore = document.querySelector(".Pscore p");
        const computerScore = document.querySelector(".Cscore p");
        playerScore.textContent = Pscore;
        computerScore.textContent = Cscore;
    };


    const compareHansd = (playerSelection,computerSelection) => {

       
        const header = document.querySelector(".game h1");
        if (playerSelection === computerSelection) {
            header.textContent = "It is a tie";
            return;
          }
          //Check for Rock
          if (playerSelection === "rock") {
            if (computerSelection === "scissors") {
                header.textContent = "Player Wins";
              Pscore++;
              updateScore();
              return;
            } else {
                header.textContent = "Computer Wins";
              Cscore++;
              updateScore();
              return;
            }
          }
          //Check for Paper
          if (playerSelection === "paper") {
            if (computerSelection === "scissors") {
                header.textContent = "Computer Wins";
              Cscore++;
              updateScore();
              return;
            } else {
                header.textContent = "Player Wins";
              Pscore++;
              updateScore();
              return;
            }
          }
          //Check for Scissors
          if (playerSelection === "scissors") {
            if (computerSelection === "rock") {
                header.textContent = "Computer Wins";
              Cscore++;
              updateScore();
              return;
            } else {
                header.textContent = "Player Wins";
              Pscore++;
              updateScore();
              return;
            }
          }
    };

}
game();