/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// We start to create the most important variables for our game

var scores, roundScore, activePlayer;
scores = [0,0];
roundScore = 0; 
activePlayer = 0; // we need to write 0 cause we will access scores array 
// through activeplayer , and stores array begins at the index 0.


/* we want a random number between 1 and 6 , for that , we assign at dice variable
the Math method , Math.random will give us a number between 0 and 1 by default,
that is why we multiply the result by 6 , so the number given will be between
0 and 5 , but we only number between 1 and 6 , for that , we have just to add 
1 to the result , and we will get a number between 1 and 6
*/

/* we have to start manipulate DOM , the object that will give us access to the
DOM is the document object.
*/


/*  *** QUERYSELECTOR / textContent / innerHTML ***
 -- 2 WAYS TO INTERACT WITH THE CONTENT >>> textContent and innerHtml
*/

// document.querySelector('#current-' + activePlayer).textContent = dice; // One of the most used selector to manipulate
                           // DOM is the querySelector. He only select the first element that it finds
                           // but there is a trick to avoid that It is the same that select a class in CSS
                           // We need a string inside the selector and then
                           // the class or the id of the element that we want
                           // to interact
                           // then we assign our selector to dice variable.
                           // In this context, textContent is a SETTER cause we set a value                           

// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
// inner.html allows us to interact directly by adding html content to the element 
//  and also content of a js variable , whereas textContent only allows us to add 
// plain text, not html code -- for html code , we must use innerHTML

//document.querySelector('#current-' + activePlayer).textContent = '<em>' + dice + '</em>';

/* We can also use query.selector and textContent to read only */
// for this, we can assign to a variable the method document.querySelector

// var x = document.querySelector('#score-0').textContent;
// we call this a GETTER cause with this textContent in this context , we read a value
// console.log(x); // it will display the total score of player 1 in the js console


/* WE can also use querySelector to change the css of some elements
*/
// for example, we want to hide the display of the dice (class > dice)

//document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';





// we use the querySelector , in the parenthesis, we put , into a string the class name
// (with a .) or the id name (with a #) and then we put 'style' ( to interact with css) + 
// the property that we want to change (display) and we assign to the value of the property 
// ( 'none' in our case)



// *** EVENTS AND EVENTS HANDLING ***

// The first step is to select the element related to the event that we want to set
// for this we can use querySelector, or getElementByID 
// For us, we want to display the good number of the dice , so we will
// interact with the .btn-roll class
// then we have to add addEventListener , and we have two arguments
// the FIRST one is the event type , and for us it will be 'click'
// but there are a lot of different events types (Event reference /mdn )
// the SECOND argument will be the function that will be executed as soon
// as the event happens. We have 2 possibilities : create a function outside 
// document.queryselector ( with no parameters ) or inside document.querySelector ( anonymous functions)
// and in this case , we will not be able to use this anonymous function outside
// the event. In an anonymous function, we can write just after the first argument in our event, 
// the complete function ( this anonymous function will not have a name like a default function)
// An anonymous function cannot be reused and have not name
 

// if we want to call this function, by default we write it like this
// btn();  
// the function is declared outside the event but used in event ( in 2d argument, always without parenthesis)
// we dont write parenthesis after btn cause we want that the click event launch the function
// it is called the CALLBACK FUNCTION --- The function is not called by us but by the event or
// by another function

// This is a default function

// function btn() {
// console.log("hello");
// }

document.querySelector('.btn-roll').addEventListener('click', function(){

// 1. Random number

var dice = Math.floor(Math.random() * 6) + 1;

// 2.Display the result

  var diceDOM =  document.querySelector('.dice');
  diceDOM.style.display = "block";
  diceDOM.src = 'dice-' + dice + '.png';
    
  // we want to set all scores to 0

 
  // we can use getElementByID when we have to interact with ID , it will be faster
  // than the querySelector, and we dont have to put a # in parenthesis like querySelector
  // we create a variable  where we store the selection and then we 
  // can use this variable whenever we need it ( inside the scope)

 

  // we can change the image depending to the result of the dice by
  // just adding src equal to the name of the image.
  
  // 3.Update the roundScore but only IF the rolled number was not 1

  if (dice !== 1) {
    //add score  
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;  
  } else {
    
    setTimeout(nextPlayer, 1000);
  
  }
      
});

document.querySelector('.btn-hold').addEventListener('click', function() {

 // Add CURRENT score to GLOBAL score 
 scores[activePlayer] += roundScore;


// Update the UI

  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
  nextPlayer();

// Check if player won the game



});



function nextPlayer() {
  
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';


  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
   


  document.querySelector('.dice').style.display = 'none';

};









/* //Next Player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0; 

    // we use a ternary , it is the same effect that if/else statement but shorter
    roundScore = 0;
    // we set roundScore to 0 cause we want that if the dice is 1, the score of the round
    // goes to 0 and the player changes too
    // we also want to set the user interface at 0 when the dice returns 1

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
   
    // We also want to put the red dot and make the grey background panel actived for the current player 
    // to do this, we have to switch the 'active' attribute inside the class player-0-panel
    // For this, we have to remote the first active attribute by using 
    // the querySelector and the classList method + .add ( to add the class) or .delete
    // ( to delete the class) and finally we need to specify inside parenthesis 
    // the name of the class that we want to add or remove.

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.add('active');
  
    //In our game, we have to use toggle instead add/remove. it is generally a better practice.

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
   

    //document.querySelector(".player-0-panel").classList.remove('active');
    //document.querySelector(".player-1-panel").classList.add('active');
  

    document.querySelector('.dice').style.display = 'none';

    // hide the dice when number 1 happens. */








