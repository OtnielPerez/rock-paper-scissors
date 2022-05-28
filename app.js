const game = () =>{
    let playeScore = 0;
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
    }
}