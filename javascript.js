console.log("hi");

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

function getHumanChoice(){
    humanChoice = prompt("Enter Choice");
    return humanChoice;
}



let humanScore=0;
let computerScore=0;

function playRound(){
    let HC = getHumanChoice().toLowerCase();
    let CC = getComputerChoice();
    console.log(HC);
    console.log(CC);

    while (HC!="rock" && HC!="scissors" && HC!="paper"){
        HC=prompt("Oops, that's against the rules! Try again!").toLowerCase();
    }

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
        alert("Tie!");
    }
    else{
        computerScore++;
    }

    alert("Score is: "+humanScore+","+computerScore);
    return humanScore, computerScore;
}

function playGame(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
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

playGame();
