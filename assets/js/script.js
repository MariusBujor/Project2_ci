const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("score");
const computerScore_span = document.getElementById(" incorect");
const scoreArea_div = document.querySelector (".result");
const rock_div = document.getElementById ("rock");
const paper_div = document.getElementById ( "paper");
const scissors_div = document.getElementById ("scissor");
const lizard_div = document.getElementById ("lizard");
const spock_div = document.getElementById ("spock");

// Get the button elements and add event listeners to them




function main() {

rock_div.addEventListener("click", function(){
    game("rock");
})
paper_div.addEventListener("click", function(){
    game("paper"); 
})
scissors_div.addEventListener("click", function(){
    game("scissor");
})
lizard_div.addEventListener("click", function(){
    game("lizard");
})
spock_div.addEventListener("click", function(){
    game("spock");
})

}

main();