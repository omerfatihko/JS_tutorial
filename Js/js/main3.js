//interactive game: Cocky rock, paper, scissors
let playGame = confirm("Shall we play rock, paper, scissors?");
if (playGame) {
    //play
    while (playGame) {
        const playerChoice = prompt("Please enter rock, paper, or scissors.");
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
            if (playerOne === "rock" || playerOne === "paper" || playerOne == "scissors") {
                const computerChoice = Math.floor(Math.random()*3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer =  rpsArray[computerChoice];
                    const result = 
                    playerOne === computer ? `playerOne: ${playerOne}\nComputer: ${computer}\nTie! You got off this time`:
                    playerOne === "rock" && computer === "paper" ? `playerOne: ${playerOne}\nComputer: ${computer}\nI win sucka!`:
                    playerOne === "paper" && computer === "scissors" ? `playerOne: ${playerOne}\nComputer: ${computer}\nI win sucka!`:
                    playerOne === "scissors" && computer === "rock" ? `playerOne: ${playerOne}\nComputer: ${computer}\nI win sucka!`:
                    `playerOne: ${playerOne}\nComputer: ${computer}\nYou get lucky, this time. Don't get too cocky though! There is always another time.`; 
                    alert(result);
                    playGame = confirm("Would you like to play again?");
                    if (!playGame) alert("Ok, I guess you realised who is the boss!");
                    continue;
            } else {
                alert("Can't even type rock, paper, or scissors I guess.");
                continue;
            }
        } else {
            alert("I guess you chickened out.");
            break;
        }
    }
} else {
    alert("Ok, cry baby, scared much?");
}