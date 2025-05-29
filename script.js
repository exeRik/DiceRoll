'use strict';

// Select elements blablaa
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
let dice = document.querySelector('.dice');

let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');

let player0 = document.querySelector('.player--0'); 
let player1 = document.querySelector('.player--1');

let currentScore = 0;
let activePlayer = 0;  

let scores = [0, 0];
let playing = true;

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

const switchPlayer = function () {
    // Reset current score display for current player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Toggle active player CSS classes
    player0.classList.toggle('player--active');
    player1.classList.toggle('player--active');
};

// Roll dice event
btnRoll.addEventListener('click', function () {
    if (playing) {
        let randomNo = Math.trunc(Math.random() * 6) + 1;

        dice.classList.remove('hidden');
        dice.src = `Diceroll/Images/dice-${randomNo}.png`;
        

        if (randomNo !== 1) {
            currentScore += randomNo;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            switchPlayer();
        }
    }
});

// Hold button event
btnHold.addEventListener('click', function () {
    if (playing) {
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        document.getElementById(`current--${activePlayer}`).textContent = 0;

        if (scores[activePlayer] >= 100) {
            playing = false;
            dice.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            // Remove active class on winner
            player0.classList.remove('player--active');
            player1.classList.remove('player--active');
        } else {
            switchPlayer();
        }
    }
});

// New game event
btnNew.addEventListener('click', function () {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0.textContent = 0;
    score1.textContent = 0;
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;

    dice.classList.add('hidden');

    player0.classList.remove('player--winner');
    player1.classList.remove('player--winner');

    player0.classList.add('player--active');
    player1.classList.remove('player--active');
});
