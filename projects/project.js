const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors" ||
      userInput === "code"
    ) {
      return userInput;
    } else {
      console.log("Error!");
    }
  };
  //console.log(getUserChoice("paper"));
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
  
      case 1:
        return "paper";
  
      case 2:
        return "scissors";
    }
  };
  //call multiple times
  /*console.log(getComputerChoice());
  console.log(getComputerChoice());
  console.log(getComputerChoice());*/
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "Tie";
    }
    if (userChoice === "rock")
      if (computerChoice === "paper") {
        return "Computer wins";
      } else {
        return "User wins";
      }
    if (userChoice === "paper")
      if (computerChoice === "scissors") {
        return "Computer wins";
      } else {
        return "User wins";
      }
  
    if (userChoice === "scissors")
      if (computerChoice === "rock") {
        return "Computer wins";
      } else {
        return "User wins";
      }
  
    if (userChoice === "code") {
      return "Victory";
    }
  }
  
  const playGame = () => {
    const userChoice = getUserChoice("rock");
    console.log(userChoice);
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  playGame();
  