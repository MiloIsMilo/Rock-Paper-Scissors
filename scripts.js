const getComputerChoice = () => {
  const computerChoice = Math.floor(Math.random() * 3);
  return computerChoice;
}

const playerChoice = () => {
  for (let i = 0; i >= 0; i++) {
    let answer = prompt("0: Rock | 1: Paper | 2: Scissors");
    if ((answer == 0) || (answer == 1) || (answer == 2)) {
      const playerChoice = answer;
      i = -2;
      return playerChoice;
    } else {
      console.log("Choose between 0-2!");
      console.log("-----------------------------------")
    }
  }
}

const battleInfo = (player, computer, playerScore) => {
  const key = +player;
  switch(key) {
    case 0:
      if(computer == 0) {
        console.log("Player: Rock vs Computer: Rock");
        console.log("Draw");
        console.log(`Player score: ${playerScore}`);
        console.log("-----------------------------------")
        break;
      } else if (computer == 1) {
        --playerScore;
        console.log("Player: Rock vs Computer: Paper");
        console.log("Computer Wins");
        console.log(`Player score: ${playerScore}`);
        console.log("-----------------------------------")
        break;
      } else if (computer == 2) {
        ++playerScore;
        console.log("Player: Rock vs Computer: Scissors");
        console.log("Player Wins");
        console.log(`Player score: ${playerScore}`);
        console.log("-----------------------------------")
        break;
      }

    case 1:
      if(computer == 0) {
        ++playerScore;
        console.log("Player: Paper vs Computer: Rock");
        console.log("Player Wins");
        console.log(`Player score: ${playerScore}`);
        console.log("-----------------------------------")
        break;
      } else if (computer == 1) {
        console.log("Player: Paper vs Computer: Paper");
        console.log("Draw");
        console.log(`Player score: ${playerScore}`);
        console.log("-----------------------------------")
        break;
      } else if (computer == 2) {
        --playerScore;
        console.log("Player: Paper vs Computer: Scissors");
        console.log("Computer Wins");
        console.log(`Player score: ${playerScore}`);
        console.log("-----------------------------------")
        break;
      }

    case 2:
      if(computer == 0) {
        --playerScore;
        console.log("Player: Scissors vs Computer: Rock");
        console.log("Computer Wins");
        console.log(`Player score: ${playerScore}`);
        console.log("-----------------------------------")
        break;
      } else if (computer == 1) {
        ++playerScore;
        console.log("Player: Scissors vs Computer: Paper");
        console.log("Player Wins");
        console.log(`Player score: ${playerScore}`);
        console.log("-----------------------------------")
        break;
      } else if (computer == 2){
        console.log("Player: Scissors vs Computer: Scissors");
        console.log("Draw");
        console.log(`Player score: ${playerScore}`);
        console.log("-----------------------------------")
        break;
      }
  }
  return playerScore;
}

const rockPaperScissorsGame = () => {
  let playerScore = 0;
  for (let i = 0; i >= 0; i++){
    let game = prompt("1: play | 2: reset score | 3: end");
    if(game == 1) {
      let player_Choice = playerChoice();
      let computer_Choice = getComputerChoice();
      playerScore = battleInfo(player_Choice, computer_Choice, playerScore);
    } else if (game == 2) {
      playerScore = 0;
      console.log("Score reset");
      console.log("-----------------------------------")
    } else if (game == 3) {
      i = -10;
    } else {
      console.log("Choose between 1-3!");
      console.log("-----------------------------------")
    }
  }
}

rockPaperScissorsGame();