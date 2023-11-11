'use strict';

//Variables and constants

const n = document.querySelector(".check");
var message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const reload = document.querySelector(".again")
let scoreValue =20;
let Highscorevalue = 0;

// random Number genrating
const scrceatNumber = Math.floor((Math.random())*21);

// Event listeners

n.addEventListener("click", function (){
const num = Number(document.querySelector(".guess").value);

console.log(num)
if(!num){
message.innerHTML="please enter a number";
}
else if(num == scrceatNumber){
    document.querySelector("body").style.backgroundColor="green"
    setTimeout(() =>{
        document.querySelector("body").style.backgroundColor="#222";
         number.innerHTML="?"
    },1000)
    number.innerHTML=scrceatNumber;
    message.innerHTML="Grate, it's a correct Number";
    Highscorevalue++;
    highScore.innerHTML=Highscorevalue
}else if(num>scrceatNumber ||  num < scrceatNumber){
    scoreValue--;
    score.innerHTML= scoreValue;
    message.textContent="Worng Number";
    if(scoreValue==0){
    message.textContent="Game Over";
    n.disabled=true;
    setTimeout(() =>{
        document.querySelector("body").style.backgroundColor="#f00"
    },100)
}
}  
})

// to reload a page
reload.addEventListener("click", ()=>{
    location.reload();
    
})

