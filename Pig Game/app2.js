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
var scores, roundScores, activePlayer, maxPoint = 100, gamePlaying, lastDice;

function init(){
	scores = [0,0];
	roundScores = 0;
	activePlayer = 0;
	gamePlaying = true
	document.getElementById('dice-1').style.display = 'none';
	document.getElementById('dice-2').style.display = 'none';
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



document.querySelector('.btn--roll').addEventListener('click', () => {

	if(!gamePlaying){
		return;
	}

	// Generate random dice number
	var dice1 = Math.floor(Math.random()*6 + 1);
	var dice2 = Math.floor(Math.random()*6 + 1);

	// Display the result
	document.getElementById('dice-1').style.display = 'block';
	document.getElementById('dice-2').style.display = 'block';
	document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
	document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

	if(dice1 + dice2 === 12 && lastDice === 12){
		// Player loses all scores
		scores[activePlayer] = 0;
		document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];
		nextPlayer();
	}
	else if(dice1 == dice2 && dice1!== 6){
		nextPlayer();
	}
	else if(dice1>1 && dice2>1){// Update the round score only if the rolled no. is not 1		
		// add the score
		roundScores += dice1 + dice2;
		document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + roundScores + '</em>';
	}	
	else{
		nextPlayer();
	}

	lastDice = dice1 + dice2;
});

document.querySelector('.btn--hold').addEventListener('click', () => {

	if(!gamePlaying){
		return;
	}

	var input = document.querySelector('.final-score').value;

	if(input){
		maxPoint = input;
	}

	// Add curreny score to global score
	scores[activePlayer] += roundScores;

	// Update the UI
	document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer]

	// Check if player won the game
	if(scores[activePlayer]>=maxPoint){
		document.querySelector('#name--' + activePlayer).textContent = 'Winner!!';
		document.getElementById('dice-1').style.display = 'none';
		document.getElementById('dice-2').style.display = 'none';
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
	// reset last dice value
	lastDice = -1
	// reset score and turn goes to next player
	roundScores = 0;
	document.querySelector('.player--' + activePlayer).classList.toggle('player--active');
	document.querySelector('#current--' + activePlayer).innerHTML = '<em>' + roundScores + '</em>';	
	activePlayer = activePlayer === 0 ? 1 : 0;
	document.querySelector('.player--' + activePlayer).classList.toggle('player--active');
	// document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn--new').addEventListener('click', init);
