//Cach DOM
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertTwoWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    return "Scissors";
}

 

function win(user, computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(4).sub();
    const smallCompWord = "comp".fontsize(4).sub();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertTwoWord(user)}${smallUserWord} beats ${convertTwoWord(computer)}${smallCompWord}. You WIN!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'),300);
}

function lose(user, computer) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(4).sub();
    const smallCompWord = "comp".fontsize(4).sub();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertTwoWord(user)}${smallUserWord} loses to ${convertTwoWord(computer)}${smallCompWord}. You LOST!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'),300);
}

function draw(user, computer) {
    const smallUserWord = "user".fontsize(4).sub();
    const smallCompWord = "comp".fontsize(4).sub();
    const userChoice_div = document.getElementById(user);
    result_p.innerHTML = `${convertTwoWord(user)}${smallUserWord} equals ${convertTwoWord(computer)}${smallCompWord}. It's a draw!`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'),300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    
    switch (userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
        win(userChoice,computerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice,computerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice,computerChoice);
        break;
    }
}


function main() {

    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click', () => game("p"));

    scissors_div.addEventListener('click', () => game("s"));    
    
}

main();