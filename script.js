let score = 0;
let lives = 3;
let question1;
let question2;
let sound1 = new Audio('claps.mp3');
let sound2 = new Audio('lose.mp3');
let signs = ["+","-","*"]
let answer;
let qSign = signs[Math.round(Math.random()*2)]
function calculations(){

    qSign = signs[Math.round(Math.random()*2)]
    if (qSign == "*") {
        answer = parseInt(question1 * question2);
    }
    else if (qSign == "-") {
        answer = parseInt(question1 - question2);
    }
    else if (qSign == "+") {
        answer = parseInt(question1 + question2);
    }

}


function print(){
	let question = document.querySelector(".question");
	question.innerHTML = "<p>" + question1 +  " " + qSign  + " " + question2 + "</p>";
}
function nextQ(){
	question1 = Math.round(Math.random()*20);
	question2 = Math.round(Math.random()*20);
	print();
    calculations();
}     
nextQ();  
function totalScore(){
    scoreP = document.querySelector("#score");
    scoreP.innerHTML = "<p>" + "Your Score : " + score + "</p>";
} 
function livesRemain(){
    livesP = document.querySelector("#lives");
    livesP.innerHTML = "<p>" + "Remaining Lives : " + lives + "</p>";             
}
livesRemain();
function check(){
    calculations();
    let myAnswer = parseInt(document.querySelector("input").value);
if (lives != 0) {
    if(myAnswer == answer){
        let wriScore = document.querySelector("#wriScore")
        wriScore.innerHTML = "<p>" + "CORRECT!" + "</p>";
        nextQ();
        ++score;
        totalScore();
        sound1.play();
    }
    else{
       lives--;
       livesRemain();
       lostCheck();
        let wriScore = document.querySelector("#wriScore")
        wriScore.innerHTML = "<p style='font-size:5vw;'>" + "WRONG!  Lives left = " + lives + "</p>";
    }
    }
   
function lostCheck(){
    if (lives == 0) {
        
        let wriScore = document.querySelector("body")
        wriScore.innerHTML = "<p class='lose'>" + "You Lose You Score is " + score + "</p>" + "<button id='refresh' onClick='window.location.reload()' class='btn btn-info mx-auto'>" + "Try Again" + "</button>"; 
        sound2.play();
    }

    else{
        console.log("going")
    }
}


}
totalScore();
    

