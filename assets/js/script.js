const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("score");
const computerScore_span = document.getElementById(" incorect");
const scoreArea_div = document.querySelector (".result");
const rock_div = document.getElementById ("rock");
const paper_div = document.getElementById ( "paper");
const scissors_div = document.getElementById ("scissor");

// Get the button elements and add event listeners to them



function game(userOption) {
    console.log("*" + userOption);
}

function principal() {

rock_div.addEventListener("click", function(){
    game("rock");
})
paper_div.addEventListener("click", function(){
    game("paper"); 
})
scissors_div.addEventListener("click", function(){
    game("scissor");
})
scissors_div.addEventListener("click", function(){
    game("lizard");
})
scissors_div.addEventListener("click", function(){
    game("spock");
})

}

principal();