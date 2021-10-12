let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("score");
const computerScore_span = document.getElementById("incorect");
const result_p = document.querySelector (".result > p");
const rock_div = document.getElementById ("rock");
const paper_div = document.getElementById ( "paper");
const scissors_div = document.getElementById ("scissors");
const lizard_div = document.getElementById ("lizard");
const spock_div = document.getElementById ("spock");

// Game Score set up

function getComputerChoice() {
const choices = ['rock','paper','scissors','lizard','spock'];
const randomNumber= Math.floor(Math.random() * 5);
return choices [randomNumber];
}              

function win(userChoice , computerChoice) {

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userChoice);
    console.log(computerChoice);
}
function lose(userChoice , computerChoice) {

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(userChoice);
    console.log(computerChoice);
}
// // function draw(userChoice , computerChoice) {

// //     computerScore++;
// //     userScore_span.innerHTML = userScore;
// //     computerScore_span.innerHTML = computerScore;
// //     console.log(userChoice);
// //     console.log(computerChoice);
// }



// Game Options / rules

function game(userChoice) {
const computerChoice = getComputerChoice();
switch (userChoice + computerChoice) {

    case "rockscissors":
    case "rocklizard":
    case "paperrock":
    case "paperspock":
    case "scissorspaper":
    case "scissorslizard":
    case "lizardspock":
    case "lizardpaper":
    case "spockrock":

win(userChoice,computerChoice);
    
   case "rockpaper":
   case "paperscissors":
   case "paperlizard":
   case "scisorrsrock":
   case "lizardrock":
   case "lizardscissors":
   case "rockspock":
   case "spockpaper":
   case "spocklizard":

   lose(userChoice,computerChoice);

case "rockrock":
case "paperpaper":
case "scissorsscissors":
case "lizardlizard":
case "spockspock":

  draw(userChoice,computerChoice);


}
}

// Get the button elements and add event listeners to them
function main() {

rock_div.addEventListener("click", function(){
    game("rock");
})
paper_div.addEventListener("click", function(){
    game("paper"); 
})
scissors_div.addEventListener("click", function(){
    game("scissors");
})
lizard_div.addEventListener("click", function(){
    game("lizard");
})
spock_div.addEventListener("click", function(){
    game("spock");
})

}

main(); 