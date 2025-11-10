let userscore = 0;
let computerscore = 0;
const userscore_span = document.getElementById("user-score");
const computerscore_span = document.getElementById("computer-score")
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getcomputerchoice(){
    const choices = ['r', 'p','s'];
    const randomnumber = Math.floor(Math.random()*3)
    return choices[randomnumber];
}

function convertoword(letter){
    if(letter=== "r") return "rock"  
    if(letter=== "p") return "paper" 
    return "scissors";  
} 


getcomputerchoice();

function win(userchoice, computerchoice){
    userscore++;
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore 
    result_div.innerHTML =` ${convertoword(userchoice)}  beats  ${convertoword(computerchoice)}you win `
}

    
 
function lose(){
    computerscore++
    userscore_span.innerHTML = userscore;
    computerscore_span.innerHTML = computerscore 
    result_div.innerHTML =` ${convertoword(userchoice)}  beats  ${convertoword(computerchoice)} you lose`
}
function draw(){console.log("draw")
    
}

function game(userchoice){
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice){
        case "rs":
        case "pr":
        case "sp":
        win();
         break

        case "rp":
        case "sr":
        case "ps":
            lose();
            break
        case "rr":
        case "pp":
        case "ss":
            draw();
            break    

    }

}

function main(){
rock_div.addEventListener("click",function(){
    game("r")
}) 
paper_div.addEventListener("click",function(){
    game("p")
}) 
scissors_div.addEventListener("click",function(){
    game("s")
}) 
}

main();