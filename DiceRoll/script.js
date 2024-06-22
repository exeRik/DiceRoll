'use strict';
let currentScore = 0;
let score0 =document.querySelector('#score--0');
let score1 =document.querySelector('#score--1');
let dice = document.querySelector('.dice');

let btnRoll = document.querySelector('.btn--roll')
let btnHold = document.querySelector('.btn--hold')
let btnNew = document.querySelector('.btn--new')

let player0 = document.querySelector('.player--0 ')
let player1 = document.querySelector('.player--1')
let activePlayer = document.querySelector('.player--active')
// let currentScore0 = document.querySelector('#current--0')
// let currentScore1 = document.querySelector('#current--1')

const switchPlayer =function(){
    activePlayer = activePlayer==0 ? 1: 0;
    currentScore= 0;
    //changing the css(visuals)
   player0.classList.toggle('player--active');
   player1.classList.toggle('player--active');
};


//initial condition
let playing = true;
let score = [0,0]; 
activePlayer = 0;
score0.textContent= 0;
score1.textContent= 0;
dice.classList.add('hidden');




btnRoll.addEventListener('click', function () {
    if(playing){
        //Generate random no
    let randomNo = Math.trunc(Math.random()*6)+1;
    console.log(randomNo);
    // display dice roll images
    dice.classList.remove('hidden');
    dice.src =`Images/dice-${randomNo}.png`;
    // // check for 1
    if(randomNo!= 1)
    {
       currentScore+=randomNo;
       
       //display new score
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }
    else  //for 1 
    {
        document.querySelector(`#current--${activePlayer}`).textContent = 0 ;
        //switch player  
        switchPlayer();

     }
    }
    
});

btnHold.addEventListener('click', function(){
    if(playing){
        score[activePlayer]+= currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    document.querySelector(`#current--${activePlayer}`).textContent = 0 ;

    if (score[activePlayer]>=10){
        playing = false;
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        dice.classList.add('hidden');
        
    }
    else
    switchPlayer();
    }
})

btnNew.addEventListener('click', function(){

    score = [0,0]; 
    //to make player 0 the active player
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
    document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0 ').classList.add('player--active');
    

    activePlayer = 0;
    currentScore = 0;
    playing = true;
    score0.textContent= 0;
    score1.textContent= 0;
    dice.classList.add('hidden');
    document.querySelector('.current-score').textContent = 0 ;

    // player1.classList.toggle('player--active');
})


