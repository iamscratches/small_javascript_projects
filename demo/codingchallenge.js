////////////////////
// Coding Challenge

/*
------ Let's build a fun quiz game in a console! --------

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here 
array, objects, etc.)
c) correct answer.(preferably just a number)

2. create a couple of questions using the constructor

3. store them all inside an array

4. select one random question and log it on the console, together with the possible answers (each
question should have a number)(Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number
 of the correct answer such as u displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct or not
(Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use their code. So make sure that all
your code is private and doesn't interfere with other programmer's code(Hint: we learned a special
technique to do exactly that).
*/

// (function(){
// function Questions(question, answers, correct){
// 	this.question = question;
// 	this.answers = answers;
// 	this.correct = correct;
// }

// Questions.prototype.displayQuestion = 
// function() {
// 	console.log(this.question);
// 	for(var i=0; i<this.answers.length; i++){
// 		console.log(i + '). ' + this.answers[i]);
// 	}
// }

// Questions.prototype.checkAnswer = 
// function(ans){
// 	if(ans === this.correct){
// 		console.log('Correct answer!');
// 	}
// 	else{
// 		console.log('Wrong Answer! Try again');
// 	}
// }
// var q1 = new Questions('Isn\'t learning a new coding language fun?', ['yes', 'no'], 0);
// var q2 = new Questions('which programming language is this written in', 
// 	['Java', 'TypeScript', 'Python', 'JavaScript'], 3);
// var q3 = new Questions('what does best describe coding?', 
// 	['Boring', 'Fun', 'Hard', 'Complicated', 'Tedious'], 1);
// var questions = [q1, q2, q3];
// var n = Math.floor(Math.random() * questions.length);

// questions[n].displayQuestion();
// var answer = parseInt(prompt('Please select the correct answer.'));

// questions[n].checkAnswer(answer);
// })();

/*
-----Expert Level-----

8. After u display the result, display the next random question, so that the game never ends.
(Hint: write a function for this and call it right after displaying the result)

9. Be careful: After Task 8, the game literally never ends. So include the option to quit the game if
the user writes 'exit' instead of the answer. In this case don't call the function from Task 8.

10. Track the user's score to make the game more fun! So each time the user is correct, add 1 point 
to the score (Hint: I'm going to use the power of closures for this, but u don't hv to, just do with 
the tools u find more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function(){
	function Questions(question, answers, correct){
		this.question = question;
		this.answers = answers;
		this.correct = correct;
	}

	Questions.prototype.displayQuestion = 
	function() {
		console.log(this.question);
		for(var i=0; i<this.answers.length; i++){
			console.log(i + '). ' + this.answers[i]);
		}
	}

	Questions.prototype.checkAnswer = 
	function(ans, callback){
		var sc;
		if(ans === this.correct){
			console.log('Correct answer!');
			sc = callback(true);
		}
		else{
			console.log('Wrong Answer! Try again');
			sc = callback(false);
		}

		this.displayScore(sc);
	}

	Questions.prototype.displayScore = 
	function(score){
		console.log('Your current score is: ' + score);
		console.log('---------------------------------');
	}

	var q1 = new Questions('Isn\'t learning a new coding language fun?', ['yes', 'no'], 0);
	var q2 = new Questions('which programming language is this written in', 
		['Java', 'TypeScript', 'Python', 'JavaScript'], 3);
	var q3 = new Questions('what does best describe coding?', 
		['Boring', 'Fun', 'Hard', 'Complicated', 'Tedious'], 1);

	var questions = [q1, q2, q3];

	function score(){
		var sc = 0;
		return function(correct){
			if(correct){
				sc++
			}
			return sc;
		}
	}

	var keepScore = score();

	function nextQuestion(){
		
		var n = Math.floor(Math.random() * questions.length);

		questions[n].displayQuestion();
		var answer = prompt('Please select the correct answer.');

		if(answer !== 'exit'){
			questions[n].checkAnswer(parseInt(answer), keepScore);
			nextQuestion();
		}
	}

	nextQuestion();
})();

