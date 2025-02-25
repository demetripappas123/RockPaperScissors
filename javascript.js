function getComputerChoice(){
    let computerChoice;

    do{
    computerChoice = Math.floor(Math.floor(Math.random()*4));
    }while(computerChoice===3);

    if(computerChoice==0){
        computerChoice = "rock";
    }
    else if(computerChoice==1){
        computerChoice = "scissors";
    }
    else if(computerChoice==2){
        computerChoice = "paper";
    }

    return computerChoice;

}

let humanScore=0;
let computerScore=0;

function playRound(HC){
    const existingDiv = document.querySelector("div");
    if(existingDiv){
        existingDiv.remove();
    }

    let CC = getComputerChoice();

    if(HC=="rock" && CC=="scissors"){
        humanScore++;
    }
    else if(HC=="scissors" && CC=="paper"){
        humanScore++;
    }
    else if(HC=="paper" && CC=="rock"){
        humanScore++;
    }
    else if(HC===CC){
        humanScore++;
        computerScore++;
    }
    else{
        computerScore++;
    }

    const div = document.createElement("div");
    document.body.append(div);
    div.textContent = "Score is " + humanScore + " : " + computerScore;
    if(humanScore == 5){
        div.textContent += "You Won";
    } 
    else if(computerScore == 5){
        div.textContent += "You Lost";
    }
    return humanScore, computerScore;
}

const rockButton = document.createElement("button");
document.body.append(rockButton);
rockButton.textContent = "Rock";
rockButton.addEventListener("click", ()=> {
    playRound("rock");
});

const paperButton = document.createElement("button");
document.body.append(paperButton);
paperButton.textContent = "Paper";
paperButton.addEventListener("click", ()=> {
    playRound("paper");
});

const scissorsButton = document.createElement("button");
document.body.append(scissorsButton);
scissorsButton.textContent = "Scissors";
scissorsButton.addEventListener("click", ()=> {
    playRound("scissors");
});




/*function playGame(){
    
    if(humanScore>computerScore){
        alert("You Won, Final Score is: "+humanScore+"-"+computerScore);
    }
    else if(humanScore==computerScore){
        alert("Tie! Final Score is: "+humanScore+"-"+computerScore);
    }
    else if(computerScore>humanScore){
        alert("You Lost, Final Score is: "+humanScore+"-"+computerScore);
    }
}
    */


