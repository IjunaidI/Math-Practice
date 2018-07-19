let score = 0;
let lives = 3;
let question1;
let question2;
let sound1 = new Audio('claps.mp3');
function print(){
	let question = document.querySelector(".question");
	question.innerHTML = "<p>" + question1 + " + " + question2 + "</p>";
}
function nextQ(){
	question1 = Math.round(Math.random()*100);
	question2 = Math.round(Math.random()*100);
	print();
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
    
    let myAnswer = document.querySelector("input").value;
    let answer = question1 + question2;
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
        wriScore.innerHTML = "<p>" + "WRONG!  Lives left = " + lives + "</p>";
    }
    }
   
function lostCheck(){
    if (lives == 0) {
        
        let wriScore = document.querySelector("body")
        wriScore.innerHTML = "<p class='lose'>" + "You Lose You Score is " + score + "</p>";
    }
    else{
        console.log("going")
    }
}


}
totalScore();
    

