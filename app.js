const game = () =>{
    let playerScore = 0;
    let computerScore = 0;

    //Start Game
    const startGame = () =>{
        const platBtn = document.querySelector(".intro Button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        platBtn.addEventListener("click", () =>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    //play the game

    const playMatch = () => {
        const option = document.querySelectorAll(".options button");
        const playerHand = querySelectorAll(".playerHand");
        const computerHand = querySelectorAll(".computerHand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand =>{
            hands.addEventListener("animation",
            function () {
                this.style.animation = "";
              });
        });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./img/${this.textContent}.png`;
          computerHand.src = `./img/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
 
 };

 const updateScore = () =>{
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;  
 };
}