const options = ["rock", "paper", "scissors"];

function computerPlay() {
    return Math.floor((Math.random() * options.length))
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection + 1) % 3 == computerSelection) {
        //return "You Lose! " + options[computerSelection] + " beats " + options[playerSelection]
        return 0
    } else if (playerSelection == computerSelection) {
        //return "Draw!"
        return 1
    } else {
        //return "You Win! " + options[playerSelection] + " beats " + options[computerSelection]
        return 2
    }
}

function game(rounds) {
    let score = {
        "player": 0,
        "computer": 0
    }

    for (let i = 0; i < rounds; i++) {
        console.log("Round " + (i + 1));
        let playerChoice = options.indexOf(prompt("Rock, paper or scissors?").toLowerCase());
        computerChoice = computerPlay();
        let result = playRound(playerChoice, computerChoice);
        if (result == 0) {
            score.computer++;
            console.log("You Lose! " + options[computerChoice] + " beats " + options[playerChoice])
        } else if (result == 2) {
            score.player++;
            console.log("You Win! " + options[computerChoice] + " beats " + options[playerChoice])
        } else {
            console.log("Draw!")
        }
    }

    console.log("Final score:")
    console.log("Player: " + score.player)
    console.log("Computer: " + score.computer)
}

game(5);