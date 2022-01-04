function hello(){
    console.log("Yo sup");
    
    let inputText = document.getElementById("input1").value;
    if (inputText.length == 0){ //Checks if there is no input
        alert("No input!");
        inputText = "No Input";
    }
    document.getElementById("text1").innerHTML = inputText;
}

function game(){
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    //console.log(playerChoice);
    let caseYes = document.getElementsByName("caseYesNo");
    if (caseYes[0].checked){
        //console.log("Yes");
        switch (playerChoice) {
            case 'Rock':
                console.log("Rock");
                break;
            case 'Paper':
                console.log("Paper");
                break;
            case 'Scissors':
                console.log("Scissors");
                break;
            default:
                alert("Case Sensitive! Check your input!");
                return;
        }
    } else {
        playerChoice = playerChoice.toLowerCase();
        switch (playerChoice) {
            case 'rock':
                console.log("Rock");
                break;
            case 'paper':
                console.log("Paper");
                break;
            case 'scissors':
                console.log("Scissors");
                break;
            default:
                alert("You entered an input that isn't rock, paper, or scissors.");
                return;
        }
    }

    //The section below will occur if the cases are passed. At this point,
    //we no longer have to worry about whether it is case sensitive or not.
    playerChoice = playerChoice.toLowerCase(); 
    let randomNumber = Math.floor(Math.random() * 1000);
    var computerChoice;
    if (randomNumber % 3 == 0) {
        computerChoice = "paper";
    } else if (randomNumber % 5 == 0) {
        computerChoice = "scissors";
    } else{
        computerChoice = "rock";
    }
    let result = referee(playerChoice, computerChoice);
    console.log("Result is "+result);
    document.getElementById("playerChoice").innerHTML = playerChoice;
    document.getElementById("computerChoice").innerHTML = computerChoice;
    document.getElementById("gameResult").innerHTML = result;
}

function referee(pChoice, cChoice){ //Decides if it's a win, tie, or loss
    //var result;
    if (pChoice === "rock") {
        switch(cChoice) {
            case'rock':
                console.log("tie");
                return "tie";
            case'paper':
                console.log("lose");
                return "lose";
            case'scissors':
                console.log("win");
                return "win";
            default:
                alert(`Something went wrong with the referee(). cChoice is ${cChoice} while pChoice is ${pChoice}`);
                return;
        }
    } else if (pChoice === "paper") {
        switch(cChoice) {
            case'rock':
                console.log("win");
                return "win";
            case'paper':
                console.log("tie");
                return "tie";
            case'scissors':
                console.log("lose");
                return "lose";
            default:
                alert(`Something went wrong with the referee(). cChoice is ${cChoice} while pChoice is ${pChoice}`);
                return;
        }
    } else if (pChoice === "scissors") {
        switch(cChoice) {
            case'rock':
                console.log("lose");
                return "lose";
            case'paper':
                console.log("win");
                return "win";
            case'scissors':
                console.log("tie");
                return "tie";
            default:
                alert(`Something went wrong with the referee(). cChoice is ${cChoice} while pChoice is ${pChoice}`);
                return;
        }
    }
}