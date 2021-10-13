let userScore = 0;
let compScore = 0;
let prevScores = JSON.parse(localStorage.getItem("prevScores" )) || [];
const userScore_span = document.getElementById("score");
const compScore_span = document.getElementById("incorect");
const result_p = document.querySelector (".result > p");
const rock_div = document.getElementById ("rock");
const paper_div = document.getElementById ( "paper");
const scissors_div = document.getElementById ("scissors");
const lizard_div = document.getElementById ("lizard");
const spock_div = document.getElementById ("spock");
const button_reset = document.querySelector(".reset");
const button_rules = document.querySelector(".rules");
const button_save = document.querySelector(".save");
const button_close_rules = document.querySelector("#close_rules");
const button_close_save = document.querySelector("#close_save");
const popup = document.getElementById("dPopoupContainer")
const save_popup = document.getElementById("save_popup")
const submit_save = document.getElementById("submit_save")
const score_list_element = document.getElementById("scores")


// Score & Name list Storage


function saveScore(name) {
    if (userScore && compScore &&  name) {
        const score = {
            name: name,
            score : userScore,
            computer: compScore,
        };
        prevScores.push(score);

        localStorage.setItem("pervScores" , JSON.stringify(prevScores));
        resetScore();
        renderScore();
    }else{
        if (!userScore || !compScore) alert("You have to play first !");
        else alert ("Name is required !");
    }
}

function renderScore() {
    score_list_element.innerHTML = prevScores
    .map(function (score) {
        return `<li><strong>${score.name}<strong>${score.score}
        - ${score.computer} <strong>Computer</strong> </li>`;
    })
    .join(" ");
}


// Game Result Display

function getCompChoice() {
const choices = ['rock','paper','scissors','lizard','spock'];
const randomNumber= Math.floor(Math.random() * choices.length);
return choices [randomNumber];
}              

function WIN(userChoice , compChoice) {

    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = userChoice + " -  <small>beats</small>  - " 
    + compChoice + " <br>  <span class = 'win'> You Win ! </span> "; }

function LOST(userChoice , compChoice) {

    compScore++;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = userChoice + " -  <small> is beaten by </small>  -" 
    + compChoice +  " <br>  <span class = 'lost'> You Lost ! </span> "; }
   

function DRAW(userChoice , compChoice) {
    result_p.innerHTML = userChoice + "  =  "  + compChoice + " <br> Is a Draww !";}

// Score Log in (SAVE) and (RULES) Event Listener 

// RESET Score

function resetScore() {
    userScore = 0;
    compScore = 0;
    compScore_span.innerHTML = "0";
    userScore_span.innerHTML = "0";
    result_p.innerHTML = "<p>Click & Play</p>";
}
button_reset.addEventListener("click",resetScore);
button_rules.addEventListener("click", function (){
    popup.style.display = "block";
});
button_close_rules.addEventListener("click", function (){
    popup.style.display = "none";
});
button_save.addEventListener("click", function (){
    popup.style.display = "block";
});
button_close_save.addEventListener("click", function (){
    save_popup.style.display = "none";
});
submit_save.addEventListener("click", function (){
    const name = document.getElementById("name_field").value;
    saveScore(name);
});

// Game User / Computer Choices / 

function game(userChoice) {
const compChoice = getCompChoice();
switch (userChoice + compChoice) {

    case "rockscissors":
    case "rocklizard":
    case "paperrock":
    case "paperspock":
    case "scissorspaper":
    case "scissorslizard":
    case "lizardspock":
    case "lizardpaper":
    case "spockrock":
    case "spockscissors":

   WIN(userChoice,compChoice);
   break;

   case "rockpaper":
   case "paperscissors":
   case "paperlizard":
   case "scissorsrock":
   case "scissorsspock":
   case "lizardrock":
   case "lizardscissors":
   case "rockspock":
   case "spockpaper":
   case "spocklizard":

   LOST(userChoice,compChoice);
   break;

   case "rockrock":
   case "paperpaper":
   case "scissorsscissors":
   case "lizardlizard":
   case "spockspock":

   DRAW (userChoice,compChoice);
   break;

}
}

// Event listeners to game area buttons
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
renderScore();