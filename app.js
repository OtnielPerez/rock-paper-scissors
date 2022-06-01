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
       
};
}