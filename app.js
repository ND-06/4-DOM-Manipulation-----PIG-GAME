/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// We start to create the most important variables for our game

var scores, roundScore, activePlayer, dice;
scores = [0,0];
roundScore = 0; 
activePlayer = 1; // we need to write 0 cause we will access scores array 
// through activeplayer , and stores array begins at the index 0.

dice = Math.floor(Math.random() * 6) + 1;
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

document.querySelector('#current-' + activePlayer).textContent = dice; // One of the most used selector to manipulate
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

var x = document.querySelector('#score-0').textContent;
// we call this a GETTER cause with this textContent in this context , we read a value
console.log(x); // it will display the total score of player 1 in the js console


/* WE can also use querySelector to change the css of some elements
*/
// for example, we want to hide the display of the dice (class > dice)

//document.querySelector('.dice').style.display = 'none';
// we use the querySelector , in the parenthesis, we put , into a string the class name
// (with a .) or the id name (with a #) and then we put 'style' ( to interact with css) + 
// the property that we want to change (display) and we assign to the value of the property 
// ( 'none' in our case)

function btn() {
  //do something here
}

document.querySelector('.btn-roll').addEventListener('click', btn);




