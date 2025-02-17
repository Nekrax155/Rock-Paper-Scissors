/*function getComputerChoice() {
    const choice = Math.random();
    console.log(choice);
    if(choice <= 0.33){
            return "rock"; 
        }
        else if (choice <= 0.66 && choice > 0.33){
            return "paper";
        }      
        else {
            return "scissors";
        } 
}

function getHumanChoice() {
    let sign = window.prompt("Enter rock, paper or scissors");
}

let humanScore = 0;
let ComputerScore = 0;

function playRound (humanChoice, computerChoice ) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    
    if (humanChoice = "rock" )
}*/

    function getComputerChoice() {
        const choice = Math.random();
        if(choice <= 0.33){
                return 1; 
            }
            else if (choice <= 0.66 && choice > 0.33){
                return 2;
            }      
            else {
                return 3;
            } 
    }
    
    function getHumanChoice() {
        let sign = window.prompt("Enter rock, paper or scissors");
        if(sign.toLowerCase() === "rock"){
            return 1; 
        }
        else if (sign.toLowerCase() === "paper"){
            return 2;
        }      
        else {
            return 3;
        } 
    }
    
    
function playGame(numRounds = 5){

    let humanScore = 0;
    let computerScore = 0;
    
    function playRound () {

        const humanChoice = getHumanChoice();
        console.log(humanChoice);
        const computerChoice = getComputerChoice();
        console.log(computerChoice);
        
        if (humanChoice < computerChoice ){
            if (humanChoice === 2 && computerChoice === 3 ){
                ++computerScore;
                return "You lose! Scissors beats Paper"  + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;
            }else if (humanChoice === 1 && computerChoice === 2 ){
                ++computerScore;
                return "You lose! Paper beats Rock"  + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;}
                else {
                    ++humanScore;
                    return "You win! Rock beats Scissors "  + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;
                }
        }    
        else if (humanChoice > computerChoice){
            if (humanChoice === 3 && computerChoice === 2 ){
                ++humanScore;
                return "You win! Scissors beats Paper"  + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;
            }else if (humanChoice === 2 && computerChoice === 1 ){
                ++humanScore;
                return "You win! Paper beats Rock"  + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;}
                else {
                    ++computerScore;
                    return "You lose! Rock beats Scissors " + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;
                }
            }
        else {return "Tie!" + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;}
    }


    for (let i = 0; i < numRounds; i++){
        const roundResult = playRound();
        alert(roundResult);
    }
    
    if (humanScore > computerScore){
        return "Congratulations, You Win!" + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;
    } else if (humanScore < computerScore){
        return "You lose, Try again next time." + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;
    } else {
        return "mmmmm, There's a Tie!" + " *** " + "Human: " + humanScore + " | " + "Computer " + computerScore;
    }
     humanScore = 0;
     computerScore = 0;
}