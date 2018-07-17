
let question1;
let question2;
function print(){
	let question = document.querySelector(".question");
	question.innerHTML = "<p>" + question1 + "+" + question2 + "</p>";
}
function nextQ(){
	question1 = Math.round(Math.random()*100);
	question2 = Math.round(Math.random()*100);
	print();
}     
nextQ();                
function check(){
   
    let myAnswer = document.querySelector("input").value;
    let answer = question1 + question2;

    if(myAnswer == answer){
        alert("You are correct");
        nextQ();
    }
    else{
        alert("You are Wrong")
    }

	
}
