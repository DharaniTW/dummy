'use strict'
let secretNumber = Math.trunc(Math.random()*20 +1);
let score = 20;
let highsore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent=message;
};

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if(!guess){
        displayMessage('NO NUMBER');
    }else if (guess ===secretNumber){
        displayMessage('CORRECT NUMBER');
        document.querySelector('.number').textContent=secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score>highsore){
            highsore=score;
            document.querySelector('.highscore').textContent = highsore;
        }
    }else if(guess!==secretNumber){
        if(score>1){
            displayMessage(guess > secretNumber ? 'TOO HIGH' : 'TOO LOW');
            score--;
            document.querySelector('.score').textContent = score;
        }else {

            displayMessage('YOU LOST THE GAME');
            document.querySelector('.score').textContent = 0;
        }
    }
 });
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent='Correct Number';
// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=10;
// document.querySelector('.guess').value=23;
// console.log(document.querySelector('.guess').value);

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20 ) +1;
    displayMessage('START GUESSING');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = " ";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').stle.width = "15rem";
})
