/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he wishes. Each result gets added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, 
it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/ 

var scores, roundScores, activePlayer, maxPoint = 100, gamePlaying;

function init(){
	scores = [0,0];
	roundScores = 0;
	activePlayer = 0;
	gamePlaying = true
	document.querySelector('.dice').style.display = 'none';
	document.getElementById('score--0').textContent = '0';
	document.getElementById('score--1').textContent = '0';
	document.getElementById('current--0').textContent = '0';
	document.getElementById('current--1').textContent = '0';
	document.getElementById('name--0').textContent = 'Player 1';
	document.getElementById('name--1').textContent = 'Player 2';
	document.querySelector('.player--0').classList.remove('player--winner');
	document.querySelector('.player--0').classList.remove('player--active');
	document.querySelector('.player--1').classList.remove('player--winner');
	document.querySelector('.player--1').classList.remove('player--active');
	document.querySelector('.player--0').classList.add('player--active');
}

init();

// document.querySelector('#score--' + activePlayer).textContent = dice;
// document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + dice + '</em>';

// var x = document.querySelector('#score--' + activePlayer).textContent;
// console.log(x)



document.querySelector('.btn--roll').addEventListener('click', () => {

	if(!gamePlaying){
		return;
	}

	// Generate random dice number
	var dice = Math.floor(Math.random()*6 + 1);

	// Display the result
	var diceDOM = document.querySelector('.dice');
	diceDOM.style.display = 'block';
	diceDOM.src = 'dice-' + dice + '.png';

	// Update the round score only if the rolled no. is not 1
	if(dice>1){
		// add the score
		roundScores += dice;
		document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + roundScores + '</em>';
	}
	else{
		nextPlayer();
	}
});

document.querySelector('.btn--hold').addEventListener('click', () => {

	if(!gamePlaying){
		return;
	}

	// Add curreny score to global score
	scores[activePlayer] += roundScores;

	// Update the UI
	document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]

	// Check if player won the game
	if(scores[activePlayer]>=maxPoint){
		document.querySelector('#name--' + activePlayer).textContent = 'Winner!!';
		document.querySelector('.dice').style.display = 'none';
		document.querySelector('.player--' + activePlayer).classList.add('player--winner');
		document.querySelector('.player--' + activePlayer).classList.remove('player--active');
		gamePlaying = false;
	}
	else{
		// Next player
		nextPlayer();
	}

});

function nextPlayer(){
	// reset score and turn goes to next player
	roundScores = 0;
	document.querySelector('.player--' + activePlayer).classList.toggle('player--active');
	document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + roundScores + '</em>';	
	activePlayer = activePlayer === 0 ? 1 : 0;
	document.querySelector('.player--' + activePlayer).classList.toggle('player--active');
	// document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);

/*
CHALLENGES --
1. A player looses his entire score if he rolls two 6 in a row. After which it's the next player's turn.
(Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set there winning score so that they can change the predefined
score of 100(Hint: You can read that value with the .value property in JavaScript)
3. Add another dice to the game, so that there are two dices now. The player loses his current score when one 
of the is a 1.(Hint: You will need CSS to position the second dice, so take a look at the CSS code for the first 
one)
*/
