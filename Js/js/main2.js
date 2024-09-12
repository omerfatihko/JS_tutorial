//rock, paper,scissors refactore with functions TERBİYESİZ TAŞ KAĞIT MAKAS
const initGame = () => {
    const startGame = confirm("Taş, kağıt, makasa var mısın?");
    startGame ? playGame() : alert("Nerede o göt sende!");
};

//Game flow function
const playGame = () => {
    while (true) {
        let playerChoice = getPlayerChoice();
        playerChoice = formatPlayerChoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaluatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
};

const getPlayerChoice = () => {
    return prompt("Seç: taş, kağıt, makas?");
};

const formatPlayerChoice = (playerChoice) => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
};

const invalidChoice = () => {
    alert("Daha doğru düzgün yazmayı beceremiyorsun yazık.");
};

const decidedNotToPlay = () => {
    alert("Korktun dimi lan? Cesaretini toplayınca yine gel eline vereyim.");
};

const evaluatePlayerChoice = (playerChoice) => {
    if (
        playerChoice === "taş" ||
        playerChoice === "kağıt" ||
        playerChoice === "makas"
    ) {
        return playerChoice;
    } else {
        return false;
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*3);
    const rpsArray = ["taş", "kağıt", "makas"];
    return rpsArray[randomNumber];
};

const determineWinner = (player, computer) => {
    const winner = 
        player === computer 
        ? `oyuncu: ${player},\nbilgisayar: ${computer}\nBerabere, hadi yine iyisin.`
        : player === "taş" && computer == "kağıt"
        ? `oyuncu: ${player},\nbilgisayar: ${computer}\nAdam olacaksın adam.`
        : player === "kağıt" && computer == "makas"
        ? `oyuncu: ${player},\nbilgisayar: ${computer}\nAdam olacaksın adam.`
        : player === "makas" && computer == "taş"
        ? `oyuncu: ${player},\nbilgisayar: ${computer}\nAdam olacaksın adam.`
        : `oyuncu: ${player},\nbilgisayar: ${computer}\nŞanslı piç!`;
    return winner;
};

const displayResult = (result) => {
    alert(result);
};

const askToPlayAgain = () => {
    return confirm("Bi daha?");
};

const thanksForPlaying = () => {
    alert("Adam ettik herhalde!");
};

initGame();