function getComputerChoice() {
    const choice = Math.random();
    console.log(choice);
    if(choice <= 0,33){
            return "rock"; 
        }
        else if (choice <= 0.66 && choice > 0.33){
            return "paper";
        }      
        else {
            return "scissors";
        } 
}

