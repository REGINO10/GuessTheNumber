'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
  score = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('No Number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
  //when the player enter the wrong message
  else if (guess !== secretNumber) {
    if (guess > secretNumber) {
      message('Too high');
    } else {
      message('Too low');
    }
  }
});

const message = str => {
  if (score > 1) {
    displayMessage(str);
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('You lost the game');
    document.querySelector('.score').textContent = 0;
  }
};

const displayMessage = str => {
  document.querySelector('.message').textContent = str;
};
