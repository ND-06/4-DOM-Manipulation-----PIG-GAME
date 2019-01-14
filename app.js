/*

GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

  Coding Challenges:

  1. A player looses his ENTIRE score when he rolls two 6 in a row. 
  After that, it is the next player's turn. (Hint: Always save the previous dice roll in a separate)
  2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined 
  score of 100.(Hint: You can read the value with the .value property in JavaScript. This is a good opportunity
  to use Google to figure it out.)
  */

  // We start to create the most important variables for our game

var scores, roundScore, activePlayer, gamePlaying,lastDice;

init();

function init() {


  scores = [0,0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = "Player 1";
  document.getElementById('name-1').textContent = "Player 2";
  
  document.querySelector('.player-1-panel').classList.remove("winner");
  document.querySelector('.player-0-panel').classList.remove("winner");
  document.querySelector('.player-1-panel').classList.remove("active");
  document.querySelector('.player-0-panel').classList.remove("active");

  document.querySelector('.player-0-panel').classList.add("active");

};


document.querySelector('.btn-roll').addEventListener('click', function(){


  if(gamePlaying) {

  // 1. Random number
  var dice = Math.floor(Math.random() * 6) + 1;
  // 2.Display the result
  var diceDOM =  document.querySelector('.dice');
  diceDOM.style.display = "block";
  diceDOM.src = 'dice-' + dice + '.png';



if (dice === 6 && lastDice === 6) {      
  //add score
  scores[activePlayer] = 0;  
  document.querySelector('#score-' + activePlayer).textContent = '0';
  document.querySelector('#current-' + activePlayer).textContent = '0';  
  setTimeout(nextPlayer, 700);
  lastDice = 0;

  } else if (dice !== 1) {
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
    lastDice = 0;  
  }
    else {
    document.querySelector('#current-' + activePlayer).textContent = '0';  
    setTimeout(nextPlayer, 700);  
    }
  }
  lastDice = dice;
});


document.querySelector('.btn-hold').addEventListener('click', function() {

  if(gamePlaying) {

    // Add CURRENT score to GLOBAL score 
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    // Check if player won the game
    
    var x = document.querySelector('#winningScore').value;

    if (scores[activePlayer] >= x) {
      document.querySelector("#name-" + activePlayer).textContent = "Winner!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
      gamePlaying = false;
    
    } else {    
    
    nextPlayer();

    }
  }
});


function nextPlayer() {
  
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';


  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
   
  document.querySelector('.dice').style.display = 'none';

}

document.querySelector('.btn-new').addEventListener('click', init);

